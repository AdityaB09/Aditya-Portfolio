import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Expertise from './components/Expertise';
import History from './components/History';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import './assets/styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app-root" id="top">
      <Navigation />
      <main>
        <Header />
        <Expertise />
        <History />
        <Projects />
        <Publications />
        <Certifications />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Aditya Bagayatkar • Built with React & TypeScript</p>
      </footer>
    </div>
  );
};

export default App;
