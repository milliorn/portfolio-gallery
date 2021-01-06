import React from 'react';

import HeroFooter from '../img/hero.svg';
import Memoji from '../img/memoji.svg';

const Hero = () => (
    <div className="hero">
        {/*
        <nav className="navbar grid grid--padded">
            <a
            </a>
        </nav>
        */}

        <div className="hero__body">
            <h1 className="hero__title">.NET &amp; Web Full-Stack Developer</h1>

            <p className="hero__subtitle">
                Designing &amp; building web and desktop apps with .NET along with websites in
                ReactJS.
            </p>

            <img
                src={Memoji}
                alt="Scott Milliorn memoji"
                className="hero__memoji"
                width="264"
                height="280"
            />

            <div className="hero__footer">
                <img
                    src={HeroFooter}
                    className="hero__footer-img"
                    alt="Scott Milliorn hero footer"
                    width="264"
                    height="280"
                />
            </div>
        </div>
    </div>
);

export default React.memo(Hero);
