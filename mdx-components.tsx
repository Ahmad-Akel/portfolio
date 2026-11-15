import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h1: (props) => <h1 className="mt-12 mb-4 text-[32px] font-semibold tracking-[-0.025em]" {...props} />,
  h2: (props) => <h2 className="mt-12 mb-4 text-[24px] font-semibold tracking-[-0.02em]" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-3 text-[19px] font-semibold" {...props} />,
  p: (props) => <p className="my-5 text-[17px] leading-[1.75] text-soft" {...props} />,
  ul: (props) => <ul className="my-5 flex list-disc flex-col gap-2 pl-6 text-[17px] leading-[1.7] text-soft" {...props} />,
  ol: (props) => <ol className="my-5 flex list-decimal flex-col gap-2 pl-6 text-[17px] leading-[1.7] text-soft" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className="underline underline-offset-4" {...props} />
    ) : (
      <a href={href} className="underline underline-offset-4" {...props} />
    ),
  strong: (props) => <strong className="font-semibold text-fg" {...props} />,
  blockquote: (props) => <blockquote className="my-6 border-l-2 border-accent pl-5 text-muted" {...props} />,
  hr: () => <hr className="my-10 border-line" />,
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-[14px] border border-line-card bg-surface p-5 font-mono text-[13.5px] leading-[1.8] text-code"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded border border-line-card bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-code in-[pre]:border-0 in-[pre]:bg-transparent in-[pre]:p-0 in-[pre]:text-[inherit]"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
