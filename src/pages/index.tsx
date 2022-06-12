import Head from 'next/head';
import React from 'react';
import MetaData from '../components/common/MetaData';
import ContactIcons from '../components/ContactIcons';
import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';
import { title } from '../config';
import { useUIRefs } from '../contexts/UiRefsContext';
import { projects as portfolioProjects } from '../data/projects';

export default function Site(): JSX.Element {
    const { aboutMeRef, projectsRef, contactRef } = useUIRefs();

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

                <main className="max-w-[1600px] mx-auto">
                    <section ref={aboutMeRef} className="flex h-[95vh] w-full items-center justify-center">
                        <div className="flex flex-col lg:flex-row w-4/5 lg:w-3/5">
                            <h2 className="font-bold text-6xl xl:text-6xl p-5 w-auto xl:w-2/5">Full Stack Developer</h2>
                            <div className="text-4xl p-5 w-auto xl:w-3/5">
                                <p className="mb-2">👋 Hi, I&apos;m Ed</p>
                                <p className="mb-2">
                                    I&apos;m a developer with a passion for music based in London, UK.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section ref={projectsRef} className="flex flex-col w-full items-center justify-center">
                        <div className="flex w-4/5 lg:w-3/5 justify-end mb-12">
                            <h2 className="font-bold text-6xl p-5">Projects</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-10 w-11/12 h-full">
                            {portfolioProjects.map((project) => (
                                <ProjectCard project={project} key={project.id} />
                            ))}
                        </div>
                    </section>

                    <section ref={contactRef} className="flex h-[95vh] w-full items-center justify-center">
                        <div className="flex flex-col lg:flex-row items-center w-4/5 lg:w-3/5">
                            <h2 className="font-bold text-6xl p-5">Contact</h2>
                            <ContactIcons />
                        </div>
                    </section>
                </main>

                <footer className="p-5 text-base self-end">Copyright © Edward Horsey {new Date().getFullYear()}</footer>
                <div id="modal-root" />
            </div>
        </>
    );
}
