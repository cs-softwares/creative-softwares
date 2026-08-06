"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

import { navLinks, siteConfig } from "../site-content";
import BrandMark from "./BrandMark";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./SiteIcons";

type ThemeMode = "light" | "dark";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const theme = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") {
        return () => {};
      }

      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => onStoreChange();

      window.addEventListener("creative-theme-change", handleChange);
      window.addEventListener("storage", handleChange);
      media.addEventListener("change", handleChange);

      return () => {
        window.removeEventListener("creative-theme-change", handleChange);
        window.removeEventListener("storage", handleChange);
        media.removeEventListener("change", handleChange);
      };
    },
    () =>
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    () => "light"
  );

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", nextTheme === "dark");
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    window.localStorage.setItem("creative-theme", nextTheme);
    window.dispatchEvent(new Event("creative-theme-change"));
  }

  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header className="header-frame fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6 lg:px-8">
        <div className="header-shell mx-auto flex items-center justify-between px-1 py-3 sm:px-1">
          <Link
            href="/"
            className="flex items-center gap-3.5 text-[#2d1810]"
            onClick={() => setOpen(false)}
          >
            <BrandMark className="brand-mark h-11 w-11 shrink-0" />
            <span className="brand-lockup">
              <span className="brand-title">
                <span className="brand-title-primary">Creative</span>
                <span className="brand-title-primary">Softwares</span>
              </span>
              <span className="brand-tagline hidden sm:block">Android Apps & Websites</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`header-link text-[0.98rem] font-semibold transition ${
                    active
                      ? "text-[#2d1810] after:scale-x-100"
                      : "text-[#6e5543] hover:text-[#2d1810] after:scale-x-0"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle hidden md:inline-flex"
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <Link
              href={siteConfig.featuredWorkHref}
              className="button-ghost hidden lg:inline-flex lg:px-4 lg:py-2.5"
            >
              View Apps
            </Link>

            <Link href="/contact" className="button-copper hidden sm:inline-flex sm:px-4 sm:py-2.5">
              Discuss Project
            </Link>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#c49a7c]/20 bg-white/50 text-[#b08968] backdrop-blur-xl md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="header-mobile-panel mt-3 rounded-[1.5rem] px-5 py-5 md:hidden">
            <div className="mb-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={themeLabel}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
              <Link
                href={siteConfig.featuredWorkHref}
                onClick={() => setOpen(false)}
                className="button-ghost"
              >
                View Apps
              </Link>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#6e5543] transition hover:bg-[#fff7f2] hover:text-[#855c3f]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="button-copper mt-4 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Discuss Project
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
