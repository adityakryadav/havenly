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

export default function CancellationOptionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Cancellation Options
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Flexible Cancellation Guidance
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Learn about cancellation policies, refunds, reservation
              changes, and available support when travel plans change.
            </p>

            <div className="mt-8">
              <Button size="lg" className="rounded-full px-8">
                View Policies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Cancellation Policies
          </h2>

          <p className="mt-2 text-muted-foreground">
            Different reservations may have different cancellation
            conditions depending on the property and booking terms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Flexible
            </h3>

            <p className="mt-3 text-muted-foreground">
              Greater flexibility for travelers needing to change plans.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Moderate
            </h3>

            <p className="mt-3 text-muted-foreground">
              Balanced cancellation terms with partial refund eligibility.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Strict
            </h3>

            <p className="mt-3 text-muted-foreground">
              More restrictive cancellation conditions based on booking terms.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Refunds */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Understanding Refunds
          </h2>

          <p className="mt-4 text-muted-foreground">
            Refund eligibility depends on the cancellation policy
            associated with your reservation and the timing of your
            cancellation request.
          </p>

          <p className="mt-4 text-muted-foreground">
            Before canceling, review the reservation details to
            understand how changes may affect refunds or future travel
            credits.
          </p>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Common Cancellation Scenarios
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Change of Plans
            </h3>

            <p className="mt-3 text-muted-foreground">
              Travelers may cancel or modify reservations when plans change.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Emergency Situations
            </h3>

            <p className="mt-3 text-muted-foreground">
              Special circumstances may require additional review and support.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Reservation Updates
            </h3>

            <p className="mt-3 text-muted-foreground">
              Some bookings may be modified instead of canceled entirely.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Host-Initiated Changes
            </h3>

            <p className="mt-3 text-muted-foreground">
              Support may be available if changes originate from the host.
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
            question="How do I cancel a reservation?"
            answer="Reservations can typically be managed from your bookings dashboard."
          />

          <FAQItem
            question="Will I receive a refund?"
            answer="Refund eligibility depends on the cancellation policy associated with the reservation."
          />

          <FAQItem
            question="Can I modify my booking instead?"
            answer="Some reservations may allow date changes or other modifications."
          />

          <FAQItem
            question="How long do refunds take?"
            answer="Processing times vary depending on payment providers and booking conditions."
          />

          <FAQItem
            question="What happens if the host cancels?"
            answer="Havenly support may assist with alternative arrangements or next steps."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">
            Need Help With a Cancellation?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Our support team can help explain policies and guide you
            through available options.
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