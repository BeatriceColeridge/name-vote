"use client";

import { useEffect, useState } from "react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { appId, appName } from "@/lib/app-config";
import { baseNameVoteAbi, baseNameVoteAddress } from "@/lib/contracts/baseNameVote";
import { builderCodeDataSuffix } from "@/lib/wagmi";
import { formatRelativeTime } from "@/lib/utils";
import { trackTransaction } from "@/utils/track";

type FeedbackState = {
  title: string;
  description: string;
};

export function useNameVote() {
  const [candidateName, setCandidateName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [feedback, setFeedback] = useState<FeedbackState>({
    title: "Ready",
    description: "Connect your wallet and submit one concise candidate.",
  });
  const [latestSubmission, setLatestSubmission] = useState<{
    name: string;
    statusLabel: string;
    submittedAtLabel: string;
  } | null>(null);
  const { address, isConnected } = useAccount();
  const { data: hash, isPending, writeContract, error } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (!error) return;

    setFeedback({
      title: "Send failed",
      description: error.message.includes("User rejected")
        ? "The wallet request was canceled before submission."
        : "The transaction could not be prepared. Check the candidate length and try again.",
    });
  }, [error]);

  useEffect(() => {
    if (!hash) return;

    setFeedback({
      title: "Transaction sent",
      description: "Your candidate is on the way to Base confirmation.",
    });
  }, [hash]);

  useEffect(() => {
    if (!receipt.isSuccess || !receipt.data || !address) return;

    const submittedAt = Date.now();

    setLatestSubmission({
      name: submittedName,
      statusLabel: "Submitted",
      submittedAtLabel: formatRelativeTime(submittedAt),
    });
    setFeedback({
      title: "Submitted",
      description: "Your candidate has been recorded and the board is refreshed for the latest state.",
    });
    trackTransaction(appId, appName, address, receipt.data.transactionHash);
    setCandidateName("");
  }, [address, receipt.data, receipt.isSuccess, submittedName]);

  const submitName = () => {
    const trimmed = candidateName.trim();

    if (!trimmed) {
      setFeedback({
        title: "Name required",
        description: "Enter one candidate before you send the transaction.",
      });
      return;
    }

    if (!isConnected) {
      setFeedback({
        title: "Wallet required",
        description: "Connect a wallet first so the submission can be sent on Base.",
      });
      return;
    }

    if (trimmed.length > 32) {
      setFeedback({
        title: "Too long",
        description: "Keep the candidate at 32 characters or fewer.",
      });
      return;
    }

    setFeedback({
      title: "Awaiting signature",
      description: "Approve the contract call in your wallet to submit the candidate.",
    });
    setSubmittedName(trimmed);

    writeContract({
      address: baseNameVoteAddress,
      abi: baseNameVoteAbi,
      functionName: "submitName",
      args: [trimmed],
      dataSuffix: builderCodeDataSuffix,
    });
  };

  return {
    address,
    isConnected,
    candidateName,
    setCandidateName,
    submitName,
    isPending: isPending || receipt.isLoading,
    feedback,
    latestSubmission,
  };
}
