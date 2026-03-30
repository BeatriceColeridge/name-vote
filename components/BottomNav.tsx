"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Hub", meta: "Start" },
  { href: "/submit", label: "Submit", meta: "Pitch" },
  { href: "/shortlist", label: "Shortlist", meta: "Pick" },
  { href: "/my", label: "My", meta: "Archive" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {items.map((item) => {
        const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

        return (
          <Link key={item.href} className={`nav-link ${isActive ? "active" : ""}`} href={item.href}>
            <strong>{item.label}</strong>
            <span>{item.meta}</span>
          </Link>
        );
      })}
    </nav>
  );
}
