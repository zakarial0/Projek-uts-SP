/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sumberpasir`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  },
  ],
  pathPrefix: "/Projek-uts-SP"
};