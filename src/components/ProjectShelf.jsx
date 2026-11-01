import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { allProjects, profile } from '../data/content';

const SHELF_ORDER = [
  'meow',
  'paws',
  'lineage',
  'butterfly-habitat',
  'shiweitang',
  'west-juye',
  'landfill-park',
];

const SHORT_LABEL = {
  meow: 'MEOW CAMPUS',
  lineage: 'LINEAGE',
  paws: 'PAWS & POLICY',
  'butterfly-habitat': 'BUTTERFLY HABITAT',
  shiweitang: 'SHIWEITANG',
  'west-juye': 'WEST JUYE RIVER',
  'landfill-park': 'LANDFILL PARK',
};

const ordered = [
  ...SHELF_ORDER.map((id) => allProjects.find((project) => project.id === id)).filter(Boolean),
  ...allProjects.filter((project) => !SHELF_ORDER.includes(project.id)),
];

const shelfYear = (project) => {
  if (project.id === 'lineage') return '2025';
  const years = String(project.year).match(/20\d{2}/g);
  return years ? years[years.length - 1] : '2026';
};

const INITIAL_INDEX = Math.max(
  ordered.findIndex((project) => project.id === 'meow'),
  0,
);

const COPIES = 3;
const TOTAL = ordered.length;

const smoothB = (r) => {
  if (Math.abs(r) >= 1) return Math.sign(r) * 0.5;
  return (r + Math.sin(Math.PI * r) / Math.PI) / 2;
};

const smoothstep = (value) => {
  const x = Math.min(1, Math.max(0, value));
  return x * x * (3 - 2 * x);
};

const getDims = () => {
  if (typeof window === 'undefined') {
    return { H: 400, ws: 67.6, d: 210.7, gap: 12 };
  }
  const width = window.innerWidth;
  const height = window.innerHeight;
  const H =
    width <= 767
      ? Math.max(210, Math.min(width * 0.6, height * 0.4))
      : Math.max(230, Math.min(height * 0.46, width * 0.31, height - 485));
  return {
    H,
    ws: (H * 142) / 840,
    d: (H * 474) / 900,
    gap: H * 0.03,
  };
};

