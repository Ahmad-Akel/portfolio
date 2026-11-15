export type ProjectStatus = "Active" | "Building" | "Planned";

export type KeyValue = { label: string; value: string };

export type Project = {
  id: string;
  name: string;
  kind: string;
  status: ProjectStatus;
  summary: string;
  /** Wrap key phrases in **double asterisks** to highlight them (also works in deepDive bodies) */
  about: string;
  /** Facts shown in the Overview tab */
  points: KeyValue[];
  /** Live demo link shown next to the title; omit when there is none */
  demo?: { label: string; href: string };
  /** Stack table in the Tech deep-dive tab */
  tech: KeyValue[];
  /** Write-up blocks in the Tech deep-dive tab */
  deepDive: { title: string; body: string }[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  when: string;
  /** Wrap key phrases in **double asterisks** to highlight them */
  bullets: string[];
  /** Expanded on first render */
  defaultOpen?: boolean;
};

export type PostMeta = {
  title: string;
  tag: string;
  /** ISO date (YYYY-MM-DD), used for sorting and display */
  date: string;
  summary?: string;
  draft?: boolean;
};
