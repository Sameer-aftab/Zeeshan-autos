import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
const links = [
  { to: "/showroom", label: "Showroom" },
  { to: "/used", label: "Certified Used" },
  { to: "/workshop", label: "Workshop" },
  { to: "/exchange", label: "Exchange" },
  { to: "/parts", label: "Parts" },
  { to: "/contact", label: "Contact" },
];
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);
  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1.5 group">
          <span className="font-display text-2xl tracking-tighter uppercase text-foreground">
            Zeeshan
          </span>
          <span className="font-display text-2xl tracking-tighter uppercase text-primary group-hover:text-primary-glow transition-colors">
            Autos
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLight((v) => !v)}
            aria-label="Toggle theme"
            className="size-10 grid place-items-center rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
          >
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <Link
            to="/book"
            className="hidden sm:inline-flex px-5 py-2.5 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-glow transition-all duration-300 shadow-glow"
          >
            Book Service
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden size-10 grid place-items-center rounded-full border border-border"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
