"use client";

import { useMemo } from "react";
import { useAccount } from "wagmi";
import { recentCandidates } from "@/lib/mock-data";

export function useCandidateArchive() {
  const { address, isConnected } = useAccount();

  const myCandidates = useMemo(() => {
    if (!address) return [];
    return recentCandidates.filter((candidate) => candidate.owner.toLowerCase() === address.toLowerCase());
  }, [address]);

  return {
    isConnected,
    myCandidates,
    latestMine: myCandidates[0] ?? null,
  };
}
