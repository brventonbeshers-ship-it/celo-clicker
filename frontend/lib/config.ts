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

// cfg: 1775273106983

// cfg: 1775286168924

// cfg: 1775383701875

// cfg: 1775390144583

// cfg: 1775437448527

// cfg: 1775511122622

// cfg: 1775598820450

// cfg: 1775643684445

// cfg: 1775695612006

// cfg: 1775710795800

// cfg: 1775796365604

// cfg: 1775828121853

// cfg: 1775871085918

// cfg: 1775919947948

// cfg: 1775966270118

// cfg: 1776046250310
