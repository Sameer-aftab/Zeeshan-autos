import { Link } from "@tanstack/react-router";
export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-1.5 mb-6">
            <span className="font-display text-3xl tracking-tighter uppercase">Zeeshan</span>
            <span className="font-display text-3xl tracking-tighter uppercase text-primary">
              Autos
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Authorized Suzuki 3S dealership serving Hyderabad and Sindh. Sales · Service · Spare
            Parts · Exchange.
          </p>
          <div className="mt-6 font-mono text-sm text-primary">+92 22 263 4451</div>
          <p className="mt-2 text-xs text-muted-foreground">
            Main Auto-Bhan Road, Latifabad, Hyderabad, Sindh, Pakistan
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-5 text-foreground">
            Inventory
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/showroom" className="hover:text-primary">
                New Vehicles
              </Link>
            </li>
            <li>
              <Link to="/used" className="hover:text-primary">
                Certified Used
              </Link>
            </li>
            <li>
              <Link to="/exchange" className="hover:text-primary">
                Exchange Program
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-5 text-foreground">
            Service
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/workshop" className="hover:text-primary">
                Workshop
              </Link>
            </li>
            <li>
              <Link to="/parts" className="hover:text-primary">
                Spare Parts
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Zeeshan Autos. All rights reserved.</span>
          <span>
            Website by <span className="text-primary">Indus Technetronic Pvt. LTD</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
