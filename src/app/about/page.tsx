import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChapterLogo from "@/components/ChapterLogo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CHAPTERS } from "@/lib/chapters";

const EXPECT = [
  {
    num: "01",
    title: "Challenge Tracks",
    body: "Multiple tracks designed by student organizations and sponsors, covering quantum algorithms, error correction, quantum machine learning, and pulse programming.",
  },
  {
    num: "02",
    title: "Workshops & Crash Courses",
    body: "Hands-on sessions for all experience levels. Write your first quantum circuit or dive into variational algorithms and noise mitigation.",
  },
  {
    num: "03",
    title: "Mentorship",
    body: "Guidance from experienced students, researchers, and industry mentors throughout the weekend to help every team build and present a functional project.",
  },
  {
    num: "04",
    title: "Demos & Judging",
    body: "Present your project to judges from academia and industry. Prizes awarded for technical depth, creativity, and real-world applicability.",
  },
];

const FAQ = [
  {
    q: "When is MQH?",
    a: "November 14–15, 2026 in Chicago. Pre-register to receive venue details, schedule information, and logistics updates.",
  },
  {
    q: "Where will it be held?",
    a: "University of Illinois Chicago (UIC) campus on Chicago's Near West Side. Its central location provides easy access for participating universities across the Midwest.",
  },
  {
    q: "Who can participate?",
    a: "Any undergraduate or graduate student at a Midwest university. No prior quantum experience is required; dedicated workshops cover key fundamentals.",
  },
  {
    q: "Is there a cost?",
    a: "No, MQH is 100% free for all participating students. Sponsorship funding fully subsidizes meals, venue operations, and prize pools so cost is never a barrier.",
  },
  {
    q: "How are teams formed?",
    a: "You can register with a team or join our team-matching sessions at the start of the event. Solo hackers are welcome as well.",
  },
  {
    q: "Want your university involved?",
    a: "If your school has a quantum computing student organization and you want to co-organize or bring a delegation, please reach out. We are actively expanding our university network.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <Badge variant="accent" className="mb-6">
              Student-led initiative
            </Badge>
            <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-5xl">
              About the Midwest Quantum Hackathon
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              MQH is organized entirely by student organizations across five
              leading Midwest universities, with a growing network of chapters.
              Our mission is to build a vibrant, long-term quantum developer
              community across the region: by students, for students.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                What to expect
              </h2>
              <p className="mt-4 text-muted-foreground">
                A weekend-long hackathon bringing together student builders from
                across the Midwest.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {EXPECT.map((item) => (
                <div key={item.num}>
                  <span className="font-heading text-sm font-semibold text-primary">
                    {item.num}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Participating organizations
              </h2>
              <p className="mt-4 text-muted-foreground">
                The student-run chapters co-founding MQH.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CHAPTERS.map((chapter) => (
                <Card key={chapter.org}>
                  <CardContent className="flex items-center gap-4">
                    <ChapterLogo chapter={chapter} size={48} />
                    <div className="min-w-0">
                      <h3 className="font-heading text-base font-semibold">
                        {chapter.university}
                      </h3>
                      <p className="text-sm text-primary">{chapter.org}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Quick facts
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              {FAQ.map((item) => (
                <div key={item.q}>
                  <h3 className="font-heading text-base font-semibold">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
