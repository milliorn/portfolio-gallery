import React from 'react';

import HeroFooter from '../img/hero.svg';
import Logo from '../img/logo.jpg';
import Memoji from '../img/memoji.svg';

const Hero = () => (
    <div className="hero">
        <nav className="navbar grid grid--padded">
            <a href="/" className="navbar__logo">
                <img src={Logo} alt="Kenneth Kwakye-Gyamfi Logo" className="navbar__logo-img" />
            </a>
        </nav>

        <div className="hero__body">
            <h1 className="hero__title">.NET &amp; Web Full-Stack Developer</h1>

            <p className="hero__subtitle">
                I design &amp; build mobile, web and desktop apps with UX as the primary focus
            </p>

            <img src={Memoji} alt="Kenneth Kwakye-Gyamfi memoji" className="hero__memoji" />

            <div className="hero__footer">
                <img
                    src={HeroFooter}
                    className="hero__footer-img"
                    alt="Kenneth Kwakye-Gyamfi hero footer"
                />
            </div>
        </div>
    </div>
);

export default React.memo(Hero);
