import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rupinder Kaur - Frontend Developer | React & Next.js Expert, Gurdaspur, Batala",
  description: "Frontend developer specializing in React, Next.js, and modern web technologies. Building responsive, user-friendly interfaces with clean code and exceptional UX.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Tailwind CSS", "Web Development", "UI/UX", "Rupinder Kaur", "Gurdaspur", "Batala"],
  authors: [{ name: "Rupinder Kaur Developer" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Rupinder Kaur - Frontend Developer",
    description: "Frontend developer creating modern web experiences with React and Next.js",
    type: "website",
    locale: "en_US",
    url: "https://rupinder.tech",
    siteName: "Rupinder Kaur Portfolio",
    images: [
      {
        url: "https://rupinder.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rupinder Kaur - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupinder Kaur - Frontend Developer",
    description: "Frontend developer creating modern web experiences with React and Next.js",
    images: ["https://rupinder.tech/og-image.jpg"],
    creator: "@rupinderkaur",
  },
  alternates: {
    canonical: "https://rupinder.tech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rupinder Kaur",
  jobTitle: "Frontend Developer",
  url: "https://rupinder.tech",
  sameAs: [
    "https://github.com/Rupinder-17",
    "https://linkedin.com/in/rupinder-kaur",
    "https://twitter.com/rupinderkaur",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
