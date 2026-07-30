import Link from "next/link";

import { WAITLIST_URL } from "@/lib/links";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sponsor", label: "Sponsors" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="flex items-baseline gap-0.5 font-heading text-base font-bold tracking-tight"
          >
            <span className="text-primary">|</span>
            <span>MQH</span>
            <span className="text-primary">⟩</span>
          </Link>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Midwest Quantum Hackathon — a student-led initiative. November
            14–15, 2026, Chicago.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pre-Register
          </a>
        </nav>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Midwest Quantum Hackathon. Organized by student
            organizations.
          </p>
        </div>
      </div>
    </footer>
  );
}
