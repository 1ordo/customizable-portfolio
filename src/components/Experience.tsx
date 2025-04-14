import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import resumeData from '../data/resume';

const Experience: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
      
      const isBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 10;
      setIsAtBottom(isBottom);
    };
    
    checkForOverflow();
    handleScroll();
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkForOverflow);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkForOverflow);
    };
  }, []);

  const handleScrollIndicatorClick = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    if (isAtBottom) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const newPosition = container.scrollTop + 60;
      container.scrollTo({ top: newPosition, behavior: 'smooth' });
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="experience" 
      className="section" 
      style={{ 
        padding: '0.75rem', 
        height: 'auto', 
        maxHeight: '407px', 
        display: 'flex',
        flexDirection: 'column' 
      }}
    >
      <h2 className="section-title" style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>Experience</h2>
      
      <div style={{ 
        position: 'relative', 
        flexGrow: 1, 
        overflow: 'hidden',
        borderRadius: '0.3rem',
        background: 'var(--card-background)',
      }}>
        <div 
          ref={scrollContainerRef}
          style={{ 
            height: '100%', 
            overflowY: 'auto',
            paddingRight: '4px',
            paddingBottom: '24px',
          }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ padding: '0.3rem' }}
          >
            {resumeData.experiences.map((job, index) => (
              <motion.div 
                key={index} 
                variants={item}
                style={{ 
                  marginBottom: '0.5rem',
                  padding: '0.5rem',
                  borderRadius: '0.3rem',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  background: 'rgba(16, 185, 129, 0.05)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.5rem' 
                }}>
                  <div style={{ 
                    flexShrink: 0, 
                    color: 'var(--accent)',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    borderRadius: '50%',
                    width: '1.5rem',
                    height: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '0.1rem'
                  }}>
                    <FaBriefcase style={{ fontSize: '0.7rem' }} />
                  </div>
                  <div style={{ width: '100%' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.2rem',
                      flexWrap: 'wrap'
                    }}>
                      <h3 style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 600,
                        color: 'var(--text)',
                        margin: 0
                      }}>{job.title}</h3>
                      {job.period && <span style={{ 
                        fontSize: '0.65rem',
                        color: 'var(--accent)',
                        fontWeight: 500
                      }}>{job.period}</span>}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.3rem',
                      alignItems: 'center',
                      flexWrap: 'wrap'
                    }}>
                      <p style={{ 
                        color: 'var(--text-light)',
                        fontWeight: 500,
                        fontSize: '0.7rem',
                        margin: 0
                      }}>{job.company}</p>
                      {job.location && <span style={{ 
                        fontSize: '0.65rem',
                        color: 'var(--text-light)',
                        fontStyle: 'italic'
                      }}>{job.location}</span>}
                    </div>
                    <ul style={{ 
                      paddingLeft: '0.8rem', 
                      margin: '0.1rem 0 0 0',
                      fontSize: '0.65rem',
                      color: 'var(--text-light)'
                    }}>
                      {job.description.map((bullet, bIndex) => (
                        <li key={bIndex} style={{ 
                          marginBottom: '0.2rem',
                          lineHeight: '1.3'
                        }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
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
    </section>
  );
};

export default Experience;