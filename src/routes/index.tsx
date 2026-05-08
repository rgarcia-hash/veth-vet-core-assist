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
import { KnowledgeSources } from "@/components/KnowledgeSources";
import { Reveal, KineticHeadline, StaggerGrid } from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";
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
        <div className="grid-bg" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl drift-slow"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--orange) 28%, transparent), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <Reveal as="span" variant="fade" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
              </span>
              VET-CORE-1 · Alfa privada
            </Reveal>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-navy md:text-6xl lg:text-7xl">
              <KineticHeadline
                text="La Inteligencia que Respalda tu Juicio Clínico."
                highlight="Respalda"
                highlightClassName="text-shimmer"
                delayStep={70}
              />
            </h1>
            <Reveal variant="rise" delay={500} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Veth es el motor de hipersinergia veterinaria (VET-CORE-1) que
              transforma signos, labs y multimedia en diagnósticos integrativos
              con soporte bibliográfico en segundos.
            </Reveal>
            <div id="cta">
              <Reveal variant="rise" delay={650} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:hola@iaveth.com"
                  className="cta-glow group inline-flex h-12 items-center gap-2 rounded-lg bg-orange px-6 text-sm font-semibold text-orange-foreground shadow-sm"
                >
                  Solicitar Acceso Alfa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/disclaimers"
                  className="inline-flex h-12 items-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
                >
                  Ver Manifiesto Ético
                </Link>
              </Reveal>
            </div>
            <Reveal variant="rise" delay={800} className="stagger is-revealed mt-10 flex gap-8 text-xs text-muted-foreground">
              {[
                { v: "98.4%", l: "Certeza HSI promedio" },
                { v: "< 8s", l: "Dictamen integrativo" },
                { v: "0-PII", l: "Zero-Knowledge" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="numeral text-2xl font-semibold text-navy">{s.v}</p>
                  <p>{s.l}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal variant="blur" delay={300}>
            <div className="float-slow">
              <DiagnosisCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE */}
      <section id="core" className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <Reveal as="p" variant="rise" className="text-sm font-semibold uppercase tracking-wider text-orange">
                El Núcleo · VET-CORE-1
              </Reveal>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
                <KineticHeadline text="No es un chat genérico. Es un motor especializado." delayStep={45} />
              </h2>
              <Reveal as="p" variant="rise" delay={250} className="mt-4 text-lg text-muted-foreground">
                Una arquitectura entrenada exclusivamente sobre literatura
                veterinaria revisada, guías internacionales y casuística clínica.
              </Reveal>
            </div>
            <Reveal variant="mask" className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-navy/10 via-transparent to-orange/15 blur-2xl" />
              <img
                src={clinicProImg}
                alt="Veterinaria profesional examinando a un paciente canino en consultorio"
                width={1280}
                height={960}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-float"
              />
            </Reveal>
          </div>

          <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-3">
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
                className="card-lift group rounded-2xl border border-border bg-card p-7 shadow-card hover:border-orange/40 hover:shadow-float"
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
          </StaggerGrid>
        </div>
      </section>

      {/* SENTINEL */}
      <section id="sentinel" className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
        <div
          className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-40 blur-3xl drift-slow"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--orange) 35%, transparent), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal as="p" variant="rise" className="text-sm font-semibold uppercase tracking-wider text-orange">
              Protocolo Sentinel
            </Reveal>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              <KineticHeadline text="Más que un diagnóstico, una red de seguridad." delayStep={50} />
            </h2>
            <Reveal as="p" variant="rise" delay={250} className="mt-4 text-lg text-navy-foreground/70">
              Sentinel monitorea cada caso en busca de riesgos sistémicos,
              interacciones farmacológicas y eventos adversos potenciales.
              Cuando detecta un caso crítico, eleva la alerta antes de que el
              dictamen sea firmado.
            </Reveal>
            <StaggerGrid className="stagger mt-8 grid gap-4 sm:grid-cols-2">
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
            </StaggerGrid>
          </div>

          <Reveal variant="blur" className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-navy-foreground/60">
                Sentinel · Live
              </span>
              <span className="pulse-ring rounded-full bg-orange/20 px-3 py-1 text-xs font-semibold text-orange">
                ALERTA · ALTA
              </span>
            </div>
            <p className="mt-6 text-2xl font-semibold leading-snug">
              Interacción detectada: <span className="text-shimmer">NSAID + corticoide</span> en paciente geriátrico.
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
          </Reveal>
        </div>
      </section>

      {/* HOGAR */}
      <section id="hogar" className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="mask" className="mb-14 overflow-hidden rounded-3xl border border-border shadow-float">
            <img
              src={homeFamilyImg}
              alt="Familia disfrutando en casa con su perro y gato"
              width={1280}
              height={720}
              loading="lazy"
              className="aspect-[16/7] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
            />
          </Reveal>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal as="span" variant="fade" className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">
                <Home className="h-3.5 w-3.5" />
                Veth Hogar
              </Reveal>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
                <KineticHeadline text="Porque los veterinarios también tienen familia pet." delayStep={50} />
              </h2>
              <Reveal as="p" variant="rise" delay={250} className="mt-4 text-lg text-muted-foreground">
                Veth Hogar es el módulo personal para que cuides a tus propias mascotas con el mismo rigor clínico que aplicas en consulta: seguimiento de salud, guías y un análisis nutricional que escanea cualquier alimento comercial.
              </Reveal>

              <StaggerGrid className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: HeartPulse, title: "Veth Score", body: "Puntaje dinámico de bienestar basado en protocolos clínicos internacionales." },
                  { icon: BookOpen, title: "Guías de cuidado", body: "Vacunación, desparasitación y nutrición personalizada por especie y edad." },
                  { icon: Bell, title: "Recordatorios", body: "Horarios de alimentación, dosis y citas con notificaciones inteligentes." },
                  { icon: Utensils, title: "Círculo de cuidado", body: "Gestiona varias mascotas y comparte el seguimiento con tu familia." },
                ].map((f) => (
                  <div key={f.title} className="card-lift rounded-xl border border-border bg-card p-5 shadow-card">
                    <f.icon className="h-5 w-5 text-orange" />
                    <h3 className="mt-3 text-base font-semibold text-navy">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                ))}
              </StaggerGrid>
            </div>

            <Reveal variant="blur" delay={150} className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-orange/15 via-transparent to-navy/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-float float-slow">
                <div className="relative overflow-hidden">
                  <img
                    src={scannerFoodImg}
                    alt="Smartphone escaneando un bulto de alimento para mascota con SafeChoice AI"
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-navy-foreground backdrop-blur">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
                    </span>
                    Escaneando empaque…
                  </span>
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-12 opacity-80"
                    style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--orange) 40%, transparent), transparent)", animation: "veth-sweep 2.6s ease-in-out infinite" }}
                    aria-hidden
                  />
                </div>
                <div className="p-7">
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
                        <span className="numeral font-medium text-navy">{b.v}%</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div className={`bar-fill h-full rounded-full bg-gradient-to-r ${b.c}`} style={{ width: `${b.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Dosis sugerida</p>
                    <p className="mt-1 numeral font-semibold text-navy">185 g/día</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Horarios</p>
                    <p className="mt-1 numeral font-semibold text-navy">08:00 · 19:00</p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
                  <ShieldAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <span>Contiene <strong>BHA</strong> como conservador. Considera rotación con receta libre de antioxidantes sintéticos.</span>
                </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <KnowledgeSources />

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
              href="mailto:hola@iaveth.com"
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
