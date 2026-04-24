"use client";
import { useState, useEffect, useCallback } from "react";
import { useAccount, useConnect } from "wagmi";

interface MiniPayState {
  isMiniPay: boolean;
  address: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
}

let hasAttemptedMiniPayAutoConnect = false;

export function useMiniPay(): MiniPayState {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connect = useCallback(async () => {
    if (!isMiniPay || isConnected) return;
    const connector = connectors.find((item) => item.id === "injected") ?? connectors[0];
    if (!connector) return;
    try {
      await connectAsync({ connector });
    } catch (error) {
      console.warn("MiniPay connection failed", error);
    }
  }, [connectAsync, connectors, isConnected, isMiniPay]);

  useEffect(() => {
    if (!isMiniPay || isConnected || hasAttemptedMiniPayAutoConnect) return;
    hasAttemptedMiniPayAutoConnect = true;
    void connect();
  }, [connect, isConnected, isMiniPay]);

  return { isMiniPay, address: address ?? null, isConnected, connect };
}

// minipay: 1775240531536

// minipay: 1775273233438

// minipay: 1775286119559

// minipay: 1775383692673

// minipay: 1775390267322

// minipay: 1775437523836

// minipay: 1775511165860

// minipay: 1775598863494

// minipay: 1775643513539

// minipay: 1775695695313

// minipay: 1775710748256

// minipay: 1775751946873

// minipay: 1775796265038

// minipay: 1775828084994

// minipay: 1775871281689

// minipay: 1775920140305

// minipay: 1775966337790

// minipay: 1776046183695

// minipay: 1776062623466

// minipay: 1776083532239

// minipay: 1776115795970

// minipay: 1776143433144

// minipay: 1776170347120

// minipay: 1776186011572

// minipay: 1776214848161

// minipay: 1776247386496

// minipay: 1776256207428

// minipay: 1776269489459

// minipay: 1776315361550

// minipay: 1776330643295

// minipay: 1776349277985

// minipay: 1776372247194

// minipay: 1776400765956

// minipay: 1776431324792

// minipay: 1776459123831

// minipay: 1776478909449

// minipay: 1776492705442

// minipay: 1776517308540

// minipay: 1776548825848

// minipay: 1776584272048

// minipay: 1776618154319

// minipay: 1776643354772

// minipay: 1776671182251

// minipay: 1776678411028

// minipay: 1776700397665

// minipay: 1776750735572

// minipay: 1776780039677

// minipay: 1776803658556

// minipay: 1776816384755

// minipay: 1776833177021

// minipay: 1776862123003

// minipay: 1776875423404

// minipay: 1776888766125

// minipay: 1776937860911

// minipay: 1776961320747

// minipay: 1777000295823

// minipay: 1777024009740
