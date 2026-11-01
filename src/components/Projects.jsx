import { useRef, useState } from 'react';
import { projectCategories } from '../data/content';
import { ArrowUpRight, Spark } from './Icons';

const totalProjects = projectCategories.reduce(
  (sum, category) => sum + category.projects.filter((project) => !project.placeholder).length,
  0,
);

function getProjectPreview(project) {
  if (project.id === 'paws') {
    const gallery = project.gallery ?? [];
    const pages = project.pages ?? [];

    return [
      gallery[0] && { ...gallery[0], type: 'gallery', tag: 'IMG 01' },
      pages[3] && { ...pages[3], type: 'page', tag: 'P.05' },
      pages[5] && { ...pages[5], type: 'page', tag: 'P.07' },
      pages[6] && { ...pages[6], type: 'page', tag: 'P.08' },
      gallery[2] && { ...gallery[2], type: 'gallery', tag: 'IMG 02' },
      gallery[3] && { ...gallery[3], type: 'gallery', tag: 'IMG 03' },
    ].filter(Boolean);
  }

  if (project.gallery?.length) {
    return project.gallery.slice(0, 4).map((item, index) => ({
      ...item,
      type: 'gallery',
      tag: `IMG ${String(index + 1).padStart(2, '0')}`,
    }));
  }

  if (project.boards?.length) {
    return project.boards.slice(0, 4).map((item, index) => ({
      ...item,
      type: 'board',
      tag: `BOARD ${String(index + 1).padStart(2, '0')}`,
    }));
  }

  if (project.pages?.length) {
    return project.pages.slice(0, 4).map((item, index) => ({
      ...item,
      type: 'page',
      tag: `PAGE ${String(index + 1).padStart(2, '0')}`,
    }));
  }

  return [];
}

