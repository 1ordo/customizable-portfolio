import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCamera, FaCode, FaHiking, FaChess, FaPlus, FaChevronDown } from 'react-icons/fa';
import resumeData from '../data/resume';

const Hobbies: React.FC = () => {
  const getIcon = (iconName: string | undefined) => {
    switch (iconName) {
      case 'book': return <FaBook />;
      case 'camera': return <FaCamera />;
      case 'code': return <FaCode />;
      case 'hiking': return <FaHiking />;
      case 'chess': return <FaChess />;
      default: return <FaPlus />;
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const checkForOverflow = () => {
      if (container.scrollHeight > container.clientHeight) {
        container.classList.add('has-overflow');
      } else {
        container.classList.remove('has-overflow');
      }
    };
    
    checkForOverflow();
    window.addEventListener('resize', checkForOverflow);
    
    // Hide scroll indicator when scrolled to bottom
    const handleScroll = () => {
      if (container.scrollHeight - container.scrollTop <= container.clientHeight + 10) {
        container.querySelector('.scroll-indicator')?.classList.add('hidden');
      } else {
        container.querySelector('.scroll-indicator')?.classList.remove('hidden');
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkForOverflow);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <section id="hobbies" className="section" style={{ padding: '0.75rem', height: '100%' }}>
      <div className="container">
        <h2 className="section-title">Hobbies & Interests</h2>

        <div 
          ref={scrollContainerRef}
          className="scrollable-container"
          style={{ maxHeight: '150px' }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
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
                  backgroundColor: 'var(--background-lighter)',
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
            color: 'var(--primary)',
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
                    backgroundColor: 'rgba(16, 185, 129, 0.2)', 
                    border: '1px solid var(--primary)',
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.4rem'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <div className="scroll-indicator">
            <FaChevronDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;