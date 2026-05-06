import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy">
            <span className="text-xs font-bold text-orange">V</span>
          </div>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Veth · iaveth.com
          </span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/disclaimers" className="hover:text-navy">Disclaimers</Link>
          <a href="mailto:hello@iaveth.com" className="hover:text-navy">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
