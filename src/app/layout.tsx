import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Syed Muhammad Saad – Video Editor & Motion Graphics Designer",
    template: "%s | Syed Muhammad Saad",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Syed Muhammad Saad specializes in DaVinci Resolve, Premiere Pro, and Capcut — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Syed Saad Ahmed",
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Pakistan Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Syed Muhammad Saad", url: "https://syedmuhammadsaad.vercel.app" }],
  creator: "Syed Muhammad Saad",
  publisher: "Syed Muhammad Saad",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syedmuhammadsaad.vercel.app",
    title: "Syed Muhammad Saad – Video Editor & Motion Graphics Designer",
    description:
      "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and Capcut.",
    siteName: "Syed Muhammad Saad Portfolio",
    images: [
      {
        url: "/saadimg1.jpeg",
        width: 1200,
        height: 630,
        alt: "Syed Muhammad Saad - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Muhammad Saad – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    images: ["/saadimg1.jpeg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://syedmuhammadsaad.vercel.app",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* <link rel="icon" href="/public/companies/sl-logo.png" />
        <link rel="apple-touch-icon" href="/public/companies/sl-logo.png" /> */}
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Syed Muhammad Saad",
              url: "https://syedmuhammadsaad.vercel.app",
              image: "/saadimg1.jpeg",
              sameAs: [
                "https://syedmuhammadsaad.vercel.app",
                "https://www.linkedin.com/in/muhammad-saad-ahmed-a39bbb334/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              ],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Capcut",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "University of Karachi",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <MouseMoveEffect />
            <Navbar />
            <main className="">{children}</main>
            <Footer />
            <JumpToTop />
            <Toaster position="top-center" />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
