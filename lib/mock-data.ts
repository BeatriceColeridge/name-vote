import type { CandidateRecord } from "@/lib/types";

const now = Date.now();

export const featuredCandidates: CandidateRecord[] = [
  {
    id: "atlas-bloom",
    name: "Atlas Bloom",
    note: "A calm studio-style name with project gravity and launch warmth.",
    owner: "0x1200000000000000000000000000000000000042",
    ownerLabel: "0x1200...0042",
    submittedAt: now - 1000 * 60 * 25,
    submittedAtLabel: "25 min ago",
    status: "shortlisted",
    statusLabel: "Shortlisted",
    category: "Brand system",
    tone: "Confident",
  },
  {
    id: "signal-thread",
    name: "Signal Thread",
    note: "Clean, directional, and easy to anchor across a collection or event.",
    owner: "0x2200000000000000000000000000000000000042",
    ownerLabel: "0x2200...0042",
    submittedAt: now - 1000 * 60 * 80,
    submittedAtLabel: "1 hr ago",
    status: "latest",
    statusLabel: "Latest",
    category: "Launch title",
    tone: "Editorial",
  },
  {
    id: "north-ribbon",
    name: "North Ribbon",
    note: "Feels premium, memorable, and strong enough for a mint or community series.",
    owner: "0x3300000000000000000000000000000000000042",
    ownerLabel: "0x3300...0042",
    submittedAt: now - 1000 * 60 * 155,
    submittedAtLabel: "2 hr ago",
    status: "submitted",
    statusLabel: "Submitted",
    category: "Collection",
    tone: "Polished",
  },
];

export const recentCandidates: CandidateRecord[] = [
  ...featuredCandidates,
  {
    id: "mint-frame",
    name: "Mint Frame",
    note: "A crisp proposal for campaign naming with visual clarity.",
    owner: "0x4400000000000000000000000000000000000042",
    ownerLabel: "0x4400...0042",
    submittedAt: now - 1000 * 60 * 240,
    submittedAtLabel: "4 hr ago",
    status: "ready",
    statusLabel: "Ready",
    category: "Campaign",
    tone: "Focused",
  },
];

export function getCandidateById(id: string) {
  return recentCandidates.find((candidate) => candidate.id === id);
}
