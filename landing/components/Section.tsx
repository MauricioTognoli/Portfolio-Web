import type { ReactNode } from "react";

export const sectionPad = "px-12 py-24 max-[900px]:px-6 max-[560px]:px-5 max-[560px]:py-16";

export const SectionInner = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto max-w-[1320px]">{children}</div>
);

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="mb-4 inline-flex items-center gap-2 font-mt-mono text-[11px] font-medium tracking-[0.12em] text-mt-orange uppercase before:h-px before:w-5 before:bg-mt-orange before:content-['']">
    {children}
  </div>
);

export const SectionTitle = ({ children, className = "mb-3.5" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-mt-display text-[clamp(30px,4vw,46px)] leading-[1.1] font-bold tracking-[-0.03em] ${className}`}>
    {children}
  </h2>
);

export const SectionDesc = ({ children, className = "mb-13 max-w-[480px]" }: { children: ReactNode; className?: string }) => (
  <p className={`leading-[1.7] text-mt-text-60 ${className}`}>{children}</p>
);
