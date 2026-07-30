import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WAITLIST_URL } from "@/lib/links";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Chapters from "@/components/Chapters";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const GATEWAYS = [
  {
    num: "01",
    title: "About the Hackathon",
    text: "Organized by student orgs from UIUC, UChicago, Purdue, UW-Madison, and UIC to build a regional student quantum network.",
    href: "/about",
    cta: "Read our vision",
    external: false,
  },
  {
    num: "02",
    title: "Sponsorship",
    text: "Options for corporate partners interested in supporting student hackers, workshops, and recruitment.",
    href: "/sponsor",
    cta: "Explore partnerships",
    external: false,
  },
  {
    num: "03",
    title: "Pre-Registration",
    text: "Are you a Midwest student? Submit your interest to receive logistics updates and priority signup access.",
    href: WAITLIST_URL,
    cta: "Join the waitlist",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Chapters />

        <section>
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-20 md:grid-cols-3 md:py-24">
            {GATEWAYS.map((gateway) => (
              <Card key={gateway.num} className="justify-between">
                <CardHeader>
                  <span className="font-heading text-sm font-semibold text-primary">
                    {gateway.num}
                  </span>
                  <CardTitle className="mt-2 text-xl">
                    {gateway.title}
                  </CardTitle>
                  <CardDescription className="mt-2 leading-relaxed">
                    {gateway.text}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {gateway.external ? (
                    <a
                      href={gateway.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {gateway.cta}
                      <ArrowRight className="size-4" />
                    </a>
                  ) : (
                    <Link
                      href={gateway.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {gateway.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
