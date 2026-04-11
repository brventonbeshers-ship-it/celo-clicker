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

// page: 1775273127574

// page: 1775285680847

// page: 1775383812887

// page: 1775390075331

// page: 1775437516495

// page: 1775511116287

// page: 1775598902142

// page: 1775643526054

// page: 1775695659319

// page: 1775751941557

// page: 1775796380294

// page: 1775828195162

// page: 1775871186444
