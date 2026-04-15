"use client";
import { useState, useEffect, useCallback } from "react";
import { injected, useAccount, useConnect } from "wagmi";

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
  const { connectAsync } = useConnect();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connect = useCallback(async () => {
    if (!isMiniPay || isConnected) return;
    await connectAsync({ connector: injected({ target: "metaMask" }) });
  }, [connectAsync, isConnected, isMiniPay]);

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
