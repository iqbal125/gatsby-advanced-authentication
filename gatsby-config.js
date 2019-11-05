module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    description: `A starter blog demonstrating what Gatsby can do.`
  },
  plugins: [
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `blog`,
      },
     },
     {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/blog`,
          name: `blog`,
        },
     },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}