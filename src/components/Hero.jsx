import { useEffect, useRef } from 'react';
import { profile } from '../data/content';
import { ArrowDown, ArrowUpRight, Spark } from './Icons';
import heroPoster from '../assets/hero-poster.jpg';
import heroVideoWebm from '../assets/hero-loop.webm';
import heroVideoMp4 from '../assets/hero-loop.mp4';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      return undefined;
    }

    const play = () => {
      const promise = video.play();
      if (promise?.catch) promise.catch(() => {});
    };

    video.addEventListener('canplay', play, { once: true });
    play();

    return () => video.removeEventListener('canplay', play);
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        <div className="hero__poster" style={{ backgroundImage: `url(${heroPoster})` }} />
        <div className="hero__veil" />
        <div className="hero__vignette" />
        <div className="hero__grain" />
      </div>

      <div className="hero__graphics" aria-hidden="true">
        <div className="hero__pinstripes hero__pinstripes--left">
          <i /><i /><i />
        </div>
        <div className="hero__pinstripes hero__pinstripes--right">
          <i /><i /><i />
        </div>

        <div className="hero__orbitfield">
          <span className="hero__orbit-ring hero__orbit-ring--one" />
          <span className="hero__orbit-ring hero__orbit-ring--two" />
          <span className="hero__orbit-ring hero__orbit-ring--three" />
          <span className="hero__orbit-cross hero__orbit-cross--one" />
          <span className="hero__orbit-cross hero__orbit-cross--two" />
          <span className="hero__orbit-dot hero__orbit-dot--one" />
          <span className="hero__orbit-dot hero__orbit-dot--two" />
          <span className="hero__orbit-dot hero__orbit-dot--three" />
          <span className="hero__orbit-label hero__orbit-label--one">FORM — 01</span>
          <span className="hero__orbit-label hero__orbit-label--two">SYSTEM — 02</span>
          <span className="hero__orbit-label hero__orbit-label--three">SIGNAL — 03</span>
          <span className="hero__orbit-coord">
            22.3193° N
            <br />
            114.1694° E
          </span>
        </div>

        <span className="hero__side-note hero__side-note--left">
          BETWEEN CULTURE, SYSTEM &amp; TECHNOLOGY
        </span>
        <span className="hero__side-note hero__side-note--right">PORTFOLIO / VOL. 01 — 2026</span>
      </div>

      <div className="container hero__inner">
        <div className="hero__meta">
          <div className="hero__meta-block">
            <Spark size={10} />
            <span>DESIGN &amp; STRATEGY / 2026</span>
          </div>
          <div className="hero__meta-center">
            <span>VISUAL</span>
            <i aria-hidden="true" />
            <span>AI</span>
            <i aria-hidden="true" />
            <span>BRAND</span>
          </div>
          <div className="hero__meta-block hero__meta-block--right">
            <span>HONG KONG · FOSHAN</span>
            <span className="micro-label">22°19′N / 114°10′E</span>
          </div>
        </div>

        <div className="hero__stage">
          <div className="hero__ghost" aria-hidden="true">
            <span>让想象</span>
            <span>成为形态</span>
          </div>

          <h1 className="hero__title" id="hero-title">
            <span className="hero__line">
              <span className="hero__line-inner">让想象</span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">
                成为形态<span className="hero__dot" aria-hidden="true" />
              </span>
            </span>
          </h1>

          <div className="hero__stage-caption">
            <span className="hero__stage-line" aria-hidden="true" />
            <span className="hero__stage-en">Imagination, given form.</span>
            <span className="hero__stage-line" aria-hidden="true" />
          </div>

          <div className="hero__stage-meta">
            <div>
              <span className="micro-label">PRACTICE / 001</span>
              <p>
                视觉设计 <i aria-hidden="true" /> AI 设计 <i aria-hidden="true" /> 品牌设计
              </p>
            </div>
            <div className="hero__stage-meta-right">
              <span className="micro-label">INDEX / 00—03</span>
              <p>RESEARCH — FORM — FEELING</p>
            </div>
          </div>
        </div>

        <div className="hero__footer">
          <div className="hero__statement">
            <span className="micro-label">STATEMENT / 00</span>
            <p>
              从田野调研到品牌系统，把复杂的洞察，
              <em>转译成清晰、克制、能够生长的视觉语言。</em>
            </p>
          </div>

          <div className="hero__footer-center">
            <a className="scroll-orbit" href="#about" aria-label="向下滚动，了解我">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <path
                    id="orbit-path"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath href="#orbit-path" startOffset="0">
                    SCROLL TO EXPLORE · SCROLL TO EXPLORE ·
                  </textPath>
                </text>
              </svg>
              <span className="scroll-orbit__center">
                <ArrowDown size={15} />
              </span>
            </a>
            <span className="hero__footer-index">00 / 03</span>
          </div>

          <div className="hero__footer-actions">
            <a className="hero__availability" href={`mailto:${profile.email}`}>
              <Spark size={12} />
              <span>{profile.email}</span>
              <ArrowUpRight size={11} />
            </a>
            <a className="hero__next" href="#work" data-cursor>
              <span className="hero__next-copy">
                <small>SELECTED WORK / 06</small>
                <strong>查看精选项目</strong>
              </span>
              <span className="hero__next-icon">
                <ArrowDown size={17} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
