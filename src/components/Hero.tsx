import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WAITLIST_URL } from "@/lib/links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="border-b border-border/60">
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
            A student-led hackathon founded by quantum computing chapters at
            Purdue, UIUC, University of Chicago, UW-Madison, and UIC. Hosted in
            Chicago, November 14–15, 2026.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                Join the waitlist
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn more</Link>
            </Button>
          </div>

          <dl className="mt-14 flex gap-12">
            <div>
              <dt className="text-3xl font-semibold text-foreground">5</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                Student chapters
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold text-foreground">100%</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                Student-led
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold text-foreground">3</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                Midwest states
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
