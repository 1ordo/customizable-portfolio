import React from "react";
import Head from "next/head";
import { personal } from "../data/resume";
import Backdrop from "../components/Backdrop";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Beyond from "../components/Beyond";
import Contact from "../components/Contact";

const title = "Mohamed Yousry, Lead Engineer";
const description =
  "Lead Engineer building production AI systems: multi-agent architectures, LLM deployments, and on-device inference. Backend first with Python, FastAPI, Docker, Redis, and Postgres.";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={personal.github} />
      </Head>

      <Backdrop />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Stack />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
