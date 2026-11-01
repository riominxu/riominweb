import { coreCapabilities, profile, timeline, toolkit } from '../data/content';
import { ArrowUpRight, Spark } from './Icons';
import CopyButton from './CopyButton';

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="section-head__left">
            <span className="section-index">01</span>
            <span className="section-name">PROFILE / 关于我</span>
          </div>
          <span className="section-meta">RESEARCH — VISUAL — AI</span>
        </div>

        <div className="about__intro">
          <h2 className="about__headline editorial-heading" id="about-title" data-reveal>
            在理性与感知之间，
            <br />
            <span className="text-muted">寻找品牌的</span>形状。
          </h2>
          <div className="about__intro-note" data-reveal style={{ '--delay': '120ms' }}>
            <Spark size={15} />
            <span>
              A DESIGNER
              <br />
              WITH A FIELD MIND.
            </span>
          </div>
        </div>

        <div className="about__content about__content--full">
            <div className="about__lede" data-reveal style={{ '--delay': '120ms' }}>
              <span className="about__lede-mark">你好，我是{profile.name}。</span>
              <p>
                一名从景观建筑出发，游走于视觉、品牌与空间之间的设计师。香港大学景观建筑硕士在读，
                习惯从田野开始工作：观察、记录、梳理，再把复杂的洞察转译为清晰而有温度的视觉系统。
              </p>
              <p>
                AI 是我的第二支笔——用来加速探索与预演，而不是替代判断。相信真正好的设计，
                最终都指向同一件事：<em>让人与人、人与地方，更准确地感知彼此。</em>
              </p>
            </div>

            <div className="about__card" data-reveal style={{ '--delay': '180ms' }}>
              <div className="about__card-head">
                <span className="micro-label">DIRECT LINE</span>
                <span className="about__card-status">
                  <i aria-hidden="true" />
                  AVAILABLE
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-row__label">EMAIL</span>
                <a href={`mailto:${profile.email}`} className="contact-row__value">
                  {profile.email}
                </a>
                <CopyButton value={profile.email} label="复制邮箱" copiedLabel="已复制" iconOnly />
              </div>
              <div className="contact-row">
                <span className="contact-row__label">PHONE</span>
                <a href={`tel:${profile.phone}`} className="contact-row__value">
                  {profile.phoneDisplay}
                </a>
                <CopyButton value={profile.phone} label="复制电话" copiedLabel="已复制" iconOnly />
              </div>
              <div className="contact-row">
                <span className="contact-row__label">WECHAT</span>
                <span className="contact-row__value contact-row__value--static">
                  {profile.wechat}
                </span>
                <CopyButton
                  value={profile.wechat}
                  label="复制微信号"
                  copiedLabel="已复制"
                  iconOnly
                />
              </div>
              <div className="contact-row">
                <span className="contact-row__label">BASE</span>
                <span className="contact-row__value contact-row__value--static">{profile.location}</span>
                <span className="contact-row__side">UTC +8</span>
              </div>
              <a className="about__card-cta" href={`mailto:${profile.email}`} data-cursor>
                <span>开始一次对话</span>
                <span className="about__card-cta-icon">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>

        </div>

        <div className="about__capabilities" data-reveal>
          <div className="about__capabilities-head">
            <div>
              <span className="micro-label">CORE CAPABILITIES / 核心能力</span>
              <h3 className="mini-heading">把复杂，做成清晰。</h3>
            </div>
            <p>三条贯穿品牌、AI 与空间项目的工作方法，也是我做每一个项目时最先调用的能力。</p>
          </div>

          <div className="about__capability-grid">
            {coreCapabilities.map((capability, index) => (
              <article
                className="about__capability"
                key={capability.index}
                data-reveal
                style={{ '--delay': `${index * 70}ms` }}
              >
                <span className="about__capability-index">{capability.index}</span>
                <div>
                  <span className="micro-label">{capability.english}</span>
                  <h4>{capability.title}</h4>
                  <p>{capability.summary}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about__toolkit">
            <span className="micro-label">TOOLKIT / 工具</span>
            <div className="about__toolkit-list">
              {toolkit.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline-block">
          <div className="timeline-head" data-reveal>
            <h3 className="mini-heading">经历与教育</h3>
            <p>
              设计训练跨越空间、研究与视觉。
              <br />
              2021 — 2027
            </p>
          </div>
          <div className="timeline" role="list">
            {timeline.map((item, index) => (
              <article
                className="timeline-row"
                role="listitem"
                key={`${item.period}-${item.title}`}
                data-reveal
                style={{ '--delay': `${index * 70}ms` }}
              >
                <span className="timeline-row__period">
                  {item.period}
                  <span className="timeline-row__type">{item.type}</span>
                </span>
                <div className="timeline-row__main">
                  <h4>{item.title}</h4>
                  <div className="timeline-row__meta">
                    <span>{item.org}</span>
                    <span>{item.place}</span>
                  </div>
                </div>
                <p className="timeline-row__note">{item.note}</p>
                <span className="timeline-row__arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
