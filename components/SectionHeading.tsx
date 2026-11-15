export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <div className="font-mono text-[12px] font-medium text-accent">{label}</div>
      <h2 className="mt-2.5 mb-0 text-[30px] font-semibold tracking-[-0.025em]">{title}</h2>
    </div>
  );
}
