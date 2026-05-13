import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Fuel, Settings2, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import heroImg from "@/assets/hero-swift.jpg";
import cultusImg from "@/assets/cultus.jpg";
import altoImg from "@/assets/alto.jpg";
import wagonrImg from "@/assets/wagonr.jpg";

export const Route = createFileRoute("/showroom")({
  head: () => ({
    meta: [
      { title: "Suzuki Showroom — New Cars in Hyderabad | Zeeshan Autos" },
      { name: "description", content: "Browse the full 2025 Suzuki lineup at Zeeshan Autos: Alto, Cultus, Wagon R, Swift, Bolan, Ravi and more — with PKR pricing and on-road delivery." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ShowroomPage,
});

const cars = [
  { name: "Suzuki Swift GLX CVT", img: heroImg, engine: "1200cc", trans: "Automatic CVT", seats: 5, mileage: "18 km/L", price: "PKR 5,429,000" },
  { name: "Suzuki Cultus VXL", img: cultusImg, engine: "1000cc", trans: "Auto Gear Shift", seats: 5, mileage: "20 km/L", price: "PKR 4,084,000" },
  { name: "Suzuki Alto VXL AGS", img: altoImg, engine: "660cc", trans: "Auto Gear Shift", seats: 4, mileage: "22 km/L", price: "PKR 3,045,000" },
  { name: "Suzuki Wagon R VXL", img: wagonrImg, engine: "1000cc", trans: "Manual", seats: 5, mileage: "19 km/L", price: "PKR 3,659,000" },
  { name: "Suzuki Bolan VX", img: cultusImg, engine: "800cc", trans: "Manual", seats: 7, mileage: "13 km/L", price: "PKR 1,849,000" },
  { name: "Suzuki Ravi Pickup", img: wagonrImg, engine: "800cc", trans: "Manual", seats: 2, mileage: "14 km/L", price: "PKR 1,754,000" },
];

function ShowroomPage() {
  return (
    <div>
      <section className="px-6 lg:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="2025 lineup"
          title={<>The <span className="text-primary">showroom</span></>}
          description="Authorized Suzuki Pakistan dealership — every model, every variant, ready for delivery in Hyderabad."
          index="(01) — (06)"
        />
      </section>

      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((c, i) => (
            <article key={c.name} className="group rounded-3xl overflow-hidden border border-border bg-surface/40 hover:border-primary/40 transition-all">
              <div className="aspect-[4/3] bg-background overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">
                  Model {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl uppercase tracking-tight mb-5">
                  {c.name}
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-6 text-xs">
                  <Spec icon={<Fuel className="size-3.5" />} label={c.engine} />
                  <Spec icon={<Settings2 className="size-3.5" />} label={c.trans.split(" ")[0]} />
                  <Spec icon={<Users className="size-3.5" />} label={`${c.seats} seats`} />
                </div>
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div className="font-display text-xl text-primary">{c.price}</div>
                  <Link to="/contact" className="size-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <span className="text-primary">{icon}</span>
      <span className="font-mono">{label}</span>
    </div>
  );
}
