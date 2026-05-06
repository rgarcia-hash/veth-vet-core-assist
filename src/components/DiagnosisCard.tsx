import { Activity, FileCheck, ShieldCheck } from "lucide-react";

export function DiagnosisCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-orange/20 via-transparent to-navy/10 blur-2xl" />
      <div className="relative rounded-2xl border border-border bg-card p-6 shadow-float">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              VET-CORE-1
            </span>
          </div>
          <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
            HSI 98.4% Certeza
          </span>
        </div>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Unified Integrative Diagnosis
          </p>
          <h3 className="mt-2 text-xl font-semibold text-navy">
            Dermatitis atópica canina + sospecha de pioderma secundaria
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Paciente · Canino, 4a · Multimodal: imagen + labs + audio
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { icon: Activity, label: "Signos", val: "12" },
            { icon: FileCheck, label: "Refs", val: "8" },
            { icon: ShieldCheck, label: "ICD-11", val: "EH60" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-secondary/40 p-3">
              <m.icon className="h-4 w-4 text-orange" />
              <p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                {m.label}
              </p>
              <p className="text-sm font-semibold text-navy">{m.val}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          {[
            { l: "Análisis multimodal", v: 100 },
            { l: "Cruce bibliográfico", v: 92 },
            { l: "Vulnerability Index", v: 18 },
          ].map((b) => (
            <div key={b.l}>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{b.l}</span>
                <span className="font-medium text-navy">{b.v}%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange to-orange/70"
                  style={{ width: `${b.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
