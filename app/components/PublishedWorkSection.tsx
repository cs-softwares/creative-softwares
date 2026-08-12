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

export default function PublishedWorkSection() {
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="featured-project-card expertise-card rounded-[2rem] p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="featured-project-category">
                  {project.platform} / {project.category}
                </p>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 h-10 w-10 shrink-0 rounded-[1rem] bg-gradient-to-br ${project.accent}`}
                />
              </div>

              <div className="mt-5">
                <p className="featured-project-category">
                  {project.metric}
                </p>

                <h3 className="mt-2 text-[1.38rem] font-semibold tracking-[-0.04em] text-[#2d1810]">
                  {project.title}
                </h3>

                <p className="mt-3 text-[0.96rem] leading-7 text-[#6e5543]">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-3 text-[0.94rem] font-medium text-[#6e5543]">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-[#c49a7c] shadow-[0_0_0_4px_rgba(196,154,124,0.12)]"
                  />
                  <span>{project.release}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#c49a7c]/16 bg-[#fff9f5] px-3 py-1.5 text-[0.82rem] font-medium text-[#8f6f55]"
                    >
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
