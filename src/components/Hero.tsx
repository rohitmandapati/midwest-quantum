import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WAITLIST_URL } from "@/lib/links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* Subtle quantum background accent */}
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 size-[500px] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-6">
            November 14–15, 2026 · Chicago, IL
          </Badge>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Midwest
            <br />
            <span className="text-primary">Quantum Hackathon</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A premier student-led quantum computing hackathon co-founded by student
            chapters at UIUC, UChicago, Purdue, UW-Madison, and UIC. Hosted in
            Chicago, November 14–15, 2026.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                Join the waitlist
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn more</Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            <div className="rounded-lg border border-border/60 bg-card/60 p-4 backdrop-blur-xs">
              <dt className="font-heading text-3xl font-bold text-foreground">5</dt>
              <dd className="mt-1 text-xs font-medium text-muted-foreground">
                University Chapters
              </dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card/60 p-4 backdrop-blur-xs">
              <dt className="font-heading text-3xl font-bold text-foreground">100%</dt>
              <dd className="mt-1 text-xs font-medium text-muted-foreground">
                Student-Organized
              </dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card/60 p-4 backdrop-blur-xs">
              <dt className="font-heading text-3xl font-bold text-foreground">3</dt>
              <dd className="mt-1 text-xs font-medium text-muted-foreground">
                Midwest States
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
