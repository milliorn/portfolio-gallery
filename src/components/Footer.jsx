import React from 'react';
import { Link } from 'gatsby';

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
            and the universe trying to produce bigger and better idiots. So far, the universe is winning.`,
        ];

        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    const renderSocials = () => {
        const socials = [
            {
                name: 'Github',
                icon: 'ti-github',
                url: 'https://github.com/milliorn',
            },
            {
                name: 'LinkedIn',
                icon: 'ti-linkedin',
                url: 'https://www.linkedin.com/in/scott-milliorn/',
            },
            {
                name: 'Stack Overflow',
                icon: 'ti-stack-overflow',
                url: 'https://stackoverflow.com/users/11986604/milliorn',
            },
            {
                name: 'Twitter',
                icon: 'ti-twitter',
                url: 'https://twitter.com/scottmilliorn',
            },
        ];

        return socials.map((social) => (
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
            <p className="footer__quote">{renderQuote()}</p>
            <div className="footer__social">{renderSocials()}</div>
            <p className="footer__copyright">Scott Milliorn &copy; {new Date().getFullYear()}</p>
            <Link className="footer__policy" to="/privacy/">
                Privacy Policy
            </Link>
        </footer>
    );
};

export default Footer;
