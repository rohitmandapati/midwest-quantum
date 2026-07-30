import { Check } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PACKAGE = {
  name: "Sponsor the Hackathon",
  description:
    "Direct sponsorship model with custom track options available. We welcome partners of all sizes, with 100% of funding dedicated directly to student operations, venue hosting, and prize pools.",
  perks: [
    "Your logo featured on event t-shirts, signage, and online platforms",
    "Dedicated sponsor table to engage directly with participating students",
    "Full access to the official resume book of top Midwest quantum talent",
    "Opportunity to present custom challenge tracks or provide hardware access",
    "Opening/closing ceremony remarks and judge panel representation",
  ],
};

const BUDGET = [
  {
    allocation: "Catering & Meals",
    percentage: "55%",
    impact:
      "Fueling student hackers with breakfasts, lunches, dinners, coffee, and refreshments throughout the event.",
  },
  {
    allocation: "Student Prize Pools",
    percentage: "25%",
    impact: "Rewards and project grants for top teams in each challenge track.",
  },
  {
    allocation: "Operations & Materials",
    percentage: "20%",
    impact: "Workspace materials, badge printing, student t-shirts, and venue logistics.",
  },
];

export default function SponsorPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <Badge variant="accent" className="mb-6">
              Sponsors & partners
            </Badge>
            <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Support regional quantum innovation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Partner with MQH to reach top CS, physics, and engineering students
              and help build a lasting regional quantum talent pipeline. We keep
              sponsorship simple, transparent, and high-impact.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-2xl px-6 py-20 md:py-24">
            <Card className="border-primary ring-1 ring-primary">
              <CardHeader>
                <CardTitle className="text-2xl">{PACKAGE.name}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">
                  {PACKAGE.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {PACKAGE.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="w-full">
                  <a href="mailto:sponsors@mqh.org">Get in touch to sponsor</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Where funding goes
              </h2>
              <p className="mt-4 text-muted-foreground">
                Sponsorship funds are used directly to remove participation
                barriers for students across the Midwest.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Allocation</TableHead>
                    <TableHead className="w-24">Percentage</TableHead>
                    <TableHead>Impact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {BUDGET.map((row) => (
                    <TableRow key={row.allocation}>
                      <TableCell className="font-medium text-foreground">
                        {row.allocation}
                      </TableCell>
                      <TableCell className="text-primary">
                        {row.percentage}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.impact}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
