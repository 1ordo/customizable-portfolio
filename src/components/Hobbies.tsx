import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCamera, FaCode, FaHiking, FaChess, FaPlus, FaChevronDown, FaChevronUp, FaMusic, FaImage, FaLaptop } from 'react-icons/fa';
import resumeData from '../data/resume';

const Hobbies: React.FC = () => {
  const getIcon = (iconName: string | undefined) => {
    switch (iconName) {
      case 'code': return <FaCode />;
      case 'music': return <FaMusic />;
      case 'image': return <FaImage />;
      case 'computer': return <FaLaptop />;
      default: return <FaPlus />;
    }
  };

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
    <section id="hobbies" className="section" style={{ padding: '0.75rem', height: 'auto' }}>
      <div className="container" style={{ padding: 0 }}>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Hobbies & Interests</h2>

        <div style={{ 
          position: 'relative', 
          height: '150px',
          overflow: 'hidden',
          borderRadius: '0.3rem',
          background: 'var(--card-background)',
        }}>
          <div 
            ref={scrollContainerRef}
            className="scrollable-container"
            style={{ 
              height: '100%', 
              maxHeight: '166px', // Adjusted to account for scroll indicator
              overflowY: 'auto',
              paddingRight: '4px',
              padding: '0.3rem'
            }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}
            >
              {resumeData.hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0.35rem 0.2rem',
                    borderRadius: '0.4rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid var(--primary)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--primary)',
                    marginBottom: '0.2rem'
                  }}>
                    {getIcon(hobby.icon)}
                  </div>
                  <span style={{ fontSize: '0.65rem' }}>{hobby.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <h3 style={{ 
              marginBottom: '0.4rem', 
              color: 'var(--secondary)',
              fontSize: '0.85rem'
            }}>Additional Skills</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.3rem' 
              }}>
                {resumeData.unmentiondSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={item}
                    className="skill-tag"
                    style={{ 
                      backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      fontSize: '0.7rem',
                      padding: '0.1rem 0.4rem'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
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

export default Hobbies;