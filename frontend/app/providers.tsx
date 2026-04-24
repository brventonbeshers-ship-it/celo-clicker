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

// providers: 1776170426549

// providers: 1776185952702

// providers: 1776214742408

// providers: 1776247404225

// providers: 1776256096711

// providers: 1776269264705

// providers: 1776315299515

// providers: 1776330647481

// providers: 1776349228045

// providers: 1776372206274

// providers: 1776400658206

// providers: 1776431357225

// providers: 1776459070742

// providers: 1776478727581

// providers: 1776492738011

// providers: 1776517390686

// providers: 1776548822610

// providers: 1776584387509

// providers: 1776618315871

// providers: 1776643281502

// providers: 1776671187514

// providers: 1776678577747

// providers: 1776700408389

// providers: 1776750718284

// providers: 1776779969569

// providers: 1776803588996

// providers: 1776816327058

// providers: 1776833181262

// providers: 1776862016147

// providers: 1776875383207

// providers: 1776888867717

// providers: 1776937991304

// providers: 1776961211290

// providers: 1777000497846

// providers: 1777023960261
