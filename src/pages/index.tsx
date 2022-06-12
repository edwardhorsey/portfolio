import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAt, faPaintbrush, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import MetaData from '../components/common/MetaData';
import ProjectCard from '../components/ProjectCard';
import { title } from '../config';
import { projects } from '../data/projects';

const Nav = () => {
    const navSpring = useSpring({
        from: {
            distance: 100,
            opacity: 0,
        },
        to: {
            distance: 0,
            opacity: 1,
        },
        delay: 200,
    });

    return (
        <ul className="fixed top-0 right-0 p-5 flex justify-end gap-10 bg-white">
            <animated.li
                style={{
                    opacity: navSpring.opacity,
                    transform: navSpring.distance.to((x) => `translateX(${x * 3}px)`),
                }}
            >
                <FontAwesomeIcon icon={faUserAstronaut} />
            </animated.li>
            <animated.li
                style={{
                    opacity: navSpring.opacity,
                    transform: navSpring.distance.to((x) => `translateX(${x * 2}px)`),
                }}
            >
                <FontAwesomeIcon icon={faPaintbrush} />
            </animated.li>
            <animated.li
                style={{
                    opacity: navSpring.opacity,
                    transform: navSpring.distance.to((x) => `translateX(${x * 1}px)`),
                }}
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </animated.li>
        </ul>
    );
};

export default function Site(): JSX.Element {
    return (
        <>
            <div className="w-screen h-screen min-w-[320px] lg:min-h-[620px] overflow-auto">
                <Head>
                    <MetaData />
                    <title>{title}</title>
                </Head>

                <header className="flex justify-between p-5 text-2xl">
                    <h1>Edward Horsey</h1>
                    <Nav />
                </header>

                <section className="flex h-[95vh] w-full items-center justify-center">
                    <div className="flex flex-col lg:flex-row w-3/5">
                        <h1 className="font-bold text-6xl p-5 lg:w-2/5">Full Stack Developer</h1>
                        <div className="text-4xl p-5 lg:w-3/5">
                            <p className="mb-2">👋 Hi, I&apos;m Ed</p>
                            <p className="mb-2">I&apos;m a developer with a passion for music based in London, UK.</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col w-full items-center justify-center">
                    <div className="flex w-3/5 justify-end mb-8">
                        <h1 className="font-bold text-6xl p-5">Projects</h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 w-11/12 h-full">
                        {projects.slice(0, 5).map((project) => (
                            <ProjectCard project={project} key={project.id} />
                        ))}
                    </div>
                </section>

                <section className="flex h-[95vh] w-full items-center justify-center">
                    <div className="flex flex-col lg:flex-row items-center w-3/5">
                        <h1 className="font-bold text-6xl p-5">Contact</h1>
                        <ul className="flex gap-5 lg:gap-0 justify-center lg:justify-start lg:flex-col w-full text-4xl">
                            <li>
                                <FontAwesomeIcon icon={faAt} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGithub} />
                            </li>
                        </ul>
                    </div>
                </section>

                <footer className="p-5 text-xl self-end">Copyright © Edward Horsey {new Date().getFullYear()}</footer>
                <div id="modal-root" />
            </div>
        </>
    );
}
