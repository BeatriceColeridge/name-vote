import Link from "next/link";
import { NameStatusChip } from "@/components/NameStatusChip";
import type { CandidateRecord } from "@/lib/types";

export function CandidateCard({
  candidate,
  compact = false,
}: {
  candidate: CandidateRecord;
  compact?: boolean;
}) {
  return (
    <Link className={`candidate-card ${compact ? "compact" : ""}`} href={`/names/${candidate.id}`}>
      <div className="candidate-top">
        <div>
          <span className="mini-label">{candidate.category}</span>
          <h2 className="candidate-name">{candidate.name}</h2>
        </div>
        <NameStatusChip status={candidate.status} />
      </div>
      <p className="candidate-note">{candidate.note}</p>
      <div className="tag-row">
        <span className="meta-pill">{candidate.tone}</span>
        <span className="meta-pill">{candidate.ownerLabel}</span>
        <span className="meta-pill">{candidate.submittedAtLabel}</span>
      </div>
    </Link>
  );
}
