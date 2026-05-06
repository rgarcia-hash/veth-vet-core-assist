import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ScanSearch,
  Lock,
  FileBadge,
  Mic,
  Cpu,
  FileSignature,
  ShieldAlert,
  Stethoscope,
  Home,
  Camera,
  HeartPulse,
  Bell,
  Utensils,
  BookOpen,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { DiagnosisCard } from "@/components/DiagnosisCard";
import clinicProImg from "@/assets/clinic-pro.jpg";
import homeFamilyImg from "@/assets/home-family.jpg";
import scannerFoodImg from "@/assets/scanner-food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veth — Inteligencia Clínica Veterinaria (CDSS)" },
      {
        name: "description",
        content:
          "Veth (VET-CORE-1) es el motor de hipersinergia veterinaria que transforma signos, labs y multimedia en diagnósticos integrativos con soporte bibliográfico.",
      },
      { property: "og:title", content: "Veth — CDSS Veterinario" },
      {
        property: "og:description",
        content:
          "Sistema avanzado de soporte a la decisión clínica para veterinarios. Multimodal, trazable y privado por diseño.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              VET-CORE-1 · Alfa privada
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-navy md:text-6xl lg:text-7xl">
              La Inteligencia que{" "}
              <span className="bg-gradient-to-r from-orange to-orange/70 bg-clip-text text-transparent">
                Respalda
              </span>{" "}
              tu Juicio Clínico.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Veth es el motor de hipersinergia veterinaria (VET-CORE-1) que
              transforma signos, labs y multimedia en diagnósticos integrativos
              con soporte bibliográfico en segundos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" id="cta">
              <a
                href="mailto:alfa@iaveth.com"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-orange px-6 text-sm font-semibold text-orange-foreground shadow-sm transition-all hover:shadow-glow"
              >
                Solicitar Acceso Alfa
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/disclaimers"
                className="inline-flex h-12 items-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
              >
                Ver Manifiesto Ético
              </Link>
            </div>
            <div className="mt-10 flex gap-8 text-xs text-muted-foreground">
              <div>
                <p className="text-2xl font-semibold text-navy">98.4%</p>
                <p>Certeza HSI promedio</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-navy">&lt; 8s</p>
                <p>Dictamen integrativo</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-navy">0-PII</p>
                <p>Zero-Knowledge</p>
              </div>
            </div>
          </div>
          <DiagnosisCard />
        </div>
      </section>

      {/* CORE */}
      <section id="core" className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange">
                El Núcleo · VET-CORE-1
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
                No es un chat genérico. Es un motor especializado.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Una arquitectura entrenada exclusivamente sobre literatura
                veterinaria revisada, guías internacionales y casuística clínica.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-navy/10 via-transparent to-orange/15 blur-2xl" />
              <img
                src={clinicProImg}
                alt="Veterinaria profesional examinando a un paciente canino en consultorio"
                width={1280}
                height={960}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-float"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ScanSearch,
                title: "Análisis Multimodal",
                body: "Procesamiento de fotos de piel, videos de marcha, audios de consulta y PDFs de laboratorio en un único pipeline.",
              },
              {
                icon: Lock,
                title: "Zero-Knowledge Privacy",
                body: "Datos de pacientes cifrados de extremo a extremo. Veth ayuda al médico, nunca identifica al animal ni a su propietario.",
              },
              {
                icon: FileBadge,
                title: "Trazabilidad DGMOSS",
                body: "Cada diagnóstico incluye códigos CIE-10/11 y referencias bibliográficas verificadas, exportables como reporte firmado.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-float"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-orange transition-colors group-hover:bg-orange group-hover:text-orange-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SENTINEL */}
      <section id="sentinel" className="bg-navy py-24 text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">
              Protocolo Sentinel
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Más que un diagnóstico, una red de seguridad.
            </h2>
            <p className="mt-4 text-lg text-navy-foreground/70">
              Sentinel monitorea cada caso en busca de riesgos sistémicos,
              interacciones farmacológicas y eventos adversos potenciales.
              Cuando detecta un caso crítico, eleva la alerta antes de que el
              dictamen sea firmado.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Detección de riesgos sistémicos",
                "Interacciones farmacológicas",
                "Vulnerability Index dinámico",
                "Alertas en casos críticos",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange" />
                  <span className="text-sm text-navy-foreground/90">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-navy-foreground/60">
                Sentinel · Live
              </span>
              <span className="rounded-full bg-orange/20 px-3 py-1 text-xs font-semibold text-orange">
                ALERTA · ALTA
              </span>
            </div>
            <p className="mt-6 text-2xl font-semibold leading-snug">
              Interacción detectada: <span className="text-orange">NSAID + corticoide</span> en paciente geriátrico.
            </p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
              {[
                ["Vulnerability Index", "72 / 100"],
                ["Fuentes consultadas", "ACVIM 2023, BSAVA Formulary"],
                ["Recomendación", "Revisar protocolo · sugerir alternativa"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-navy-foreground/60">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOGAR */}
      <section id="hogar" className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">
                <Home className="h-3.5 w-3.5" />
                Veth Hogar
              </span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
                Porque los veterinarios también tienen familia pet.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Veth Hogar es el módulo personal para que cuides a tus propias mascotas con el mismo rigor clínico que aplicas en consulta: seguimiento de salud, guías y un análisis nutricional que escanea cualquier alimento comercial.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: HeartPulse, title: "Veth Score", body: "Puntaje dinámico de bienestar basado en protocolos clínicos internacionales." },
                  { icon: BookOpen, title: "Guías de cuidado", body: "Vacunación, desparasitación y nutrición personalizada por especie y edad." },
                  { icon: Bell, title: "Recordatorios", body: "Horarios de alimentación, dosis y citas con notificaciones inteligentes." },
                  { icon: Utensils, title: "Círculo de cuidado", body: "Gestiona varias mascotas y comparte el seguimiento con tu familia." },
                ].map((f) => (
                  <div key={f.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                    <f.icon className="h-5 w-5 text-orange" />
                    <h3 className="mt-3 text-base font-semibold text-navy">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-orange/15 via-transparent to-navy/10 blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-7 shadow-float">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">SafeChoice AI · Análisis molecular</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">APTO 87/100</span>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Camera className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Resultado para Mika · Canino · 4a</p>
                    <h3 className="mt-1 text-lg font-semibold text-navy">Croqueta Premium Adult Lamb &amp; Rice</h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { l: "Calidad de ingredientes", v: 88, c: "from-emerald-500 to-emerald-400" },
                    { l: "Densidad nutricional", v: 92, c: "from-emerald-500 to-emerald-400" },
                    { l: "Aditivos sintéticos", v: 24, c: "from-amber-500 to-amber-400" },
                  ].map((b) => (
                    <div key={b.l}>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{b.l}</span>
                        <span className="font-medium text-navy">{b.v}%</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div className={`h-full rounded-full bg-gradient-to-r ${b.c}`} style={{ width: `${b.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Dosis sugerida</p>
                    <p className="mt-1 font-semibold text-navy">185 g/día</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Horarios</p>
                    <p className="mt-1 font-semibold text-navy">08:00 · 19:00</p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
                  <ShieldAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <span>Contiene <strong>BHA</strong> como conservador. Considera rotación con receta libre de antioxidantes sintéticos.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section id="flow" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">
              Flujo de Trabajo
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
              Tres pasos. Un dictamen firmado.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                icon: Mic,
                title: "Captura",
                body: "Voz en consulta o carga de archivos: imágenes, videos, audios y PDFs de laboratorio.",
              },
              {
                n: "02",
                icon: Cpu,
                title: "Procesamiento",
                body: "El motor Veth Core integra signos, contexto y literatura en una hipótesis multimodal.",
              },
              {
                n: "03",
                icon: FileSignature,
                title: "Dictamen",
                body: "Reporte firmado y exportable con códigos CIE y referencias bibliográficas trazables.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <span className="text-5xl font-semibold text-orange/20">{s.n}</span>
                <s.icon className="absolute right-7 top-7 h-6 w-6 text-orange" />
                <h3 className="mt-2 text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="border-t border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Stethoscope className="mx-auto h-10 w-10 text-orange" />
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Diseñado por veterinarios, para veterinarios.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Veth nace de la consulta real: turnos largos, casos complejos y la
            presión de no fallar. Nuestra misión es reducir el burnout clínico
            y elevar la precisión diagnóstica, sin sustituir nunca tu criterio.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:alfa@iaveth.com"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-navy px-6 text-sm font-semibold text-navy-foreground transition-opacity hover:opacity-90"
            >
              Unirme al programa Alfa
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/disclaimers"
              className="inline-flex h-12 items-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-navy hover:bg-background"
            >
              Leer nuestro compromiso
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
