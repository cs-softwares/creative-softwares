import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import ExpertiseSection from "./components/ExpertiseSection";
import HeroSection from "./components/HeroSection";
import PublishedWorkSection from "./components/PublishedWorkSection";
import ProcessSection from "./components/ProcessSection";
import { heroStats, siteConfig } from "./site-content";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundSrc="/creative-software-hero.jpeg"
        heading={"Real Apps\nBuilt to Launch"}
        description="Creative Softwares already has three Android apps live on Google Play, including two owned products and one client delivery. The focus is practical app and website work that is ready to launch and use."
        primaryHref="/contact"
        secondaryHref={siteConfig.featuredWorkHref}
        stats={heroStats}
      />

      <ExpertiseSection />

      <AboutSection />

      <PublishedWorkSection />

      <ProcessSection
        eyebrow="How We Work"
        title="From idea to launch."
        description="Every project moves through discovery, planning, development, and release support with direct communication throughout."
      />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#a87552]">
                Get in Touch
              </p>
              <h2 className="max-w-[11ch] text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#2d1810] sm:text-[3.25rem]">
                Start with a simple conversation.
              </h2>
              <p className="max-w-[31rem] border-l-2 border-[#c49a7c]/24 pl-4 text-[1.02rem] leading-8 text-[#6e5543] sm:text-[1.07rem]">
                Reach out for an Android app, a business website, or a focused software build.
                We reply directly and keep the discussion clear from the start.
              </p>
            </div>

            <div className="space-y-1">
              <div className="border-t border-[#c49a7c]/14 py-5">
                <div>
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#a87552]">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block break-all text-[1.16rem] font-semibold tracking-[-0.02em] text-[#2d1810]"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="mt-1 text-sm leading-6 text-[#6e5543]">
                    Best for project details, references, and written discussion.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#c49a7c]/14 py-5">
                <div>
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#a87552]">
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="mt-2 block text-[1.16rem] font-semibold tracking-[-0.02em] text-[#2d1810]"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <p className="mt-1 text-sm leading-6 text-[#6e5543]">
                    {siteConfig.hours} • Response time: {siteConfig.responseTime}
                  </p>
                </div>
              </div>

              <div className="border-y border-[#c49a7c]/14 py-5">
                <div>
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#a87552]">
                    Location
                  </p>
                  <p className="mt-2 text-[1.16rem] font-semibold tracking-[-0.02em] text-[#2d1810]">
                    {siteConfig.location}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6e5543]">
                    {siteConfig.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
