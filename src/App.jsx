import { useCallback, useState } from 'react';
import Header from './components/Header';
import ProjectShelf from './components/ProjectShelf';
import Ticker from './components/Ticker';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Cursor from './components/Cursor';
import { allProjects, navItems } from './data/content';
import { useReveal } from './hooks/useReveal';
import { useScrollSpy } from './hooks/useScrollSpy';

const NAV_IDS = navItems.map((item) => item.id);

if (import.meta.env.MODE === 'snapshot') {
  document.documentElement.classList.add('is-snapshot');
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const activeSection = useScrollSpy(NAV_IDS);

  useReveal();

  const closeProject = useCallback(() => setActiveProject(null), []);

  const openNextProject = useCallback(() => {
    setActiveProject((current) => {
      if (!current) return current;
      const currentIndex = allProjects.findIndex((project) => project.id === current.id);
      return allProjects[(currentIndex + 1) % allProjects.length];
    });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <Cursor />
      <Header activeSection={activeSection} />

      <main id="main-content">
        <ProjectShelf onOpen={setActiveProject} />
        <Ticker />
        <About />
        <Projects onOpen={setActiveProject} />
        <Contact />
      </main>

      <ProjectModal
        project={activeProject}
        onClose={closeProject}
        onNext={openNextProject}
      />
      <div className="page-noise" aria-hidden="true" />
    </>
  );
}
