/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: [
              '300',
              '300i',
              '400',
              '400i',
              '700',
              '700i',
              '800',
              '800i',
              '900',
              '900i'
            ]
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "JaviGuajardo",
        short_name: 'JaviGuajardo',
        start_url: '/',
        background_color: '#e7e7e7',
        theme_color: '#ec625f',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    }, 
    'gatsby-plugin-offline'
  ],
}
