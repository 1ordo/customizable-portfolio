import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import resumeData from '../data/resume';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeProps {
  toggleTheme?: () => void;
  isDarkTheme?: boolean;
}

// Define a type for section keys for better type safety
type SectionKey = 'about' | 'skills' | 'experience' | 'education' | 'projects' | 'hobbies';

// Type the grid positions object
const GRID_POSITIONS: Record<SectionKey, string> = {
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  education: 'education',
  projects: 'projects',
  hobbies: 'hobbies'
};

export default function Home({ toggleTheme = () => {}, isDarkTheme = true }: HomeProps) {
  const [activeSection, setActiveSection] = useState<SectionKey>('about');
  const [previousSection, setPreviousSection] = useState<SectionKey | null>(null);
  const [positions, setPositions] = useState<Record<SectionKey, string>>({ ...GRID_POSITIONS });
  
  // Function to handle section click
  const handleSectionClick = (id: SectionKey) => {
    if (id === activeSection) return; // Do nothing if clicking the active section
    
    // Save previous active section
    setPreviousSection(activeSection);
    
    // Update positions - swap the clicked section with about position
    // When clicking on the about section, return to default positions
    if (id === 'about') {
      // Reset to original positions
      setPositions({ ...GRID_POSITIONS });
    } else {
      // Swap positions between clicked section and current active section
      const newPositions = { ...positions };
      
      // If about is active, swap with clicked section
      if (activeSection === 'about') {
        newPositions[id] = 'about';
        newPositions['about'] = GRID_POSITIONS[id];
      } else {
        // If another section is active, swap the new clicked section with about 
        // and return the previous active section to its original position
        newPositions[id] = 'about';
        newPositions[activeSection] = GRID_POSITIONS[activeSection];
        newPositions['about'] = GRID_POSITIONS[id];
      }
      
      setPositions(newPositions);
    }
    
    // Update active section
    setActiveSection(id);
  };

  // Props for each section
  const getSectionProps = (id: SectionKey) => ({
    id,
    isActive: id === activeSection,
    isPrevious: id === previousSection,
    initialPosition: GRID_POSITIONS[id],
    targetPosition: positions[id], 
    onClick: () => handleSectionClick(id),
  });

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
            <About {...getSectionProps('about')} />
            <Skills {...getSectionProps('skills')} />
            <Experience {...getSectionProps('experience')} />
            <Education {...getSectionProps('education')} />
            <Projects {...getSectionProps('projects')} />
            <Hobbies {...getSectionProps('hobbies')} />
          </div>
        </main>
      </div>
    </>
  );
}