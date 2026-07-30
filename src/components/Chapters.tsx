import { Badge } from "@/components/ui/badge";
import ChapterLogo from "@/components/ChapterLogo";
import { CHAPTERS } from "@/lib/chapters";

export default function Chapters() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-4">
            Participating chapters
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Founding student organizations
          </h2>
          <p className="mt-4 text-muted-foreground">
            Student quantum organizations from across Illinois, Indiana, and
            Wisconsin.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.org}
              className="flex items-center gap-4 bg-card p-6 transition-colors hover:bg-muted/50"
            >
              <ChapterLogo chapter={chapter} />
              <div className="min-w-0">
                <h3 className="font-heading text-base font-semibold">
                  {chapter.university}
                </h3>
                <p className="text-sm text-muted-foreground">{chapter.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
