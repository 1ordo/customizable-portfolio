import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import resumeData from '../data/resume';
import { ThemeName } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>('dark');

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check for system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document root element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Apply theme-specific CSS variables
    const rootStyle = document.documentElement.style;
    if (theme === 'dark') {
      rootStyle.setProperty('--background', '#121212');
      rootStyle.setProperty('--background-lighter', '#1f1f1f');
      rootStyle.setProperty('--text', '#ffffff');
      rootStyle.setProperty('--text-light', '#e0e0e0');
    } else {
      rootStyle.setProperty('--background', '#ffffff');
      rootStyle.setProperty('--background-lighter', '#f5f5f5');
      rootStyle.setProperty('--text', '#121212');
      rootStyle.setProperty('--text-light', '#4a4a4a');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <title>{resumeData.personalInfo.name} - Resume</title>
        <meta name="description" content={`Resume of ${resumeData.personalInfo.name}, ${resumeData.personalInfo.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="main-container"
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { toggleTheme, isDarkTheme: theme === 'dark' } as any);
          }
          return child;
        })}

        
      </motion.div>
    </>
  );
};

export default Layout;