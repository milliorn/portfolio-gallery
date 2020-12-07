import React from 'react';

import '../css/home.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Homepage() {
    return (
        <Layout className="home" canonicalUrl="">
            <React.Fragment>
                <Hero />
                <About />
                <Contact />
                <Footer />
            </React.Fragment>
        </Layout>
    );
}
