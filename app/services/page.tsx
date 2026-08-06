import type { Metadata } from "next";
import Link from "next/link";

import IconBadge from "../components/IconBadge";
import PageHero from "../components/PageHero";
import { ArrowUpRightIcon } from "../components/SiteIcons";
import { processSteps, services, siteConfig } from "../site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Creative Softwares services across Android apps, business websites, and focused client software work.",
};

export default function ServicesPage() {
  const serviceHighlights = [
    {
      label: "Best fit",
      value: "Android products, business websites, and targeted improvements.",
    },
    {
      label: "Engagement",
      value: "Direct founder conversation with practical scope and straightforward delivery.",
    },
    {
      label: "After launch",
      value: "Publishing support, refinements, and follow-up updates when needed.",
    },
  ];

  return (
    <>
      <PageHero
        variant="plain"
        title="Android apps, business websites, and focused client builds."
        description="This page covers the kind of work Creative Softwares handles most confidently, from Android products to business-facing websites and scoped client projects."
      />

      <section className="px-4 pb-10 pt-3 sm:px-6 lg:px-8">
        <div className="services-overview-shell mx-auto max-w-7xl">
          <div className="services-overview-copy">
            <p className="services-overview-kicker">Service approach</p>
            <h2 className="services-overview-title">
              Built to move from discussion to release without unnecessary noise.
            </h2>
            <p className="services-overview-description">
              The work is kept understandable at the start, steady during execution, and
              ready to improve after the first version goes live.
            </p>
          </div>

          <div className="services-overview-stats">
            {serviceHighlights.map((item) => (
              <div key={item.label} className="services-overview-stat">
                <p className="services-overview-stat-label">{item.label}</p>
                <p className="services-overview-stat-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="services-section-kicker">Service Areas</p>
            <h2 className="services-section-title">
              Where the work is strongest.
            </h2>
            <p className="services-section-description">
              Each offer reflects work that is already being built, shipped, and improved,
              so the page stays credible instead of trying to claim everything.
            </p>
          </div>

          <div className="services-grid mt-10">
            {services.map((service) => (
              <article key={service.title} className="service-offer">
                <div className="service-offer-top">
                  <p className="service-offer-eyebrow">
                    {service.eyebrow}
                  </p>
                  <span className="icon-shell service-offer-icon">
                    <IconBadge name={service.icon} />
                  </span>
                </div>

                <div className="service-offer-body">
                  <h2 className="service-offer-title">{service.title}</h2>
                  <p className="service-offer-copy">{service.description}</p>
                </div>

                <div className="service-offer-divider" />

                <ul className="service-offer-list">
                  {service.features.map((feature) => (
                    <li key={feature} className="service-offer-item">
                      <span className="service-offer-dot" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="services-flow-shell mx-auto max-w-7xl">
          <div className="services-flow-head">
            <p className="services-flow-kicker">Project flow</p>
            <h2 className="services-flow-title">
              A straightforward path from first requirement to launch.
            </h2>
            <p className="services-flow-description">
              Each project moves through a short, visible sequence so progress feels clear
              from the first discussion to the release itself.
            </p>
          </div>

          <div className="services-flow-grid">
            {processSteps.map((step) => (
              <article key={step.number} className="services-flow-step">
                <div className="services-flow-step-top">
                  <span className="services-flow-step-number">{step.number}</span>
                  <h3 className="services-flow-step-title">{step.title}</h3>
                </div>
                <p className="services-flow-step-copy">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="services-cta-shell mx-auto max-w-7xl">
          <div className="services-cta-copy">
            <p className="services-cta-eyebrow">Start the discussion</p>
            <h2 className="services-cta-title">
              Need an app, website, or focused product improvement?
            </h2>
            <p className="services-cta-description">
              Share the requirement, business goal, or product idea and the discussion can
              begin with a realistic first version and a clear scope.
            </p>

            <div className="services-cta-meta">
              <span>{siteConfig.responseTime}</span>
              <span>{siteConfig.consultation}</span>
            </div>
          </div>

          <Link href="/contact" className="button-copper services-cta-button">
            Start your project
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
