import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sohaib Younas | Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js, JavaScript, TypeScript and modern responsive web applications. Based in Pakistan.",
  keywords: [
    "Sohaib Younas",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Pakistan",
    "Web Developer",
  ],
  authors: [{ name: "Sohaib Younas" }],
  creator: "Sohaib Younas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sohaib.dev",
    siteName: "Sohaib Younas",
    title: "Sohaib Younas — Frontend Developer | React & Next.js",
    description:
      "Frontend Developer specializing in React.js, Next.js, JavaScript, TypeScript and modern responsive web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohaib Younas — Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, JavaScript, TypeScript and modern web applications.",
    creator: "@sohaib_younas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sohaib Younas",
              jobTitle: "Frontend Developer",
              url: "https://sohaib.dev",
              sameAs: [
                "https://github.com/sohaib-younas",
                "https://linkedin.com/in/sohaib-younas",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "REST APIs",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="grain-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
