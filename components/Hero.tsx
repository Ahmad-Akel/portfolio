import Image from "next/image";
import Link from "next/link";
import { Mark } from "./Mark";

const str = "text-accent";


export function Hero() {
  return (
    <section className="flex flex-wrap items-center gap-12 pt-24 pb-20">
      <div className="flex flex-[999_1_480px] flex-col gap-6">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-accent-line bg-accent-wash px-3 py-[5px] font-mono text-[12px] font-medium text-accent">
          <span className="size-1.5 rounded-full bg-accent" />
          open to full-stack &amp; AI engineering roles
        </div>
        <h1 className="m-0 text-[clamp(42px,6vw,72px)] leading-[1.02] font-semibold tracking-[-0.04em]">
          Full-stack engineer.
          <br />
          <span className="text-muted">Frontend at heart, now building with AI.</span>
        </h1>
        <p className="m-0 max-w-[540px] text-[18px] leading-[1.65] text-soft">
          I&apos;m Ahmad, based in Prague. <Mark>6+ years</Mark> shipping production apps with{" "}
          <Mark>React, Next.js and TypeScript</Mark>, plus full-stack work with <Mark>Node.js and PostgreSQL</Mark>.
          Complex workflows at VZP by day; by night, my own SaaS Tarateeb, where I build{" "}
          <Mark>AI features with LLMs, RAG and tool calling</Mark>.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#projects"
            className="rounded-lg bg-accent px-[18px] py-3 text-[15px] font-semibold text-accent-ink"
          >
            Explore projects
          </Link>
          <Link
            href="#blog"
            className="rounded-lg border border-line-strong bg-surface px-[18px] py-3 text-[15px] font-medium text-fg"
          >
            Read the blog
          </Link>
        </div>
      </div>

      <div className="min-w-0 flex-[1_1_380px] overflow-hidden rounded-[14px] border border-line-card bg-surface">
        <div className="flex items-center gap-4 border-b border-line-card bg-linear-to-b from-surface-top to-surface px-5 py-[18px]">
          <div className="relative flex-none">
            <Image
              src="/ahmad.webp"
              alt="Ahmad"
              width={72}
              height={72}
              priority
              className="block size-[72px] rounded-[14px] bg-avatar object-cover shadow-[0_0_0_2px_var(--color-surface),0_0_0_3px_var(--color-accent-line)]"
            />
            <span className="absolute -right-[3px] -bottom-[3px] size-5 rounded-full border-[3px] border-surface bg-accent" />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <div className="text-[17px] font-semibold">Ahmad Akel</div>
            <div className="font-mono text-[12px] text-muted">@Ahmad-Akel · Prague, CZ</div>
            <div className="font-mono text-[12px] text-accent">● open to work</div>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-line-card px-4 py-2.5 font-mono text-[12px] text-muted">
          <span>ahmad.config.ts</span>
          <span>TypeScript</span>
        </div>
        <pre className="m-0 overflow-x-auto p-5 font-mono text-[13.5px] leading-[1.8] whitespace-pre-wrap text-code">
          <span className="text-violet">export const</span> ahmad = {"{\n"}
          {"  "}role: <span className={str}>&quot;Full-stack Engineer · frontend-first&quot;</span>,{"\n"}
          {"  "}location: <span className={str}>&quot;Prague, CZ&quot;</span>,{"\n"}
          {"  "}experience: <span className="text-amber">6</span>, <span className="text-subtle">{"// years"}</span>
          {"\n"}
          {"  "}stack: [<span className={str}>&quot;React&quot;</span>, <span className={str}>&quot;Next.js&quot;</span>,{" "}
          <span className={str}>&quot;TypeScript&quot;</span>, <span className={str}>&quot;Node.js&quot;</span>,{" "}
          <span className={str}>&quot;PostgreSQL&quot;</span>],{"\n"}
          {"  "}ai: [<span className={str}>&quot;RAG&quot;</span>, <span className={str}>&quot;tool calling&quot;</span>,{" "}
          <span className={str}>&quot;Langfuse&quot;</span>],{"\n"}
          {"  "}now: <span className={str}>&quot;VZP — ordering system&quot;</span>,{"\n"}
          {"  "}building: <span className={str}>&quot;Tarateeb&quot;</span>,{"\n"}
          {"  "}openTo: [<span className={str}>&quot;Full-stack&quot;</span>, <span className={str}>&quot;Frontend&quot;</span>,{" "}
          <span className={str}>&quot;AI engineering&quot;</span>],{"\n"}
          {"};"}
        </pre>
      </div>
    </section>
  );
}
