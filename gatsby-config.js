module.exports = {
  siteMetadata: {
    title: `QC Makeup Academy`,
    description: `QC Makeup Academy is the world leader in online makeup education. Become a Professional Makeup Artist with top-rated online makeup courses from QC.`,
    author: `QC Career School`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `blog.qcmakeupacademy.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QC Makeup Academy`,
        short_name: `QC Makeup`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e70260`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`400`, `500`],
            // subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `500`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-3632503-9`,
          `AW-1071836607`,
        ],
        gtagConfig: {
          site_speed_sample_rate: 100,
        },
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
