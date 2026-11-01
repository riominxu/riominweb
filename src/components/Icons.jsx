export function ArrowUpRight({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ArrowDown({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CopyIcon({ size = 14, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="5.5" y="5.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M10.5 5V3.5a1 1 0 0 0-1-1h-8v8a1 1 0 0 0 1 1H5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function CheckIcon({ size = 14, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.5 8.5 6.5 12.5 13.5 4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function CloseIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 3l12 12M15 3 3 15" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function MailIcon({ size = 15, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="1.5" y="3" width="13" height="10" rx="1.2" stroke="currentColor" strokeWidth="1" />
      <path d="m2.2 4 5.8 4.5L13.8 4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function PhoneIcon({ size = 15, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5.2 2.4c.4-.4 1-.3 1.4.1l1.1 1.3c.3.4.3.9 0 1.3l-.8.8c.7 1.4 1.8 2.5 3.2 3.2l.8-.8c.4-.3.9-.3 1.3 0l1.3 1.1c.4.4.5 1 .1 1.4l-.9 1c-.7.7-1.8.9-2.7.4A13.3 13.3 0 0 1 2.2 5.3c-.5-.9-.3-2 .4-2.7l1-.9Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Spark({ size = 12, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 0c.4 4.7 2.9 7.2 8 8-5.1.8-7.6 3.3-8 8-.4-4.7-2.9-7.2-8-8 5.1-.8 7.6-3.3 8-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LogoMark({ className = '' }) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="19" cy="19" r="17.5" stroke="currentColor" strokeWidth="1" />
      <path d="M11.5 11.5 26.5 26.5M26.5 11.5 11.5 26.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="19" cy="19" r="3.4" fill="var(--accent)" />
    </svg>
  );
}
