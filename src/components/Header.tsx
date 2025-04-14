import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPaperclip } from 'react-icons/fa';
import resumeData from '../data/resume';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

// TimeBox component with hover effects
const TimeBox: React.FC<{ large?: boolean; style?: React.CSSProperties }> = ({ large, style }) => {
  const [now, setNow] = React.useState(new Date());
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--background)',
        borderRadius: 18,
        boxShadow: isHovered ? '0 4px 16px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.07)',
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        border: '1px solid var(--border-color)',
        cursor: 'default',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        ...style
      }}
    >
      <span style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Current Time</span>
      <span style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        letterSpacing: 2, 
        color: 'var(--accent)',
        transition: 'color 0.3s'
      }}>
        {hours}:{minutes}
      </span>
      <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>Mansoura, Egypt</span>
    </div>
  );
};

const LocationBox: React.FC<{ large?: boolean; style?: React.CSSProperties; isDarkTheme: boolean }> = ({ large, style, isDarkTheme }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const location = "Mansoura+Qism+2,Mansoura,Egypt";
  const googleMapsUrl = `https://www.google.com/maps/place/${location}`;
  
  return (
    <a 
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--background)',
        borderRadius: 18,
        boxShadow: isHovered ? '0 4px 16px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.07)',
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        border: '1px solid var(--border-color)',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        textDecoration: 'none',
        ...style
      }}
    >
      <span style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Location</span>
      <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.75rem' }}>
        Mansoura Qism 2
      </span>
      <div style={{ 
        borderRadius: 12, 
        overflow: 'hidden', 
        boxShadow: '0 1px 8px rgba(0,0,0,0.1)', 
        width: '100%', 
        height: '130px',
        maxWidth: '350px',
        position: 'relative',
        background: '#f5f5f5'
      }}>
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=31.372938156127933%2C31.042931827491837%2C31.378002166748047%2C31.045831864560804&amp;layer=mapnik&amp;marker=31.044381897805336%2C31.375470161437988"
          width="100%"
          height="130"
          frameBorder="0"
          loading="lazy"
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            filter: isDarkTheme ? 'brightness(0.8) contrast(1.1)' : 'none'
          }}
        />
        {isHovered && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
            backdropFilter: 'blur(2px)'
          }}>
            Open in Google Maps →
          </div>
        )}
      </div>
    </a>
  );
};

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
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <FaEnvelope style={{ 
                  marginRight: '0.8rem', 
                  fontSize: '1.5rem', 
                  color: 'var(--accent)',
                  minWidth: '24px'
                }}/>
                <span>{personalInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ 
                  display: 'inline-block', 
                  marginRight: '0.8rem', 
                  fontSize: '1.5rem', 
                  color: 'var(--accent)',
                  minWidth: '24px'
                }}>📱</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <svg viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    fill: 'var(--accent)', 
                    marginRight: '0.8rem',
                    minWidth: '24px'
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
              style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
            >
              {/* CV Download Button - Full Width */}
              <a 
                href={resumeData.resumeUrl} 
                className="button"
                download
                style={{ 
                  width: '100%',
                  fontSize: '1.1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.7rem', 
                  padding: '0.7rem 1.2rem'
                }}
              >
                <FaPaperclip style={{ fontSize: '1.5rem' }} /> View & Download CV
              </a>
              
              {/* Social and Theme Icons Row */}
              <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
                <button 
                  className="icon-button"
                  onClick={toggleTheme}
                  aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
                  style={{ 
                    padding: '0.8rem', 
                    fontSize: '1.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem'
                  }}
                >
                  {isDarkTheme ? <FaSun /> : <FaMoon />}
                </button>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="icon-button"
                  aria-label="Email me"
                  style={{ 
                    padding: '0.8rem', 
                    fontSize: '1.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem'
                  }}
                >
                  <FaEnvelope />
                </a>
                <a 
                  href="https://www.linkedin.com/in/notlordo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-button"
                  aria-label="LinkedIn profile"
                  style={{ 
                    padding: '0.8rem', 
                    fontSize: '1.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem'
                  }}
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/1ordo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-button"
                  aria-label="GitHub profile"
                  style={{ 
                    padding: '0.8rem', 
                    fontSize: '1.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem'
                  }}
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            
            {resumeData.availableForHire && (
              <>
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

                {/* Time and Location Boxes */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '1rem',
                    marginTop: '1rem'
                  }}
                >
                  <TimeBox large style={{ width: '100%' }} />
                  <LocationBox large style={{ width: '100%' }} isDarkTheme={isDarkTheme} />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;