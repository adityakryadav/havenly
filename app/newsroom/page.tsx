import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    title: "Havenly Expands Experiences Marketplace",
    date: "March 2026",
    description:
      "New local experiences are now available across additional destinations worldwide.",
  },
  {
    title: "Introducing Enhanced Host Tools",
    date: "February 2026",
    description:
      "Hosts can now manage listings more efficiently with improved dashboards and analytics.",
  },
  {
    title: "AirCover Improvements Announced",
    date: "January 2026",
    description:
      "Expanded support resources and protection features are now available for guests.",
  },
  {
    title: "Accessibility Enhancements Across Havenly",
    date: "December 2025",
    description:
      "New accessibility-focused improvements help create a better experience for all users.",
  },
];

export default function NewsroomPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Newsroom
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Latest News From Havenly
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Stay informed about product updates, company announcements,
              community initiatives, and new developments across the Havenly
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <span className="text-sm font-medium text-primary">
            Featured Announcement
          </span>

          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Havenly Reaches New Milestone in Global Travel Experiences
          </h2>

          <p className="mt-4 text-muted-foreground">
            Havenly continues expanding its offerings by connecting travelers
            with unique accommodations, local experiences, and trusted hosts
            around the world.
          </p>

          <Button className="mt-6 rounded-full">
            Read Full Story
          </Button>
        </div>
      </section>

      {/* Latest News */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Recent Updates
          </h2>

          <p className="mt-2 text-muted-foreground">
            Explore the latest announcements from Havenly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {newsArticles.map((article) => (
            <div
              key={article.title}
              className="rounded-2xl border border-border p-6 transition hover:bg-muted"
            >
              <p className="text-sm text-muted-foreground">
                {article.date}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {article.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Press Resources */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Press Resources
          </h2>

          <p className="mt-4 text-muted-foreground">
            Access company information, brand assets, and official materials
            for media and press coverage.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Company Overview
              </h3>

              <p className="mt-2 text-muted-foreground">
                Learn more about Havenly's mission and platform.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Brand Assets
              </h3>

              <p className="mt-2 text-muted-foreground">
                Access logos, branding guidelines, and media materials.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Media Information
              </h3>

              <p className="mt-2 text-muted-foreground">
                Find official company facts and background information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Media Contact
          </h2>

          <p className="mt-4 text-muted-foreground">
            Journalists and media professionals can reach out for inquiries,
            interviews, and official statements.
          </p>

          <div className="mt-6">
            <p className="font-medium text-foreground">
              press@havenly.com
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">
            Stay Updated
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Follow the latest Havenly announcements, platform updates,
            and community initiatives.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="mt-8 rounded-full"
          >
            Explore Havenly
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}