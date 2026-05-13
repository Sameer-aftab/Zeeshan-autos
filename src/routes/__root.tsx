import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl uppercase tracking-tighter text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl uppercase tracking-tight">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The road ends here. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary-glow transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl uppercase tracking-tight">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary-glow transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zeeshan Autos — Authorized Suzuki Dealership in Hyderabad, Sindh" },
      {
        name: "description",
        content:
          "Zeeshan Autos is the authorized Suzuki 3S dealership in Hyderabad, Sindh — new cars, certified used vehicles, workshop service, exchange program, and genuine spare parts.",
      },
      { name: "author", content: "Zeeshan Autos" },
      { property: "og:title", content: "Zeeshan Autos — Authorized Suzuki Dealership Hyderabad" },
      { property: "og:description", content: "Suzuki sales, certified used cars, workshop, exchange program and genuine parts in Hyderabad, Sindh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
