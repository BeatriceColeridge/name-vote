import { notFound } from "next/navigation";
import { ActionBar } from "@/components/ActionBar";
import { CopyNameButton } from "@/components/CopyNameButton";
import { NameStatusChip } from "@/components/NameStatusChip";
import { getCandidateById } from "@/lib/mock-data";

export default async function NameDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const candidate = getCandidateById(id);

  if (!candidate) {
    notFound();
  }

  return (
    <div className="page detail-page">
      <section className="detail-surface">
        <div className="section-heading">
          <span className="eyebrow">Name detail</span>
          <NameStatusChip status={candidate.status} />
        </div>
        <h1>{candidate.name}</h1>
        <p className="detail-note">{candidate.note}</p>
        <div className="detail-meta-grid">
          <div>
            <span className="mini-label">Owner</span>
            <strong>{candidate.ownerLabel}</strong>
          </div>
          <div>
            <span className="mini-label">Submitted</span>
            <strong>{candidate.submittedAtLabel}</strong>
          </div>
          <div>
            <span className="mini-label">Track</span>
            <strong>{candidate.category}</strong>
          </div>
          <div>
            <span className="mini-label">Tone</span>
            <strong>{candidate.tone}</strong>
          </div>
        </div>
        <ActionBar>
          <CopyNameButton name={candidate.name} />
        </ActionBar>
      </section>
    </div>
  );
}
