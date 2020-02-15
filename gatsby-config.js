/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./src/data/config');

module.exports = {
  /* My site's config */
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.author,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "post",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 850,
            },
            resolve: 'gatsby-remark-emojis',
              options: {
                // Deactivate the plugin globally (default: true)
                active : true,
                // Add a custom css class
                class  : 'emoji-icon',
                // In order to avoid pattern mismatch you can specify
                // an escape character which will be prepended to the
                // actual pattern (e.g. `#:poop:`).
                escapeCharacter : '#', // (default: '')
                // Select the size (available size: 16, 24, 32, 64)
                size   : 64,
                // Add custom styles
                styles : {
                  display      : 'inline',
                  margin       : '0',
                  'margin-top' : '1px',
                  position     : 'relative',
                  top          : '5px',
                  width        : '25px'
                }
              }
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: `/`,
        icon: `static/logos/book-reader.png`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ]

}