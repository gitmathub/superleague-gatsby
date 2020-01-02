module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `superleague`, collection: [`standings`],
        server: { address: 'localhost', port: 27017 }
      },
    },
  ],
}
