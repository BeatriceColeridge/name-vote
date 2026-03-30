import Link from "next/link";
import { NameStatusChip } from "@/components/NameStatusChip";
import type { CandidateRecord } from "@/lib/types";

export function ShortlistGrid({ items }: { items: CandidateRecord[] }) {
  return (
    <section className="shortlist-grid">
      {items.map((item) => (
        <Link className="shortlist-card" href={`/names/${item.id}`} key={item.id}>
          <div className="section-heading">
            <span className="mini-label">{item.category}</span>
            <NameStatusChip status={item.status} />
          </div>
          <h2>{item.name}</h2>
          <p>{item.note}</p>
          <div className="tag-row">
            <span className="meta-pill">{item.tone}</span>
            <span className="meta-pill">{item.ownerLabel}</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
