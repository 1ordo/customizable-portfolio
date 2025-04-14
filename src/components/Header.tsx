import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPaperclip } from 'react-icons/fa';
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
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ display: 'inline-block', width: '14px', marginRight: '0.5rem', fontSize: '0.75rem', color: 'var(--accent)' }}>📱</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <svg viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                  style={{ 
                    width: '14px', 
                    height: '14px', 
                    fill: 'var(--accent)', 
                    marginRight: '0.5rem'
                  }}
                >
                  <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor"></path>
                </svg>
                <span>NotLordo</span>
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
                <FaPaperclip style={{ fontSize: '0.7rem' }} /> View & Download CV
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
                  Open to freelance or part-time
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