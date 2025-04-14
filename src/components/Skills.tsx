import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import resumeData from '../data/resume';

const Skills: React.FC = () => {
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
  const renderSkillBar = (skillName: string, proficiency: number) => (
    <div style={{ marginBottom: '0.3rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.1rem' }}>
        <span style={{ fontSize: '0.7rem' }}>{skillName}</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--primary)' }}>{proficiency}%</span>
      </div>
      <div style={{ 
        height: '5px', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        borderRadius: '3px',
        overflow: 'hidden'
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
    <section id="skills" className="section" style={{ padding: '0.7rem', minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 className="section-title" style={{ marginBottom: '0.4rem' }}>Skills</h2>
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden', borderRadius: '0.3rem', background: 'var(--card-background)' }}>
        <div
          ref={scrollContainerRef}
          className="scrollable-container"
          style={{ height: '100%', maxHeight: '166px', overflowY: 'auto', paddingRight: '4px', padding: '0.3rem' }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <h3 style={{ marginBottom: '0.3rem', color: 'var(--secondary)', fontSize: '0.8rem' }}>Personal Attributes</h3>
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
                    padding: '0.18rem 0.4rem',
                    borderRadius: '0.3rem',
                    border: '1px solid var(--primary)',
                    fontSize: '0.65rem',
                    fontWeight: 500
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
                <h3 style={{ marginBottom: '0.2rem', color: 'var(--text)', fontSize: '0.8rem' }}>{skillCategory.category}</h3>
                {skillCategory.category === 'Programming Languages' || skillCategory.category === 'Frameworks' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {skillCategory.items.slice(0, 4).map((skill, skillIndex) => {
                      const proficiency = 95 - (skillIndex * 7);
                      return renderSkillBar(skill, proficiency);
                    })}
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem' }}>
                    {skillCategory.items.slice(0, 6).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="skill-tag"
                        style={{ fontSize: '0.65rem' }}
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
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
            >
              {isAtBottom ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;