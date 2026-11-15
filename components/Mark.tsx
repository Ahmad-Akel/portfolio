import type { ReactNode } from "react";

/** Keyword highlight: soft accent wash, brighter text, wraps cleanly across lines. */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-[4px] bg-accent/14 box-decoration-clone px-1 py-px font-medium text-fg">
      {children}
    </mark>
  );
}

/** Renders a content string, turning `**phrase**` into a highlighted <Mark>. */
export function Highlighted({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <Mark key={i}>{part.slice(2, -2)}</Mark> : part,
  );
}
