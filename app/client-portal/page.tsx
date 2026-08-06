import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "../components/PageHero";
import { ArrowUpRightIcon } from "../components/SiteIcons";

export const metadata: Metadata = {
  title: "Project Access",
  description:
    "Project access information for Creative Softwares clients and active engagements.",
};

export default function ClientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Access"
        title="Active project files are shared directly, not through a public self-serve portal."
        description="If you are working with Creative Softwares, project files and review links are provided privately for your engagement."
      />

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.2rem] glass-panel-strong p-8 sm:p-10">
          <div className="space-y-5">
            <span className="section-kicker">Access details</span>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#2d1810] sm:text-5xl">
              Need files or updates for an ongoing project?
            </h2>
            <p className="max-w-3xl text-base leading-7 text-[#6e5543] sm:text-lg">
              Reach out with your project details and the required documents, builds, or review
              links can be shared directly.
            </p>
            <Link href="/contact" className="button-copper">
              Contact Creative Softwares
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
