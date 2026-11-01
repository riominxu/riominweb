import { useEffect, useRef, useState } from 'react';
import { CheckIcon, CopyIcon } from './Icons';

export default function CopyButton({ value, label = '复制', copiedLabel = '已复制', iconOnly = false }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement('textarea');
        input.value = value;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
      }
      setCopied(true);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className={`copy-button ${iconOnly ? 'copy-button--icon' : ''} ${copied ? 'is-copied' : ''}`}
      onClick={copy}
      aria-label={copied ? `${copiedLabel}${label}` : `${label}`}
      title={copied ? copiedLabel : label}
    >
      {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
      {!iconOnly && <span>{copied ? copiedLabel : label}</span>}
    </button>
  );
}
