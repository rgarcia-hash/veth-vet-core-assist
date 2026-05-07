import { BookMarked, FlaskConical, Globe2, Library, ShieldCheck, Leaf, Database, Beaker } from "lucide-react";

const clinical = [
  {
    icon: Library,
    name: "NCBI · PubMed Central",
    tag: "Literatura biomédica Open Access",
    body: "Análisis clínico fundamentado en millones de estudios biomédicos y casuística veterinaria de libre acceso respaldados por la NCBI.",
  },
  {
    icon: Globe2,
    name: "WSAVA Global Guidelines",
    tag: "Pequeñas especies · Autoridad mundial",
    body: "Protocolos de diagnóstico y bienestar animal apegados a las Global Guidelines dictadas por la World Small Animal Veterinary Association.",
  },
  {
    icon: ShieldCheck,
    name: "AAHA Protocols",
    tag: "Excelencia hospitalaria",
    body: "Soporte a la decisión médica estructurado con base en las guías de excelencia y cuidado estandarizado de la American Animal Hospital Association.",
  },
  {
    icon: FlaskConical,
    name: "Farmacopea Veterinaria",
    tag: "Plumb's & formularios internacionales",
    body: "Cálculos posológicos e interacciones cruzadas usando los marcos de farmacopea veterinaria estándar internacional de máxima seguridad.",
  },
  {
    icon: BookMarked,
    name: "Merck Veterinary Manual",
    tag: "Open Reference Data",
    body: "Estructura patológica y reconocimiento de síntomas correlacionados con la literatura de referencia global en salud animal.",
  },
];

const nutritional = [
  {
    icon: ShieldCheck,
    name: "AAFCO Nutritional Profiles",
    tag: "EE. UU. · Estándar de comercialización",
    body: "Toxicidad, ingredientes y suficiencia nutricional contrastados milimétricamente contra los Perfiles Nutricionales Oficiales de la AAFCO.",
  },
  {
    icon: Database,
    name: "USDA FoodData Central",
    tag: "Open Source gubernamental",
    body: "Desglose molecular de macronutrientes basado en la biblioteca científica abierta del Departamento de Agricultura de los Estados Unidos.",
  },
  {
    icon: Leaf,
    name: "FEDIAF Nutritional Guidelines",
    tag: "Europa · Estándares estrictos",
    body: "Mapeo de riesgos en aditivos alimentarios cruzando datos con los rigurosos estándares europeos de nutrición FEDIAF.",
  },
];

export function KnowledgeSources() {
  return (
    <section id="fuentes" className="border-t border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">
            <Beaker className="h-3.5 w-3.5" />
            Fuentes de conocimiento
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Alineados con los <span className="text-orange">Gold Standards</span> globales.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            El motor de Veth procesa cada caso bajo estricta adherencia a las directrices clínicas y nutricionales internacionales. No inventamos: cruzamos, verificamos y citamos.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* CDSS */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-8 items-center rounded-md bg-navy px-3 text-xs font-semibold uppercase tracking-wider text-navy-foreground">
                Veth CDSS
              </span>
              <p className="text-sm font-medium text-muted-foreground">Diagnóstico clínico veterinario</p>
            </div>
            <div className="space-y-3">
              {clinical.map((s) => (
                <div
                  key={s.name}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-float"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-navy transition-colors group-hover:bg-orange group-hover:text-orange-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-base font-semibold text-navy">{s.name}</h3>
                      <span className="text-xs font-medium uppercase tracking-wide text-orange">{s.tag}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Veth Scan */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-8 items-center rounded-md bg-orange px-3 text-xs font-semibold uppercase tracking-wider text-orange-foreground">
                Veth Scan
              </span>
              <p className="text-sm font-medium text-muted-foreground">Análisis nutricional de alimentos</p>
            </div>
            <div className="space-y-3">
              {nutritional.map((s) => (
                <div
                  key={s.name}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-float"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-navy transition-colors group-hover:bg-orange group-hover:text-orange-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-base font-semibold text-navy">{s.name}</h3>
                      <span className="text-xs font-medium uppercase tracking-wide text-orange">{s.tag}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-border bg-card/60 p-5 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-navy">Nota de transparencia.</strong> Veth opera <em>de acuerdo</em> con los lineamientos públicos de estas organizaciones. No representamos, ni estamos afiliados ni respaldados por ellas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
