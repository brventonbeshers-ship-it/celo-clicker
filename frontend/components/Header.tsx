"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const isMiniPay = useMiniPay();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-dark/80 border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Celo Clicker
        </h1>
        {!isMiniPay && <ConnectButton />}
      </div>
    </header>
  );
}

// header: 1775240020322

// header: 1775273215245

// header: 1775285661526

// header: 1775383858139

// header: 1775390223910

// header: 1775437551894

// header: 1775511027627

// header: 1775598907304

// header: 1775643588201
