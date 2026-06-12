import type { ReactNode } from "react";

type MarbleProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  reveal?: boolean;
};

export function Marble({
  children,
  className = "",
  contentClassName = "",
  reveal = true,
}: MarbleProps) {
  return (
    <article
      data-motion-reveal={reveal ? "" : undefined}
      className={`marble motion-card group ${className}`}
    >
      <div className={`marble-content ${contentClassName}`}>{children}</div>
    </article>
  );
}

export function MarbleIcon({ children }: { children: ReactNode }) {
  return <div className="marble-icon">{children}</div>;
}
