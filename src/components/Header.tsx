import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import resumeData from '../data/resume';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkTheme }) => {
  const { personalInfo } = resumeData;

  return (
    <header className="section" style={{ padding: '1rem', height: '100%' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: '1.6rem', color: 'var(--accent)', marginBottom: '0.5rem' }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '1rem' }}
            >
              {personalInfo.title}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              style={{ fontSize: '0.85rem', marginBottom: '1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.35rem' }}>
                <FaEnvelope style={{ marginRight: '0.5rem', fontSize: '0.75rem', color: 'var(--accent)' }}/>
                <span>{personalInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ display: 'inline-block', width: '14px', marginRight: '0.5rem', fontSize: '0.75rem', color: 'var(--accent)' }}>📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ display: 'inline-block', width: '14px', marginRight: '0.5rem', fontSize: '0.75rem', color: 'var(--accent)' }}>📱</span>
                <span>{personalInfo.phone}</span>
              </div>
            </motion.div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}
            >
              <a 
                href={resumeData.resumeUrl} 
                className="button"
                download
                style={{ flex: '1' }}
              >
                <FaDownload style={{ fontSize: '0.7rem' }} /> Download CV
              </a>
              
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button 
                  className="icon-button"
                  onClick={toggleTheme}
                  aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkTheme ? <FaSun /> : <FaMoon />}
                </button>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="icon-button"
                  aria-label="Email me"
                >
                  <FaEnvelope />
                </a>
                <a 
                  href="https://www.linkedin.com/in/notlordo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-button"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/1ordo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-button"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            
            {resumeData.availableForHire && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                style={{ 
                  marginTop: '1rem', 
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid var(--secondary)',
                  fontSize: '0.8rem',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Available for hire</h3>
                <p style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  Open to freelance or full-time
                </p>
                <a 
                  href={`mailto:${personalInfo.email}?subject=Job Opportunity`}
                  className="button"
                  style={{ 
                    backgroundColor: 'var(--secondary)',
                    fontSize: '0.7rem',
                    padding: '0.3rem 0.6rem',
                    width: '100%'
                  }}
                >
                  Contact me
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;