function ProjectCard({ project, isFull, onOpen, delay = 0 }) {
  const mediaSliderRef = useRef(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  if (project.placeholder) {
    return (
      <article
        className="project-card project-card--placeholder is-full"
        data-reveal
        style={{ '--delay': `${delay}ms` }}
        aria-label="待补充项目占位"
      >
        <div className="project-card__placeholder-media" aria-hidden="true">
          <span>PLACEHOLDER / 待补充</span>
          <i />
        </div>
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{project.index}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <div className="project-card__title-wrap">
            <span className="project-card__english">{project.english}</span>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__summary">{project.summary}</p>
          </div>
          <div className="project-card__placeholder-note">
            <span>占位内容</span>
            <p>项目名称、描述、图片与数据待补充。</p>
          </div>
        </div>
      </article>
    );
  }

  const mediaItems = project.screens?.length
    ? [
        ...(project.screens?.slice(0, 6).map((item, index) => ({
          ...item,
          type: 'screen',
          tag: String(index + 1).padStart(2, '0'),
        })) ?? []),
        ...(project.posters?.slice(0, 2).map((item) => ({
          ...item,
          type: 'poster',
          tag: 'POSTER',
        })) ?? []),
        ...(project.handbook?.slice(0, 1).map((item) => ({
          ...item,
          type: 'handbook',
          tag: 'PAGE 01',
        })) ?? []),
        ...(project.merch?.slice(0, 1).map((item) => ({
          ...item,
          type: 'merch',
          tag: 'MERCH',
        })) ?? []),
      ].slice(0, 10)
    : getProjectPreview(project);

  const mediaLabel = project.screens?.length
    ? 'MEDIA / 界面 · 海报 · 手册 · 文创'
    : project.gallery?.length
      ? 'SELECTED IMAGES / 项目图像'
      : 'BOARDS / 图纸 · 分析 · 效果图';

  const handleMediaScroll = () => {
    const slider = mediaSliderRef.current;
    if (!slider || !mediaItems.length) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const ratio = maxScroll > 0 ? slider.scrollLeft / maxScroll : 0;
    setMediaIndex(Math.min(mediaItems.length - 1, Math.round(ratio * (mediaItems.length - 1))));
  };

  const scrollMedia = (direction) => {
    const slider = mediaSliderRef.current;
    if (!slider) return;
    const step = Math.max(160, slider.clientWidth * 0.72);
    slider.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <article
      className={`project-card ${isFull ? 'is-full' : ''}`}
      data-reveal
      style={{ '--delay': `${delay}ms` }}
      aria-labelledby={`project-title-${project.id}`}
    >
      <div className="project-card__media">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          style={{ objectPosition: project.imagePosition || 'center' }}
        />
        <div className="project-card__media-shade" aria-hidden="true" />
        {project.confidential && (
          <span className="project-card__nda">NDA / 部分公开</span>
        )}
        <div className="project-card__corner-label" aria-hidden="true">
          <span>{project.index}</span>
          <span>{project.english}</span>
        </div>
        <div className="project-card__view" aria-hidden="true">
          <span>VIEW</span>
          <ArrowUpRight size={17} />
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.index}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <div className="project-card__title-wrap">
          <span className="project-card__english">{project.english}</span>
          <h3 className="project-card__title" id={`project-title-${project.id}`}>
            {project.titleLead || project.title}
            {project.titleTail && (
              <span className="project-card__title-tail">{project.titleTail}</span>
            )}
          </h3>
          <p className="project-card__summary">{project.summary}</p>
        </div>

        {mediaItems.length > 0 && (
          <div className="project-card__screens" aria-label="项目媒体预览">
            <div className="project-card__screens-head">
              <span className="micro-label">{mediaLabel}</span>
              <div className="project-card__slider-controls">
                <span className="project-card__slider-count">
                  {String(mediaIndex + 1).padStart(2, '0')} /{' '}
                  {String(mediaItems.length).padStart(2, '0')}
                </span>
                <button
                  className="project-card__slider-btn"
                  type="button"
                  onClick={() => scrollMedia(-1)}
                  disabled={mediaIndex <= 0}
                  aria-label="上一张媒体"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  className="project-card__slider-btn"
                  type="button"
                  onClick={() => scrollMedia(1)}
                  disabled={mediaIndex >= mediaItems.length - 1}
                  aria-label="下一张媒体"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="project-card__slider">
              <div
                className="project-card__slider-track"
                ref={mediaSliderRef}
                onScroll={handleMediaScroll}
                tabIndex={0}
                role="group"
                aria-roledescription="carousel"
                aria-label={`项目媒体预览，共 ${mediaItems.length} 张，可横向滑动`}
              >
                {mediaItems.map((item) => (
                  <div
                    className="project-card__media-thumb"
                    data-type={item.type}
                    key={`${item.type}-${item.label}`}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" draggable="false" />
                    <span className="project-card__media-tag">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {project.metrics?.length > 0 && (
          <div className="project-card__metrics" aria-label="项目数据">
            {project.metrics.slice(0, 3).map((metric) => (
              <div className="project-card__metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="project-card__foot">
          <span className="project-card__view-link">
            VIEW CASE
            <ArrowUpRight size={13} />
          </span>
          <span className="project-card__role">{project.role}</span>
        </div>
      </div>

      <button
        className="project-card__hit"
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`查看项目：${project.title}`}
        data-cursor
        data-cursor-label="VIEW"
      />
    </article>
  );
}

function ProjectCategory({ category, onOpen }) {
  const count = category.projects.length;
  const countLabel = category.placeholder ? 'TBD' : String(count).padStart(2, '0');
  const countCaption = category.placeholder ? 'PLACEHOLDER' : count > 1 ? 'PROJECTS' : 'PROJECT';

  return (
    <section
      className={`project-category project-category--${category.theme} ${
        category.placeholder ? 'is-placeholder' : ''
      }`}
      aria-labelledby={`category-title-${category.id}`}
      id={`category-${category.id}`}
    >
      <div className="project-category__head" data-reveal>
        <div className="project-category__id" aria-hidden="true">
          {category.index}
        </div>
        <div className="project-category__title-block">
          <span className="micro-label">{category.english}</span>
          <h3 id={`category-title-${category.id}`}>{category.title}</h3>
        </div>
        <p className="project-category__description">{category.description}</p>
        <div className="project-category__count">
          <strong>{countLabel}</strong>
          <span>{countCaption}</span>
        </div>
      </div>

      <div className={`project-grid ${count === 1 ? 'project-grid--single' : 'project-grid--multi'}`}>
        {category.projects.map((project, index) => {
          const isFull = count === 1 || (count % 2 === 1 && index === count - 1);
          return (
            <ProjectCard
              key={project.id}
              project={project}
              isFull={isFull}
              onOpen={onOpen}
              delay={index * 70}
            />
          );
        })}
      </div>
    </section>
  );
}

export default function Projects({ onOpen }) {
  return (
    <section className="section projects" id="work" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="section-head__left">
            <span className="section-index">02</span>
            <span className="section-name">SELECTED WORK / 精选项目</span>
          </div>
          <span className="section-meta">2023 — 2026</span>
        </div>

        <div className="projects__heading">
          <div>
            <h2 className="projects__title editorial-heading" id="projects-title" data-reveal>
              精选项目<span className="accent-dot">.</span>
            </h2>
            <div className="projects__title-sub" data-reveal style={{ '--delay': '100ms' }}>
              <span className="micro-label">A SELECTION OF RECENT WORK</span>
              <span>按运营 / 景观分类浏览。</span>
            </div>
          </div>

          <div className="projects__intro" data-reveal style={{ '--delay': '160ms' }}>
            <span className="projects__count">{String(totalProjects).padStart(2, '0')}</span>
            <p>
              从校园公益到景观研究，从信息梳理到空间落地。
              <br />
              类别作为结构，项目作为证据。
            </p>
            <Spark size={15} />
          </div>
        </div>

        <div className="project-category-index" data-reveal>
          <span className="micro-label">CATEGORY INDEX</span>
          {projectCategories.map((category) => (
            <a key={category.id} href={`#category-${category.id}`}>
              <span className="project-category-index__letter">{category.index}</span>
              <span>{category.title}</span>
              <span className="project-category-index__count">
                {category.placeholder
                  ? 'TBD'
                  : String(category.projects.length).padStart(2, '0')}
              </span>
            </a>
          ))}
        </div>

        <div className="project-categories">
          {projectCategories.map((category) => (
            <ProjectCategory key={category.id} category={category} onOpen={onOpen} />
          ))}
        </div>

        <div className="projects__ending" data-reveal>
          <span className="micro-label">END OF SELECTED WORK</span>
          <span className="projects__ending-line" />
          <span>每一件作品，都是一次新的翻译。</span>
        </div>
      </div>
    </section>
  );
}