export default function ProjectShelf({ onOpen }) {
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);
  const [dims, setDims] = useState(getDims);
  const shelfRef = useRef(null);

  useEffect(() => {
    const onResize = () => setDims(getDims());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const go = useCallback(
    (direction) => {
      setActiveIndex((index) => (index + direction + TOTAL) % TOTAL);
    },
    [],
  );

  const activeProject = ordered[activeIndex];
  const activeVirtual = TOTAL + activeIndex;

  const boxes = useMemo(
    () =>
      Array.from({ length: COPIES }).flatMap((_, copy) =>
        ordered.map((project, projectIndex) => ({
          key: `${copy}-${project.id}`,
          project,
          projectIndex,
          copy,
          virtual: copy * TOTAL + projectIndex,
          primary: copy === 1,
        })),
      ),
    [],
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (document.body.classList.contains('is-modal-open')) return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('input, textarea, select')) return;
      if (window.scrollY > (shelfRef.current?.offsetHeight ?? window.innerHeight) * 0.72) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        go(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        go(1);
      } else if (event.key === 'Enter' && !target?.closest('button, a')) {
        event.preventDefault();
        onOpen(activeProject);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject, go, onOpen]);

  const openProject = (project) => {
    if (project) onOpen(project);
  };

  return (
    <section
      id="top"
      className="project-shelf"
      ref={shelfRef}
      style={{ '--H': `${dims.H}px` }}
      aria-label="项目导览"
    >
      <div className="shelf-kicker" aria-hidden="true">
        <span>PROJECT INDEX / 项目导览</span>
        <span>SELECTED WORK · {String(TOTAL).padStart(2, '0')} PROJECTS</span>
      </div>

      <div className="shelf-body">
        <div
          className="shelf-stage-wrap"
          style={{
            '--ws': `${dims.ws}px`,
            '--d': `${dims.d}px`,
            '--gap': `${dims.gap}px`,
            height: `${dims.H + 84}px`,
          }}
        >
          <div className="shelf-ledge" aria-hidden="true" />
          <div className="shelf-stage">
            {boxes.map((box) => {
              const relative = box.virtual - activeVirtual;
              const x =
                relative * (dims.ws + dims.gap) +
                (dims.d - dims.ws + 1.6 * dims.gap) * smoothB(relative);
              const openness = smoothstep(Math.max(0, 1 - Math.abs(relative)));
              const isActive = box.projectIndex === activeIndex && box.copy === 1;
              const y = -openness * dims.H * 0.025;
              const z = openness * dims.H * 0.2;
              const transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${
                -4.5 * openness
              }deg) rotateY(${-90 * openness}deg)`;

              return (
                <div
                  className={`tape ${isActive ? 'is-active' : ''}`}
                  key={box.key}
                  style={{
                    transform,
                    zIndex: Math.round(120 - Math.abs(relative) * 4),
                    '--openness': openness,
                  }}
                  aria-hidden={box.primary ? undefined : 'true'}
                >
                  <button
                    type="button"
                    className="tape-spine"
                    onClick={() => setActiveIndex(box.projectIndex)}
                    tabIndex={box.primary ? 0 : -1}
                    aria-label={`选择项目：${box.project.title}`}
                  >
                    <span className="spine-index">{box.project.index}</span>
                    <span className="spine-title">
                      {SHORT_LABEL[box.project.id] ?? box.project.english}
                    </span>
                    <span className="spine-meta">
                      {shelfYear(box.project)} / {box.project.category.split(' · ')[0]}
                    </span>
                    <span className="spine-brand">XU YUNLIN</span>
                  </button>

                  <button
                    type="button"
                    className="tape-cover"
                    onClick={() => {
                      if (isActive) openProject(box.project);
                      else setActiveIndex(box.projectIndex);
                    }}
                    tabIndex={box.primary && isActive ? 0 : -1}
                    aria-label={
                      isActive ? `打开项目：${box.project.title}` : `选择项目：${box.project.title}`
                    }
                    data-cursor={isActive ? 'VIEW' : undefined}
                    data-cursor-label={isActive ? 'VIEW' : undefined}
                  >
                    <span className="cover-media">
                      <img
                        src={box.project.image}
                        alt={box.project.imageAlt}
                        style={{ objectPosition: box.project.imagePosition ?? 'center' }}
                        draggable="false"
                      />
                    </span>
                    <span className="cover-body">
                      <span className="cover-case">
                        CASE {box.project.index} / {shelfYear(box.project)}
                      </span>
                      <span className="cover-title">{box.project.title}</span>
                      <span className="cover-category">
                        {box.project.category.split(' · ')[0]} · {box.project.year}
                      </span>
                      <span className="cover-cta">
                        <span>OPEN PROJECT</span>
                        <span aria-hidden="true">↗</span>
                      </span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
          <p className="shelf-stage-hint">点击书脊切换 · 点击封面查看项目</p>
        </div>

        <div className="shelf-caption-area">
          <button
            type="button"
            className="shelf-arrow"
            onClick={() => go(-1)}
            aria-label="上一个项目"
          >
            <svg viewBox="0 0 24 12" aria-hidden="true">
              <path d="M8 1 3 6l5 5M3 6h18" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>

          <div className="shelf-caption" aria-live="polite">
            <div className="shelf-caption-mask" key={activeProject.id}>
              <h2>{activeProject.title}</h2>
              <p className="shelf-caption-en">
                {activeProject.english}
                <span>/</span>
                {activeProject.category}
              </p>
              <p className="shelf-caption-year">{activeProject.year} · HONG KONG / FOSHAN</p>
            </div>
            <button
              type="button"
              className="shelf-view"
              onClick={() => openProject(activeProject)}
              data-cursor="VIEW"
              data-cursor-label="VIEW"
            >
              VIEW PROJECT / 查看项目
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          <button
            type="button"
            className="shelf-arrow"
            onClick={() => go(1)}
            aria-label="下一个项目"
          >
            <svg viewBox="0 0 24 12" aria-hidden="true">
              <path d="M16 1l5 5-5 5M21 6H3" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>

      <footer className="shelf-footer">
        <span>© 2026 XU YUNLIN. ALL RIGHTS RESERVED.</span>
        <span className="shelf-footer-center">ARCHIVE 2023—2026</span>
        <a href={`mailto:${profile.email}`}>EMAIL</a>
      </footer>
    </section>
  );
}
