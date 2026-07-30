import { Check } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const PERKS = [
  "Logo on event t-shirts, signage, and the MQH website",
  "Dedicated sponsor table to meet and recruit participating students",
  "Full access to the resume book of Midwest quantum talent",
  "Opportunity to present custom challenge problems or workshops",
  "Representation at opening/closing ceremonies and the judge panel",
];

const BUDGET = [
  {
    allocation: "Catering & Meals",
    percentage: "55%",
    impact: "Breakfasts, lunches, dinners, and coffee throughout the weekend.",
  },
  {
    allocation: "Student Prizes",
    percentage: "25%",
    impact: "Awards and grants for top teams in each challenge track.",
  },
  {
    allocation: "Operations",
    percentage: "20%",
    impact: "T-shirts, badges, workspace materials, and venue logistics.",
  },
];

export default function SponsorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <div className="hero-animate max-w-3xl">
              <div>
                <Badge variant="accent" className="mb-6">
                  Sponsors & partners
                </Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                Support regional quantum innovation
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Partner with MQH to connect with top CS, physics, and engineering
                students and help build a lasting Midwest quantum talent pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* Package */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                {/* Left */}
                <div data-reveal data-reveal-delay="1">
                  <h2 className="font-heading text-3xl font-bold tracking-tight">
                    Sponsorship package
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    One straightforward package — no tiers, no minimums. Every
                    sponsor receives the same full suite of benefits, and 100% of
                    funding goes directly to students.
                  </p>

                  {/* Hardware & Platform Callout */}
                  <div className="mt-6 rounded-xl border border-border/80 bg-muted/40 p-5">
                    <p className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid">
                      Hardware & Platform Partners
                    </p>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      Interested in providing QPU time or demonstrating your stack? Partners can offer processing credits to hackers, host dedicated tech talks/workshops, or sponsor custom challenge tracks around their platform.
                    </p>
                  </div>

                  <Button asChild size="lg" className="mt-7">
                    <a href="mailto:riveryc2@illinois.edu">
                      Get in touch
                    </a>
                  </Button>
                </div>

                {/* Right — perks */}
                <div data-reveal data-reveal-delay="2" className="rounded-xl border border-border bg-card p-7 card-lift">
                  <p className="mb-5 font-heading text-[11px] font-semibold uppercase tracking-widest text-vivid">
                    What&apos;s included
                  </p>
                  <ul className="space-y-4">
                    {PERKS.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-vivid" />
                        <span className="leading-relaxed text-foreground">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Budget */}
        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Where funding goes
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Every dollar goes directly toward removing participation barriers
                for students across the Midwest.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                {BUDGET.map((row, i) => (
                  <div
                    key={row.allocation}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1"|"2"|"3"}
                    className="bg-card p-7"
                  >
                    <p className="font-heading text-4xl font-bold text-vivid">
                      {row.percentage}
                    </p>
                    <p className="mt-2 font-heading text-sm font-semibold text-foreground">
                      {row.allocation}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {row.impact}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
