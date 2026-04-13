import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celo Clicker — Tap to Earn on Celo",
  description: "The ultimate on-chain clicker game on Celo. Tap, climb the leaderboard, earn your spot in history.",
  openGraph: {
    title: "Celo Clicker",
    description: "Tap-to-earn clicker game on Celo blockchain.",
    images: ["/og.png"],
  },
  other: {
    "talent-protocol-verification": "celo-clicker",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="talentapp:project_verification" content="fcb3849ef87c5460a70e6fbf3b31a2d8805dbffe167c13b06bf707643ec328e60aced17a7bd242aad64b54ebf91e787eaaec4c8f7447f404ac98108c3d3f8ead" />
      </head>
      <body className="min-h-screen text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// layout: 1775240259260

// layout: 1775273117330

// layout: 1775285715626

// layout: 1775383796519

// layout: 1775390304064

// layout: 1775437413170

// layout: 1775511154326

// layout: 1775598783742

// layout: 1775643593381

// layout: 1775695821772

// layout: 1775751792505

// layout: 1775796355274

// layout: 1775827986313

// layout: 1775871066076

// layout: 1775919892096

// layout: 1775966520822

// layout: 1776046284907
