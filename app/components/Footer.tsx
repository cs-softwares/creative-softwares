import Link from "next/link";

import { footerGroups, independenceDisclosure, siteConfig } from "../site-content";
import { ArrowUpRightIcon } from "./SiteIcons";

export default function Footer() {
  return (
    <footer className="footer-shell relative mt-20 overflow-hidden border-t border-[#c49a7c]/12">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="footer-hero">
          <div className="footer-hero-copy">
            <p className="footer-eyebrow">Real Product Delivery</p>
            <h2 className="footer-title">
              Launch-ready apps, websites, and focused client builds.
            </h2>
            <p className="footer-description">
              Creative Softwares keeps the process clear from the first discussion to
              release, with practical scope, steady execution, and direct communication.
            </p>
          </div>

          <div className="footer-panel">
            <p className="footer-panel-note">
              Share the goal, requirement, or timeline and we can begin with a clear
              next step.
            </p>

            <Link href="/contact" className="footer-cta-link">
              Start a conversation
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="footer-links-grid">
          {footerGroups.map((group) => (
            <div key={group.title} className="footer-link-group">
              <h3 className="footer-link-heading">{group.title}</h3>
              <ul className="footer-link-list">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    {link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? (
                      <a href={link.href} className="footer-link-anchor">
                        {link.label}
                      </a>
                    ) : link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link-anchor"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="footer-link-anchor">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div>
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2 max-w-3xl text-sm leading-6">{independenceDisclosure}</p>
          </div>
          <p>{siteConfig.availability}</p>
        </div>
      </div>
    </footer>
  );
}
