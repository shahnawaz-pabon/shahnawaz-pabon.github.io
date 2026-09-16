/**
 * Gatsby build configuration.
 *
 * See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
const config = require("./src/data/config");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    author: config.author,
    lang: config.siteLanguage,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content/`,
        // `content/upcoming/` holds drafts; they must not be published.
        ignore: [`**/upcoming`, `**/upcoming/**`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Local plugin — must run before anything that inspects text nodes.
          {
            resolve: `gatsby-remark-emoji-shortcodes`,
            options: { active: true },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // Must match the article column width in src/styles/tokens.css.
              maxWidth: 850,
              withWebp: true,
              quality: 85,
              linkImagesToOriginal: false,
              showCaptions: [`title`],
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: { icon: false, className: `heading-anchor` },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: { noInlineHighlight: true },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: `/`,
        icon: `static/logos/book-reader.png`,
        background_color: `#0d1117`,
        theme_color: `#0d1117`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => ({
                title: node.frontmatter.title,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                categories: node.frontmatter.tags || [],
                author: site.siteMetadata.author,
                custom_elements: [{ "content:encoded": node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { template: { eq: "post" } } }
                  sort: { frontmatter: { date: DESC } }
                ) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter { title date tags }
                  }
                }
              }
            `,
            output: `/rss.xml`,
            title: `${config.siteTitle} — Posts`,
          },
        ],
      },
    },
    /*
     * `gatsby-plugin-offline` is deliberately NOT used.
     *
     * It registers a service worker that precaches every page, and it made
     * React hydration errors (React #418/#423) appear much more often: with the
     * worker active, ordinary hard navigations logged a mismatch even though
     * the worker served byte-identical HTML and the page still rendered
     * correctly. Without it, every ordinary page load is clean — verified
     * across all pages at desktop, tablet and mobile widths in both themes.
     *
     * Precaching also has an operational cost for a blog: until a returning
     * visitor's worker updates, they can be served the previous build's HTML.
     *
     * The web app manifest above is unaffected, so the site is still
     * installable. To restore offline caching, add `gatsby-plugin-offline`
     * back to the end of this list and re-check hydration with devtools open.
     */
  ],
};
