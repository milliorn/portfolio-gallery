import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Layout>
            <Link to="/">Take me home</Link>
            <h1>Privacy Policy</h1>
        </Layout>
    );
};

export default NotFound;
