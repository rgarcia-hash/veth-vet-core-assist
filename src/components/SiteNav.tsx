import { Link } from "@tanstack/react-router";
import { VethLogo } from "@/components/VethLogo";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="Veth — inicio">
          <VethLogo className="text-2xl" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#core" className="transition-colors hover:text-navy">Núcleo</a>
          <a href="/#sentinel" className="transition-colors hover:text-navy">Sentinel</a>
          <a href="/#hogar" className="transition-colors hover:text-navy">Hogar</a>
          <a href="/#flow" className="transition-colors hover:text-navy">Flujo</a>
          <Link to="/disclaimers" className="transition-colors hover:text-navy">Disclaimers</Link>
        </nav>
        <a
          href="#cta"
          className="inline-flex h-9 items-center rounded-md bg-orange px-4 text-sm font-medium text-orange-foreground shadow-sm transition-all hover:shadow-glow"
        >
          Acceso Alfa
        </a>
      </div>
    </header>
  );
}
