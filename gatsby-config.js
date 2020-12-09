module.exports = {
    // Autoload the site metadata.
    siteMetadata: {
        title: 'Scott Milliorn - .NET & Web Full-Stack Developer',
        description:
            'Designing & building web and desktop apps with .NET along with websites in ReactJS.',
        author: 'Scott Milliorn',
        image: 'src/img/logo.jpg',
        siteUrl: `https://example.com`, // Remove and fix this later
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
                name: 'Scott Milliorn Portfolio',
                short_name: 'Scott Milliorn',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#FFFFFF',
                display: 'minimal-ui',
                icon: `src/img/logo.jpg`, // This path is relative to the root of the site.
                icons: [
                    {
                        src: `/favicons/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ], // Add or remove icon sizes as desired
                icon_options: {
                    purpose: `any maskable`
                }
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-138977349-1',
                head: false
            }
        },
        {
            resolve: `gatsby-plugin-minify`
        }
    ]
};
