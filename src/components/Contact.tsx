import React from 'react';
import SectionWrapper from './SectionWrapper';
import '../assets/styles/Contact.scss';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="contact">
      <div className="container contact__inner">
        <div>
          <h2 className="section-title">Let&apos;s Build Something Wild</h2>
          <p className="section-subtitle">
            Open to <strong>internships, research collaborations,</strong> and{' '}
            <strong>industry projects</strong> where ML, systems and UX collide.
          </p>
        </div>

        <div className="contact__actions">
          <a href="mailto:aditya.bagayatkar09@gmail.com" className="btn btn--primary">
            Email Me
          </a>
          <a href="https://github.com/AdityaB09" target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-bagayatkar"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
