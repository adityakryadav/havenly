'use client';

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="font-medium text-foreground">
          {question}
        </span>

        <span className="text-2xl font-light text-muted-foreground">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ReportNeighbourhoodConcernPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Report Neighbourhood Concern
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Help Us Build Better Communities
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Havenly encourages responsible travel and respectful
              community engagement. Report concerns that may impact
              neighbors, local communities, or surrounding areas.
            </p>

            <div className="mt-8">
              <Button size="lg" className="rounded-full px-8">
                Submit a Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Concern Types */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Types of Concerns
          </h2>

          <p className="mt-2 text-muted-foreground">
            Examples of issues that may affect neighborhoods and
            local communities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Excessive Noise
            </h3>

            <p className="mt-3 text-muted-foreground">
              Concerns involving loud gatherings or disturbances.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Safety Issues
            </h3>

            <p className="mt-3 text-muted-foreground">
              Situations affecting public safety or wellbeing.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Property Concerns
            </h3>

            <p className="mt-3 text-muted-foreground">
              Issues involving misuse or damage to property.
            </p>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Our Commitment to Communities
          </h2>

          <p className="mt-4 text-muted-foreground">
            Havenly believes successful travel experiences should
            positively contribute to local communities. We encourage
            respectful behavior, responsible hosting, and proactive
            communication when concerns arise.
          </p>

          <p className="mt-4 text-muted-foreground">
            Reports submitted through our support channels help us
            review situations and take appropriate action when needed.
          </p>
        </div>
      </section>

      {/* Reporting Process */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Reporting Process
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">1. Submit Details</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Provide information about the concern.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">2. Review</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Havenly evaluates the report.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">3. Investigation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Additional information may be collected.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">4. Resolution</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Appropriate action is taken when necessary.
            </p>
          </div>
        </div>
      </section>

      {/* Community Standards */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Community Standards
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Respect Neighbours
            </h3>

            <p className="mt-3 text-muted-foreground">
              Travelers should respect local residents and communities.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Responsible Hosting
            </h3>

            <p className="mt-3 text-muted-foreground">
              Hosts are encouraged to maintain positive community
              relationships.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Safe Experiences
            </h3>

            <p className="mt-3 text-muted-foreground">
              Safety and wellbeing remain a priority for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <FAQItem
            question="What concerns can be reported?"
            answer="Noise disturbances, safety concerns, property-related issues, and other community-impacting situations may be reported."
          />

          <FAQItem
            question="Can I report anonymously?"
            answer="Reporting options may vary depending on the situation and available support processes."
          />

          <FAQItem
            question="How are reports reviewed?"
            answer="Reports are reviewed by Havenly and may require additional information before action is taken."
          />

          <FAQItem
            question="Will I receive updates on my report?"
            answer="Updates may be provided when appropriate and consistent with privacy considerations."
          />

          <FAQItem
            question="What happens after a report is submitted?"
            answer="The concern is reviewed, investigated when necessary, and appropriate action may be taken."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">
            Report a Community Concern
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Help us maintain safe, respectful, and welcoming
            communities for everyone.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="mt-8 rounded-full"
          >
            Submit Report
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}