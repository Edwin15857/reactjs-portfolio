/**
 * It renders the Nav, a header, a paragraph, and the Projects component
 * @returns A React component.
 */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../components/nav';
import Nav from '../../../components/zh/nav';
import Footer from '../../../components/zh/footer';

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Edwin Ng&apos;s Portfolio</title>
                <meta name="description" content="A Next.js Portfolio built by and built for Edwin Ng, aka NotEdwin." />
                <meta property="og:image" content="/me.jpg" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white dark:bg-slate-800">
                <section className="px-10">
                    <Nav icons="Home" />
                    <div className="text-center mx-10">
                        <h1 className="font-bold text-2xl pb-5 text-blue-gray-100">
                            Project Directory
                        </h1>
                        <p className="text-md dark:text-white mb-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <Projects />
                </section>
                <Footer />
            </main>
        </div >
    )
}