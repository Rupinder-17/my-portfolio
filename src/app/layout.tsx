import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rupinder.tech"),

  title: {
    default: "Rupinder kaur - Full Stack web Developer in batala| React, Next.js Expert",
    template: "%s | Rupinder Kaur",
  },

  description:
    "Rupinder Kaur is a Full Stack web Developer specializing in React, Next.js, and Tailwind CSS. Builds fast, responsive, and user-friendly web applications.",

  keywords: [
    "Rupinder Kaur",
    "Full Stack web Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Web Developer in Punjab",
    "JavaScript Developer",
    "Batala Punjab",
    "Gurdaspur",
  ],

  authors: [{ name: "Rupinder Kaur" }],
  creator: "Rupinder Kaur",

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://rupinder.tech",
  },

  openGraph: {
    title: "Rupinder Kaur | Full Stack Developer",
    description:
      "Full Stack Developer building modern web apps using React, Next.js, and Tailwind CSS.",
    url: "https://rupinder.tech",
    siteName: "Rupinder Kaur Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rupinder Kaur Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rupinder Kaur | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web development.",
    images: ["/og-image.jpg"],
    creator: "@rupinderkaur",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "LviVTmatNBaA99kxtsaTXY-TQDejB8gl-O8zGBHDDN4",
  },

  category: "technology",
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
  jobTitle: "Full Stack web Developer",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="facebook-domain-verification" content="be1j1oa9n23rmq9i9b4bktgwm3vsio" />
        <Script
          src="/script/pixel.js"
          data-pixel-id={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}
          strategy="afterInteractive"
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1" />`,
          }}
        />
        <Script
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

