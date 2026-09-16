/**
 * Site configuration.
 *
 * This file is CommonJS because `gatsby-config.js` and `gatsby-node.js` both
 * `require` it at build time; browser bundles import it through webpack's
 * default interop.
 *
 * Anything about the site's identity — title, nav links, social profiles,
 * comment provider — belongs here rather than hard-coded in a component.
 */
const config = {
  siteTitle: "Shahnawaz Hossan",
  siteDescription:
    "Full-Stack Software Engineer writing about the programming problems I run into and how I solved them.",
  siteUrl: "https://shahnawaz-pabon.github.io",
  siteLanguage: "en",

  // The site is served from the domain root, so no path prefix is needed.
  pathPrefix: "/",

  author: "Shahnawaz Hossan",
  authorRole: "Full-Stack Software Engineer",
  email: "s.pabon93@gmail.com",

  menuLinks: [
    { name: "Home", link: "/" },
    { name: "Posts", link: "/posts/" },
    { name: "Projects", link: "/projects/" },
    { name: "About", link: "/about/" },
    { name: "Contact", link: "/contact/" },
  ],

  /** Shown in the hero and footer, and as `sameAs` in the site's JSON-LD. */
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/shahnawaz-pabon",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/backtoschool/",
      icon: "linkedin",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/6174271/shahnawaz-hossan?tab=profile",
      icon: "stackoverflow",
    },
    {
      name: "Programming Blog (Bengali)",
      url: "https://shahnawaz-pabon.blogspot.com/",
      icon: "blogger",
    },
  ],

  /** Cycled by the hero typewriter. */
  roles: [
    "Full-Stack Software Engineer",
    "React & Node.js Developer",
    "Competitive Programmer",
    "Problem Solver",
  ],

  /**
   * Comments are powered by giscus (https://giscus.app), which keeps threads
   * in GitHub Discussions.
   *
   * One-time setup per repository:
   *   1. Make the repository public and enable Discussions in its settings.
   *   2. Install the giscus app: https://github.com/apps/giscus
   *   3. Open https://giscus.app, enter the repo, and copy the generated
   *      `data-repo-id` / `data-category-id` values into `repoId` and
   *      `categoryId` below.
   *
   * While `repoId` is empty the comments section renders a short placeholder
   * instead of an iframe, so the site never shows a half-loaded widget.
   */
  giscus: {
    repo: "shahnawaz-pabon/shahnawaz-pabon.github.io",
    repoId: "",
    category: "Comments",
    categoryId: "",
    mapping: "pathname",
    reactionsEnabled: "1",
    inputPosition: "top",
    lang: "en",
  },
};

// Normalise pathPrefix: "/" means "no prefix at all".
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

module.exports = config;
