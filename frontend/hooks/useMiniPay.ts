"use client";
import { useState, useEffect, useCallback } from "react";
import { createWalletClient, custom, type WalletClient } from "viem";
import { celo } from "viem/chains";

interface MiniPayState {
  isMiniPay: boolean;
  address: string | null;
  walletClient: WalletClient | null;
  connect: () => Promise<void>;
}

export function useMiniPay(): MiniPayState {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
      autoConnect();
    }
  }, []);

  async function autoConnect() {
    try {
      const provider = (window as any).ethereum;
      const accounts = await provider.request({ method: "eth_requestAccounts" });
      if (accounts[0]) {
        setAddress(accounts[0]);
        const client = createWalletClient({
          account: accounts[0] as `0x${string}`,
          chain: celo,
          transport: custom(provider),
        });
        setWalletClient(client);
      }
    } catch {}
  }

  const connect = useCallback(async () => {
    if (isMiniPay) await autoConnect();
  }, [isMiniPay]);

  return { isMiniPay, address, walletClient, connect };
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
