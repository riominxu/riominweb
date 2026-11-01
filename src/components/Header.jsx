import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data/content';
import { ArrowUpRight, LogoMark, MailIcon, PhoneIcon } from './Icons';

export default function Header({ activeSection }) {
  const [floating, setFloating] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const heroHeight = document.getElementById('top')?.offsetHeight ?? window.innerHeight;
      const threshold = Math.max(heroHeight - 84, 420);
      setFloating(window.scrollY > threshold);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={`site-header ${floating ? 'is-floating' : 'is-on-paper'}`}>
      <div className="scroll-progress" ref={progressRef} />
      <div className="container header-inner">
        <div className="header-left">
          <a className="brand" href="#top" aria-label="徐韫琳 · 回到首页">
            <span className="brand__mark">
              <LogoMark />
            </span>
            <span className="brand__type">
              <span className="brand__cn">{profile.name}</span>
              <span className="brand__en">XU YUNLIN / VISUAL &amp; AI</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="主导航">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'is-active' : ''}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="nav-num">{item.index}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="header-actions">
          <div className="header-socials">
            <a
              className="header-icon-link"
              href={`mailto:${profile.email}`}
              aria-label="发送邮件"
              data-cursor
            >
              <MailIcon size={15} />
            </a>
            <a
              className="header-icon-link"
              href={`tel:${profile.phone}`}
              aria-label="拨打电话"
              data-cursor
            >
              <PhoneIcon size={15} />
            </a>
          </div>

          <a className="header-contact" href="#contact" data-cursor>
            <span className="header-contact-label">联系我</span>
            <span className="header-contact-arrow">
              <ArrowUpRight size={13} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
