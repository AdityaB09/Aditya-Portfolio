import React from 'react';
import SectionWrapper from './SectionWrapper';
import '../assets/styles/Certifications.scss';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" className="certs">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Proof that I enjoy structured learning almost as much as building chaotic side-projects.
        </p>

        <div className="certs__grid">
          <article className="certs__card">
            <h3>Core Engineering</h3>
            <ul>
              <li>Java Programming – Oracle</li>
              <li>Modern React with Redux</li>
              <li>The Complete Node.js Developer Course</li>
              <li>Flutter Development</li>
            </ul>
          </article>

          <article className="certs__card">
            <h3>AI & Data</h3>
            <ul>
              <li>Machine Learning with Python</li>
              <li>Generative AI Specialisation</li>
              <li>Data Analytics</li>
              <li>Scala & Functional Programming</li>
            </ul>
          </article>

          <article className="certs__card">
            <h3>Cloud & DevOps</h3>
            <ul>
              <li>AWS Lambda & Serverless</li>
              <li>Docker Orchestration</li>
              <li>DevOps Workshops (Docker, K8s, Jenkins, GitHub)</li>
            </ul>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
