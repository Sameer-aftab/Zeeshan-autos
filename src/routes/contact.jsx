import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zeeshan Autos — Suzuki Hyderabad" },
      {
        name: "description",
        content:
          "Visit Zeeshan Autos at Main Auto-Bhan Road, Latifabad, Hyderabad. Call +92 22 263 4451 or message us on WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});
const info = [
  {
    icon: MapPin,
    label: "Showroom",
    value: "Main Auto-Bhan Road, Latifabad, Hyderabad, Sindh, Pakistan",
  },
  { icon: Phone, label: "Phone", value: "+92 22 263 4451" },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 333 200 7000" },
  { icon: Mail, label: "Email", value: "info@zeeshanautos.pk" },
  { icon: Clock, label: "Hours", value: "Mon — Sun · 9:00 AM — 8:00 PM" },
];
function ContactPage() {
  return (
    <div className="px-6 lg:px-8 pt-16 pb-32 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Visit · Call · Message"
        title={
          <>
            Get in <span className="text-primary">touch</span>
          </>
        }
        description="Drop by our Hyderabad showroom, call us, or send a quick WhatsApp. We respond within an hour during business hours."
      />

      <div className="mt-16 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-3">
          {info.map((i) => (
            <div
              key={i.label}
              className="rounded-2xl border border-border bg-surface/40 p-6 flex gap-5 hover:border-primary/40 transition-all"
            >
              <div className="size-11 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <i.icon className="size-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                  {i.label}
                </div>
                <div className="text-foreground leading-relaxed">{i.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="lg:col-span-3 rounded-3xl border border-border bg-surface/40 p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" placeholder="Your full name" />
            <Field label="Phone" placeholder="+92 ___" />
          </div>
          <Field label="Email" placeholder="you@email.com" type="email" />
          <div>
            <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Interested in
            </label>
            <select className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm focus:border-primary focus:outline-none">
              <option>New car purchase</option>
              <option>Certified used car</option>
              <option>Workshop service</option>
              <option>Exchange / trade-in valuation</option>
              <option>Spare parts order</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us a bit about what you're looking for…"
              className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm focus:border-primary focus:outline-none resize-none"
            />
          </div>
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition-all shadow-glow"
          >
            Send enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
