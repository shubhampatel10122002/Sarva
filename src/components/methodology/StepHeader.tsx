interface StepHeaderProps {
  index: string;
  title: string;
  caption?: string;
  highlight?: string;
  align?: "left" | "center";
}

export default function StepHeader({
  index,
  title,
  caption,
  highlight,
  align = "left",
}: StepHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.3em] text-accent">
          {index}
        </span>
        <span className="h-px w-8 bg-accent/40" />
        {highlight && (
          <span className="rounded-full border border-accent/30 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
            {highlight}
          </span>
        )}
      </div>
      <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {caption && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-light sm:text-base">
          {caption}
        </p>
      )}
    </div>
  );
}
