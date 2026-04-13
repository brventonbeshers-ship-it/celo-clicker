"use client";

import { useState, useEffect } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { createPublicClient, http } from "viem";
import { celo } from "viem/chains";
import { contractConfig } from "@/lib/contract";
import { formatNumber, shortenAddress } from "@/lib/config";

const publicClient = createPublicClient({ chain: celo, transport: http() });

interface FloatingNumber {
  id: number;
  x: number;
  y: number;
}

export default function TapButton() {
  const { address, isConnected } = useAccount();
  const [globalCount, setGlobalCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [leaderboard, setLeaderboard] = useState<{ address: string; score: number }[]>([]);
  const [floats, setFloats] = useState<FloatingNumber[]>([]);

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    loadStats();
  }, [address]);

  useEffect(() => {
    if (isSuccess) loadStats();
  }, [isSuccess]);

  async function loadStats() {
    try {
      const global = await publicClient.readContract({
        ...contractConfig,
        functionName: "globalCounter",
      });
      setGlobalCount(Number(global));

      if (address) {
        const user = await publicClient.readContract({
          ...contractConfig,
          functionName: "getUserCount",
          args: [address],
        });
        setUserCount(Number(user));
      }

      const [addresses, scores] = await publicClient.readContract({
        ...contractConfig,
        functionName: "getLeaderboard",
      });
      const entries: { address: string; score: number }[] = [];
      for (let i = 0; i < 10; i++) {
        const addr = addresses[i];
        const score = Number(scores[i]);
        if (addr !== "0x0000000000000000000000000000000000000000" && score > 0) {
          entries.push({ address: addr, score });
        }
      }
      setLeaderboard(entries);
    } catch {}
  }

  function handleTap() {
    if (!isConnected || isPending || isConfirming) return;

    const id = Date.now();
    const x = 40 + Math.random() * 20;
    const y = 40 + Math.random() * 20;
    setFloats((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setFloats((prev) => prev.filter((f) => f.id !== id)), 800);

    writeContract({
      ...contractConfig,
      functionName: "tap",
    });
  }

  const busy = isPending || isConfirming;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Counters */}
      <div className="flex gap-8">
        <div className="glass-card p-6 text-center min-w-[140px]">
          <div className="text-3xl font-bold text-primary">{formatNumber(globalCount)}</div>
          <div className="text-sm text-gray-400 mt-1">Global Taps</div>
        </div>
        <div className="glass-card p-6 text-center min-w-[140px]">
          <div className="text-3xl font-bold text-accent">{formatNumber(userCount)}</div>
          <div className="text-sm text-gray-400 mt-1">Your Taps</div>
        </div>
      </div>

      {/* Tap area */}
      <div className="relative">
        <button
          onClick={handleTap}
          disabled={!isConnected || busy}
          className="btn-tap w-48 h-48 text-4xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {busy ? "..." : "TAP"}
        </button>
        {floats.map((f) => (
          <span
            key={f.id}
            className="absolute text-accent font-bold text-xl animate-float pointer-events-none"
            style={{ left: `${f.x}%`, top: `${f.y}%` }}
          >
            +1
          </span>
        ))}
      </div>

      {!isConnected && (
        <p className="text-gray-500 text-sm">Connect wallet to start tapping</p>
      )}

      {/* Leaderboard */}
      {leaderboard.length > 0 && (
        <div className="glass-card p-6 w-full max-w-md">
          <h3 className="text-lg font-bold text-center mb-4 text-primary">Leaderboard</h3>
          <div className="space-y-2">
            {leaderboard.map((entry, i) => (
              <div
                key={entry.address}
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-dark/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-500 w-6">#{i + 1}</span>
                  <span className="text-sm text-white">
                    {entry.address === address ? "You" : shortenAddress(entry.address)}
                  </span>
                </div>
                <span className="text-sm font-bold text-accent">{formatNumber(entry.score)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// tap: 1775240390522

// tap: 1775273397832

// tap: 1775285915182

// tap: 1775383751281

// tap: 1775390068150

// tap: 1775437438167

// tap: 1775511011895

// tap: 1775598779579

// tap: 1775643674087

// tap: 1775695829125

// tap: 1775710652895

// tap: 1775751855840

// tap: 1775796255503

// tap: 1775827945990

// tap: 1775871021591

// tap: 1775920016385

// tap: 1775966468813

// tap: 1776046280551

// tap: 1776062568505
