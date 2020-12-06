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

    const renderBreakdowns = () => {
        const breakdowns = [
            {
                img: Design,
                title: 'Frontend dev / design',
                description:
                    'I love to work actively on the user experience portion of a software development lifecycle from wireframe prototyping to frontend development.',
                subTitle: 'Things I love designing',
                subDesc: 'Wireframes, websites, prototypes',
                listTitle: 'Design Tools + Languages',
                list: [
                    'ReactJS',
                    'AngularJS',
                    'Vanilla JS',
                    'Vue JS',
                    'Adobe Photoshop',
                    'Adobe XD',
                    'Sketch',
                    'Figma'
                ]
            },
            {
                img: WebApp,
                title: 'Backend development',
                description:
                    'I also love to get down to the dirty stuff and build APIs; websocket servers; microservice architectures; and generally full-fledged backend apps.',
                subTitle: 'Things I love building',
                subDesc: 'Web applications, APIs, DevOps',
                listTitle: 'Dev tools + languages',
                list: [
                    'NodeJS',
                    'GoLang',
                    'PHP',
                    'Python',
                    'Java',
                    'Google Cloud Platform',
                    'Amazon Web Services',
                    'Database management',
                    'Heroku'
                ]
            },
            {
                img: MobileApp,
                title: 'Mobile app development',
                description:
                    'I have experience developing not just Native applications but also (depending on the job) develop hybrid applications, fit for both iOS and Android.',
                subTitle: 'Types I love developing',
                subDesc: 'Android, iOS, Hybrid apps',
                listTitle: 'Development tools',
                list: [
                    'Java/Kotlin for Android',
                    'Swift for iOS',
                    'React Native',
                    'Ionic',
                    'Nativescript'
                ]
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
                <h2 className="about__title">Hello, I&apos;m Scott. Great to meet you!</h2>

                <p className="about__text">{description}</p>

                <a href="/resume.pdf" download="" className="about__cv">
                    Download my CV &nbsp;
                    <i className="ti-file" />
                </a>
            </div>

            <div className="about__breakdowns grid grid--padded">{renderBreakdowns()}</div>
        </div>
    );
};

export default React.memo(About);
