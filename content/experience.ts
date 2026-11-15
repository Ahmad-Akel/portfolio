import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "vzp",
    company: "VZP",
    role: "Frontend Developer",
    when: "Oct 2024 — now",
    defaultOpen: true,
    bullets: [
      "Building the frontend of the **ordering system (objednávky)**: a complex workflow with many steps, statuses and user roles. **Started it alone**; other developers have since joined, and it is about to go live in production.",
      "Frontend for the National Information System (NIS), serving **6M+ insured clients**.",
      "Built a **custom component library from scratch** to match the Figma designs, with no third-party UI libraries. Documented in Storybook and covered by Jest tests.",
      "Use **Azure DevOps** day to day for work items, repos, CI/CD pipelines and deployments, plus Azure Blob Storage.",
    ],
  },
  {
    id: "msd",
    company: "MSD",
    role: "Full-Stack Developer",
    when: "Sep 2023 — Oct 2024",
    bullets: [
      "Built a **BI portal** that combines **several data sources** into one analytics platform for global operations.",
      "Reviewed pull requests and wrote integration tests.",
      "Stack: TypeScript, Next.js, Prisma, Zustand, React Query, AG Grid, PostgreSQL, Vitest.",
    ],
  },
  {
    id: "mgm",
    company: "MGM Technology Partners",
    role: "Frontend Developer",
    when: "May 2022 — Aug 2023",
    bullets: [
      "Built enterprise apps on the A12 low-code platform with React, TypeScript, Redux and Redux Saga.",
      "Reached **85% test coverage** with Jest and Cypress.",
      "Mentored **5+ developers** on A12, **cutting onboarding time by 30%**.",
    ],
  },
  {
    id: "adv",
    company: "Advantech",
    role: "Junior Frontend Developer",
    when: "Sep 2021 — Apr 2022",
    bullets: [
      "Rebuilt the WebAccess device management dashboard in Vue.js, **improving page load speed by 40%**.",
      "Refactored legacy CSS into SASS modules, with **60% fewer styling bugs**.",
    ],
  },
  {
    id: "voatt",
    company: "VOATT",
    role: "Frontend Developer",
    when: "Feb — Sep 2020",
    bullets: [
      "Designed and built components for client websites, mainly CSS/SASS, HTML and plain JavaScript.",
      "Integrated them with a Drupal (PHP CMS) backend.",
    ],
  },
];
