"use client";

import Header from "@/components/Header";
import TapButton from "@/components/TapButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Tap to Earn
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every tap is recorded on the Celo blockchain. Climb the leaderboard and become the top clicker!
          </p>
        </div>
        <TapButton />
      </main>
    </>
  );
}

// page: 1775240378352
