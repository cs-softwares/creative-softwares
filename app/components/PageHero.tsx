type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  variant?: "card" | "plain";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  variant = "card",
}: PageHeroProps) {
  const wrapperClassName =
    variant === "plain"
      ? "mx-auto max-w-7xl px-2 py-4 sm:px-4 lg:px-6 lg:py-6"
      : "mx-auto max-w-7xl rounded-[2.4rem] glass-panel-strong px-6 py-12 sm:px-10 lg:px-14 lg:py-16";

  return (
    <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className={wrapperClassName}>
        <div className="max-w-4xl space-y-6">
          {eyebrow ? <span className="section-kicker">{eyebrow}</span> : null}
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[#2d1810] sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[#6e5543] sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
