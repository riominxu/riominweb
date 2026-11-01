import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import { ArrowUpRight, Spark } from './Icons';
import CopyButton from './CopyButton';

function useHKTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Hong_Kong',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  const date = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Hong_Kong',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  })
    .format(now)
    .toUpperCase();

  return { time, date };
}

export default function Contact() {
  const { time, date } = useHKTime();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__glow" />
        <div className="contact__rings">
          <i /><i /><i /><i />
        </div>
        <div className="contact__grid" />
      </div>

      <div className="container contact__inner">
        <div className="section-head contact__head" data-reveal>
          <div className="section-head__left">
            <span className="section-index">03</span>
            <span className="section-name">CONTACT / 联系</span>
          </div>
          <span className="section-meta">THE NEXT CHAPTER</span>
        </div>

        <div className="contact__main">
          <div className="contact__lead">
            <div className="contact__status" data-reveal>
              <i aria-hidden="true" />
              <span>CURRENTLY OPEN FOR SELECT PROJECTS</span>
              <span>/</span>
              <span>2026</span>
            </div>

            <h2 className="contact__title editorial-heading" id="contact-title" data-reveal>
              一起做点
              <br />
              <span className="contact__title-indent">值得记住的</span>
              <span className="accent-dot">。</span>
            </h2>

            <p className="contact__copy" data-reveal style={{ '--delay': '100ms' }}>
              无论是一个品牌从零开始，还是一次视觉与 AI 的实验，
              如果你也相信好的设计值得被认真对待——我们聊聊。
            </p>

            <div className="contact__email-block" data-reveal style={{ '--delay': '160ms' }}>
              <span className="micro-label">START A CONVERSATION</span>
              <div className="contact__email-row">
                <a className="contact__email" href={`mailto:${profile.email}`} data-cursor>
                  {profile.email}
                  <ArrowUpRight size={30} />
                </a>
                <CopyButton
                  value={profile.email}
                  label="复制邮箱"
                  copiedLabel="已复制"
                  iconOnly
                />
              </div>
            </div>
          </div>

          <aside className="contact__panel" data-reveal style={{ '--delay': '180ms' }}>
            <div className="contact__panel-head">
              <span className="micro-label">DIRECT / 联系信息</span>
              <Spark size={14} />
            </div>

            <dl className="contact__details">
              <div>
                <dt>EMAIL</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>PHONE</dt>
                <dd>
                  <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>BASED IN</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>WECHAT</dt>
                <dd className="contact__detail-inline">
                  <span>{profile.wechat}</span>
                  <CopyButton
                    value={profile.wechat}
                    label="复制微信号"
                    copiedLabel="已复制"
                    iconOnly
                  />
                </dd>
              </div>
            </dl>

            <div className="contact__panel-foot">
              <div>
                <span className="micro-label">LOCAL TIME / HKT</span>
                <span className="contact__time">{time}</span>
                <span className="contact__date">{date}</span>
              </div>
              <a className="contact__round-link" href={`mailto:${profile.email}`} aria-label="发送邮件" data-cursor>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </aside>
        </div>

        <div className="contact__mega" aria-hidden="true">
          LET&apos;S TALK
        </div>

        <footer className="site-footer">
          <div className="site-footer__left">
            <span className="micro-label">© 2026 XU YUNLIN</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
          <div className="site-footer__center">
            <span>视觉设计 / AI 设计 / 品牌设计</span>
            <span className="site-footer__dot" />
            <span>PORTFOLIO 2026</span>
          </div>
          <div className="site-footer__right">
            <span className="site-footer__time">HONG KONG · {time}</span>
            <a href="#top" className="back-to-top" data-cursor>
              BACK TO TOP
              <span className="back-to-top__line" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
