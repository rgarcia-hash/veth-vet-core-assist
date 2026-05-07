type Props = {
  className?: string;
  showTagline?: boolean;
};

export function VethLogo({ className, showTagline = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <span className="font-bold tracking-tight text-navy leading-none" style={{ fontFamily: '"Space Grotesk", Inter, sans-serif' }}>
        vet
      </span>
      <span
        className="inline-flex items-center justify-center rounded-[6px] bg-orange leading-none shadow-sm"
        style={{ width: "1.05em", height: "1.05em" }}
        aria-hidden
      >
        <span className="font-bold text-orange-foreground" style={{ fontFamily: '"Space Grotesk", Inter, sans-serif', fontSize: "0.85em", lineHeight: 1 }}>
          h
        </span>
      </span>
      {showTagline && (
        <span className="ml-2 hidden text-[0.55em] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:inline">
          Veterinary CDSS
        </span>
      )}
      <span className="sr-only">Veth — Veterinary CDSS</span>
    </span>
  );
}
