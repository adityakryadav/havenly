import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Getting Started",
    description:
      "Learn the basics of becoming a host and creating your first listing.",
  },
  {
    title: "Listing Optimization",
    description:
      "Improve your listing with better descriptions, photos, and amenities.",
  },
  {
    title: "Pricing Strategies",
    description:
      "Understand pricing recommendations and seasonal adjustments.",
  },
  {
    title: "Guest Communication",
    description:
      "Build trust through effective communication before and during stays.",
  },
  {
    title: "Safety Guidelines",
    description:
      "Learn best practices to create a safe environment for guests.",
  },
  {
    title: "Hosting Tips",
    description:
      "Discover practical advice from experienced hosts and communities.",
  },
];

export default function HostingResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Hosting Resources
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Resources for Successful Hosting
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Access helpful guides, best practices, and educational
              resources to improve your hosting experience on Havenly.
            </p>

            <div className="mt-8">
              <Button size="lg" className="rounded-full px-8">
                Explore Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <span className="text-sm font-medium text-primary">
            Featured Guide
          </span>

          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Build a Better Hosting Experience
          </h2>

          <p className="mt-4 text-muted-foreground">
            Learn how to create welcoming spaces, communicate effectively,
            and provide memorable experiences for guests.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Host Resources
          </h2>

          <p className="mt-2 text-muted-foreground">
            Explore tools and guides designed to help hosts succeed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {resource.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Hosting Best Practices
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Clear Communication
              </h3>

              <p className="mt-2 text-muted-foreground">
                Respond promptly and provide accurate information to guests.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Comfortable Spaces
              </h3>

              <p className="mt-2 text-muted-foreground">
                Maintain clean and welcoming accommodations.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Continuous Improvement
              </h3>

              <p className="mt-2 text-muted-foreground">
                Learn from feedback and improve your hosting experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              How do I become a host?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Create a listing, add details about your property,
              and publish it on Havenly.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              How can I improve my listing?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Add quality photos, detailed descriptions, and accurate
              amenities information.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Where can I get hosting support?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Visit the Help Centre or explore additional host resources.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">
            Ready to Start Hosting?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Explore hosting resources and learn how to create
            outstanding guest experiences.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="mt-8 rounded-full"
          >
            Become a Host
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}