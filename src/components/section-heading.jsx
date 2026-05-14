export function SectionHeading({ eyebrow, title, description, index, className = "" }) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && (
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty max-w-lg">
            {description}
          </p>
        )}
      </div>
      {index && (
        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          {index}
        </div>
      )}
    </div>
  );
}
