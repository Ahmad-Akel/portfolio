import Link from "next/link";

const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex min-h-16 max-w-[1160px] items-center justify-between gap-5 px-6">
        <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold text-fg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" className="stroke-accent" aria-hidden="true">
            <path d="M4 17l6-5-6-5M12 19h8" />
          </svg>
          ahmad
        </Link>

        <nav aria-label="Main" className="hidden gap-6 text-sm min-[721px]:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Search"
            className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-line-strong bg-surface py-2 pr-2.5 pl-3 text-[13px] text-muted sm:min-w-[204px]"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5L14 14" />
            </svg>
            <span className="max-sm:hidden">Search…</span>
            <span className="ml-auto rounded border border-line-strong px-[5px] py-px font-mono text-[11px] font-medium max-sm:hidden">
              ⌘K
            </span>
          </button>
          <Link
            href="/#contact"
            className="rounded-lg bg-accent px-3.5 py-[9px] text-sm font-semibold text-accent-ink"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
