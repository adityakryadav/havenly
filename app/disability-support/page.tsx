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

export default function DisabilitySupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Disability Support
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Accessible Travel For Everyone
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Havenly is committed to creating inclusive travel
              experiences and supporting guests with accessibility
              needs before, during, and after their stay.
            </p>

            <div className="mt-8">
              <Button size="lg" className="rounded-full px-8">
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Accessibility Resources
          </h2>

          <p className="mt-2 text-muted-foreground">
            Explore resources designed to help travelers with
            accessibility requirements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Accessible Properties
            </h3>

            <p className="mt-3 text-muted-foreground">
              Discover listings with accessibility-focused features.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Travel Assistance
            </h3>

            <p className="mt-3 text-muted-foreground">
              Find support resources before and during your trip.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Community Support
            </h3>

            <p className="mt-3 text-muted-foreground">
              Access guidance and assistance from Havenly support.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Our Accessibility Commitment
          </h2>

          <p className="mt-4 text-muted-foreground">
            We believe travel should be accessible to everyone.
            Havenly continuously works to improve accessibility,
            provide inclusive experiences, and help travelers
            make informed decisions when planning trips.
          </p>

          <p className="mt-4 text-muted-foreground">
            We encourage hosts and partners to clearly communicate
            accessibility features and accommodations available at
            their properties.
          </p>
        </div>
      </section>

      {/* Support Services */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Available Support
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Booking Assistance
            </h3>

            <p className="mt-3 text-muted-foreground">
              Help identifying accommodations that match
              accessibility requirements.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Communication Support
            </h3>

            <p className="mt-3 text-muted-foreground">
              Guidance for communicating accessibility needs
              with hosts and property managers.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Travel Planning
            </h3>

            <p className="mt-3 text-muted-foreground">
              Resources to help travelers prepare for accessible
              experiences.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Ongoing Assistance
            </h3>

            <p className="mt-3 text-muted-foreground">
              Continued support throughout your journey when
              accessibility concerns arise.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <FAQItem
            question="How can I find accessible accommodations?"
            answer="Property listings may include accessibility details to help guests evaluate whether a stay meets their requirements."
          />

          <FAQItem
            question="Can I request accessibility information before booking?"
            answer="Yes. Guests are encouraged to review listing details and contact hosts when additional information is needed."
          />

          <FAQItem
            question="What should I do if accessibility features are inaccurate?"
            answer="Contact Havenly support so the issue can be reviewed and addressed."
          />

          <FAQItem
            question="Does Havenly provide disability support resources?"
            answer="Yes. Havenly offers resources and support channels to help guests navigate accessibility-related concerns."
          />

          <FAQItem
            question="Can I report accessibility barriers?"
            answer="Yes. Feedback helps improve accessibility across the Havenly platform and community."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">
            Need Accessibility Support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Our team is committed to helping travelers access
            information and support for more inclusive experiences.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="mt-8 rounded-full"
          >
            Contact Support
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}