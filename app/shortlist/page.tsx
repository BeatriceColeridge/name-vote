import { ShortlistGrid } from "@/components/ShortlistGrid";
import { featuredCandidates } from "@/lib/mock-data";

export default function ShortlistPage() {
  return (
    <div className="page shortlist-page">
      <section className="shortlist-header">
        <span className="eyebrow">Shortlist</span>
        <h1>Current standout candidates.</h1>
        <p>Fast scan, strong names, clear status.</p>
      </section>
      <ShortlistGrid items={featuredCandidates} />
    </div>
  );
}
