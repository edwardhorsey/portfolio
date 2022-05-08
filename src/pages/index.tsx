import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import MetaData from '../components/common/MetaData';
import { title } from '../config';

export default function Site(): JSX.Element {
    const siteRef = useRef(null);

    const [inBrowser, setInBrowser] = useState(false);

    useEffect(() => {
        setInBrowser(true);
    }, []);

    return (
        <>
            <div
                ref={siteRef}
                className="w-screen h-screen min-w-[320px] overflow-hidden lg:min-h-[620px]"
                style={{ transition: 'filter 1s ease-in-out' }}
            >
                <Head>
                    <MetaData />
                    <title>{title}</title>
                </Head>

                <section className="flex h-full w-full items-center justify-center overflow-x-hidden overflow-y-hidden">
                    <div className="flex w-3/5">
                        <h1 className="font-bold text-6xl p-5 w-2/5">Full Stack Developer</h1>
                        <div className="text-4xl p-5 w-3/5">
                            <p className="mb-2">👋 Hi, I&apos;m Ed</p>
                            <p className="mb-2">I&apos;m a developer with a passion for music based in London, UK.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div id="modal-root" />
        </>
    );
}
