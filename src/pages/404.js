import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Layout>
            <h1>Something went wrong?</h1>
            <h1> </h1>
            <p>
                <img
                    src="https://www.vizion.com/wp-content/uploads/2018/09/shutterstock_479042983-636x344.jpg"
                    alt=""
                />
                <Link to="/">Take me home</Link>
            </p>
        </Layout>
    );
};

export default NotFound;
