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
