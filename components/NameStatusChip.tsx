type NameStatus = "ready" | "submitted" | "latest" | "shortlisted";

const labels: Record<NameStatus, string> = {
  ready: "Ready",
  submitted: "Submitted",
  latest: "Latest",
  shortlisted: "Shortlisted",
};

export function NameStatusChip({ status }: { status: NameStatus }) {
  return (
    <span className="name-chip" data-status={status}>
      {labels[status]}
    </span>
  );
}
