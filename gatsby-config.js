module.exports = {
  siteMetadata: {
    title: "TeckyMentor",
    description: "A community tech in Guajira - Colombia",
    author: "@SoyBhalut",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://github.us4.list-manage.com/subscribe/post?u=e59430b2142347edb03885428&amp;id=d4a3a57671", // add your MC list endpoint here; see instructions below
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "TeckyMentor",
        short_name: "TeckyMentor",
        start_url: "/",
        background_color: "#5edfff",
        theme_color: "#5edfff",
        display: "minimal-ui",
        icon: "src/static/images/tecky-icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
