import type { Metadata } from "next";
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
  title: "Rupinder Kaur - Frontend Developer | React & Next.js Expert",
  description: "Frontend developer specializing in React, Next.js, and modern web technologies. Building responsive, user-friendly interfaces with clean code and exceptional UX.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Tailwind CSS", "Web Development", "UI/UX"],
  authors: [{ name: "Rupinder Kaur" }],
  openGraph: {
    title: "Rupinder Kaur - Frontend Developer",
    description: "Frontend developer creating modern web experiences with React and Next.js",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
