const config = {
  siteTitle: "Shahnawaz Hossan",
  siteDescription: 'A programming knowledge sharing platform',
  siteUrl: "https://shahnawaz-pabon.github.io", // Domain of my site
  pathPrefix: "/", // Prefixes all links.
  author: 'Shahnawaz Hossan',
  menuLinks: [
    {
      name: 'Posts',
      link: '/posts/',
    },
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

module.exports = config