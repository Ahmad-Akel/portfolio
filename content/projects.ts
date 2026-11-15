import type { Project } from "./types";

const deepDivePlaceholder: Project["deepDive"] = [
  { title: "Architecture", body: "A diagram and a short write-up of how the pieces fit together." },
  { title: "Key decisions", body: "The trade-offs you made and why: rendering, data model, auth, state." },
  { title: "Lessons", body: "What broke, what surprised you, what you would change next time." },
];

export const projects: Project[] = [
  {
    id: "tarateeb",
    name: "Tarateeb",
    kind: "B2B SaaS · ERP",
    status: "Active",
    summary: "An ERP platform for small manufacturers.",
    about:
      "A B2B ERP for small manufacturers that I **build and run end to end on my own**, now in use by **2 paying customers**. Its AI features keep a **human in the loop**: upload an invoice and it **extracts the data**, but only records the purchase or sale once you confirm or ask follow-up questions. There is also a **RAG assistant** and **actions triggered from natural language**.",
    points: [
      { label: "Role", value: "Founder · full-stack" },
      { label: "For", value: "Small manufacturers" },
      { label: "Customers", value: "2 paying" },
    ],
    demo: { label: "app.tarateeb.com", href: "https://app.tarateeb.com" },
    tech: [
      { label: "Frontend", value: "Next.js · TypeScript" },
      { label: "Backend", value: "Node.js · REST APIs" },
      { label: "Database", value: "PostgreSQL · Prisma" },
      { label: "Hosting", value: "Vercel" },
      { label: "AI", value: "LLMs · RAG · tool calling" },
      { label: "Tracing", value: "Langfuse" },
    ],
    deepDive: [
      {
        title: "Architecture",
        body: "A Next.js and TypeScript app with Node.js APIs, Prisma over PostgreSQL, deployed on Vercel. Every **LLM call is traced with Langfuse**.",
      },
      {
        title: "Key decisions",
        body: "**AI never writes to the books on its own.** Invoice extraction, the RAG assistant and natural-language actions all propose a change, and the user confirms it or asks follow-up questions before anything is recorded.",
      },
      {
        title: "Lessons",
        body: "Unpaginated responses caused a **major data-consumption problem** as customers' data grew. I fixed it with **paginated APIs and controlled cache invalidation**.",
      },
    ],
  },
  {
    id: "demo",
    name: "SaaS Demo Builder",
    kind: "Product tool",
    status: "Building",
    summary: "Animated product demos for any SaaS app.",
    about:
      "Log in to a SaaS app, define the pages and the actions to show, and get an animated product demo out the other end.",
    points: [
      { label: "Role", value: "Solo builder" },
      { label: "For", value: "SaaS products" },
      { label: "Status", value: "Building" },
    ],
    tech: [
      { label: "Frontend", value: "[Stack]" },
      { label: "Capture", value: "[Recording approach]" },
      { label: "Rendering", value: "[Animation / export]" },
      { label: "Hosting", value: "[Hosting]" },
    ],
    deepDive: deepDivePlaceholder,
  },
  {
    id: "overlay",
    name: "Screen Overlay",
    kind: "macOS app",
    status: "Planned",
    summary: "Ask questions about anything on your screen.",
    about:
      "A draggable, system-wide icon that opens a chat box and answers questions about the area of the screen you select.",
    points: [
      { label: "Role", value: "Solo builder" },
      { label: "Platform", value: "macOS" },
      { label: "Status", value: "Planned" },
    ],
    tech: [
      { label: "App shell", value: "[Native / Electron / Tauri]" },
      { label: "Capture", value: "[Screen capture API]" },
      { label: "AI", value: "[Model / provider]" },
      { label: "Distribution", value: "[Signing & updates]" },
    ],
    deepDive: deepDivePlaceholder,
  },
];
