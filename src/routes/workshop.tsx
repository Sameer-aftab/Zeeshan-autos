import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench, Cog, Gauge, Droplet, ShieldCheck, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title: "Suzuki Workshop & Service — Hyderabad | Zeeshan Autos" },
      { name: "description", content: "Authorized Suzuki 3S workshop in Hyderabad. Computerized diagnostics, certified technicians, genuine parts. Book your service appointment." },
      { property: "og:image", content: workshopImg },
    ],
  }),
  component: WorkshopPage,
});

const services = [
  { icon: Droplet, title: "Oil & Filter Service", time: "45 mins", desc: "Genuine Suzuki engine oil and SGP oil filter replacement." },
  { icon: Gauge, title: "Computerized Diagnostics", time: "30 mins", desc: "Full ECU scan, fault clearing, and performance analysis." },
  { icon: Cog, title: "Brake Inspection & Tuning", time: "60 mins", desc: "Pad replacement, rotor check, and brake fluid flush." },
  { icon: Wrench, title: "Major Tune-Up", time: "180 mins", desc: "Spark plugs, air filter, throttle clean, full inspection." },
  { icon: ShieldCheck, title: "AC Service", time: "90 mins", desc: "Gas refill, condenser clean, system pressure test." },
  { icon: Clock, title: "Annual Maintenance", time: "Half day", desc: "Comprehensive 60-point preventive maintenance package." },
];

function WorkshopPage() {
  return (
    <div>
      <section className="relative px-6 lg:px-8 py-20 overflow-hidden">
        <img src={workshopImg} alt="Suzuki workshop" className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="3S Authorized Service"
            title={<>The <span className="text-primary">workshop</span></>}
            description="Suzuki-certified technicians, computerized diagnostics, and genuine parts. We service every Suzuki like it just rolled off the factory floor."
          />
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 hover:bg-primary/5 transition-colors">
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center text-primary mb-6">
                <s.icon className="size-5" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl uppercase tracking-tight">{s.title}</h3>
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">{s.time}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-background p-10 lg:p-16 text-center">
          <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            Book your <span className="text-primary">service</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            8 service bays. Same-day delivery on most jobs. Pickup & drop available across Hyderabad.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition-all shadow-glow">
            Book Service <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
