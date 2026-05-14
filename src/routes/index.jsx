import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench, RefreshCw, ShoppingBag, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/hero-swift.jpg";
import workshopImg from "@/assets/workshop.jpg";
import partsImg from "@/assets/parts.jpg";
import cultusImg from "@/assets/cultus.jpg";
import altoImg from "@/assets/alto.jpg";
import wagonrImg from "@/assets/wagonr.jpg";
import { SectionHeading } from "@/components/section-heading";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeeshan Autos — Authorized Suzuki Dealership Hyderabad" },
      {
        name: "description",
        content:
          "Suzuki new cars, certified used vehicles, workshop, exchange program and genuine spare parts in Hyderabad, Sindh, Pakistan.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});
const services = [
  {
    n: "01",
    title: "New Cars",
    to: "/showroom",
    body: "Explore the 2025 Suzuki lineup with full warranty and 0-meter assurance.",
    cta: "View showroom",
  },
  {
    n: "02",
    title: "Workshop",
    to: "/workshop",
    body: "Authorized 3S maintenance by Suzuki-certified technicians with computerized diagnostics.",
    cta: "Book repair",
  },
  {
    n: "03",
    title: "Exchange",
    to: "/exchange",
    body: "Trade in any car and drive home a brand-new Suzuki at the best market rate.",
    cta: "Value my car",
  },
  {
    n: "04",
    title: "Certified Used",
    to: "/used",
    body: "130-point inspected pre-owned vehicles, fully serviced and warranty-backed.",
    cta: "Browse inventory",
  },
  {
    n: "05",
    title: "Spare Parts",
    to: "/parts",
    body: "Genuine Suzuki SGP parts, oils, filters and pro-grade car care products.",
    cta: "Shop parts",
  },
];
const featured = [
  {
    name: "Suzuki Swift GLX CVT",
    spec: "1200cc · Automatic",
    price: "PKR 5,429,000",
    img: heroImg,
  },
  { name: "Suzuki Cultus VXL", spec: "1000cc · AGS", price: "PKR 4,084,000", img: cultusImg },
  { name: "Suzuki Alto VXL AGS", spec: "660cc · AGS", price: "PKR 3,045,000", img: altoImg },
  { name: "Suzuki Wagon R VXL", spec: "1000cc · Manual", price: "PKR 3,659,000", img: wagonrImg },
];
function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 size-200 bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 size-150 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <img
          src={heroImg}
          alt="Suzuki Swift in cinematic blue lighting"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7 animate-reveal">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
              Authorized Suzuki Dealer · Hyderabad, Sindh
            </div>
            <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] uppercase tracking-tighter text-balance">
              Chrome <br />
              <span className="text-chrome">Precision.</span>
            </h1>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed text-pretty">
              Hyderabad's premier destination for Suzuki excellence. New cars, certified pre-owned,
              workshop service and genuine parts — all under one roof.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/showroom"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition-all shadow-glow"
              >
                Explore showroom <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/exchange"
                className="inline-flex items-center gap-2 px-7 py-4 border border-border text-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:border-primary hover:text-primary transition-all"
              >
                Value my trade-in
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 animate-reveal [animation-delay:200ms]">
            <div className="glass-panel p-6 rounded-2xl">
              <div className="font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">
                Now Available
              </div>
              <div className="flex justify-between items-end gap-4">
                <div>
                  <h3 className="text-xl font-display uppercase tracking-tight">Swift GLX CVT</h3>
                  <p className="text-muted-foreground text-sm">From PKR 5,429,000</p>
                </div>
                <Link
                  to="/showroom"
                  className="size-12 shrink-0 rounded-full border border-border grid place-items-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "12K+", l: "Cars Sold" },
                { v: "8 Bays", l: "Workshop" },
                { v: "20+ yrs", l: "Trusted" },
              ].map((s) => (
                <div key={s.l} className="glass-panel p-4 rounded-xl">
                  <div className="font-display text-2xl uppercase tracking-tight text-primary">
                    {s.v}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="px-6 lg:px-8 py-32 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              The <span className="text-primary">ecosystem</span>
            </>
          }
          description="End-to-end automotive solutions built for the modern Pakistani driver."
          index="(01) — (05)"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {services.map((s) => (
            <Link
              key={s.n}
              to={s.to}
              className="bg-background p-10 flex flex-col min-h-80 group transition-all hover:bg-primary/5"
            >
              <span className="font-mono text-xs text-primary">{s.n}</span>
              <h3 className="text-3xl font-display uppercase tracking-tight mt-4">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{s.body}</p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground group-hover:text-primary transition-colors">
                {s.cta} <ArrowRight className="size-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED FLEET */}
      <section className="px-6 lg:px-8 py-32 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Showroom highlights"
            title={
              <>
                2025 <span className="text-primary">lineup</span>
              </>
            }
            description="Brand-new Suzuki vehicles ready for immediate delivery."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((f) => (
              <div key={f.name} className="group">
                <div className="aspect-4/3 rounded-2xl overflow-hidden bg-surface border border-border mb-5">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-tight">{f.name}</h4>
                    <p className="text-xs font-mono text-accent mt-1">{f.spec}</p>
                  </div>
                </div>
                <div className="mt-3 font-display text-xl text-primary">{f.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP + EXCHANGE */}
      <section className="px-6 lg:px-8 py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden border border-border min-h-110 group">
            <img
              src={workshopImg}
              alt="Suzuki workshop"
              loading="lazy"
              className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
            <div className="relative z-10 h-full p-10 flex flex-col justify-end">
              <Wrench className="size-8 text-primary mb-6" />
              <h3 className="font-display text-4xl uppercase tracking-tight mb-3">3S Workshop</h3>
              <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                Suzuki-certified technicians, genuine tooling, computerized diagnostics. We keep
                your car in factory shape.
              </p>
              <Link
                to="/workshop"
                className="inline-flex w-fit items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition-all"
              >
                Book service <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-linear-to-br from-primary/20 via-background to-background min-h-110 p-10 flex flex-col justify-end">
            <RefreshCw className="size-8 text-accent mb-6" />
            <h3 className="font-display text-4xl uppercase tracking-tight mb-3">
              Exchange Program
            </h3>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Bring any car. Drive home a brand-new Suzuki. Best market rates, paperwork handled in
              24 hours.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                ["01", "Free inspection"],
                ["02", "Instant quote"],
                ["03", "Paperwork"],
                ["04", "New delivery"],
              ].map(([n, l]) => (
                <div key={n} className="glass-panel rounded-xl p-4">
                  <div className="font-display text-xl text-primary">{n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/exchange"
              className="inline-flex w-fit items-center gap-2 px-6 py-3 border border-primary text-foreground text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get appraisal <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTS BAND */}
      <section className="px-6 lg:px-8 py-32 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
              Genuine Parts & Care
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
              Genuine parts. <br />
              <span className="text-primary">Zero compromise.</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-md">
              SGP-certified Suzuki spare parts, premium engine oils, OEM filters and pro-grade car
              care products. Doorstep delivery across Sindh.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "SGP Certified Oil & Air Filters",
                "Suzuki Genuine Engine Oil (0W-20 / 10W-40)",
                "OEM Brake Pads, Spark Plugs & Belts",
                "Interior Detailers & Ceramic Coating Kits",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <BadgeCheck className="size-4 text-primary shrink-0" />
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/parts"
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-primary text-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ShoppingBag className="size-4" /> Shop parts catalog
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/15 blur-[100px] -z-10" />
            <div className="aspect-4/5 rounded-3xl overflow-hidden border border-border">
              <img
                src={partsImg}
                alt="Genuine Suzuki parts"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-32 max-w-7xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-6">
          Visit our <span className="text-primary">showroom</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Main Auto-Bhan Road, Latifabad, Hyderabad, Sindh. Open 9 AM — 6 PM, Sat – Thu.
        </p>
        <Link
          to="https://maps.app.goo.gl/CfpVKxHnkHHvRGFh9"
          target="_blank"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition-all shadow-glow"
        >
          Get directions <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
