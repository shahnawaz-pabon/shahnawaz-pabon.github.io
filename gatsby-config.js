/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* My site's config */

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
        `gatsby-transformer-remark`,
    ]

}