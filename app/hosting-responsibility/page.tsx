import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const principles = [
  {
    title: "Respect Local Communities",
    description:
      "Hosts should help maintain positive relationships with neighbors and local communities.",
  },
  {
    title: "Follow Local Regulations",
    description:
      "Understand and comply with applicable rules, regulations, and hosting requirements.",
  },
  {
    title: "Promote Safety",
    description:
      "Provide guests with a safe, clean, and secure environment.",
  },
  {
    title: "Encourage Sustainability",
    description:
      "Reduce waste, conserve resources, and support environmentally responsible practices.",
  },
  {
    title: "Communicate Clearly",
    description:
      "Set clear expectations for guests and provide accurate listing information.",
  },
  {
    title: "Support Inclusive Hosting",
    description:
      "Create welcoming spaces that respect diversity and inclusion.",
  },
];

export default function HostingResponsiblyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Hosting Responsibly
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Responsible Hosting Matters
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Havenly encourages hosts to create welcoming experiences while
              respecting local communities, following regulations, and
              promoting sustainable practices.
            </p>

            <div className="mt-8">
              <Button size="lg" className="rounded-full px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Building Better Communities
          </h2>

          <p className="mt-4 text-muted-foreground">
            Responsible hosting helps create positive experiences for guests,
            neighbors, and communities. By following local guidelines and
            promoting respectful behavior, hosts contribute to sustainable
            travel experiences.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Hosting Principles
          </h2>

          <p className="mt-2 text-muted-foreground">
            Important practices that support responsible hosting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Safety and Trust
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Guest Safety
              </h3>

              <p className="mt-2 text-muted-foreground">
                Maintain clean spaces and provide important safety information.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Neighborhood Respect
              </h3>

              <p className="mt-2 text-muted-foreground">
                Encourage respectful behavior and minimize disturbances.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">
                Clear Expectations
              </h3>

              <p className="mt-2 text-muted-foreground">
                Communicate house rules and important information clearly.
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
              Why is responsible hosting important?
            </h3>

            <p className="mt-2 text-muted-foreground">
              Responsible hosting helps create positive experiences for
              guests and local communities.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              How can hosts support local communities?
            </h3>

            <p className="mt-2 text-muted-foreground">
              Respect neighbors, follow regulations, and encourage responsible
              guest behavior.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              What safety measures should hosts consider?
            </h3>

            <p className="mt-2 text-muted-foreground">
              Provide safety information, maintain the property, and communicate
              important guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">
            Host With Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Learn how responsible hosting can create better experiences for
            guests, communities, and hosts alike.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="mt-8 rounded-full"
          >
            Explore Hosting Resources
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}