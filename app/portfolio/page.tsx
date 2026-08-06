import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "../components/PageHero";
import { ArrowUpRightIcon } from "../components/SiteIcons";
import { projects } from "../site-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse real Creative Softwares work across published Google Play apps, client delivery, and the current company website.",
};

const portfolioStats = [
  { value: "3", label: "Apps live on Google Play" },
  { value: "2", label: "Owned products in the portfolio" },
  { value: "1", label: "Client delivery already published" },
];

export default function PortfolioPage() {
  const appProjects = projects.filter((project) => project.eyebrow !== "BUSINESS WEBSITE");
  const websiteProject = projects.find((project) => project.eyebrow === "BUSINESS WEBSITE");

  return (
    <>
      <PageHero
        variant="plain"
        title="Real work already shipped through Creative Softwares."
        description="Published Android apps, client delivery, and the current company website presented through a cleaner view of the work."
      />

      <section className="px-4 pb-6 pt-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="portfolio-page-summary-grid">
            {portfolioStats.map((stat) => (
              <article key={stat.label} className="portfolio-page-summary-card">
                <p className="portfolio-page-summary-value">{stat.value}</p>
                <p className="portfolio-page-summary-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="published-apps" className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="portfolio-page-section-heading">
            <p className="portfolio-page-kicker">Published apps</p>
            <h2 className="portfolio-page-title">Android products already live on Google Play.</h2>
            <p className="portfolio-page-description">
              Owned products and one client delivery, shown in a simpler layout with the
              essential project details kept clear.
            </p>
          </div>

          <div className="portfolio-page-grid mt-10">
            {appProjects.map((project) => (
              <article key={project.title} className="portfolio-page-card">
                <div className="portfolio-page-card-top">
                  <div className="portfolio-page-card-head">
                    <p className="portfolio-page-card-eyebrow">{project.eyebrow}</p>
                    <h3 className="portfolio-page-card-title">{project.title}</h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`portfolio-page-accent bg-gradient-to-br ${project.accent}`}
                  />
                </div>

                <p className="portfolio-page-card-copy">{project.description}</p>

                <div className="portfolio-page-meta-list">
                  {project.details.map((detail) => (
                    <p key={detail} className="portfolio-page-meta-item">
                      <span className="portfolio-page-meta-dot" aria-hidden="true" />
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>

                <div className="portfolio-page-tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-page-link"
                >
                  {project.linkLabel}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {websiteProject ? (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="portfolio-page-section-heading">
              <p className="portfolio-page-kicker">Business website</p>
              <h2 className="portfolio-page-title">The current brand website is part of the portfolio too.</h2>
              <p className="portfolio-page-description">
                This site is also a shipped project, built to present services, published apps,
                and contact flow through a responsive company website.
              </p>
            </div>

            <article className="portfolio-page-wide-card mt-10">
              <div className="portfolio-page-card-top">
                <div className="portfolio-page-card-head">
                  <p className="portfolio-page-card-eyebrow">{websiteProject.eyebrow}</p>
                  <h3 className="portfolio-page-card-title">{websiteProject.title}</h3>
                </div>
                <span
                  aria-hidden="true"
                  className={`portfolio-page-accent bg-gradient-to-br ${websiteProject.accent}`}
                />
              </div>

              <p className="portfolio-page-card-copy">{websiteProject.description}</p>

              <div className="portfolio-page-meta-list">
                {websiteProject.details.map((detail) => (
                  <p key={detail} className="portfolio-page-meta-item">
                    <span className="portfolio-page-meta-dot" aria-hidden="true" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>

              <div className="portfolio-page-tag-row">
                {websiteProject.tags.map((tag) => (
                  <span key={tag} className="pill-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={websiteProject.href} className="portfolio-page-link">
                {websiteProject.linkLabel}
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border-t border-[#c49a7c]/12 pt-10">
          <div className="portfolio-page-cta-row">
            <div className="max-w-2xl">
              <p className="portfolio-page-kicker">Next step</p>
              <h2 className="portfolio-page-title mt-4">
                Need a similar app or website built for your own brand?
              </h2>
              <p className="portfolio-page-description mt-3">
                If you want something in the same direction, the next step can start with a
                focused requirement discussion and a practical first version.
              </p>
            </div>

            <Link href="/contact" className="button-copper w-fit">
              Discuss your project
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
