"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import type { ProjectStatus } from "@/content/types";
import { SectionHeading } from "./SectionHeading";
import { Highlighted } from "./Mark";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "demo", label: "Live demo" },
  { id: "tech", label: "Tech deep-dive" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const statusColor: Record<ProjectStatus, string> = {
  Active: "text-accent",
  Building: "text-amber",
  Planned: "text-subtle",
};

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Projects() {
  const [projectId, setProjectId] = useState(projects[0].id);
  const [tab, setTab] = useState<TabId>("overview");
  const current = projects.find((p) => p.id === projectId) ?? projects[0];

  return (
    <section id="projects" className="scroll-mt-4 border-t border-line py-16">
      <div className="mb-8">
        <SectionHeading label="Projects" title="What I'm building" />
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="flex flex-[1_1_240px] flex-col gap-1">
          {projects.map((p) => {
            const on = p.id === projectId;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setProjectId(p.id);
                  setTab("overview");
                }}
                className={`flex min-h-11 w-full cursor-pointer flex-col gap-1 rounded-[10px] px-4 py-3.5 text-left ${focusRing} ${
                  on ? "bg-surface-active" : "hover:bg-surface"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className={`text-[15px] font-medium ${on ? "text-fg" : "text-muted"}`}>{p.name}</span>
                  <span className={`text-[11px] font-medium ${statusColor[p.status]}`}>{p.status}</span>
                </span>
                <span className="text-[13px] text-subtle">{p.summary}</span>
              </button>
            );
          })}
        </div>

        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-6 rounded-2xl bg-panel p-5 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-[13px] text-subtle">{current.kind}</div>
              <h3 className="mt-1.5 mb-0 text-[26px] font-semibold tracking-[-0.02em]">{current.name}</h3>
            </div>
            {current.demo && (
              <a
                href={current.demo.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent"
              >
                {current.demo.label} ↗
              </a>
            )}
          </div>

          <div role="tablist" aria-label={`${current.name} details`} className="flex flex-wrap gap-1">
            {tabs.map((t) => {
              const on = t.id === tab;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={on}
                  aria-controls="project-panel"
                  onClick={() => setTab(t.id)}
                  className={`min-h-8 cursor-pointer rounded-full px-3 py-1.5 text-[13px] font-medium ${focusRing} ${
                    on ? "bg-surface-strong text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div id="project-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
            {tab === "overview" && (
              <div className="flex flex-col gap-6">
                <p className="m-0 text-base leading-[1.7] text-code">
                  <Highlighted text={current.about} />
                </p>
                <div className="flex flex-wrap gap-10">
                  {current.points.map((pt) => (
                    <div key={pt.label}>
                      <div className="text-[13px] text-subtle">{pt.label}</div>
                      <div className="mt-1 text-[15px] font-medium">{pt.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "demo" && (
              <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl bg-canvas p-6 text-center">
                <div className="grid size-12 place-items-center rounded-full bg-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-accent-ink" aria-hidden="true">
                    <path d="M5 3l8 5-8 5z" />
                  </svg>
                </div>
                <div className="text-sm text-muted">Demo video or embedded app</div>
                {!current.demo && <div className="text-[13px] text-subtle">Coming soon</div>}
              </div>
            )}

            {tab === "tech" && (
              <div className="flex flex-col gap-7">
                <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                  {current.tech.map((x) => (
                    <div key={x.label} className="flex justify-between gap-3 border-b border-line py-3 text-sm">
                      <span className="text-subtle">{x.label}</span>
                      <span className="text-right font-mono text-[13px]">{x.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-[18px]">
                  {current.deepDive.map((s) => (
                    <div key={s.title}>
                      <div className="text-[15px] font-semibold">{s.title}</div>
                      <div className="mt-1 text-sm leading-[1.6] text-muted">
                        <Highlighted text={s.body} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
