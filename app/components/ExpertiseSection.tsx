import Link from "next/link";

import { expertiseServices } from "../site-content";
import IconBadge from "./IconBadge";
import { ArrowUpRightIcon } from "./SiteIcons";

export default function ExpertiseSection() {
  return (
    <section className="expertise-section relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
      <div className="expertise-scene" aria-hidden="true">
        <div className="expertise-scene-haze" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-[2.7rem] font-extrabold tracking-[-0.055em] text-[#2d1810] sm:text-[3.3rem] lg:text-[4rem]">
            Our Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-[1.02rem] leading-8 text-[#6e5543] sm:text-[1.1rem]">
            Creative Softwares focuses on Android apps, business websites, and
            practical client builds that can be scoped clearly and shipped
            without inflated claims.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expertiseServices.map((service) => (
            <article key={service.title} className="expertise-card rounded-[2rem] p-7 sm:p-8">
              <span className="expertise-icon-shell">
                <IconBadge name={service.icon} />
              </span>

              <div className="mt-6">
                <h3 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-[#2d1810]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#6e5543]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="expertise-bullet">
                      <span className="expertise-bullet-dot" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="button-copper px-6 py-3.5">
            Start a project
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
