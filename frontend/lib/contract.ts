import { CONTRACT_ADDRESS } from "./config";

export const CELO_CLICKER_ABI = [
  {
    inputs: [],
    name: "tap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "globalCounter",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "user", type: "address" }],
    name: "getUserCount",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLeaderboard",
    outputs: [
      { name: "", type: "address[10]" },
      { name: "", type: "uint256[10]" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const contractConfig = {
  address: CONTRACT_ADDRESS as `0x${string}`,
  abi: CELO_CLICKER_ABI,
} as const;

// abi: 1775240399703

// abi: 1775273072122

// abi: 1775285729923

// abi: 1775383815081

// abi: 1775390151770

// abi: 1775437587933

// abi: 1775511077637

// abi: 1775598744038

// abi: 1775643530221
