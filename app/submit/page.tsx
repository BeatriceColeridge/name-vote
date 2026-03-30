"use client";

import { NameInputPanel } from "@/components/NameInputPanel";
import { SubmissionSummaryPanel } from "@/components/SubmissionSummaryPanel";
import { WalletButton } from "@/components/WalletButton";
import { useNameVote } from "@/hooks/useNameVote";

export default function SubmitPage() {
  const {
    address,
    candidateName,
    setCandidateName,
    isConnected,
    submitName,
    isPending,
    feedback,
    latestSubmission,
  } = useNameVote();

  return (
    <div className="page submit-page">
      <section className="submit-stage">
        <div className="submit-copy">
          <span className="eyebrow">Creative panel</span>
          <h1>Pitch one candidate with conviction.</h1>
          <p>Keep it short, memorable, and ready for the shortlist.</p>
        </div>
        <WalletButton />
      </section>

      <section className="submit-layout">
        <NameInputPanel
          value={candidateName}
          onChange={setCandidateName}
          onSubmit={submitName}
          isPending={isPending}
          isConnected={isConnected}
          feedback={feedback}
        />

        <div className="submit-side">
          <SubmissionSummaryPanel
            title="Session"
            accent="Forest"
            items={[
              { label: "Wallet", value: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Not connected" },
              { label: "Status", value: feedback.title },
              { label: "Mode", value: "Base mainnet write" },
            ]}
          />

          <SubmissionSummaryPanel
            title="Latest result"
            accent="Blush"
            items={[
              { label: "Candidate", value: latestSubmission?.name ?? "No local send yet" },
              { label: "State", value: latestSubmission?.statusLabel ?? "Waiting" },
              { label: "Time", value: latestSubmission?.submittedAtLabel ?? "Pending" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
