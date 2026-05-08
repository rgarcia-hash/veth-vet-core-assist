import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Scale, UserCheck, Lock } from "lucide-react";

export const Route = createFileRoute("/disclaimers")({
  head: () => ({
    meta: [
      { title: "Disclaimers — Veth" },
      {
        name: "description",
        content:
          "Disclaimers, alcance clínico, responsabilidad profesional y privacidad de datos de Veth (VET-CORE-1).",
      },
      { property: "og:title", content: "Disclaimers — Veth" },
      {
        property: "og:description",
        content:
          "Documento legal sobre el uso de Veth como Sistema de Apoyo a la Decisión Clínica veterinario.",
      },
    ],
  }),
  component: Disclaimers,
});

const sections = [
  {
    icon: Scale,
    title: "1. CDSS vs. Diagnóstico",
    body: `Veth es un Sistema de Apoyo a la Decisión Clínica (CDSS). Proporciona resúmenes probabilísticos basados en guías internacionales y literatura veterinaria revisada por pares. No sustituye el juicio clínico del MVZ colegiado, ni constituye diagnóstico definitivo, prescripción médica o procedimiento quirúrgico. Toda hipótesis emitida por VET-CORE-1 debe ser interpretada, contrastada y validada por un profesional habilitado.`,
  },
  {
    icon: UserCheck,
    title: "2. Responsabilidad Profesional",
    body: `El uso de la plataforma requiere un perfil profesional activo, verificado mediante cédula o registro colegial vigente. El veterinario tratante es el único responsable de la prescripción final, del consentimiento informado del propietario y del seguimiento clínico del paciente. Veth declina cualquier responsabilidad derivada del uso de la información fuera del contexto profesional para el que fue diseñada.`,
  },
  {
    icon: Lock,
    title: "3. Privacidad de Datos",
    body: `Cumplimiento con estándares de seguridad de grado médico. La arquitectura de Veth opera bajo el principio Zero-Knowledge: cifrado de extremo a extremo, segmentación de tenant y rotación de claves. No almacenamos información identificable de propietarios (No-PII). Los datos clínicos procesados son utilizados exclusivamente para generar el dictamen solicitado y no se emplean para entrenar modelos sin consentimiento explícito y contractual.`,
  },
];

function Disclaimers() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange">
          Documento legal · v1.0
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          Disclaimers de Veth
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Última actualización:{" "}
          {new Date().toLocaleDateString("es-MX", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          . El uso de la plataforma Veth implica la aceptación íntegra de las
          siguientes cláusulas.
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((s) => (
            <article
              key={s.title}
              className="border-l-2 border-orange pl-6"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-orange" />
                <h2 className="text-2xl font-semibold tracking-tight text-navy">
                  {s.title}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                {s.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
          <p>
            Para consultas legales, solicitudes de auditoría o ejercicio de
            derechos sobre los datos, escríbenos a{" "}
            <a
              href="mailto:hola@iaveth.com"
              className="font-medium text-navy underline-offset-4 hover:underline"
            >
              hola@iaveth.com
            </a>
            .
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
