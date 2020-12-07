import React from 'react';

import Logo from '../img/logo_white.png';

const Footer = () => {
    const renderQuote = () => {
        const quotes = [
            `Programming today is a race between software engineers striving to build bigger and better idiot-proof programs,
            and the Universe trying to produce bigger and better idiots. So far, the Universe is winning`,
            `Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.`,
            `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
            `I'm not a great programmer; I'm just a good programmer with great habits.`,
            `How you look at it is pretty much how you'll see it`,
            `The best thing about a boolean is even if you are wrong, you are only off by a bit.`,
            `There are two ways to write error-free programs; only the third one works.`,
            `It’s not a bug – it’s an undocumented feature.`,
            `Programming today is a race between software engineers striving to build bigger and better idiot-proof programs,
            and the universe trying to produce bigger and better idiots. So far, the universe is winning.`
        ];

        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    const renderSocials = () => {
        const socials = [
            { name: 'Github', icon: 'ti-github', url: 'https://www.github.com/cross19xx' },
            {
                name: 'Facebook',
                icon: 'ti-facebook',
                url: 'https://www.facebook.com/profile.php?id=100009436144652'
            },
            {
                name: 'Stack Overflow',
                icon: 'ti-stack-overflow',
                url: 'https://stackoverflow.com/users/3651221/cr05s19xx'
            },
            {
                name: 'Instagram',
                icon: 'ti-instagram',
                url: 'https://www.instagram.com/kenneth_kwakyegyamfi/'
            },
            {
                name: 'LinkedIn',
                icon: 'ti-linkedin',
                url: 'https://www.linkedin.com/in/kenneth-kwakye-gyamfi/'
            },
            { name: 'Twitter', icon: 'ti-twitter', url: 'https://twitter.com/cross19xx' }
        ];

        return socials.map(social => (
            <a
                target="_blank"
                href={social.url}
                key={social.icon}
                title={social.name}
                rel="noopener noreferrer"
                className="footer__social-btn">
                <i className={`${social.icon} footer__social-icon`} />
            </a>
        ));
    };

    return (
        <footer className="footer">
            <img src={Logo} alt="Kenneth Kwakye-Gyamfi Logo" className="footer__logo" />

            <p className="footer__quote">{renderQuote()}</p>

            <div className="footer__social">{renderSocials()}</div>

            <p className="footer__copyright">Scott Milliorn &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
