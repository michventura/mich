module.exports = {
  siteMetadata: {
    title: `Mich's blog`,	
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
   {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `src`,
       path: `${__dirname}/src`
     }
   }
  ]
}
