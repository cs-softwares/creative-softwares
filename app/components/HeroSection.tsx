import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "./SiteIcons";

type HeroStat = {
  value: string;
  label: string;
};

type HeroSectionProps = {
  backgroundSrc: string;
  heading: string;
  description: string;
  primaryHref: string;
  secondaryHref: string;
  stats: HeroStat[];
};

export default function HeroSection({
  backgroundSrc,
  heading,
  description,
  primaryHref,
  secondaryHref,
  stats,
}: HeroSectionProps) {
  const [firstLine, secondLine] = heading.split("\n");

  return (
    <section className="hero-section relative -mt-24 overflow-hidden">
      <div className="hero-shell">
        <div className="hero-scene" aria-hidden="true">
          <Image
            src={backgroundSrc}
            alt=""
            fill
            preload
            sizes="100vw"
            className="hero-scene-image"
          />
          <div className="hero-scene-haze" />
        </div>

        <div className="hero-inner relative z-10 mx-auto flex min-h-screen max-w-[1280px] flex-col items-center px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <div className="hero-content mx-auto flex w-full max-w-[900px] flex-1 flex-col items-center justify-center text-center">
            <h1 className="hero-heading max-w-[900px] text-[3.5rem] font-bold leading-[1.02] tracking-[-0.038em] text-[#2d1810] sm:text-[4.5rem] sm:leading-[0.99] lg:text-[6.25rem] lg:leading-[0.97]">
              {firstLine}
              <br />
              {secondLine}
            </h1>

            <p className="hero-copy mt-6 max-w-[760px] text-lg leading-8 text-[#6e5543] sm:text-[1.18rem] lg:text-[1.28rem]">
              {description}
            </p>

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
              <Link href={primaryHref} className="button-copper hero-primary-button">
                Start Your Project
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <Link href={secondaryHref} className="button-ghost hero-secondary-button">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="hero-stats-grid mt-12 grid w-full max-w-[680px] gap-4 sm:grid-cols-2 lg:mt-14">
            {stats.map((stat) => (
              <article key={stat.label} className="hero-stat-card rounded-[1.8rem] px-8 py-6 text-center">
                <p className="hero-stat-value text-4xl font-extrabold tracking-[-0.06em] text-[#b08968] sm:text-[2.7rem]">
                  {stat.value}
                </p>
                <p className="hero-stat-label mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6f55]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
