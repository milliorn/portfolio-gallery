import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../css/icons.css';
import '../css/global.css';

const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
                image
                social {
                    twitter
                }
            }
        }
    }
`;

//  Add canonical links to your pages
//  This needs to be updated later on when the prod URL is found
const Layout = props => (
    <StaticQuery
        query={pageQuery}
        render={({ site: { siteMetadata: seo } }) => {
            const canonicalUrl = `http://localhost:8000${props.canonicalUrl}`;

            const title = props.title || seo.title;
            const description = props.description || seo.description;
            const image = props.image || seo.image;

            const metas = [
                { name: 'description', content: description },
                { name: 'og:url', content: props.path || '/' },
                { name: 'og:title', content: title },
                { name: 'og:description', content: description },
                { name: 'og:image', content: '/img/logo.jpg' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:creator', content: seo.social.twitter },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description },
                { name: 'twitter:image', content: image }
            ];

            return (
                <React.Fragment>
                    <Helmet>
                        {metas.map(({ name, content }) => (
                            <meta key={name} name={name} content={content} />
                        ))}

                        <title>{title}</title>

                        <html lang="en" />

                        {typeof props.canonicalUrl !== 'undefined' && (
                            <link rel="canonical" href={canonicalUrl} />
                        )}
                    </Helmet>

                    <div className={props.className}>{props.children}</div>
                </React.Fragment>
            );
        }}
    />
);

Layout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    path: PropTypes.string,
    canonicalUrl: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Layout.defaultProps = {
    className: 'cross-site'
};

export default Layout;
