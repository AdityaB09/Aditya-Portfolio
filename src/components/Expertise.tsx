import React from 'react';
import SectionWrapper from './SectionWrapper';
import '../assets/styles/Expertise.scss';

const Expertise: React.FC = () => {
  return (
    <SectionWrapper id="expertise" className="expertise">
      <div className="container">
        <h2 className="section-title">Expertise</h2>
        <p className="section-subtitle">
          From React dashboards to ORAMs on AWS, I enjoy building systems that are{" "}
          <strong>useful, explainable, and deployable.</strong>
        </p>

        <div className="expertise__grid">
          <article className="expertise__card">
            <h3>Full-Stack & Cloud-Native</h3>
            <p>
              Production-ready backends & delightful frontends –
              Flask, Go Fiber, Java Spring, .NET, React/Next, Docker & Render/Netlify deployments.
            </p>
            <div className="expertise__chips">
              <span>Go / Java / C# / Python</span>
              <span>React / TypeScript</span>
              <span>Docker & Compose</span>
              <span>AWS EC2 / S3</span>
            </div>
          </article>

          <article className="expertise__card">
            <h3>ML, NLP & LLM Systems</h3>
            <p>
              LLM probing, RAG architectures, graph-RAG news explorer, cross-domain
              sentiment analysis, and spiking neural networks for brain-tumor detection.
            </p>
            <div className="expertise__chips">
              <span>PyTorch / SpikingJelly</span>
              <span>Transformers</span>
              <span>Graph-RAG</span>
              <span>pgvector / FAISS</span>
            </div>
          </article>

          <article className="expertise__card">
            <h3>Security, ORAM & DevOps</h3>
            <p>
              TaoStore ORAM implementation with subtree cache visualisation, phishing & DDoS
              mitigation, and solid DevOps practices with CI/CD, containers and monitoring.
            </p>
            <div className="expertise__chips">
              <span>ORAM / TaoStore</span>
              <span>Cyber-security</span>
              <span>CI/CD · GitHub Actions</span>
              <span>Kubernetes · Terraform</span>
            </div>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Expertise;
