import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) return undefined;

    document.body.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;
    let visible = false;

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = window.requestAnimationFrame(render);
    };

    const reveal = () => {
      if (visible) return;
      visible = true;
      dot?.classList.add('is-visible');
      ring?.classList.add('is-visible');
    };

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      reveal();

      const target = event.target instanceof Element ? event.target.closest('[data-cursor]') : null;
      ring?.classList.toggle('is-hover', Boolean(target));
      dot?.classList.toggle('is-hover', Boolean(target));

      const view = target?.getAttribute('data-cursor-label');
      const isView = view === 'VIEW';
      ring?.classList.toggle('is-view', isView);
      dot?.classList.toggle('is-view', isView);
      if (label) label.textContent = isView ? 'VIEW' : '';
    };

    const onLeave = () => {
      dot?.classList.remove('is-visible');
      ring?.classList.remove('is-visible');
      visible = false;
    };

    const onDown = () => {
      ring?.classList.add('is-down');
      dot?.classList.add('is-down');
    };

    const onUp = () => {
      ring?.classList.remove('is-down');
      dot?.classList.remove('is-down');
    };

    raf = window.requestAnimationFrame(render);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="cursor-ring" ref={ringRef}>
        <span className="cursor-label" ref={labelRef} />
      </div>
      <div className="cursor-dot" ref={dotRef} />
    </div>
  );
}
