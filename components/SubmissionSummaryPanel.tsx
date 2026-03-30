type SummaryItem = {
  label: string;
  value: string;
};

export function SubmissionSummaryPanel({
  title,
  accent,
  items,
}: {
  title: string;
  accent: "Warm" | "Forest" | "Blush" | "Lavender";
  items: SummaryItem[];
}) {
  return (
    <section className="summary-panel" data-accent={accent}>
      <div className="section-heading">
        <span className="eyebrow">{title}</span>
      </div>
      <div className="summary-list">
        {items.map((item) => (
          <div className="summary-row" key={item.label}>
            <span className="mini-label">{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
