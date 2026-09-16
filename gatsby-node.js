const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const projects = require("./src/data/projects");
const slugify = require("./src/utilities/slugify");
const toExcerpt = require("./src/utilities/excerpt");

const GITHUB_API = "https://api.github.com";

/** `category`/`tags` frontmatter may be a string or a list. Normalise to a list. */
const toArray = (value) => {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
};

/**
 * Adds the fields the page queries resolve against.
 *
 * The slugs keep the original `/posts/<file-name>/` shape, including the date
 * prefix in the file name: those URLs are public and already indexed, so they
 * must not shift under a redesign.
 *
 * `cardExcerpt` is derived here rather than queried from `frontmatter.description`
 * because that field only exists once some post defines it, and it is the
 * teaser shown on cards and in meta descriptions.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== "MarkdownRemark") return;

  createNodeField({
    node,
    name: "slug",
    value: createFilePath({ node, getNode, basePath: "pages" }),
  });

  createNodeField({
    node,
    name: "cardExcerpt",
    value: toExcerpt(node.excerpt, node.frontmatter?.description),
  });
};

/**
 * Declares the GitHub stats types explicitly so that a build without network
 * access (or without a token) can still store `null` instead of failing schema
 * inference on a field that never holds a number.
 */
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type GitHubRepo implements Node {
      repo: String!
      stars: Int
      forks: Int
      language: String
      pushedAt: Date @dateformat
    }
  `);
};

/**
 * Fetches each project's star and fork counts once per build.
 *
 * This used to happen in the browser on every visit to /projects/, which meant
 * eight unauthenticated GitHub API calls per visitor, a shared 60-requests-per
 * -hour rate limit, and blank badges whenever it was exhausted. Fetching here
 * costs one request per project per build and ships the numbers as static HTML.
 *
 * Set `GITHUB_TOKEN` to raise the limit from 60 to 5,000 requests per hour.
 * Failures are non-fatal: the badges are simply hidden.
 */
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  reporter,
}) => {
  const { createNode } = actions;
  const token = process.env.GITHUB_TOKEN;

  const fetchRepo = async (project) => {
    const fallback = { repo: project.repo, stars: null, forks: null };
    try {
      const response = await fetch(`${GITHUB_API}/repos/${project.repo}`, {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        reporter.warn(
          `GitHub API responded ${response.status} for ${project.repo}; star/fork badges will be hidden.`,
        );
        return fallback;
      }

      const data = await response.json();
      return {
        repo: project.repo,
        stars: data.stargazers_count,
        forks: data.forks_count,
        language: data.language,
        pushedAt: data.pushed_at,
      };
    } catch (error) {
      reporter.warn(
        `Could not reach the GitHub API for ${project.repo} (${error.message}); star/fork badges will be hidden.`,
      );
      return fallback;
    }
  };

  const repos = await Promise.all(projects.map(fetchRepo));

  repos.forEach((repo) => {
    createNode({
      ...repo,
      id: createNodeId(`GitHubRepo-${repo.repo}`),
      parent: null,
      children: [],
      internal: {
        type: "GitHubRepo",
        contentDigest: createContentDigest(repo),
      },
    });
  });
};

/**
 * Creates every page that is not a file in `src/pages/`: one per post, per
 * standalone markdown page (about), and per tag and category.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            category
            tags
          }
        }
      }
      standalone: allMarkdownRemark(
        filter: { frontmatter: { template: { ne: "post" } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            template
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      "Failed to collect pages for creation",
      result.errors,
    );
    return;
  }

  const postTemplate = path.resolve("./src/templates/post.js");
  const archiveTemplate = path.resolve("./src/templates/archive.js");

  const tags = new Map();
  const categories = new Map();

  const collect = (store, values) => {
    toArray(values).forEach((value) => {
      const slug = slugify(value);
      if (!slug) return;
      const existing = store.get(slug) || { label: String(value), count: 0 };
      existing.count += 1;
      store.set(slug, existing);
    });
  };

  result.data.posts.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: { slug: node.fields.slug },
    });

    collect(tags, node.frontmatter.tags);
    collect(categories, node.frontmatter.category);
  });

  result.data.standalone.nodes.forEach((node) => {
    // Anything that is not a post is rendered by a template named after its
    // `template` frontmatter value, e.g. `about` -> src/templates/about.js.
    const template = node.frontmatter.template;
    if (!template) {
      reporter.warn(
        `${node.fields.slug} has no \`template\` in its frontmatter; no page created for it.`,
      );
      return;
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${template}.js`),
      context: { slug: node.fields.slug },
    });
  });

  /**
   * Tag and category archives share one template. The posts are filtered in the
   * template rather than in GraphQL because the stored values are display
   * strings ("React Native"), which cannot be matched against a slug without a
   * custom node field. Fine at this blog's size; revisit if the post count
   * grows into the hundreds.
   */
  tags.forEach(({ label, count }, slug) => {
    createPage({
      path: `/tags/${slug}/`,
      component: archiveTemplate,
      context: { kind: "tag", slug, label, count },
    });
  });

  categories.forEach(({ label, count }, slug) => {
    createPage({
      path: `/categories/${slug}/`,
      component: archiveTemplate,
      context: { kind: "category", slug, label, count },
    });
  });
};
