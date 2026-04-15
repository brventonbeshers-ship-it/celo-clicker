import { CONTRACT_ADDRESS, CELO_RPC } from "./config";
import {
  CeloClickerClient,
  CELO_CLICKER_ABI as SDK_ABI,
} from "celo-clicker-sdk";
export type { LeaderboardEntry, UserStats } from "celo-clicker-sdk";

const client = new CeloClickerClient({
  contractAddress: CONTRACT_ADDRESS,
  rpcUrl: CELO_RPC,
});

export const getGlobalCount = () => client.getGlobalCount();
export const getUserCount = (address: string) => client.getUserCount(address);
export const getLeaderboard = () => client.getLeaderboard();

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

// abi: 1775695863578

// abi: 1775710708658

// abi: 1775751888924

// abi: 1775796369772

// abi: 1775827938426

// abi: 1775871182250

// abi: 1775919894282

// abi: 1775966459464

// abi: 1776046133046

// abi: 1776062453176

// abi: 1776083762207

// abi: 1776115562182

// abi: 1776143580103

// abi: 1776170465201

// abi: 1776185849260

// abi: 1776214856853

// abi: 1776256142400
