import type { Metadata } from "next";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { siteConfig } from "./site-content";
import "./globals.css";
import "./theme-fix.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | Creative Softwares",
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var storedTheme = localStorage.getItem('creative-theme');
                var resolvedTheme = storedTheme || 'light';
                document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
                document.documentElement.dataset.theme = resolvedTheme;
                document.documentElement.style.colorScheme = resolvedTheme;
              } catch (error) {}
            `,
          }}
        />
        <Header />
        <main className="site-shell flex min-h-screen flex-col pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
