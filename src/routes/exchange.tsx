import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, RefreshCw, FileCheck2, Calculator, KeyRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/exchange")({
  head: () => ({
    meta: [
      { title: "Car Exchange Program — Trade In Your Car | Zeeshan Autos" },
      { name: "description", content: "Trade in your old vehicle and drive home a brand-new Suzuki. Best market valuation, full paperwork handled, delivery in 24 hours." },
    ],
  }),
  component: ExchangePage,
});

const steps = [
  { icon: FileCheck2, n: "01", title: "Free Inspection", body: "Bring your car to our Hyderabad facility. Our team inspects body, engine, electricals and documents in 30 minutes." },
  { icon: Calculator, n: "02", title: "Instant Quote", body: "Receive a transparent, market-competitive valuation backed by current resale data — no hidden deductions." },
  { icon: RefreshCw, n: "03", title: "Pick Your Suzuki", body: "Apply the valuation toward any new or certified used Suzuki in our showroom. Flexible top-up financing available." },
  { icon: KeyRound, n: "04", title: "Drive Home", body: "We handle transfer, NOC, registration and insurance paperwork. Delivery within 24 hours of confirmation." },
];

function ExchangePage() {
  return (
    <div>
      <section className="px-6 lg:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Trade-in made simple"
          title={<>The <span className="text-primary">exchange</span> program</>}
          description="Upgrade your lifestyle in four steps. Bring any car — Suzuki or not — and drive home in a brand-new Suzuki."
        />
      </section>

      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-border p-10 bg-surface/40 hover:border-primary/40 transition-all">
              <div className="flex items-start justify-between mb-8">
                <div className="size-12 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <s.icon className="size-5" />
                </div>
                <span className="font-display text-5xl uppercase text-primary/30">{s.n}</span>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-tight mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-10 lg:p-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              Get your free valuation
            </h3>
            <p className="opacity-90 max-w-md">
              Send us your car details on WhatsApp and we'll respond with an indicative quote within an hour.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-foreground hover:text-background transition-all">
              Start exchange <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
