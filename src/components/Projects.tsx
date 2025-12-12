import React, { useMemo, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import '../assets/styles/Projects.scss';

type Pillar = 'NLP & RAG' | 'Healthcare & Clinical' | 'Security & ORAM' | 'Dashboards & .NET';

interface Project {
  name: string;
  repo: string;
  description: string;
  tech: string[];
  pillar: Pillar;
}

const PROJECTS: Project[] = [
  {
    name: 'RAG Scope · NLP-424 Project',
    repo: 'https://github.com/AdityaB09/RAG-NLP-424-Project',
    description:
      'Full RAG lab for UIC CS421 – compare BM25, dense retrieval and hybrid RAG over NLP lecture PDFs with beautiful dashboards.',
    tech: ['Python', 'FastAPI', 'React', 'Docker', 'pgvector'],
    pillar: 'NLP & RAG',
  },
  {
    name: 'IR LLM Probing Lab',
    repo: 'https://github.com/AdityaB09/IR_LLM_Probing_Flask',
    description:
      'Flask + React lab to probe LLM representations using Amazon Reviews, sarcasm, fake news and hate-speech datasets with rich visual analytics.',
    tech: ['Python', 'Flask', 'Transformers', 'React'],
    pillar: 'NLP & RAG',
  },
  {
    name: 'Graph-RAG News Explorer',
    repo: 'https://github.com/AdityaB09/graph-rag-news-explorer',
    description:
      'Knowledge-graph driven RAG exploration over news articles with interactive graph visualisation and multi-hop question answering.',
    tech: ['Python', 'NetworkX', 'FastAPI', 'React'],
    pillar: 'NLP & RAG',
  },
  {
    name: 'CDRI – Cross-Domain Review Intelligence',
    repo: 'https://github.com/AdityaB09/Cross-Domain-Review-Intelligence',
    description:
      'Cross-domain sentiment engine that learns from one domain (e.g., drugs) and transfers to others (e.g., movies, electronics).',
    tech: ['PyTorch', 'NLP', 'Sklearn'],
    pillar: 'NLP & RAG',
  },
  {
    name: 'MediScope (.NET)',
    repo: 'https://github.com/AdityaB09/MediScope',
    description:
      'C#/.NET interactive dashboard for patient journeys, with timelines, risk ribbons, and drill-down into encounters.',
    tech: ['C#', '.NET', 'Blazor', 'PostgreSQL'],
    pillar: 'Dashboards & .NET',
  },
  {
    name: 'WardViz-J',
    repo: 'https://github.com/AdityaB09/WardViz-J',
    description:
      'Java-based hospital ward visualiser that turns raw EHR events into interactive timelines per patient.',
    tech: ['Java', 'JavaFX', 'PostgreSQL'],
    pillar: 'Healthcare & Clinical',
  },
  {
    name: 'TrialBridge-J',
    repo: 'https://github.com/AdityaB09/TrialBridge-J',
    description:
      'Java clinical-trial matcher that aligns patient trajectories to trial inclusion / exclusion criteria.',
    tech: ['Java', 'NLP', 'Swing'],
    pillar: 'Healthcare & Clinical',
  },
  {
    name: 'NeuroPulse',
    repo: 'https://github.com/AdityaB09/NeuroPulse',
    description:
      'C#/.NET analytics suite to compare CNN vs Spiking Neural Network for brain-tumor MRI classification, including energy metrics.',
    tech: ['C#', '.NET', 'Python', 'SNN'],
    pillar: 'Dashboards & .NET',
  },
  {
    name: 'TaoStore ORAM Visualiser',
    repo: 'https://github.com/AdityaB09/TaoStore-ORAM-Visualization', // adjust to your repo name
    description:
      'Flask + Dash visualiser for TaoStore ORAM: multi-client access, subtree cache evolution, fake vs real paths, and EC2 deployment.',
    tech: ['Python', 'Flask', 'Dash', 'AWS EC2'],
    pillar: 'Security & ORAM',
  },
  {
    name: 'LawLens-G',
    repo: 'https://github.com/AdityaB09/LawLens-G',
    description:
      'Go-based contract risk explorer – uploads PDFs, extracts clauses, scores risk and renders heatmaps over clauses & documents.',
    tech: ['Go', 'Fiber', 'Postgres', 'React'],
    pillar: 'NLP & RAG',
  },
  {
    name: 'AdherenceLens-G',
    repo: 'https://github.com/AdityaB09/AdherenceLens-G',
    description:
      'Go backend that powers an adherence coach for medications, combining schedule analytics with conversational recommendations.',
    tech: ['Go', 'Fiber', 'Postgres', 'React'],
    pillar: 'Healthcare & Clinical',
  },
  {
    name: 'BubblePanel',
    repo: 'https://github.com/AdityaB09/BubblePanel',
    description:
      'Vision system for manga/comic panels with OCR-driven bubble detection and a React frontend for interactive exploration.',
    tech: ['Python', 'OpenCV', 'Tesseract', 'React'],
    pillar: 'NLP & RAG',
  },
];

const PILLARS: Pillar[] = ['NLP & RAG', 'Healthcare & Clinical', 'Security & ORAM', 'Dashboards & .NET'];

const Projects: React.FC = () => {
  const [activePillar, setActivePillar] = useState<Pillar | 'All'>('All');

  const filtered = useMemo(
    () => (activePillar === 'All' ? PROJECTS : PROJECTS.filter((p) => p.pillar === activePillar)),
    [activePillar]
  );

  return (
    <SectionWrapper id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Flagship Projects</h2>
        <p className="section-subtitle">
          A curated set of systems that show my range across{' '}
          <strong>NLP/RAG, healthcare, security, and .NET dashboards.</strong>
        </p>

        <div className="projects__filters">
          <button
            type="button"
            className={`pill ${activePillar === 'All' ? 'pill--active' : ''}`}
            onClick={() => setActivePillar('All')}
          >
            All
          </button>
          {PILLARS.map((pillar) => (
            <button
              key={pillar}
              type="button"
              className={`pill ${activePillar === pillar ? 'pill--active' : ''}`}
              onClick={() => setActivePillar(pillar)}
            >
              {pillar}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <article key={project.name} className="projects__card">
              <div className="projects__glow" />
              <h3>{project.name}</h3>
              <p className="projects__pillar">{project.pillar}</p>
              <p className="projects__description">{project.description}</p>
              <div className="projects__tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="projects__actions">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
