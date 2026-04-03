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
      <body className="min-h-screen text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// layout: 1775240259260
