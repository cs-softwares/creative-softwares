"use client";

import Image from "next/image";
import { useState } from "react";

import { ArrowUpRightIcon } from "./SiteIcons";
import {
  featuredProjectFilters,
  featuredProjects,
  appPublishingNote,
  type FeaturedProjectFilter,
} from "../site-content";

export default function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FeaturedProjectFilter>("All");

  const visibleProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.filter === activeFilter);

  return (
    <section className="featured-projects-section relative overflow-hidden px-5 pb-[120px] pt-[110px] sm:px-6 lg:px-8">
      <div className="featured-projects-scene" aria-hidden="true">
        <Image
          src="/creative-software-hero.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="featured-projects-scene-image"
        />
        <div className="featured-projects-scene-haze" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="featured-projects-title">Published Work</h2>
          <p className="featured-projects-description">
            These are the live Android products currently tied to Creative Softwares,
            including two owned apps and one client delivery published on Google Play.
          </p>
          <p className="featured-projects-description mt-3 text-sm">
            {appPublishingNote}
          </p>
        </div>

        <div className="featured-projects-filters">
          {featuredProjectFilters.map((filter) => {
            const active = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`featured-projects-filter-button ${
                  active
                    ? "featured-projects-filter-button-active"
                    : "featured-projects-filter-button-inactive"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="featured-projects-grid">
          {visibleProjects.map((project) => (
            <article key={project.title} className="featured-project-card">
              <div className="featured-project-card-hero">
                <div aria-hidden="true" className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} preview`}
                  width={1200}
                  height={700}
                  className="featured-project-card-image"
                />
                <div className="px-6 pb-0 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a87552]">
                      {project.platform} • {project.category}
                    </p>
                    <h3 className="featured-project-title mt-2 text-[1.38rem]">
                      {project.title}
                    </h3>
                    <div className="mt-3">
                      <p className="featured-project-meta mt-0">{project.release}</p>
                    </div>
                  </div>

                  <p className="featured-project-note mt-1 whitespace-nowrap">
                    {project.metric}
                  </p>
                </div>
                </div>
              </div>

              <div className="featured-project-card-content">
                <p className="featured-project-copy">{project.description}</p>

                <div className="featured-project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="featured-project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="featured-project-link mt-6"
                >
                  {project.linkLabel}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
