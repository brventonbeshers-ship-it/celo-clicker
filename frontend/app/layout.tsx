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

// layout: 1776062548403

// layout: 1776083668593

// layout: 1776115834303

// layout: 1776143530633

// layout: 1776170473044

// layout: 1776185680932

// layout: 1776214749763

// layout: 1776247354627

// layout: 1776256036225

// layout: 1776269262495

// layout: 1776315343832

// layout: 1776330751198

// layout: 1776349117133

// layout: 1776372255773

// layout: 1776400748031

// layout: 1776431521020

// layout: 1776459244792

// layout: 1776478858237

// layout: 1776492742259

// layout: 1776517467937

// layout: 1776549001636

// layout: 1776584367271

// layout: 1776618162791

// layout: 1776643276245

// layout: 1776671413361

// layout: 1776678524723

// layout: 1776700450862

// layout: 1776750740843

// layout: 1776780108183

// layout: 1776803665005

// layout: 1776816412666

// layout: 1776833172773

// layout: 1776862071494

// layout: 1776875360981

// layout: 1776888770385
