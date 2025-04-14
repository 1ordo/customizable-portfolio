import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import resumeData from '../data/resume';

const Projects: React.FC = () => {
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
      
      // Check if scrolled to bottom
      const isBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 10;
      setIsAtBottom(isBottom);
    };
    
    checkForOverflow();
    handleScroll(); // Initialize state
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
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section" style={{ padding: '0.65rem', height: 'auto' }}>
      <div className="container" style={{ padding: 0 }}>
        <h2 className="section-title" style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>Projects & Achievements</h2>
        
        <div style={{ 
          position: 'relative', 
          height: '169px',
          overflow: 'hidden',
          borderRadius: '0.3rem',
          background: 'var(--card-background)',
        }}>
          <div 
            ref={scrollContainerRef}
            style={{ 
              height: '100%', 
              maxHeight: '150px',
              overflowY: 'auto',
              padding: '0.3rem',
              scrollbarWidth: 'thin'
            }}
          >
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ listStyleType: 'none', padding: 0, margin: 0 }}
            >
              {resumeData.projects.map((project, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.4rem',
                    padding: '0.3rem 0.4rem',
                    borderRadius: '0.3rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    fontSize: '0.75rem'
                  }}
                >
                  <FaStar style={{ 
                    color: 'var(--accent)', 
                    marginTop: '0.1rem', 
                    flexShrink: 0,
                    fontSize: '0.7rem'
                  }} />
                  <span>{project}</span>
                </motion.li>
              ))}
            </motion.ul>
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

export default Projects;