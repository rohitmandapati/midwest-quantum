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
    "One simple package — no tiers, no minimum. We welcome sponsors of every size, and every contribution goes straight to the students.",
  perks: [
    "Your logo on the event t-shirt",
    "Your logo displayed at the event and on our website",
    "A table at the event to meet and talk with students",
    "Access to a resume book of top Midwest quantum talent",
  ],
};

const BUDGET = [
  {
    allocation: "Catering & Meals",
    percentage: "55%",
    impact:
      "Keeping hackers fueled with breakfasts, lunches, dinners, coffee, and snacks.",
  },
  {
    allocation: "Student Prize Pools",
    percentage: "25%",
    impact: "Rewards and grants for top projects in each challenge track.",
  },
  {
    allocation: "Operations & Materials",
    percentage: "20%",
    impact: "Workspace materials, name badges, student t-shirts, and printing.",
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
              Partner with MQH to reach top CS and physics students and help
              build a lasting regional quantum pipeline. We keep sponsorship
              simple and accessible — no one gets priced out.
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
