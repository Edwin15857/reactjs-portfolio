import Head from 'next/head';
import Nav from '../components/nav';
import About from '../components/about';
import { BsCodeSlash } from 'react-icons/bs';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { SiCsharp, SiDiscord, SiGit, SiHeroku, SiIntellijidea, SiJava, SiJavascript, SiNextdotjs, SiPython, SiReact, SiReplit, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { MdOutlineWeb } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { BiCodeBlock } from 'react-icons/bi';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import Footer from '../components/footer';
import Projects from '../components/projects';
import Link from 'next/link';


export default function Home() {
  let cards = "text-center shadow-xl bg-gradient-to-b from-sky-100 to-slate-100 shadow-sky-200 p-10 rounded-xl my-10 dark:shadow-sky-700 dark:from-sky-200 dark:to-slate-200"
  let tag = "text-sm inline-flex items-center font-sans font-semibold leading-sm px-3 py-1 bg-slate-100 text-sky-500 rounded-full m-1 border-lg border-2 border-blue-400"

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
          <Nav icons="Project" />
        </section>
        <section className='min-h-screen text-center mx-auto mt-80'>
          <div>
            <h1 className='font-bold text-2xl mb-5'>Please select your preferred language.</h1>
            <h1 className='font-extrabold text-2xl mb-10'>请选择您的首选语言</h1>
          </div>
          <div>
            <button className="p-2 text-white bg-blue-400 shadow-2xl rounded-md mx-5" onClick={() => {
              window.location.href = "/en/"
            }}>English (EN)</button>
            <button className="p-2 text-white bg-blue-400 shadow-2xl rounded-md mx-5" onClick={() => {
              window.location.href = "/zh/"
            }}>中文简体 (ZH)</button>
            <button className="p-2 text-white bg-blue-400 shadow-2xl rounded-md mx-5" onClick={() => {
              window.location.href = "/"
            }}>[制作中] 中文繁体 (ZH)</button>
          </div>
          <div className="my-10">
            <h2 className="text-2xl">After you have selected your preferred language, this website will automatically be displayed in the language of your choice for easier reading.</h2>
            <h2 className="text-2xl">当你选择了您的首选语言后，本网站将会自动以您选择的语言展示出来，以便阅读。</h2>
          </div>
        </section>

        <Footer />
      </main >
    </div >
  )
}
