import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import resumeData from '../data/resume';

const Education: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const checkForOverflow = () => {
      const hasContentOverflow = container.scrollHeight > container.clientHeight + 5;
      setHasOverflow(hasContentOverflow);
      container.classList.toggle('has-overflow', hasContentOverflow);
    };
    
    const handleScroll = () => {
      if (!container) return;
      
      // Calculate scroll percentage
      const scrollPercentage = container.scrollTop / (container.scrollHeight - container.clientHeight);
      setScrollPosition(scrollPercentage);
      
      // Check if scrolled to bottom
      const isBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 5;
      setIsAtBottom(isBottom);
    };
    
    checkForOverflow();
    handleScroll(); // Initialize scroll position
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkForOverflow);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkForOverflow);
    };
  }, []);

  // Handle scroll to top when at bottom
  const handleScrollIndicatorClick = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    if (isAtBottom) {
      // If at bottom, scroll to top
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If not at bottom, scroll down a bit
      const newPosition = container.scrollTop + 60;
      container.scrollTo({ top: newPosition, behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="section" style={{ padding: '0.75rem', height: 'auto' }}>
      <div className="container" style={{ padding: 0 }}>
        <h2 className="section-title" style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>Education</h2>
        
        <div style={{ 
          position: 'relative', 
          height: '135px', // Reduced from 200px
          overflow: 'hidden',
          borderRadius: '0.3rem',
          background: 'var(--card-background)',
        }}>
          <div 
            ref={scrollContainerRef}
            style={{ 
              height: '100%', 
              maxHeight: '111px', // Adjusted to account for scroll indicator
              overflowY: 'auto',
              paddingRight: '4px',
              padding: '0.3rem',
              scrollbarWidth: 'thin'
            }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ padding: '0.3rem' }}
            >
              {resumeData.education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="card"
                  style={{ 
                    marginBottom: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    height: 'auto', // Changed from fixed height
                    borderRadius: '0.3rem',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    background: 'rgba(16, 185, 129, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ 
                      backgroundColor: 'var(--accent)',
                      color: 'white',
                      borderRadius: '50%',
                      width: '2rem',
                      height: '2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '0.75rem'
                    }}>
                      <FaGraduationCap />
                    </div>
                    <div style={{ width: '100%' }}>
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap'
                      }}>
                        <h3 style={{ fontSize: '0.9rem', margin: 0 }}>{edu.degree}</h3>
                        <span style={{ 
                          color: 'var(--accent)', 
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}>{edu.year}</span>
                      </div>
                      <div style={{ marginTop: '0.15rem' }}>
                        <p style={{ 
                          fontWeight: 500, 
                          color: 'var(--text-light)',
                          fontSize: '0.75rem',
                          margin: 0
                        }}>
                          {edu.institution} • {edu.location}
                        </p>
                      </div>
                      <p style={{ 
                        marginTop: '0.5rem',
                        fontSize: '0.75rem',
                        color: 'var(--text-light)',
                        margin: 0
                      }}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Floating scroll indicator */}
          {hasOverflow && (
            <motion.div 
              style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '24px',
                backgroundColor: 'var(--card-background)',
                borderTop: '1px solid rgba(16, 185, 129, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 100,
                boxShadow: '0 -4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
              onClick={handleScrollIndicatorClick}
            >
              <motion.div
                animate={{
                  y: [0, 3, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5 
                }}
                style={{
                  color: 'var(--accent)', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%'
                }}
              >
                {isAtBottom ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;