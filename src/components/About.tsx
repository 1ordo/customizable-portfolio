import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface AboutProps {
  id: string;
  isActive: boolean;
  isPrevious: boolean;
  initialPosition: string;
  targetPosition: string;
  onClick: () => void;
}

const About: React.FC<AboutProps> = ({ 
  id, 
  isActive, 
  isPrevious, 
  initialPosition, 
  targetPosition, 
  onClick 
}) => {
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
  }, [isActive]);

  const handleScrollIndicatorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const container = scrollContainerRef.current;
    if (!container) return;
    if (isAtBottom) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const newPosition = container.scrollTop + 60;
      container.scrollTo({ top: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="about" 
      className={`section section-about ${isActive ? 'section-active' : ''}`}
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
        position: 'relative',
        cursor: 'pointer',
      }}
      initial={false}
      animate={{
        scale: isActive ? 1.02 : 1,
        zIndex: isActive ? 2 : 1,
        boxShadow: isActive 
          ? '0 16px 48px 0 rgba(16,185,129,0.22), 0 2px 16px 0 rgba(0,0,0,0.13)' 
          : '0 2px 4px rgba(0, 0, 0, 0.2)'
      }}
      whileHover={{ 
        boxShadow: isActive 
          ? '0 16px 48px 0 rgba(16,185,129,0.22), 0 2px 16px 0 rgba(0,0,0,0.13)' 
          : '0 4px 8px rgba(0, 0, 0, 0.15)' 
      }}
    >
      <h2 className="section-title" style={{ marginBottom: '0.7rem' }}>About Me</h2>
      
      <div 
        ref={scrollContainerRef}
        className="scrollable-container"
        style={{ 
          overflowY: !isActive ? 'auto' : 'visible',
          height: 'auto',
          flex: 1,
          paddingRight: !isActive ? '0.4rem' : '0',
          minHeight: isActive ? '200px' : '90px',
          maxHeight: isActive ? '500px' : '220px',
          paddingBottom: hasOverflow ? '28px' : '0',
          transition: 'all 0.3s ease'
        }}
      >
        <motion.div
          layout
          style={{ lineHeight: 1.6, fontSize: isActive ? '1rem' : '0.9rem', transition: 'all 0.3s ease' }}
        >
          <p style={{ marginBottom: '0.75rem' }}>
            I am a passionate AI Engineer with expertise in developing intelligent systems and solutions.
            With a strong foundation in machine learning, deep learning, and software development,
            I create applications that leverage cutting-edge AI technologies.
          </p>
          
          <p style={{ marginBottom: '0.75rem' }}>
            My experience ranges from developing local on-device AI systems to building scalable backend
            architectures. I specialize in creating efficient, ethical, and user-friendly AI solutions.
          </p>
          
          <p>
            My technical skills include Python, TensorFlow, PyTorch, and various backend frameworks. 
            I enjoy tackling complex problems and finding innovative ways to apply AI in real-world scenarios.
            I'm particularly interested in the intersection of AI with ethics and privacy considerations.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.6rem', // Increased spacing
            marginTop: '1rem' 
          }}>
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--border-radius)',
              padding: '0.6rem 0.8rem', // Increased padding
              fontSize: isActive ? '0.95rem' : '0.85rem',
              flex: 1,
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{ fontSize: isActive ? '1rem' : '0.9rem', color: 'var(--accent)', marginBottom: '0.4rem', transition: 'all 0.3s ease' }}>
                AI Engineer - Fullstack Developer
              </h3>
              <p style={{ fontSize: isActive ? '0.9rem' : '0.8rem', transition: 'all 0.3s ease' }}>
                Developing cutting-edge AI solutions with a focus on practical applications
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--border-radius)',
              padding: '0.6rem 0.8rem', // Increased padding
              fontSize: isActive ? '0.95rem' : '0.85rem',
              flex: 1,
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{ fontSize: isActive ? '1rem' : '0.9rem', color: 'var(--accent)', marginBottom: '0.4rem', transition: 'all 0.3s ease' }}>
                Backend Developer
              </h3>
              <p style={{ fontSize: isActive ? '0.9rem' : '0.8rem', transition: 'all 0.3s ease' }}>
                Building reliable, scalable systems with modern architecture patterns
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Modern scroll indicator */}
      {hasOverflow && (
        <div className="scroll-indicator" onClick={handleScrollIndicatorClick} style={{ cursor: 'pointer' }}>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
          >
            {isAtBottom ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default About;