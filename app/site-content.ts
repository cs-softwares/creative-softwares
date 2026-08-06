export type NavLink = {
  href: string;
  label: string;
};

export type ServiceCard = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  icon: "globe" | "mobile" | "cloud" | "layers";
};

export type ExpertiseCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: "globe" | "mobile" | "cloud" | "layers" | "spark" | "chart";
};

export type ValueCard = {
  title: string;
  description: string;
  icon: "spark" | "compass" | "shield" | "chart";
};

export type ProjectCard = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  href: string;
  linkLabel: string;
  details: string[];
};

export type FeaturedProjectFilter = "All" | "Owned Apps" | "Client Work";

export type FeaturedProject = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  imageSrc: string;
  metric: string;
  release: string;
  platform: string;
  href: string;
  linkLabel: string;
  filter: Exclude<FeaturedProjectFilter, "All">;
  flagship?: boolean;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TeamProfile = {
  label: string;
  name: string;
  role: string;
  affiliation: string;
  summary: string;
  imageSrc?: string;
  initials?: string;
};

export const siteConfig = {
  name: "Creative Softwares",
  shortName: "CS",
  title: "Creative Softwares | Android Apps, Websites, and Custom Software",
  description:
    "Creative Softwares builds Android apps, business websites, and focused client software from India. The portfolio includes CalcQuick, DSA Academy: Coding Prep, and MotivationBooster on Google Play.",
  email: "creativesoftwares96@gmail.com",
  phone: "+919548488443",
  phoneDisplay: "+91 95484 88443",
  location: "Mainpuri, Uttar Pradesh, India",
  availability: "Available for remote client work worldwide",
  hours: "Mon-Sat: 10:00 AM - 7:00 PM IST",
  responseTime: "Within 24 hours",
  projectStart: "Based on scope",
  consultation: "Call or email discussion",
  featuredWorkHref: "/portfolio#published-apps",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { value: "3", label: "Apps live on Google Play" },
  { value: "1", label: "Client app delivered" },
];

export const expertiseServices: ExpertiseCard[] = [
  {
    title: "Android App Development",
    description:
      "Creative Softwares builds Android apps with a focus on everyday usability, reliable performance, and clean, direct interfaces.",
    bullets: ["Utility apps", "Learning apps", "Store-ready Android builds"],
    icon: "mobile",
  },
  {
    title: "Business Website Development",
    description:
      "Company websites are built to explain the offer clearly, look credible on every screen, and make it easy for clients to get in touch.",
    bullets: ["Responsive layouts", "Service websites", "Portfolio pages"],
    icon: "globe",
  },
  {
    title: "Client Product Delivery",
    description:
      "From planning to production release, client work is handled with direct communication and practical scope management.",
    bullets: ["Requirement discussion", "UI refinement", "Launch support"],
    icon: "chart",
  },
  {
    title: "Google Play Publishing",
    description:
      "Products can be prepared for release with listing-ready copy, production packaging, and post-launch update support.",
    bullets: ["Store publishing", "Version updates", "Ongoing fixes"],
    icon: "cloud",
  },
  {
    title: "Utility and Learning Products",
    description:
      "The current portfolio already includes a calculator app and a DSA learning product, showing a practical range of use cases.",
    bullets: ["Scientific calculators", "Coding prep", "Focused UX"],
    icon: "spark",
  },
  {
    title: "Custom Build Support",
    description:
      "Creative Softwares takes on focused client builds that need a practical product mindset instead of unnecessary complexity.",
    bullets: ["Direct ownership", "Fast iteration", "Clear handoff"],
    icon: "layers",
  },
];

export const teamProfiles: TeamProfile[] = [
  {
    label: "Founder",
    name: "Sneha Shankhwar",
    role: "Software Engineer",
    affiliation: "NIT Hamirpur",
    summary:
      "Focused on practical product delivery and clear software execution.",
    imageSrc: "/founder-photo.jpeg",
  },
  {
    label: "Mentor",
    name: "Abhishek Kumar Kamal",
    role: "Sr. Software Engineer II",
    affiliation: "IIT Delhi",
    summary:
      "Brings senior engineering perspective and steady technical guidance.",
    initials: "AK",
  },
];

