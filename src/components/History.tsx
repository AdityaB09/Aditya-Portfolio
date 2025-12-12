import React from 'react';
import SectionWrapper from './SectionWrapper';
import '../assets/styles/History.scss';

interface TimelineItem {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

const timeline: TimelineItem[] = [
  {
    title: 'MS in Computer Science',
    org: 'University of Illinois Chicago',
    location: 'Chicago, IL, USA',
    period: 'Aug 2024 – Present',
    bullets: [
      'Focus: NLP, IR, Spiking Neural Networks, Privacy-Preserving Systems',
      'Projects: RAG Course Lab, LLM Probing Lab, Graph-RAG News Explorer',
    ],
  },
  {
    title: 'B.E. Information Technology (Honors in AI & ML)',
    org: 'University of Mumbai',
    location: 'Mumbai, India',
    period: 'Aug 2020 – May 2024',
    bullets: [
      'Graduated with strong foundation in ML, systems, and full-stack development',
      'Built multiple production-grade academic projects across web, ML, and security',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    org: 'CPulser Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'Dec 2022 – Jan 2023',
    bullets: [
      'Engineered Django & MERN based platforms with secure payment integration',
      'Set up CI/CD, Dockerised services, and contributed to architectural decisions',
    ],
  },
  {
    title: 'Technical Team Member & DevOps Mentor',
    org: 'Quest IT VESIT',
    location: 'Mumbai, India',
    period: '2022 – 2023',
    bullets: [
      'Conducted workshops on Docker, Kubernetes, AWS & Jenkins for juniors',
      'Designed hands-on labs and documented DevOps best practices',
    ],
  },
];

const History: React.FC = () => {
  return (
    <SectionWrapper id="history" className="history">
      <div className="container">
        <h2 className="section-title">Career & Education Timeline</h2>
        <p className="section-subtitle">
          A quick snapshot of how I grew from <strong>undergrad builder</strong> to{' '}
          <strong>graduate researcher & systems engineer</strong>.
        </p>

        <div className="history__timeline">
          {timeline.map((item, index) => (
            <article key={item.title} className="history__item">
              <div className="history__marker">
                <span className="history__dot" />
                <span className="history__line" />
              </div>
              <div className="history__content">
                <p className="history__period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="history__org">
                  {item.org} · {item.location}
                </p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="history__index">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default History;
