import Link from "next/link";

export function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <section className="empty-state">
      <strong>{title}</strong>
      <p>{description}</p>
      <Link className="secondary-link" href={actionHref}>
        {actionLabel}
      </Link>
    </section>
  );
}
