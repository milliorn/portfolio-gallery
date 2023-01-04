import Head from "next/head";
import { Inter } from "@next/font/google";

import About from "../components/About";
import Contact from "../components/Contacts/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Project/Projects";
import Skills from "../components/skill/Skills";

const inter = Inter({ subsets: ["latin"] });

// home page
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Web Developer Portfolio site, Scott Milliorn"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Scott Milliorn Portfolio</title>
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
