"use client";

import { useState } from "react";
import { experience } from "@/content/experience";
import { SectionHeading } from "./SectionHeading";
import { Highlighted } from "./Mark";

export function Experience() {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(experience.map((e) => [e.id, !!e.defaultOpen])),
  );

  return (
    <section id="experience" className="scroll-mt-4 border-t border-line py-16">
      <div className="mb-7">
        <SectionHeading label="Experience" title="Where I've worked" />
      </div>

      <div className="ml-1.5 border-l border-line-strong">
        {experience.map((e) => {
          const isOpen = !!open[e.id];
          return (
            <div key={e.id} className="relative pl-7">
              <span
                className={`absolute top-[25px] -left-1.5 size-[11px] rounded-full border-2 border-accent ${
                  isOpen ? "bg-accent" : "bg-canvas"
                }`}
              />
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`exp-${e.id}`}
                onClick={() => setOpen((o) => ({ ...o, [e.id]: !o[e.id] }))}
                className="flex min-h-11 w-full cursor-pointer flex-wrap items-center gap-x-[22px] gap-y-1.5 py-[18px] text-left text-subtle hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="flex-[0_0_150px] font-mono text-[13px] text-subtle">{e.when}</span>
                <span className="flex-[1_1_300px] text-base font-medium text-fg">
                  {e.role} <span className="font-normal text-subtle">· {e.company}</span>
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                  className={`ml-auto transition-transform duration-150 ${isOpen ? "rotate-180 text-accent" : ""}`}
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
              {isOpen && (
                <ul
                  id={`exp-${e.id}`}
                  className="m-0 flex list-disc flex-col gap-2 pb-5 pl-5 text-[15px] leading-[1.6] text-muted sm:pl-[200px]"
                >
                  {e.bullets.map((b) => (
                    <li key={b} className="pl-1">
                      <Highlighted text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
