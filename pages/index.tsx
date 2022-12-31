import { Inter } from "@next/font/google";
import Head from "next/head";

import About from "../components/About";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wed Developer Portfolio</title>
        <meta
          name="description"
          content="My Web Developer Portfolio site, Scott Milliorn"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Skills />
    </>
  );
}
