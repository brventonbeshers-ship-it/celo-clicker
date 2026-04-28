"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const { isMiniPay, isConnected, connect } = useMiniPay();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-dark/80 border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Celo Clicker
        </h1>
        {isMiniPay ? (
          !isConnected && (
            <button
              type="button"
              onClick={() => void connect()}
              className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Connect MiniPay
            </button>
          )
        ) : (
          <ConnectButton />
        )}
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

// header: 1776269432862

// header: 1776315225107

// header: 1776330714389

// header: 1776349281146

// header: 1776372208462

// header: 1776400642451

// header: 1776431531385

// header: 1776459191422

// header: 1776478788060

// header: 1776492842112

// header: 1776517196639

// header: 1776548691451

// header: 1776584261338

// header: 1776618260796

// header: 1776643284749

// header: 1776671351889

// header: 1776678400272

// header: 1776700568191

// header: 1776750775935

// header: 1776779976050

// header: 1776803455854

// header: 1776816512448

// header: 1776833316563

// header: 1776862157940

// header: 1776875426637

// header: 1776888858247

// header: 1776937838754

// header: 1777000435841

// header: 1777023908954

// header: 1777036368694

// header: 1777065446730

// header: 1777102544448

// header: 1777118274888

// header: 1777168210279

// header: 1777182981142

// header: 1777193381246

// header: 1777213768905

// header: 1777236508875

// header: 1777327483432

// header: 1777355200489
