type WaveServiceIconProps = {
  slug: string;
  className?: string;
};

const iconClass = "fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round";

export function WaveServiceIcon({ slug, className = "h-8 w-8" }: WaveServiceIconProps) {
  const path = getIconPath(slug);

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {path}
    </svg>
  );
}

function getIconPath(slug: string) {
  switch (slug) {
    case "answering-services":
      return (
        <>
          <path className={iconClass} d="M15 16a9 9 0 0 1 18 0v12a9 9 0 0 1-18 0Z" />
          <path className={iconClass} d="M9 23h6v7H9zM33 23h6v7h-6z" />
          <path className={iconClass} d="M18 35h12" />
        </>
      );
    case "virtual-receptionist-services":
      return (
        <>
          <path className={iconClass} d="M14 12h20v22H14z" />
          <path className={iconClass} d="M19 8v8M29 8v8" />
          <path className={iconClass} d="M14 19h20" />
          <path className={iconClass} d="M20 25h4M28 25h0M20 31h8" />
        </>
      );
    case "customer-follow-up":
      return (
        <>
          <path className={iconClass} d="M10 16h18v12H10z" />
          <path className={iconClass} d="m10 16 9 7 9-7" />
          <path className={iconClass} d="M30 20a8 8 0 1 1-3 6.3" />
          <path className={iconClass} d="M34 16v7h-7" />
        </>
      );
    case "ai-powered-communication-support":
      return (
        <>
          <rect className={iconClass} x="13" y="13" width="22" height="22" rx="6" />
          <path className={iconClass} d="M20 10v6M28 10v6M20 32v6M28 32v6M10 20h6M10 28h6M32 20h6M32 28h6" />
          <path className={iconClass} d="M20 25h8M24 21v8" />
        </>
      );
    case "communication-management":
      return (
        <>
          <path className={iconClass} d="M10 14h12v10H10z" />
          <path className={iconClass} d="m10 14 6 5 6-5" />
          <path className={iconClass} d="M28 12a7 7 0 0 1 6 11.5V31l-5-3h-1a7 7 0 1 1 0-14Z" />
          <path className={iconClass} d="M24 34h-9l-5 4v-8" />
        </>
      );
    default:
      return (
        <>
          <circle className={iconClass} cx="24" cy="24" r="12" />
          <path className={iconClass} d="M24 18v12M18 24h12" />
        </>
      );
  }
}
