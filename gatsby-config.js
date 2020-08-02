require('dotenv').config();

module.exports = {
  siteMetadata: {
    defaultTitle: `Gatsby Advanced Authentication`,
    defaultDescription: `A starter for building advanced authentication`,
    siteUrl: `https://nervous-wescoff-365dda.netlify.com`,
    defaultImage: './static/favicon.ico'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `app`
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify-identity-widget'
  ]
};
