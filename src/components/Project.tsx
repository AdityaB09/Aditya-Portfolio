import React, { useMemo, useState } from "react";
import Chip from "@mui/material/Chip";
import FadeIn from "./FadeIn";
import "../assets/styles/Project.scss";

type Category = "All" | "Golang" | "Java" | "NLP" | ".NET";

interface ProjectItem {
  title: string;
  link: string;
  description: string;
  category: Exclude<Category, "All">;
  tech: string[];
}

const projects: ProjectItem[] = [
  // Golang
  {
    title: "LawLens-G – Contract Risk Heatmaps",
    link: "https://github.com/AdityaB09/LawLens-G",
    description:
      "Go + TypeScript platform that ingests contracts, runs NLP-based clause analysis, and surfaces risk heatmaps and scores for legal teams.",
    category: "Golang",
    tech: ["Go", "TypeScript", "PostgreSQL", "RAG", "Docker"],
  },
  {
    title: "AdherenceLens-G – Medication Adherence Coach",
    link: "https://github.com/AdityaB09/AdherenceLens-G",
    description:
      "Golang backend and modern UI that track medication schedules, adherence streaks, and generate risk insights.",
    category: "Golang",
    tech: ["Go", "REST API", "React/TS", "Postgres"],
  },
  {
    title: "MedEncounter-G – Clinical Encounter Timeline API",
    link: "https://github.com/AdityaB09/MedEncounter-G",
    description:
      "API that structures raw encounter notes into patient timelines powering a clinical front-end.",
    category: "Golang",
    tech: ["Go", "Healthcare", "TypeScript"],
  },

  // Java
  {
    title: "CodeSage – Java Code Reasoning & Bug Explainer",
    link: "https://github.com/AdityaB09/CodeSage",
    description:
      "Java analysis engine plus UI that parses Java code and surfaces bug explanations and refactor hints.",
    category: "Java",
    tech: ["Java", "Static Analysis", "REST", "TypeScript"],
  },
  {
    title: "TrialBridge-J – Clinical Trial Matcher",
    link: "https://github.com/AdityaB09/TrialBridge-J",
    description:
      "Maps patient profiles to clinical trial eligibility criteria with match scores and explanations.",
    category: "Java",
    tech: ["Java", "Spring", "Healthcare"],
  },
  {
    title: "WardViz-J – Patient Ward Timeline Visualizer",
    link: "https://github.com/AdityaB09/WardViz-J",
    description:
      "Visualizes patient journeys through wards with event timelines and drill-down views.",
    category: "Java",
    tech: ["Java", "Visualization"],
  },

  // NLP / RAG
  {
    title: "LLM Probing Lab – Multi-Task Layer Probing",
    link: "https://github.com/AdityaB09/LLM_Probing",
    description:
      "End-to-end lab that probes transformer layers on POS, NER, sarcasm, sentiment, Amazon reviews, hate speech, and fake news with strong baselines.",
    category: "NLP",
    tech: ["Python", "Transformers", "PyTorch", "FastAPI/Flask"],
  },
  {
    title: "IR LLM Probing – Web Dashboard",
    link: "https://github.com/AdityaB09/IR_LLM_Probing_Flask",
    description:
      "Flask + React dashboard to launch probes, visualize metrics, and compare models on information retrieval tasks.",
    category: "NLP",
    tech: ["Flask", "React", "Docker"],
  },
  {
    title: "RAGCourseLab / RAG-Scope – Lecture RAG Explorer",
    link: "https://github.com/AdityaB09/RAG-NLP-424-Project",
    description:
      "RAG system over NLP course slides and notes with retrieval mode toggles and cited-answer view.",
    category: "NLP",
    tech: ["Python", "RAG", "Vector Search"],
  },
  {
    title: "Graph-RAG News Explorer",
    link: "https://github.com/AdityaB09/graph-rag-news-explorer",
    description:
      "Explores news as a knowledge graph and uses graph-aware retrieval for question answering.",
    category: "NLP",
    tech: ["Python", "NetworkX", "RAG"],
  },
  {
    title: "BubblePanel & Manga2Pod",
    link: "https://github.com/AdityaB09/BubblePanel",
    description:
      "Manga panel detector + OCR + TTS pipeline with a web UI to upload pages and generate audio narratives.",
    category: "NLP",
    tech: ["Python", "Vision", "OCR", "TTS"],
  },

  // .NET / C#
  {
    title: "InsightVerse – Clinical Insight Dashboard (.NET)",
    link: "https://github.com/AdityaB09/InsightVerse",
    description:
      "C#/.NET powered dashboard aggregating clinical data into timelines, risk ribbons, and interactive charts.",
    category: ".NET",
    tech: ["C#", ".NET", "Healthcare", "Docker"],
  },
  {
    title: "NeuroPulse – Neurology Risk Explorer",
    link: "https://github.com/AdityaB09/NeuroPulse",
    description:
      "Explores neurology-related risk factors using interactive panels backed by C# services.",
    category: ".NET",
    tech: ["C#", ".NET"],
  },
  {
    title: "Causal-Atlas – Causal Graph Explorer",
    link: "https://github.com/AdityaB09/Causal-Atlas",
    description:
      "Tooling for building and interacting with causal diagrams and running what-if experiments.",
    category: ".NET",
    tech: ["C#", "Causal Inference"],
  },
  {
    title: "TraceLens – Telemetry & Trace Viewer",
    link: "https://github.com/AdityaB09/TraceLens",
    description:
      "C# telemetry viewer for exploring traces, logs, and performance metrics.",
    category: ".NET",
    tech: ["C#", ".NET", "Monitoring"],
  },
];

const filters: Category[] = ["All", "Golang", "Java", "NLP", ".NET"];

function Project() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-filters">
        {filters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            clickable
            className={
              filter === activeFilter ? "filter-chip active" : "filter-chip"
            }
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      <FadeIn className="projects-grid" childClassName="project">
        {visibleProjects.map((project) => (
          <div key={project.title} className="project-card-inner">
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p className="project-category">{project.category}</p>
            <p>{project.description}</p>
            <div className="project-tech-list">
              {project.tech.map((t) => (
                <span key={t} className="project-tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </FadeIn>
    </div>
  );
}

export default Project;
