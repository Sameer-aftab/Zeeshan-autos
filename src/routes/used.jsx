import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import cultusImg from "@/assets/cultus.jpg";
import altoImg from "@/assets/alto.jpg";
import wagonrImg from "@/assets/wagonr.jpg";
import heroImg from "@/assets/hero-swift.jpg";
export const Route = createFileRoute("/used")({
  head: () => ({
    meta: [
      { title: "Certified Used Suzuki Cars — Hyderabad | Zeeshan Autos" },
      {
        name: "description",
        content:
          "130-point inspected, fully serviced certified used Suzuki cars in Hyderabad with limited warranty and full service history.",
      },
    ],
  }),
  component: UsedPage,
});
const used = [
  {
    name: "Suzuki Swift DLX",
    year: 2022,
    km: "18,500",
    history: "Full service history",
    price: "PKR 4,250,000",
    img: heroImg,
  },
  {
    name: "Suzuki Cultus VXL",
    year: 2021,
    km: "32,000",
    history: "Single owner",
    price: "PKR 3,180,000",
    img: cultusImg,
  },
  {
    name: "Suzuki Wagon R VXL",
    year: 2021,
    km: "34,000",
    history: "Dealer maintained",
    price: "PKR 2,640,000",
    img: wagonrImg,
  },
  {
    name: "Suzuki Alto VXR",
    year: 2022,
    km: "21,000",
    history: "First owner",
    price: "PKR 2,290,000",
    img: altoImg,
  },
];
function UsedPage() {
  return (
    <div>
      <section className="px-6 lg:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Pre-owned, perfected"
          title={
            <>
              Certified <span className="text-primary">used cars</span>
            </>
          }
          description="Every vehicle passes a 130-point inspection by our master technicians, comes with verified history and a 6-month limited warranty."
        />
      </section>

      <section className="px-6 lg:px-8 pb-20 max-w-7xl mx-auto grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {[
          ["130", "Inspection points"],
          ["6 mo", "Limited warranty"],
          ["100%", "Verified history"],
        ].map(([v, l]) => (
          <div key={l} className="bg-background p-8 text-center">
            <div className="font-display text-4xl text-primary uppercase tracking-tight">{v}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
              {l}
            </div>
          </div>
        ))}
      </section>

      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {used.map((c) => (
            <article
              key={c.name}
              className="rounded-3xl overflow-hidden border border-border bg-surface/40 hover:border-primary/40 transition-all group"
            >
              <div className="grid grid-cols-5">
                <div className="col-span-2 aspect-square bg-background overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="col-span-3 p-7 flex flex-col">
                  <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-widest mb-3">
                    <ShieldCheck className="size-3.5" /> Certified · {c.year}
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-tight mb-2">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{c.km} km</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <BadgeCheck className="size-3 text-primary" /> {c.history}
                  </p>
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <div className="font-display text-lg text-primary">{c.price}</div>
                    <Link
                      to="/contact"
                      className="size-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
