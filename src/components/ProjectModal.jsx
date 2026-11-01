import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, CloseIcon, Spark } from './Icons';

export default function ProjectModal({ project, onClose, onNext }) {
  const panelRef = useRef(null);
  const scrollRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    if (!previousFocusRef.current) previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('is-modal-open');

    const timer = window.setTimeout(() => panelRef.current?.focus({ preventScroll: true }), 80);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || !focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (document.activeElement === panelRef.current) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('is-modal-open');
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(timer);
      previousFocusRef.current?.focus?.();
    };
  }, [project, onClose]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project?.id]);

  if (!project) return null;

  return createPortal(
    <div className="modal" role="presentation" onMouseDown={onClose}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={panelRef}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="modal__bar">
          <div className="modal__bar-left">
            <span className="modal__bar-index">CASE {project.index}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <button className="modal__close" type="button" onClick={onClose}>
            <span>CLOSE / 关闭</span>
            <span className="modal__close-key">ESC</span>
            <CloseIcon size={16} />
          </button>
        </header>

        <div className="modal__scroll" ref={scrollRef}>
          <figure className="modal__media">
            <img src={project.image} alt={project.imageAlt} />
            <figcaption>
              <span>{project.english}</span>
              <span>XU YUNLIN / {project.year}</span>
            </figcaption>
          </figure>

          <div className="modal__content">
            <div className="modal__eyebrow">
              <span>{project.english}</span>
              <Spark size={12} />
            </div>
            <h2 id="modal-title" className={project.titleLead ? 'is-split' : ''}>
              {project.titleLead || project.title}
              {project.titleTail && (
                <span className="modal__title-tail">{project.titleTail}</span>
              )}
            </h2>
            <p className="modal__summary">{project.summary}</p>
            <p className="modal__description">{project.description}</p>

            <div className="modal__facts">
              <div className="modal__fact">
                <span className="micro-label">ROLE</span>
                <span>{project.role}</span>
              </div>
              <div className="modal__fact">
                <span className="micro-label">CONTEXT</span>
                <span>{project.context}</span>
              </div>
              <div className="modal__fact">
                <span className="micro-label">YEAR</span>
                <span>{project.year}</span>
              </div>
            </div>

            {project.confidential && (
              <div className="modal__confidential">
                <div className="modal__confidential-head">
                  <span className="micro-label">CONFIDENTIALITY / 公开范围</span>
                  <span className="modal__confidential-status">NDA</span>
                </div>
                <p>{project.confidentialNote}</p>
              </div>
            )}

            <div className="modal__metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            {project.pages?.length > 0 && (
              <div className="modal__section modal__pages-section">
                <div className="modal__screens-head">
                  <span className="micro-label">GUIDE PREVIEW / 导则页面</span>
                  <span className="modal__screens-count">
                    {String(project.pages.length).padStart(2, '0')} PAGES · P.02—16
                  </span>
                </div>
                <div className="modal__pages">
                  {project.pages.map((page, index) => (
                    <figure className="modal__page" key={page.label}>
                      <a
                        href={page.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看大图：第 ${index + 2} 页`}
                      >
                        <img src={page.src} alt={page.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <span>P.{String(index + 2).padStart(2, '0')}</span>
                        {page.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="modal__screens-hint">
                  按页序排列 · 横向滑动查看全部 15 页
                </p>
              </div>
            )}

            {project.gallery?.length > 0 && (
              <div className="modal__section modal__gallery-section">
                <div className="modal__screens-head">
                  <span className="micro-label">PROJECT IMAGES / 项目图像</span>
                  <span className="modal__screens-count">
                    {String(project.gallery.length).padStart(2, '0')} IMAGES
                  </span>
                </div>
                <div className="modal__gallery">
                  {project.gallery.map((image, index) => (
                    <figure className="modal__gallery-item" key={image.src}>
                      <a
                        href={image.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看大图：${image.label}`}
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {image.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="modal__screens-hint">
                  横向滑动查看全部图像 · 点击可查看原图
                </p>
              </div>
            )}

            {project.boards?.length > 0 && (
              <div className="modal__section modal__boards-section">
                <div className="modal__screens-head">
                  <span className="micro-label">PROJECT BOARDS / 项目图纸</span>
                  <span className="modal__screens-count">
                    {String(project.boards.length).padStart(2, '0')} BOARDS
                  </span>
                </div>
                <div className="modal__boards">
                  {project.boards.map((board, index) => (
                    <figure className="modal__board" key={board.label}>
                      <a
                        href={board.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看大图：${board.label}`}
                      >
                        <img src={board.src} alt={board.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {board.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="modal__screens-hint">点击可查看原图</p>
              </div>
            )}

            {project.posters?.length > 0 && (
              <div className="modal__section modal__posters-section">
                <div className="modal__screens-head">
                  <span className="micro-label">CAMPAIGN POSTERS / 宣传海报</span>
                  <span className="modal__screens-count">
                    {String(project.posters.length).padStart(2, '0')} POSTERS
                  </span>
                </div>
                <div className="modal__posters">
                  {project.posters.map((poster, index) => (
                    <figure className="modal__poster" key={poster.label}>
                      <a
                        href={poster.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看大图：${poster.label}`}
                      >
                        <img src={poster.src} alt={poster.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {poster.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="modal__screens-hint">主海报见顶部项目封面 · 点击可查看原图</p>
              </div>
            )}

            {project.handbook?.length > 0 && (
              <div className="modal__section modal__handbook-section">
                <div className="modal__screens-head">
                  <span className="micro-label">ILLUSTRATED HANDBOOK / 科普手册</span>
                  <span className="modal__screens-count">
                    {String(project.handbook.length).padStart(2, '0')} PAGES
                  </span>
                </div>
                <div className="modal__handbook">
                  {project.handbook.map((page, index) => (
                    <figure className="modal__handbook-page" key={page.label}>
                      <a
                        href={page.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看大图：${page.label}`}
                      >
                        <img src={page.src} alt={page.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {page.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="modal__screens-hint">
                  按阅读顺序排列 · 横向滑动查看全部 {String(project.handbook.length).padStart(2, '0')} 页
                </p>
              </div>
            )}

            {project.merch?.length > 0 && (
              <div className="modal__section modal__merch-section">
                <div className="modal__screens-head">
                  <span className="micro-label">MERCHANDISE / 文创周边</span>
                  <span className="modal__screens-count">
                    {String(project.merch.length).padStart(2, '0')}{' '}
                    {project.merch.length > 1 ? 'ITEMS' : 'ITEM'}
                  </span>
                </div>
                <div className="modal__merch">
                  {project.merch.map((item, index) => (
                    <figure className="modal__merch-item" key={item.label}>
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看大图：${item.label}`}
                      >
                        <img src={item.src} alt={item.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {item.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="modal__screens-hint">点击可查看原图</p>
              </div>
            )}

            {project.screens?.length > 0 && (
              <div className="modal__section modal__screens-section">
                <div className="modal__screens-head">
                  <span className="micro-label">APP SCREENS / 小程序界面</span>
                  <span className="modal__screens-count">
                    {String(project.screens.length).padStart(2, '0')} SCREENS
                  </span>
                </div>
                <div className="modal__screens">
                  {project.screens.map((screen, index) => (
                    <figure className="modal__screen" key={screen.label}>
                      <a
                        href={screen.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看大图：${screen.label}`}
                      >
                        <img src={screen.src} alt={screen.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {screen.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="modal__screens-hint">横向滑动查看全部界面 · 点击可查看大图</p>
              </div>
            )}

            <div className="modal__section">
              <span className="micro-label">DELIVERABLES / 交付内容</span>
              <ul className="modal__deliverables">
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal__section">
              <span className="micro-label">DISCIPLINES / 涉及领域</span>
              <div className="modal__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <button className="modal__next" type="button" onClick={onNext}>
              <span>
                <span className="micro-label">NEXT PROJECT</span>
                <span className="modal__next-name">继续浏览</span>
              </span>
              <span className="modal__next-icon">
                <ArrowUpRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
