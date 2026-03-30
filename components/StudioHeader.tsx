import Link from "next/link";

export function StudioHeader() {
  return (
    <header className="studio-header">
      <Link className="studio-mark" href="/">
        <strong>name-vote</strong>
        <span>Creative naming board on Base</span>
      </Link>
      <nav className="header-links">
        <Link href="/submit">Submit</Link>
        <Link href="/my">Archive</Link>
        <Link href="/shortlist">Shortlist</Link>
      </nav>
    </header>
  );
}
