import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplet, Filter, Zap, Sparkles, Wrench, Gauge } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import partsImg from "@/assets/parts.jpg";

export const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: "Genuine Suzuki Parts & Car Care — Online Shop | Zeeshan Autos" },
      { name: "description", content: "Genuine Suzuki spare parts, engine oils, oil filters, brake pads, spark plugs and premium car care products. Doorstep delivery across Sindh." },
      { property: "og:image", content: partsImg },
    ],
  }),
  component: PartsPage,
});

const categories = [
  { icon: Droplet, name: "Engine Oils", count: 12, sample: "Suzuki SGP 0W-20", price: "PKR 4,800" },
  { icon: Filter, name: "Filters", count: 24, sample: "SGP Oil Filter (Swift)", price: "PKR 1,450" },
  { icon: Zap, name: "Electricals", count: 38, sample: "Spark Plug Set (4)", price: "PKR 4,600" },
  { icon: Wrench, name: "Brake System", count: 18, sample: "Brake Pads — Front", price: "PKR 8,200" },
  { icon: Gauge, name: "Suspension", count: 22, sample: "Shock Absorber Pair", price: "PKR 22,400" },
  { icon: Sparkles, name: "Car Care", count: 30, sample: "Ceramic Coating Kit", price: "PKR 12,900" },
];

function PartsPage() {
  return (
    <div>
      <section className="relative px-6 lg:px-8 py-20 overflow-hidden">
        <img src={partsImg} alt="Genuine Suzuki parts" className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Genuine SGP Parts"
            title={<>Spare parts <br /><span className="text-primary">& car care</span></>}
            description="100% genuine Suzuki SGP parts and premium car care products, sourced directly from Suzuki Pakistan. Doorstep delivery across Sindh."
          />
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.name} className="rounded-3xl border border-border bg-surface/40 p-8 hover:border-primary/40 transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="size-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon className="size-5" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  {c.count} SKUs
                </span>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-tight mb-2">{c.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">Featured: {c.sample}</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="font-display text-lg text-primary">From {c.price}</span>
                <Link to="/contact" className="size-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-border bg-surface/60 p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
              Pro service
            </div>
            <h3 className="font-display text-4xl uppercase tracking-tighter mb-4">
              Doorstep <span className="text-primary">delivery</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Order any part on WhatsApp or by phone — we deliver across Hyderabad within 24 hours. Cash on delivery available.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition-all">
              Order on WhatsApp <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ["Same day", "Hyderabad city"],
              ["24 hours", "Sindh districts"],
              ["3-5 days", "Cross-province"],
              ["COD", "Available"],
            ].map(([a, b]) => (
              <div key={b} className="glass-panel p-5 rounded-xl">
                <div className="font-display text-lg text-primary">{a}</div>
                <div className="text-xs text-muted-foreground mt-1">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
