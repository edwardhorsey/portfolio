import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAt, faPaintbrush, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import React from 'react';
import MetaData from '../components/common/MetaData';
import { title } from '../config';

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
                    <ul className="fixed top-0 right-0 p-5 flex justify-end gap-10">
                        <li>
                            <FontAwesomeIcon icon={faUserAstronaut} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPaintbrush} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </li>
                    </ul>
                </header>

                <section className="flex h-[95vh] w-full items-center justify-center">
                    <div className="flex w-3/5">
                        <h1 className="font-bold text-6xl p-5 w-2/5">Full Stack Developer</h1>
                        <div className="text-4xl p-5 w-3/5">
                            <p className="mb-2">👋 Hi, I&apos;m Ed</p>
                            <p className="mb-2">I&apos;m a developer with a passion for music based in London, UK.</p>
                        </div>
                    </div>
                </section>

                <section className="flex h-[95vh] w-full items-center justify-center">
                    <div className="flex w-3/5">
                        <h1 className="font-bold text-6xl p-5">Projects</h1>
                    </div>
                </section>

                <section className="flex h-[95vh] w-full items-center justify-center">
                    <div className="flex items-center w-3/5">
                        <h1 className="font-bold text-6xl p-5">Contact</h1>
                        <ul className="flex flex-col w-full text-4xl">
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
                <div id="modal-root" />
            </div>
        </>
    );
}
