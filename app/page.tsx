import Link from "next/link";
import { CandidateCard } from "@/components/CandidateCard";
import { NameStatusChip } from "@/components/NameStatusChip";
import { SubmissionSummaryPanel } from "@/components/SubmissionSummaryPanel";
import { WalletButton } from "@/components/WalletButton";
import { featuredCandidates, recentCandidates } from "@/lib/mock-data";

export default function HomePage() {
  const lead = featuredCandidates[0];

  return (
    <div className="page home-page">
      <section className="hero-slab">
        <div className="hero-copy">
          <span className="eyebrow">Naming hub</span>
          <h1>Shape the next name on Base.</h1>
          <p>
            Submit one sharp candidate, scan the latest shortlist, and keep your personal archive close.
          </p>
        </div>
        <div className="hero-panel">
          <div className="hero-actions">
            <Link className="primary-link" href="/submit">
              Submit a name
            </Link>
            <Link className="secondary-link" href="/shortlist">
              Browse candidates
            </Link>
          </div>
          <div className="status-row">
            <div>
              <span className="mini-label">Live status</span>
              <strong>Ready for new proposals</strong>
            </div>
            <NameStatusChip status="latest" />
          </div>
          <WalletButton />
        </div>
      </section>

      <section className="editorial-grid">
        <article className="lead-name-panel">
          <div className="section-heading">
            <span className="eyebrow">Featured pick</span>
            <Link href={`/names/${lead.id}`}>Open detail</Link>
          </div>
          <h2>{lead.name}</h2>
          <p>{lead.note}</p>
          <div className="tag-row">
            <NameStatusChip status={lead.status} />
            <span className="meta-pill">{lead.category}</span>
            <span className="meta-pill">{lead.tone}</span>
          </div>
        </article>

        <SubmissionSummaryPanel
          title="Quick paths"
          accent="Warm"
          items={[
            { label: "Submit", value: "One candidate per send" },
            { label: "Detail", value: "Shareable name routes" },
            { label: "Archive", value: "Wallet-linked history" },
          ]}
        />
      </section>

      <section className="stack-section">
        <div className="section-heading">
          <span className="eyebrow">Latest board</span>
          <Link href="/shortlist">View all</Link>
        </div>
        <div className="candidate-stack">
          {recentCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
