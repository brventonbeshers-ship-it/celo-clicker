"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const { isMiniPay } = useMiniPay();

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

// header: 1775695702677

// header: 1775710636179

// header: 1775751951192

// header: 1775796414337

// header: 1775827934242

// header: 1775871180062

// header: 1775919959471

// header: 1775966440557

// header: 1776046193213

// header: 1776062662244

// header: 1776083521679

// header: 1776115676545

// header: 1776143445670

// header: 1776170312811

// header: 1776185891261

// header: 1776214901503

// header: 1776247540613

// header: 1776256145584
