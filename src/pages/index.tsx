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

export default function Home() {
  return (
    <>
      <Head>
        <title>{resumeData.personalInfo.name} - Resume</title>
        <meta name="description" content={`${resumeData.personalInfo.name}'s personal resume website`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ 
        maxWidth: '1200px', 
        margin: '0.5rem auto', 
        padding: '0 0.5rem' 
      }}>
        {/* Top row - Header and About */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(250px, 1fr) 2fr',
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>
          <Header toggleTheme={() => {}} isDarkTheme={false} />
          <About />
        </div>
        
        {/* Bottom grid - Three columns layout */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem'
        }}>
          {/* Column 1 - Skills and Hobbies */}
          <div>
            <Skills />
            <div style={{ marginTop: '0.5rem' }}>
              <Hobbies />
            </div>
          </div>
          
          {/* Column 2 - Experience */}
          <Experience />
          
          {/* Column 3 - Education and Projects */}
          <div>
            <Education />
            <div style={{ marginTop: '0.5rem' }}>
              <Projects />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}