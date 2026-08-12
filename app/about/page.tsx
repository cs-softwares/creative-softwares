import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "../components/SiteIcons";
import { aboutParagraphs, missionStatement, siteConfig, teamProfiles } from "../site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Creative Softwares approaches Android apps, websites, and practical client delivery.",
};

export default function AboutPage() {
  const aboutNarrative = aboutParagraphs.slice(1);

  return (
    <section className="about-section relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
      <div className="about-scene" aria-hidden="true">
        <div className="about-scene-haze" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="max-w-4xl">
          <h1 className="text-[2.5rem] font-medium tracking-[-0.05em] text-[#2d1810] sm:text-[3rem] lg:text-[3.5rem]">
            Founder-led software work with clear ownership and practical delivery.
          </h1>
          <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-[#6e5543] sm:text-[1.08rem]">
            {aboutParagraphs[0]}
          </p>
        </div>

        <article className="about-card mt-14 rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-3xl">
            <span className="section-kicker">Leadership</span>
            <h2 className="mt-5 text-[1.85rem] font-semibold tracking-[-0.045em] text-[#855c3f] sm:text-[2.2rem]">
              The people behind Creative Softwares.
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-[#6e5543] sm:text-[1.04rem]">
              Sneha Shankhwar founded and primarily manages the brand. Abhishek Kumar Kamal
              supports it in an advisory and operational capacity.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {teamProfiles.map((profile, index) => (
              <div
                key={profile.name}
                className={`text-center ${
                  index === 0
                    ? ""
                    : "border-t border-[#c49a7c]/14 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
                }`}
              >
                <div className="mx-auto w-full max-w-[13rem] sm:max-w-[14rem]">
                  <div className="relative aspect-square overflow-hidden rounded-full border-[5px] border-[#f1e3d7] bg-[#fff9f5] shadow-[0_16px_32px_rgba(45,24,16,0.08)]">
                    {profile.imageSrc ? (
                      <Image
                        src={profile.imageSrc}
                        alt={profile.name}
                        fill
                        sizes="(max-width: 1024px) 240px, 280px"
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#f1e3d7] text-[2.15rem] font-bold tracking-[-0.08em] text-[#855c3f]">
                        <span>{profile.initials}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="mt-3 text-[1.48rem] font-semibold tracking-[-0.04em] text-[#2d1810]">
                    {profile.name}
                  </h3>
                  <p className="mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#8d6548]">
                    {profile.role}
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-7 text-[#6e5543]">
                    {profile.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-[#c49a7c]/12 pt-10">
            <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
              <div>
                <h2 className="text-[1.68rem] font-semibold tracking-[-0.045em] text-[#855c3f] sm:text-[1.9rem]">
                  Creative Softwares
                </h2>
                <div className="mt-5 space-y-6">
                  {aboutNarrative.map((paragraph) => (
                    <p key={paragraph} className="about-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[1.68rem] font-semibold tracking-[-0.045em] text-[#855c3f] sm:text-[1.9rem]">
                  {missionStatement.title}
                </h2>
                <p className="about-paragraph mt-5">{missionStatement.text}</p>
                <div className="mt-6 space-y-2 text-[0.95rem] font-medium text-[#6e5543]">
                  <p>{siteConfig.responseTime}</p>
                  <p>{siteConfig.consultation}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 flex flex-col gap-5 border-t border-[#c49a7c]/12 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">Start a project</span>
            <h2 className="mt-4 text-[1.65rem] font-semibold tracking-[-0.045em] text-[#855c3f] sm:text-[1.9rem]">
              Need an app, website, or focused client build?
            </h2>
            <p className="mt-3 text-[1rem] leading-7 text-[#6e5543]">
              Share the requirement and we can discuss a clean first version with a realistic
              delivery direction.
            </p>
          </div>

          <Link href="/contact" className="button-copper w-fit">
            Discuss your project
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
