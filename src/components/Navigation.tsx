import React, { useEffect, useState } from 'react';
import '../assets/styles/Navigation.scss';

const sections = [
  { id: 'top', label: 'Home' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'history', label: 'History' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Research' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [active, setActive] = useState<string>('top');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);

      let current = 'top';
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = section.id;
      });
      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <div className="nav__brand" onClick={() => scrollTo('top')}>
          <span className="nav__logo">AB</span>
          <span className="nav__name">Aditya Bagayatkar</span>
        </div>
        <nav className="nav__menu">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`nav__link ${active === section.id ? 'nav__link--active' : ''}`}
              onClick={() => scrollTo(section.id)}
            >
              <span>{section.label}</span>
              <span className="nav__link-indicator" />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
