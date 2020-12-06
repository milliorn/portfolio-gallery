module.exports = {
    // Autoload the site metadata.
    siteMetadata: {
        title: 'Scott Milliorn - .NET & Web Full-Stack Developer',
        description:
            'Designing & building web and desktop apps with .NET along with websites in ReactJS.',
        author: 'Scott Milliorn',
        image: '/favicon.jpg',
        social: {
            twitter: '@scottmilliorn',
            fbAppId: '100009436144652' //  Remove in future

        }
    },

    // Gatsby plugins
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/img`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Kenneth Kwakye-Gyamfi',
                short_name: 'KKG',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#FFFFFF',
                display: 'minimal-ui',
                icon: 'src/img/logo.jpg' // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-138977349-1',
                head: false
            }
        }
    ]
};
