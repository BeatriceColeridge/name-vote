export type CandidateStatus = "ready" | "submitted" | "latest" | "shortlisted";

export type CandidateRecord = {
  id: string;
  name: string;
  note: string;
  owner: `0x${string}`;
  ownerLabel: string;
  submittedAt: number;
  submittedAtLabel: string;
  status: CandidateStatus;
  statusLabel: string;
  category: string;
  tone: string;
};
