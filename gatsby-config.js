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
    }
  ],
}
