import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import resumeData from '../data/resume';

interface HomeProps {
  toggleTheme?: () => void;
  isDarkTheme?: boolean;
}

export default function Home({ toggleTheme = () => {}, isDarkTheme = true }: HomeProps) {
  return (
    <>
      <Head>
        <title>{resumeData.personalInfo.name} - Resume</title>
        <meta name="description" content={`${resumeData.personalInfo.name}'s personal resume website`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-responsive-layout fit-screen-layout">
        <aside className="sidebar">
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </aside>
        <main className="content-area fit-content-area">
          <div className="content-grid fit-content-grid">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Hobbies />
          </div>
        </main>
      </div>
    </>
  );
}