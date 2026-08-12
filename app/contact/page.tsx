import type { Metadata } from "next";

import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { MailIcon, PhoneIcon, PinIcon } from "../components/SiteIcons";
import { siteConfig } from "../site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Creative Softwares and get in touch about Android apps, websites, or client software work.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's talk about the next build."
        description="Contact Creative Softwares, an independent software development brand based in India, about an Android app, website, or focused software project."
      />

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="glass-panel rounded-[1.8rem] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#a87552]">
                Business information
              </p>
              <dl className="mt-4 grid gap-3 text-[#6e5543]">
                <div><dt className="font-semibold text-[#2d1810]">Brand name</dt><dd>{siteConfig.name}</dd></div>
                <div><dt className="font-semibold text-[#2d1810]">Country</dt><dd>India</dd></div>
                <div><dt className="font-semibold text-[#2d1810]">Contact email</dt><dd><a href={`mailto:${siteConfig.email}`} className="break-all">{siteConfig.email}</a></dd></div>
              </dl>
            </div>
            <div className="glass-panel-strong rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#a87552]">
                Availability
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#2d1810]">
                Open for Android app, website, and client software engagements.
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-[#c49a7c]/15 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#a87552]">
                    Response
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2d1810]">
                    {siteConfig.responseTime}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-[#c49a7c]/15 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#a87552]">
                    Start window
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2d1810]">
                    {siteConfig.projectStart}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-[#c49a7c]/15 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#a87552]">
                    Consultation
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2d1810]">
                    {siteConfig.consultation}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[1.8rem] p-6">
              <div className="flex items-start gap-4">
                <span className="icon-shell">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#a87552]">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-lg font-semibold text-[#2d1810]"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-sm text-[#6e5543]">
                    Best for project briefs and requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[1.8rem] p-6">
              <div className="flex items-start gap-4">
                <span className="icon-shell">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#a87552]">
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="mt-1 block text-lg font-semibold text-[#2d1810]"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <p className="text-sm text-[#6e5543]">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[1.8rem] p-6">
              <div className="flex items-start gap-4">
                <span className="icon-shell">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#a87552]">
                    Location
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#2d1810]">
                    {siteConfig.location}
                  </p>
                  <p className="text-sm text-[#6e5543]">{siteConfig.availability}</p>
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
