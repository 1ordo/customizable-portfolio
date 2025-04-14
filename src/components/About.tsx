import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ padding: '1.25rem', height: '100%' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          style={{ lineHeight: 1.6, fontSize: '0.9rem' }}
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
            gap: '0.5rem',
            marginTop: '1rem' 
          }}>
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--border-radius)',
              padding: '0.5rem 0.75rem',
              fontSize: '0.85rem',
              flex: 1
            }}>
              <h3 style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>
                AI Engineer - Fullstack Developer
              </h3>
              <p style={{ fontSize: '0.8rem' }}>
                Developing cutting-edge AI solutions with a focus on practical applications
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--border-radius)',
              padding: '0.5rem 0.75rem',
              fontSize: '0.85rem',
              flex: 1
            }}>
              <h3 style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>
                Backend Developer
              </h3>
              <p style={{ fontSize: '0.8rem' }}>
                Building reliable, scalable systems with modern architecture patterns
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;