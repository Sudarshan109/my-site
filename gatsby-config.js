module.exports = {
  siteMetadata: {
    title: `sample site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "to test",
    author : "Sudarshan Jagadale"
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 
  {
    resolve: `gatsby-plugin-theme-ui`
    /*options: {
     preset: "@theme-ui/preset-funk",
    }*/
  },{
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `my-dadaai-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};