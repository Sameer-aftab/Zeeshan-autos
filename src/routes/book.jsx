import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { z } from "zod";
import {
  CalendarIcon,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Cog,
  Gauge,
  Droplet,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Service — Zeeshan Autos Workshop" },
      {
        name: "description",
        content:
          "Schedule your Suzuki service appointment online. Choose a service, pick a date and time slot, and provide your vehicle details.",
      },
      { property: "og:title", content: "Book a Service — Zeeshan Autos Workshop" },
      {
        property: "og:description",
        content: "Schedule your Suzuki workshop appointment in Hyderabad in under a minute.",
      },
    ],
  }),
  component: BookPage,
});
const services = [
  {
    id: "oil",
    icon: Droplet,
    title: "Oil & Filter Service",
    time: "45 mins",
    price: "From PKR 6,500",
  },
  {
    id: "diag",
    icon: Gauge,
    title: "Computerized Diagnostics",
    time: "30 mins",
    price: "From PKR 2,500",
  },
  {
    id: "brake",
    icon: Cog,
    title: "Brake Inspection & Tuning",
    time: "60 mins",
    price: "From PKR 4,000",
  },
  { id: "tune", icon: Wrench, title: "Major Tune-Up", time: "180 mins", price: "From PKR 12,000" },
  { id: "ac", icon: ShieldCheck, title: "AC Service", time: "90 mins", price: "From PKR 5,500" },
  {
    id: "annual",
    icon: Clock,
    title: "Annual Maintenance",
    time: "Half day",
    price: "From PKR 18,000",
  },
];
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];
const models = ["Alto", "Cultus", "Swift", "WagonR", "Bolan", "Ravi", "Every", "Other"];
const bookingSchema = z.object({
  serviceId: z.string().min(1, "Please choose a service"),
  date: z.date({ required_error: "Please pick a date" }),
  timeSlot: z.string().min(1, "Please pick a time slot"),
  fullName: z.string().trim().min(2, "Name is required").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  model: z.string().min(1, "Pick your model"),
  year: z.string().regex(/^(19|20)\d{2}$/, "Enter a 4-digit year"),
  registration: z.string().trim().min(3, "Registration is required").max(20),
  mileage: z.string().regex(/^\d{1,7}$/, "Enter mileage in km"),
  notes: z.string().max(500).optional(),
  pickupDrop: z.enum(["yes", "no"]),
});
function BookPage() {
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState();
  const [timeSlot, setTimeSlot] = useState("");
  const [pickupDrop, setPickupDrop] = useState("no");
  const [model, setModel] = useState("");
  const [submitted, setSubmitted] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = bookingSchema.safeParse({
      serviceId,
      date,
      timeSlot,
      fullName: fd.get("fullName"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      model,
      year: fd.get("year"),
      registration: fd.get("registration"),
      mileage: fd.get("mileage"),
      notes: fd.get("notes"),
      pickupDrop,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const svc = services.find((s) => s.id === parsed.data.serviceId);
    const ref = "ZA-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setSubmitted({
      ref,
      service: svc.title,
      when: `${format(parsed.data.date, "EEE, dd MMM yyyy")} · ${parsed.data.timeSlot}`,
    });
    toast.success("Service booked. We'll call to confirm shortly.");
  };
  if (submitted) {
    return (
      <div className="px-6 lg:px-8 pt-20 pb-32 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-primary/30 bg-linear-to-br from-primary/15 via-background to-background p-10 lg:p-14 text-center">
          <div className="size-14 rounded-full bg-primary/15 grid place-items-center text-primary mx-auto mb-6">
            <CheckCircle2 className="size-7" />
          </div>
          <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">
            Booking confirmed
          </p>
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tighter mb-6">
            See you <span className="text-primary">soon</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border my-8">
            <div className="bg-background p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                Reference
              </p>
              <p className="font-display text-lg">{submitted.ref}</p>
            </div>
            <div className="bg-background p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                Service
              </p>
              <p className="font-display text-lg">{submitted.service}</p>
            </div>
            <div className="bg-background p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                When
              </p>
              <p className="font-display text-lg">{submitted.when}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
            A service advisor will call you within 30 minutes (9 AM – 6 PM) to confirm your slot and
            answer any questions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                setSubmitted(null);
                setServiceId("");
                setDate(undefined);
                setTimeSlot("");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-accent/10 transition"
            >
              Book another
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition shadow-glow"
            >
              Back home <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-6 lg:px-8 pt-16 pb-24 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Workshop · Appointments"
        title={
          <>
            Book your <span className="text-primary">service</span>
          </>
        }
        description="Three quick steps. Choose a service, pick a slot, share your vehicle details. We'll call to confirm within 30 minutes."
      />

      <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Step 1 — Service */}
          <section>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                Step 01
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight">Choose a service</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => {
                const active = serviceId === s.id;
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setServiceId(s.id)}
                    className={cn(
                      "text-left p-5 rounded-2xl border transition-all",
                      active
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border bg-background hover:border-primary/40 hover:bg-primary/5",
                    )}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={cn(
                          "size-10 rounded-lg grid place-items-center",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary",
                        )}
                      >
                        <s.icon className="size-4" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                        {s.time}
                      </span>
                    </div>
                    <h3 className="font-display text-base uppercase tracking-tight mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{s.price}</p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Step 2 — Date & time */}
          <section>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                Step 02
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight">Pick a date & time</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      type="button"
                      className={cn(
                        "w-full justify-start text-left font-normal h-11",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) =>
                        d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0
                      }
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Time slot</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Step 3 — Vehicle & owner */}
          <section>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                Step 03
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight">Vehicle & contact</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  maxLength={80}
                  required
                  placeholder="Ahmed Khan"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required placeholder="+92 333 1234567" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">
                  Email <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={120}
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Suzuki model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" name="year" maxLength={4} required placeholder="2022" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registration">Registration #</Label>
                <Input
                  id="registration"
                  name="registration"
                  maxLength={20}
                  required
                  placeholder="AHB-1234"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mileage">Mileage (km)</Label>
                <Input id="mileage" name="mileage" required placeholder="42000" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Pickup & drop service</Label>
                <RadioGroup
                  value={pickupDrop}
                  onValueChange={(v) => setPickupDrop(v)}
                  className="flex gap-6"
                >
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <RadioGroupItem value="no" id="pd-no" /> I'll come to the workshop
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <RadioGroupItem value="yes" id="pd-yes" /> Please pick up my car
                  </label>
                </RadioGroup>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="notes">
                  Notes for the technician <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  maxLength={500}
                  rows={4}
                  placeholder="Any specific concerns, sounds, or symptoms…"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Summary rail */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="rounded-2xl border border-border bg-background p-6">
            <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">
              Booking summary
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                  Service
                </dt>
                <dd className="font-display">
                  {services.find((s) => s.id === serviceId)?.title ?? "—"}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                  Date
                </dt>
                <dd className="font-display">{date ? format(date, "EEE, dd MMM yyyy") : "—"}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                  Time
                </dt>
                <dd className="font-display">{timeSlot || "—"}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                  Pickup & drop
                </dt>
                <dd className="font-display capitalize">
                  {pickupDrop === "yes" ? "Yes — we'll collect" : "No — visit workshop"}
                </dd>
              </div>
            </dl>
            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition shadow-glow"
            >
              Confirm booking <ArrowRight className="size-4" />
            </button>
            <p className="text-[11px] text-muted-foreground text-center mt-3">
              No payment now. We'll call to confirm.
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
