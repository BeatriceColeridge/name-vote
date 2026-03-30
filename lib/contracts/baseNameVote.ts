export const baseNameVoteAddress = "0x9fe21703a2c8685c82e73bd4567dbf3e251f49e9" as const;

export const baseNameVoteAbi = [
  {
    type: "function",
    name: "submitName",
    stateMutability: "nonpayable",
    inputs: [{ name: "_name", type: "string" }],
    outputs: [],
  },
  {
    type: "function",
    name: "getSubmissionsCount",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "submissions",
    stateMutability: "view",
    inputs: [{ name: "", type: "uint256" }],
    outputs: [
      { name: "user", type: "address" },
      { name: "name", type: "string" },
      { name: "timestamp", type: "uint256" },
    ],
  },
  {
    type: "event",
    name: "Submitted",
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: false, name: "name", type: "string" },
      { indexed: false, name: "timestamp", type: "uint256" },
    ],
    anonymous: false,
  },
] as const;
