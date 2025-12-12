import React from 'react';
import SectionWrapper from './SectionWrapper';
import '../assets/styles/Publications.scss';

const Publications: React.FC = () => {
  return (
    <SectionWrapper id="publications" className="publications">
      <div className="container">
        <h2 className="section-title">Publications & Research</h2>
        <p className="section-subtitle">
          I love turning experiments into <strong>peer-reviewed work</strong> – and building tools
          that make those experiments easier to understand.
        </p>

        <div className="publications__grid">
          <article className="publications__card">
            <p className="publications__tag">IEEE · 2024</p>
            <h3>
              Survey Paper on Machine Learning and Deep Learning Driven Applications using Bayesian
              Techniques
            </h3>
            <p>
              Published at the 2024 IEEE 9th International Conference for Convergence in Technology
              (I2CT). Explores Bayesian approaches across classical ML and deep learning
              applications.
            </p>
            <p className="publications__meta">ISBN: 979-8-3503-9448-1</p>
          </article>

          <article className="publications__card">
            <p className="publications__tag">Security · 2024</p>
            <h3>Guardian: Defending Against Phishing, DDoS, and Ransomware</h3>
            <p>
              Proposed a multi-layer defence framework with browser-based phishing detection,
              ML-driven DDoS classification, and ransomware mitigation strategies.
            </p>
            <p className="publications__meta">
              Presented at the International Conference track on Artificial Intelligence Horizons
              2024.
            </p>
          </article>

          <article className="publications__card">
            <p className="publications__tag">NLP · Survey</p>
            <h3>Navigating Domain Boundaries: Cross-Domain Sentiment Analysis</h3>
            <p>
              Survey-driven study on transferring sentiment models across domains – the conceptual
              foundation behind my Cross-Domain Review Intelligence project.
            </p>
          </article>

          <article className="publications__card publications__card--highlight">
            <p className="publications__tag">In Progress</p>
            <h3>Brain-Tumor MRI Classification with Spiking Neural Networks</h3>
            <p>
              Benchmarking SNNs against CNNs on Figshare/SARTAJ/Br35H MRI datasets – focusing on
              accuracy vs energy, spike statistics, and deployment implications.
            </p>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Publications;
