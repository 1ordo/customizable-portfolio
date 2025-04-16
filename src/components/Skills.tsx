import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import resumeData from '../data/resume';

interface SkillsProps {
  id: string;
  isActive: boolean;
  isPrevious: boolean;
  initialPosition: string;
  targetPosition: string;
  onClick: () => void;
}

const Skills: React.FC<SkillsProps> = ({ 
  id, 
  isActive, 
  isPrevious, 
  initialPosition, 
  targetPosition, 
  onClick 
}) => {
  const { skills, personalSkills } = resumeData;
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
  }, [isActive]); // Re-run when active state changes

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
  
  const renderSkillBar = (skillName: string, proficiency: number) => (
    <div style={{ marginBottom: '0.3rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.1rem' }}>
        <span style={{ fontSize: isActive ? '0.85rem' : '0.7rem', transition: 'all 0.3s ease' }}>{skillName}</span>
        <span style={{ fontSize: isActive ? '0.85rem' : '0.7rem', color: 'var(--primary)', transition: 'all 0.3s ease' }}>{proficiency}%</span>
      </div>
      <div style={{ 
        height: isActive ? '6px' : '5px', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        borderRadius: '3px',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ 
            height: '100%', 
            backgroundColor: 'var(--primary)',
            borderRadius: '3px'
          }}
        />
      </div>
    </div>
  );

  return (
    <motion.section 
      id="skills" 
      className={`section section-skills ${isActive ? 'section-active' : ''}`}
      onClick={onClick}
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
        justifyContent: 'flex-start', 
        position: 'relative',
        cursor: 'pointer'
      }}
      initial={false}
      animate={{
        scale: isActive ? 1.02 : 1,
        zIndex: isActive ? 2 : 1,
        boxShadow: isActive 
          ? '0 16px 48px 0 rgba(16,185,129,0.22), 0 2px 16px 0 rgba(0,0,0,0.13)' 
          : '0 2px 4px rgba(0, 0, 0, 0.2)'
      }}
    >
      <h2 className="section-title" style={{ marginBottom: '0.4rem' }}>Skills</h2>
      <div style={{ 
        position: 'relative', 
        borderRadius: '0.3rem', 
        background: 'var(--card-background)', 
        minHeight: isActive ? '200px' : '90px', 
        maxHeight: isActive ? '500px' : '180px', 
        height: 'auto', 
        overflow: 'visible', 
        transition: 'all 0.3s ease'
      }}>
        <div
          ref={scrollContainerRef}
          className="scrollable-container"
          style={{ 
            height: '100%', 
            maxHeight: isActive ? '500px' : '166px', 
            overflowY: 'auto', 
            paddingRight: '4px', 
            padding: '0.3rem', 
            paddingBottom: hasOverflow ? '28px' : '0',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <h3 style={{ marginBottom: '0.3rem', color: 'var(--secondary)', fontSize: isActive ? '0.95rem' : '0.8rem', transition: 'all 0.3s ease' }}>Personal Attributes</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}
            >
              {personalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    padding: isActive ? '0.25rem 0.5rem' : '0.18rem 0.4rem',
                    borderRadius: '0.3rem',
                    border: '1px solid var(--primary)',
                    fontSize: isActive ? '0.8rem' : '0.65rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {skills.map((skillCategory, index) => (
              <motion.div 
                key={index}
                variants={item}
                style={{ marginBottom: 0 }}
              >
                <h3 style={{ marginBottom: '0.2rem', color: 'var(--text)', fontSize: isActive ? '0.95rem' : '0.8rem', transition: 'all 0.3s ease' }}>{skillCategory.category}</h3>
                {skillCategory.category === 'Programming Languages' || skillCategory.category === 'Frameworks' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {skillCategory.items.slice(0, 4).map((skill, skillIndex) => {
                      const proficiency = 95 - (skillIndex * 7);
                      return renderSkillBar(skill, proficiency);
                    })}
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem' }}>
                    {skillCategory.items.slice(0, isActive ? 8 : 6).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="skill-tag"
                        style={{ fontSize: isActive ? '0.8rem' : '0.65rem', transition: 'all 0.3s ease' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Modern scroll indicator - only show if has overflow */}
        {hasOverflow && (
          <div className="scroll-indicator" onClick={(e) => {
            e.stopPropagation();
            handleScrollIndicatorClick();
          }} style={{ cursor: 'pointer' }}>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
            >
              {isAtBottom ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;