"use client";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/wagmi";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#F97316",
            accentColorForeground: "white",
            borderRadius: "large",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// providers: 1775240336990

// providers: 1775272885209

// providers: 1775285886830

// providers: 1775383866317

// providers: 1775390106380

// providers: 1775437520666

// providers: 1775511162676

// providers: 1775598898951

// providers: 1775643628168

// providers: 1775695787566

// providers: 1775751790176

// providers: 1775796268210

// providers: 1775827998042

// providers: 1775871142884

// providers: 1775920086956

// providers: 1775966402439

// providers: 1776046282735

// providers: 1776062457590

// providers: 1776083621621

// providers: 1776115792776

// providers: 1776143601176
