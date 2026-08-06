type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment}`}>
      <span className="section-kicker">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-[2.4rem] font-semibold tracking-[-0.045em] text-[#2d1810] sm:text-[3.2rem]">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-[#6e5543] sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
