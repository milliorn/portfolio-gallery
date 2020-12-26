import React from 'react';

import Design from '../img/computer.svg';
import MobileApp from '../img/mobile-app.svg';
import WebApp from '../img/development.svg';

const About = () => {
    const description = `I'm an aspiring full stack web developer and .NET developer.
    Work experience involves websites an applications.
    Currently seeking work for an ambitious company.
    I love video game programming as a hobby.
    Avid weightlifter.
    Former musician.
    Passion to learn in C# and .NET.`;

    const sortArray = arr =>
        arr.sort((a, b) => {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });

    const renderBreakdowns = () => {
        const date = new Date();
        const year = date.getFullYear();
        const yearsDeveloping = year - 2004;

        const designList = ['VanillaJS', 'ReactJS', 'HTML', 'CSS', 'ASP.NET'];
        const WebAppList = ['NodeJS', 'Python', 'Java', 'SQL', '.NET', 'GatsbyJS', 'Netlify'];
        const MobileAppList = ['Unity', 'NwScript'];

        sortArray(designList);
        sortArray(WebAppList);
        sortArray(MobileAppList);

        const designSubDesc = ['Websites']
            .sort((a, b) => {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0;
            })
            .join(', ');

        const webAppSubDesc = ['Web Applications', 'APIs', 'Docker']
            .sort((a, b) => {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0;
            })
            .join(', ');

        const MobileAppSubDesc = ['Android', 'iOS', 'Unity', 'Unreal', 'NWScript']
            .sort((a, b) => {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0;
            })
            .join(', ');

        const breakdowns = [
            {
                img: Design,
                title: 'Front-End Development',
                description:
                    'I enjoy working on the software development lifecycle of frontend development.',
                subTitle: 'Things I Enjoy About Front-End',
                subDesc: designSubDesc,
                listTitle: 'Design Tools + Languages',
                list: designList
            },
            {
                img: WebApp,
                title: 'Back-End Development',
                description: 'I love working and building APIs. Experienced with Docker.',
                subTitle: 'Things I Love Building',
                subDesc: webAppSubDesc,
                listTitle: 'Development Tools + Languages',
                list: WebAppList
            },
            {
                img: MobileApp,
                title: 'Game & Mobile App Development',
                description: `Video Game Developer Hobbyist for ${yearsDeveloping} years. Excited to work in Mobile Development.`,
                subTitle: 'Things I Love Developing or Aspire to Learn',
                subDesc: MobileAppSubDesc,
                listTitle: 'Development tools',
                list: MobileAppList
            }
        ];

        return breakdowns.map(breakdown => (
            <div className="about__breakdown col" key={breakdown.title.toLowerCase()}>
                <img src={breakdown.img} alt={breakdown.title} className="about__breakdown-img" />

                <h3 className="about__breakdown-title">{breakdown.title}</h3>
                <p className="about__breakdown-desc">{breakdown.description}</p>

                <p className="about__breakdown-subtitle">{breakdown.subTitle}</p>
                <p className="about__breakdown-subdesc">{breakdown.subDesc}</p>

                <p className="about__breakdown-subtitle">{breakdown.listTitle}</p>
                <ul className="about__breakdown-list">
                    {breakdown.list.map(elem => (
                        <li key={elem} className="about__breakdown-elem">
                            {elem}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="about">
            <div className="about__inner">
                <h2 className="about__title">Hello, I&apos;m Scott. Nice to meet you!</h2>

                <p className="about__text">{description}</p>

                <a href="scott-milliorn-resume.pdf" download="" className="about__cv">
                    Download Resume &nbsp;
                    <i className="ti-file" />
                </a>
            </div>

            <div className="about__breakdowns grid grid--padded">{renderBreakdowns()}</div>
        </div>
    );
};

export default React.memo(About);
