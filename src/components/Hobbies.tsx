import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resume';
import { FaMusic, FaImage, FaCode, FaLaptop } from 'react-icons/fa';

interface HobbiesProps {
  id: string;
  isActive: boolean;
  isPrevious: boolean;
  initialPosition: string;
  targetPosition: string;
  onClick: () => void;
}

const Hobbies: React.FC<HobbiesProps> = ({ 
  id, 
  isActive, 
  isPrevious, 
  initialPosition, 
  targetPosition, 
  onClick 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const checkForOverflow = () => {
      const hasContentOverflow = container.scrollHeight > container.clientHeight + 5;
      setHasOverflow(hasContentOverflow);
    };
    
    const checkForMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkForOverflow();
    checkForMobile();
    window.addEventListener('resize', checkForOverflow);
    window.addEventListener('resize', checkForMobile);
    
    return () => {
      window.removeEventListener('resize', checkForOverflow);
      window.removeEventListener('resize', checkForMobile);
    };
  }, [isActive]); // Re-run when active state changes

  // Function to get icon component based on icon name
  const getIcon = (iconName: string | undefined) => {
    if (!iconName) return null;
    
    switch (iconName) {
      case 'music': return <FaMusic />;
      case 'image': return <FaImage />;
      case 'code': return <FaCode />;
      case 'computer': return <FaLaptop />;
      default: return null;
    }
  };

  // Function to render skill level with emoji indicators
  const renderSkillLevel = (level: number, maxLevel: number = 5, emoji: string) => {
    const indicators = [];
    for (let i = 1; i <= maxLevel; i++) {
      indicators.push(
        <span 
          key={i} 
          style={{ 
            opacity: i <= level ? 1 : 0.25,
            marginLeft: '2px',
            filter: i <= level ? 'none' : 'grayscale(100%)'
          }}
        >
          {emoji}
        </span>
      );
    }
    return indicators;
  };

  return (
    <motion.section 
      id="hobbies" 
      className={`section section-hobbies ${isActive ? 'section-active' : ''}`}
      onClick={isMobile ? undefined : onClick}
      layout
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
        duration: 0.4
      }}
      style={{ 
        gridArea: targetPosition,
        padding: '0.7rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: isMobile ? 'default' : 'pointer',
        overflow: 'hidden',
        height: '100%', // Match height of other components
        width: '100%', // Match width of other components
        transition: 'all 0.3s ease'
      }}
      initial={false}
      animate={{
        scale: isMobile ? 1 : (isActive ? 1.02 : 1),
        zIndex: isActive ? 2 : 1,
        boxShadow: isActive && !isMobile 
          ? '0 16px 48px 0 rgba(16,185,129,0.22), 0 2px 16px 0 rgba(0,0,0,0.13)' 
          : '0 2px 4px rgba(0, 0, 0, 0.2)'
      }}
      whileHover={isMobile ? {} : { 
        boxShadow: isActive 
          ? '0 16px 48px 0 rgba(16,185,129,0.22), 0 2px 16px 0 rgba(0,0,0,0.13)' 
          : '0 4px 8px rgba(0, 0, 0, 0.15)' 
      }}
    >
      <h2 className="section-title" style={{ 
        marginBottom: '0.8rem', 
        fontSize: isActive && !isMobile ? '1.1rem' : '1rem',
        transition: 'all 0.3s ease'
      }}>
        Hobbies & Other Skills
      </h2>
      <div 
        ref={scrollContainerRef}
        className={`scrollable-container ${!hasOverflow ? 'no-scroll' : ''}`}
        style={{ 
          minHeight: isActive && !isMobile ? '250px' : '100%',
          maxHeight: isActive && !isMobile ? '500px' : '100%',
          overflowY: 'auto', 
          height: 'auto',
          flex: 1, // Take up remaining space
          transition: 'all 0.3s ease'
        }}
      >
        {/* Interests section */}
        <div style={{ marginBottom: '1.2rem' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.8rem',
            justifyContent: 'flex-start'
          }}>
            {resumeData.hobbies.map((hobby, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                style={{
                  padding: isActive && !isMobile ? '0.6rem 0.8rem' : '0.5rem 0.7rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: isActive && !isMobile ? '0.95rem' : '0.85rem',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {hobby.icon && (
                  <span style={{ 
                    fontSize: isActive && !isMobile ? '1.1rem' : '0.9rem', 
                    transition: 'all 0.3s ease' 
                  }}>
                    {getIcon(hobby.icon)}
                  </span>
                )}
                {hobby.name}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Unmentioned skills section */}
        <div>
          {resumeData.unmentiondSkills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              style={{
                padding: '0.7rem',
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
                borderRadius: 'var(--border-radius)',
                fontSize: isActive && !isMobile ? '0.95rem' : '0.8rem',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                marginBottom: '0.7rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ 
                    fontSize: isActive && !isMobile ? '1.25rem' : '1rem', 
                    transition: 'all 0.3s ease' 
                  }}>
                    {skill.emoji}
                  </span>
                  <span>{skill.skill}</span>
                </div>
                <div style={{ 
                  fontSize: isActive && !isMobile ? '0.95rem' : '0.8rem',
                  marginLeft: '0.6rem',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease'
                }}>
                  {renderSkillLevel(skill.level, 5, skill.emoji)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hobbies;