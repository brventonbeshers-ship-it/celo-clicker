import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celo } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Celo Clicker",
  projectId: "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8",
  chains: [celo],
  ssr: true,
});

// wagmi: 1775240356177

// wagmi: 1775273266798
