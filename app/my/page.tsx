"use client";

import { CandidateCard } from "@/components/CandidateCard";
import { EmptyState } from "@/components/EmptyState";
import { SubmissionSummaryPanel } from "@/components/SubmissionSummaryPanel";
import { WalletButton } from "@/components/WalletButton";
import { useCandidateArchive } from "@/hooks/useCandidateArchive";

export default function MyPage() {
  const { isConnected, myCandidates, latestMine } = useCandidateArchive();

  return (
    <div className="page my-page">
      <section className="archive-banner">
        <div>
          <span className="eyebrow">Personal archive</span>
          <h1>Your submitted names.</h1>
        </div>
        <WalletButton />
      </section>

      <section className="archive-layout">
        <aside className="archive-rail">
          <SubmissionSummaryPanel
            title="Archive status"
            accent="Lavender"
            items={[
              { label: "Wallet", value: isConnected ? "Connected" : "Connect to filter" },
              { label: "Total", value: String(myCandidates.length) },
              { label: "Latest", value: latestMine?.name ?? "None yet" },
            ]}
          />
        </aside>

        <div className="archive-list">
          {myCandidates.length > 0 ? (
            myCandidates.map((candidate) => <CandidateCard key={candidate.id} candidate={candidate} />)
          ) : (
            <EmptyState
              title="No submissions yet"
              description="Connect a wallet and send your first candidate from the submit panel."
              actionHref="/submit"
              actionLabel="Open submit"
            />
          )}
        </div>
      </section>
    </div>
  );
}
