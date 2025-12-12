import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FadeIn from "./FadeIn";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="top">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Replace src with your own avatar if you have it */}
          <img
            src="https://avatars.githubusercontent.com/u/00000000"
            alt="Aditya Bagayatkar"
          />
        </div>

        <FadeIn className="content">
          <div className="social_icons">
            <a href="https://github.com/AdityaB09" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            {/* TODO: replace with your real LinkedIn URL */}
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Aditya Bagayatkar</h1>
          <p>MS CS @ UIC · Full-Stack · RAG / NLP · DevOps</p>

          <p className="hero-tagline">
            I build recruiter-ready, data-heavy dashboards and ML/NLP systems —
            from Go / Java backends and .NET analytics tools to graph-RAG
            explorers and spiking-neural-network research.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AdityaB09" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Main;
