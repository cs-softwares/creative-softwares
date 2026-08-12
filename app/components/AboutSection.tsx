import Image from "next/image";

import { aboutParagraphs, missionStatement, teamProfiles } from "../site-content";

export default function AboutSection() {
  return (
    <section className="about-section relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
      <div className="about-scene" aria-hidden="true">
        <div className="about-scene-haze" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="max-w-none">
          <h2 className="text-[2.2rem] font-medium tracking-[-0.045em] text-[#2d1810] sm:text-[2.7rem] lg:text-[3.1rem] lg:whitespace-nowrap xl:text-[3.3rem]">
            About Creative Softwares
          </h2>
        </div>

        <article className="about-card mt-14 rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="max-w-3xl">
            <span className="section-kicker">Leadership</span>
            <h3 className="mt-5 text-[1.8rem] font-semibold tracking-[-0.045em] text-[#855c3f] sm:text-[2.2rem]">
              The people behind Creative Softwares.
            </h3>
            <p className="mt-4 text-[0.98rem] leading-7 text-[#6e5543] sm:text-[1.04rem]">
              Sneha Shankhwar founded and primarily manages the brand, with advisory and
              operational support from Abhishek Kumar Kamal.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {teamProfiles.map((profile, index) => (
              <div
                key={profile.name}
                className={`text-center ${
                  index === 0
                    ? ""
                    : "border-t border-[#c49a7c]/14 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
                }`}
              >
                <div className="mx-auto w-full max-w-[12rem]">
                  <div className="relative aspect-square overflow-hidden rounded-full border-[5px] border-[#f1e3d7] bg-[#fff9f5] shadow-[0_14px_28px_rgba(45,24,16,0.08)]">
                    {profile.imageSrc ? (
                      <Image
                        src={profile.imageSrc}
                        alt={profile.name}
                        fill
                        sizes="(max-width: 1024px) 220px, 260px"
                        className="object-cover object-[center_34%]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#f1e3d7] text-[2rem] font-bold tracking-[-0.08em] text-[#855c3f]">
                        <span>{profile.initials}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.04em] text-[#2d1810]">
                    {profile.name}
                  </h4>
                  <p className="mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#8d6548]">
                    {profile.role}
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-7 text-[#6e5543]">{profile.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-12 border-t border-[#c49a7c]/12 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div>
              <h3 className="text-[1.68rem] font-semibold tracking-[-0.045em] text-[#855c3f] sm:text-[1.9rem]">
                Creative Softwares
              </h3>
              <div className="mt-5 space-y-6">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="about-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[1.68rem] font-semibold tracking-[-0.045em] text-[#855c3f] sm:text-[1.9rem]">
                {missionStatement.title}
              </h3>
              <p className="about-paragraph mt-5">
                {missionStatement.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