export const aboutParagraphs = [
  "Creative Softwares is an independent software brand shaped by Sneha Shankhwar, bringing together product focus, thoughtful execution, and a steady engineering mindset.",
  "The foundation behind the work is simple: clear communication, dependable build quality, and a practical approach that keeps projects understandable from start to launch.",
  "With support from trusted mentorship and a strong learning background, the goal is to keep building software that feels useful, credible, and easy to trust.",
];

export const missionStatement = {
  title: "Mission",
  text: "Create useful software that is simple to understand, polished enough to trust, and practical enough to help real users and real businesses.",
};

export const featuredProjectFilters: FeaturedProjectFilter[] = [
  "All",
  "Owned Apps",
  "Client Work",
];

export const featuredProjects: FeaturedProject[] = [
  {
    category: "Owned Product",
    title: "CalcQuick: Sci Calculator",
    description:
      "A scientific calculator app that combines standard calculations with GST, EMI, unit conversion, and quick utility tools in one Android product.",
    tags: ["Scientific calculator", "GST and EMI", "Utility tools"],
    accent: "from-[#8f6f55] via-[#b08968] to-[#e7cdb8]",
    imageSrc: "/scientific-calculator-app.svg",
    metric: "100+ downloads",
    release: "Updated 25 May 2026",
    platform: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.calcquick.app",
    linkLabel: "View on Play Store",
    filter: "Owned Apps",
    flagship: true,
  },
  {
    category: "Client Delivery",
    title: "MotivationBooster",
    description:
      "A motivational quote app delivered for a client, with Hindi and English content, favorites, sharing, and category-based browsing.",
    tags: ["Client app", "Hindi and English", "Quote categories"],
    accent: "from-[#7a614f] via-[#b08968] to-[#f1ded0]",
    imageSrc: "/motivation-booster-app.svg",
    metric: "100+ downloads",
    release: "Updated 8 Mar 2026",
    platform: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.creativesoftwares.motivationbooster2",
    linkLabel: "View client app",
    filter: "Client Work",
  },
  {
    category: "Owned Product",
    title: "DSA Academy: Coding Prep",
    description:
      "A coding-prep app designed around DSA topics, problem-solving flow, and concept review for students and interview preparation.",
    tags: ["DSA prep", "Coding practice", "Learning app"],
    accent: "from-[#6f4330] via-[#8f6f55] to-[#ddb892]",
    imageSrc: "/dsa-learning-app.svg",
    metric: "10+ downloads",
    release: "Updated 3 Jul 2026",
    platform: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.dsaacademy.codingprep",
    linkLabel: "View on Play Store",
    filter: "Owned Apps",
  },
];

export const highlightBullets = [
  "3 apps already live on Google Play",
  "Android-first product experience",
  "Direct founder communication",
  "Client and owned product experience",
];

export const storyCards = [
  {
    title: "What is already shipped",
    description:
      "Three Android apps are already published on Google Play, including two owned products and one client delivery.",
  },
  {
    title: "What we build",
    description:
      "Creative Softwares focuses on Android apps, business websites, and focused custom builds that need practical delivery instead of noise.",
  },
  {
    title: "How we work",
    description:
      "Projects move through direct discussion, clear scope, incremental delivery, and straightforward launch support.",
  },
];

export const values: ValueCard[] = [
  {
    title: "Practical Product Thinking",
    description:
      "Every build is shaped around what the user needs to do, not around features that only look impressive in a pitch.",
    icon: "spark",
  },
  {
    title: "Clear UI Decisions",
    description:
      "Interfaces are kept clean, legible, and structured so people can understand the product quickly on mobile and desktop.",
    icon: "compass",
  },
  {
    title: "Reliable Ownership",
    description:
      "Clients work directly with the builder, which keeps communication short, decisions traceable, and execution consistent.",
    icon: "shield",
  },
  {
    title: "Honest Scope",
    description:
      "Creative Softwares is intentionally focused on the types of products already being shipped, instead of claiming every possible capability.",
    icon: "chart",
  },
];

