export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x1C6CA7f7433026F5bEEA4602b1E75BF78A8f9275";
export const CELO_RPC = "https://forno.celo.org";

export function shortenAddress(addr: string, head = 6, tail = 4): string {
  if (!addr) return "";
  return `${addr.slice(0, head)}...${addr.slice(-tail)}`;
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toLocaleString();
}

// cfg: 1775240004148
