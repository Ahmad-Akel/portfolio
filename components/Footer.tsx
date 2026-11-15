import { site } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="mt-8 flex flex-col gap-5 border-t border-line-soft pt-24 pb-16">
      <h2 className="m-0 text-[clamp(30px,4vw,40px)] font-semibold tracking-[-0.03em]">
        Let&apos;s build something together.
      </h2>
      <div className="flex flex-wrap gap-6 text-[15px]">
        {site.contact.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
            className={i === 0 ? "text-accent" : "text-muted"}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="mt-8 text-[13px] text-subtle">{site.copyright}</div>
    </footer>
  );
}