export const services: ServiceCard[] = [
  {
    eyebrow: "Android Apps",
    title: "Utility and learning apps",
    description:
      "Android apps built for real usage, including calculators, coding-prep tools, and focused client products.",
    features: ["Android-first", "Play Store ready", "Practical UI"],
    icon: "mobile",
  },
  {
    eyebrow: "Web Development",
    title: "Business websites that explain clearly",
    description:
      "Responsive websites for companies, founders, and service businesses that need a credible web presence and clear communication.",
    features: ["Next.js builds", "Responsive design", "Lead-friendly structure"],
    icon: "globe",
  },
  {
    eyebrow: "Client Projects",
    title: "Focused custom software delivery",
    description:
      "Client requirements are handled with direct communication, practical planning, and a build process that stays close to the real goal.",
    features: ["Direct collaboration", "Scoped delivery", "Launch support"],
    icon: "layers",
  },
  {
    eyebrow: "Updates and Publishing",
    title: "Release support after the build",
    description:
      "The work does not stop at the first version. Creative Softwares can help with updates, release packaging, and follow-up improvements.",
    features: ["Version updates", "Store publishing", "Fixes and polish"],
    icon: "cloud",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Requirement discussion",
    description:
      "We start by understanding the exact goal, the audience, and the minimum version that should go live first.",
  },
  {
    number: "02",
    title: "Structure and interface planning",
    description:
      "Screens, sections, and flow are planned so the build has clarity before deeper implementation starts.",
  },
  {
    number: "03",
    title: "Build, test, and refine",
    description:
      "The product is developed in working increments, reviewed, and cleaned up so the release feels stable and intentional.",
  },
  {
    number: "04",
    title: "Launch and follow-up",
    description:
      "After release, Creative Softwares can help with store updates, content changes, and the next round of improvements.",
  },
];

export const projects: ProjectCard[] = [
  {
    eyebrow: "OWNED APP",
    title: "CalcQuick: Sci Calculator",
    description:
      "A multi-purpose calculator app that combines scientific calculations with GST, EMI, currency, and unit conversion features.",
    tags: ["Android", "Utility app", "Google Play"],
    accent: "from-[#a87552] via-[#ddb892] to-[#f6e8dc]",
    href: "https://play.google.com/store/apps/details?id=com.calcquick.app",
    linkLabel: "Open on Play Store",
    details: ["100+ downloads", "Updated May 2026", "Tools and converter workflow"],
  },
  {
    eyebrow: "CLIENT APP",
    title: "MotivationBooster",
    description:
      "A client-delivered quote and motivation app with bilingual content, favorites, sharing, and category-based discovery.",
    tags: ["Client work", "Android", "Production release"],
    accent: "from-[#6f4330] via-[#8f6f55] to-[#c49a7c]",
    href: "https://play.google.com/store/apps/details?id=com.creativesoftwares.motivationbooster2",
    linkLabel: "Open client app",
    details: ["100+ downloads", "Updated March 2026", "Hindi and English content"],
  },
  {
    eyebrow: "OWNED APP",
    title: "DSA Academy: Coding Prep",
    description:
      "A coding-prep product focused on DSA topics, concept review, and practice-oriented learning for interview preparation.",
    tags: ["Learning app", "Android", "Google Play"],
    accent: "from-[#5e3a28] via-[#8f6f55] to-[#ddb892]",
    href: "https://play.google.com/store/apps/details?id=com.dsaacademy.codingprep",
    linkLabel: "Open on Play Store",
    details: ["10+ downloads", "Updated July 2026", "Interview-focused content"],
  },
  {
    eyebrow: "BUSINESS WEBSITE",
    title: "Creative Softwares Website",
    description:
      "The current studio website built to present published apps, services, and contact information through a clean responsive layout.",
    tags: ["Next.js 16", "Responsive", "Company site"],
    accent: "from-[#f7ede5] via-[#e7cdb8] to-[#b08968]",
    href: "/",
    linkLabel: "View website",
    details: ["Built in Next.js", "Portfolio-first content", "Direct contact flow"],
  },
];

export const portfolioHighlights = [
  "Three published Android apps already available on Google Play",
  "Owned products and client delivery both represented in the portfolio",
  "Website and app work handled with direct founder involvement",
];

export const footerGroups = [
  {
    title: "Quick Links",
    links: navLinks,
  },
  {
    title: "Published Apps",
    links: [
      {
        href: "https://play.google.com/store/apps/details?id=com.calcquick.app",
        label: "CalcQuick",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.creativesoftwares.motivationbooster2",
        label: "MotivationBooster",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.dsaacademy.codingprep",
        label: "DSA Academy",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: `mailto:${siteConfig.email}`, label: siteConfig.email },
      { href: `tel:${siteConfig.phone}`, label: siteConfig.phoneDisplay },
      { href: "/contact", label: siteConfig.location },
    ],
  },
];
