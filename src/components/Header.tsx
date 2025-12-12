import React from 'react';
import SectionWrapper from './SectionWrapper';
import '../assets/styles/Header.scss';

const Header: React.FC = () => {
  return (
    <SectionWrapper id="hero" className="hero">
      <div className="hero__wave" />

      <div className="hero__content container">
        {/* LEFT SIDE */}
        <div className="hero__left">

          {/* TOP TAGS */}
          <div className="hero__chip-row">
            <span className="hero__chip hero__chip--primary">MS CS @ UIC</span>
            <span className="hero__chip hero__chip--accent">ML • RAG • Full-Stack</span>
          </div>

          {/* TITLE */}
          <h1 className="hero__title">
           Hi, I’m  <span className="hero__name">Aditya Bagayatkar </span>
            <br />
            I build AI-powered tools that feel simple, intuitive, and genuinely useful.
          </h1>

          {/* SUBTITLE */}
          <p className="hero__subtitle">
            I work at the intersection of <strong>RAG systems</strong>, 
            <strong> LLM probing</strong>, and <strong>full-stack engineering</strong>.  
            I enjoy turning complex ML workflows into clean dashboards and explainable insights.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero__cta-row">
            <a
              href="https://github.com/AdityaB09"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              View GitHub Galaxy
            </a>

            <a
              href="mailto:aditya.bagayatkar09@gmail.com"
              className="btn btn--ghost"
            >
              Let’s Collaborate
            </a>
          </div>

          {/* PROJECT TAGS */}
          <div className="hero__tags">
            <span>RAG Course Lab</span>
            <span>LawLens-G (Go)</span>
            <span>WardViz-J (Java)</span>
            <span>NeuroPulse (.NET)</span>
            <span>Graph-RAG</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero__right">

          {/* ORB */}
          <div className="hero__orb">
            <div className="hero__initials">AB</div>
          </div>

          {/* CURRENT FOCUS CARD */}
          <div className="hero__status-card">
            <p className="hero__status-title">Current Focus</p>
            <ul>
              <li>SNN-based medical imaging models</li>
              <li>RAG dashboards with NLP insights</li>
              <li>LLM probing & explainability tools</li>
              <li>Secure storage visualizations (ORAM)</li>
            </ul>
          </div>

          {/* FLOATING CARD */}
          <div className="hero__floating-card hero__floating-card--bottom">
            <p>
              I specialize in building production-style ML systems that are simple and intuitive.
            </p>

            <p className="hero__floating-meta">
              Python · Go · Java · C# · TypeScript/React
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Header;
