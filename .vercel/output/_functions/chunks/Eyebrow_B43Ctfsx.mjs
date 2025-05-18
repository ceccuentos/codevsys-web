import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes } from './astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { $ as $$ } from './Layout_r8YmDUun.mjs';
import { c as getEyebrowColor } from './styleUtils_tC4Hqp-N.mjs';
import 'clsx';

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Shield = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Shield;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shield", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/Shield.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Smile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Smile;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "smile", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M8 14s1.5 2 4 2 4-2 4-2"></path> <line x1="9" x2="9.01" y1="9" y2="9"></line> <line x1="15" x2="15.01" y1="9" y2="9"></line> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/Smile.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$TabletSmartphone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TabletSmartphone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "tablet-smartphone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="10" height="14" x="3" y="8" rx="2"></rect> <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"></path> <path d="M8 18h.01"></path> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/TabletSmartphone.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Zap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Zap;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "zap", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/Zap.astro", void 0);

const featureLists = {
  main: {
    features: [
      {
        icon: $$Zap,
        title: "Estándar NERC-CIP Industria Eléctrica Chilena",
        description: "Ayudamos a empresas del sector energético y de infraestructura crítica a cumplir con los estándares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo.",
        image: "/images/servicios/servicio-1.webp",
        slug: "nerc-cip",
        descriptionPage: "Ayudamos a empresas del sector energético y de infraestructura crítica a cumplir con los estándares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo.",
        featuresPage: [
          {
            id: "nerc-cip-1",
            title: "Inventario de Ciberactivos",
            description: "Identificamos y clasificamos tus activos críticos OT/IT conforme a NERC-CIP, sentando la base para una gestión segura y trazable.",
            image: "/images/servicios/nerc-cip/activo.webp"
          },
          {
            id: "nerc-cip-2",
            title: "Gestión de Riesgos CIP",
            description: "Evaluamos riesgos operacionales y cibernéticos, priorizando controles para cumplir con los requerimientos regulatorios y proteger la infraestructura crítica.",
            image: "../src/assets/images/servicios/nerc-cip/riesgos.webp"
          },
          {
            id: "nerc-cip-3",
            title: "Capacitación y Awareness CIP",
            description: "Diseñamos programas de formación y cultura de ciberseguridad alineados con NERC-CIP, enfocados en roles operacionales y técnicos.",
            image: "../src/assets/images/servicios/nerc-cip/capacitacion.webp"
          },
          {
            id: "nerc-cip-4",
            title: "Plan de Cumplimiento CIP",
            description: "Creamos un plan detallado de implementación de controles y evidencia para auditorías del Coordinador Eléctrico Nacional.",
            image: "../src/assets/images/servicios/nerc-cip/plan.webp"
          }
        ]
      },
      {
        icon: $$Shield,
        title: "Ley Marco de Ciberseguridad Chilena",
        description: "Brindamos apoyo especializado para ayudar a las organizaciones a cumplir con los requisitos de la Ley Marco de Ciberseguridad de Chile, incluyendo evaluaciones de cumplimiento, desarrollo de políticas y gestión de incidentes.",
        image: "../src/assets/images/servicios/servicio-2.webp",
        slug: "ley-marco-ciberseguridad",
        descriptionPage: "Brindamos apoyo especializado para ayudar a las organizaciones a cumplir con los requisitos de la Ley Marco de Ciberseguridad de Chile, incluyendo evaluaciones de cumplimiento, desarrollo de políticas y gestión de incidentes.",
        featuresPage: [
          {
            id: "ley-marco-1",
            title: "Ley Marco de Ciberseguridad Chilena",
            description: "Diseñamos e implementamos políticas, procedimientos y protocolos para alinear tu organización con la Ley Marco de Ciberseguridad y sus reglamentos asociados.",
            image: "/images/servicios/ley-marco-ciberseguridad/ley-marco-1.webp"
          },
          {
            id: "ley-marco-2",
            title: "Procedimientos y Resiliencia",
            description: "Establecemos procedimientos de respuesta a incidentes, incluyendo planes DRP y análisis BIA para asegurar continuidad operativa y reportes efectivos al CSIRT Nacional.",
            image: "/images/servicios/ley-marco-ciberseguridad/ley-marco-2.webp"
          },
          {
            id: "ley-marco-3",
            title: "Políticas Claras y Efectivas",
            description: "Desarrollamos políticas de ciberseguridad adaptadas a tu organización, promoviendo una cultura de seguridad y cumplimiento normativo.",
            image: "/images/servicios/ley-marco-ciberseguridad/ley-marco-3.webp"
          },
          {
            id: "ley-marco-4",
            title: "Gobernanza de Ciberseguridad",
            description: "Diseñamos estructuras de roles, responsabilidades y comités, asegurando una gestión clara y responsable de la ciberseguridad en todos los niveles de la organización.",
            image: "/images/servicios/ley-marco-ciberseguridad/ley-marco-4.webp"
          }
        ]
      },
      {
        icon: $$TabletSmartphone,
        title: "Desarrollo de Apps IA Generativa",
        description: "Creamos soluciones tecnológicas avanzadas basadas en técnicas del tipo RAG con IA generativa, optimizando la toma de decisiones mediante la integración de grandes bases de datos con modelos de lenguaje natural al servicio del usuario final.",
        image: "../src/assets/images/servicios/servicio-3.webp",
        slug: "ia",
        descriptionPage: "Creamos soluciones tecnológicas avanzadas basadas en técnicas del tipo RAG con IA generativa, optimizando la toma de decisiones mediante la integración de grandes bases de datos con modelos de lenguaje natural al servicio del usuario final.",
        featuresPage: [
          {
            id: "ia-1",
            title: "Creación de Sistemas RAG",
            description: "Desarrollamos soluciones de Generación Aumentada por Recuperación (RAG) que combinan modelos de lenguaje con bases de datos empresariales, mejorando la precisión y relevancia de las respuestas generadas",
            image: "/images/servicios/ia/ia-1.webp"
          },
          {
            id: "ia-2",
            title: "Implementación de Agentes Autónomos",
            description: "Diseñamos agentes de IA capaces de tomar decisiones y ejecutar acciones de forma independiente, optimizando procesos y reduciendo la intervención humana.",
            image: "/images/servicios/ia/ia-2.webp"
          },
          // {
          //     id: 'ia-3',
          //     title: 'Desarrollo de Chatbots Inteligentes',
          //     description: 'Creamos chatbots impulsados por IA generativa que interactúan de manera natural con los usuarios, proporcionando respuestas contextuales y mejorando la experiencia del cliente.',
          //     image: '/images/servicios/ia/ia-3.webp'
          // },
          {
            id: "ia-3",
            title: "Anonimización de Datos Sensibles",
            description: "Implementamos técnicas avanzadas para anonimizar y seudonomizar datos personales, garantizando la privacidad y cumplimiento de normativas como la Ley de Protección de Datos Personales (Ley 21719/2024) que homologa los estándares nacionales a los del Reglamento General de Protección de Datos (GDPR) de la Unión Europea.",
            image: "/images/servicios/ia/ia-3.webp"
          },
          {
            id: "ia-4",
            title: "Automatización de Decisiones y Workflows",
            description: "Automatizamos flujos de trabajo y procesos de toma de decisiones utilizando modelos de IA, aumentando la eficiencia operativa y reduciendo errores.",
            image: "/images/servicios/ia/ia-4.webp"
          }
        ]
      },
      {
        icon: $$Smile,
        title: "Integración de Aplicaciones con Sistemas ERP",
        description: "Diseñamos e implementamos soluciones que conectan aplicaciones personalizadas con sistemas ERP como SAP, Oracle, o Microsoft Dynamics, permitiendo una gestión empresarial más eficiente y automatizada.",
        image: "../src/assets/images/servicios/servicio-4.webp",
        slug: "integraciones",
        descriptionPage: "Diseñamos e implementamos soluciones que conectan aplicaciones personalizadas con sistemas ERP como SAP, Oracle, o Microsoft Dynamics, permitiendo una gestión empresarial más eficiente y automatizada.",
        featuresPage: [
          {
            id: "integraciones-1",
            title: "Integración de Aplicaciones con Sistemas ERP",
            description: "Conectamos tus sistemas con ERP nacionales como Qbiz, Flexline o DeFontana y plataformas globales como SAP, Oracle y Microsoft Dynamics para automatizar procesos críticos.",
            image: "/images/servicios/integraciones/integraciones-1.webp"
          },
          {
            id: "integraciones-2",
            title: "CRM y Sistemas Logísticos",
            description: "Integramos CRM como Salesforce, Zoho o HubSpot con tus sistemas internos y plataformas logísticas, mejorando la trazabilidad, atención al cliente y gestión operativa.",
            image: "/images/servicios/integraciones/integraciones-2.webp"
          },
          {
            id: "integraciones-3",
            title: "Desarrollo Web a Medida",
            description: "Creamos aplicaciones web escalables, seguras y personalizadas que se adaptan a los procesos y requerimientos específicos de tu empresa, integrando tus sistemas existentes.",
            image: "/images/servicios/integraciones/integraciones-3.webp"
          },
          {
            id: "integraciones-4",
            title: "Servicios de Backups",
            description: "Automatizamos respaldos cifrados y programados hacia nubes como Google Drive, Dropbox, S3 y servidores propios, utilizando Rclone para asegurar la continuidad operativa de tus datos críticos.",
            image: "/images/servicios/integraciones/integraciones-4.webp"
          }
        ]
      }
      // {
      //     icon: Type,
      //     title: 'TypeScript Support',
      //     description: 'Built with TypeScript in mind',
      //     slug: 'typescript-support'
      // },
      // {
      //     icon: CodeXml,
      //     title: 'Minimal Dependencies',
      //     description: 'Keep your project lightweight',
      //     slug: 'minimal-dependencies'
      // }
    ]
  }};
function getFeatureBySlug(slug) {
  return featureLists.main.features.find((f) => f.slug === slug);
}

const $$Astro = createAstro("http://localhost:4321");
const $$Eyebrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Eyebrow;
  const {
    text,
    background = "base",
    className = "",
    dataAos = "fade-up",
    dataAosDelay
  } = Astro2.props;
  const eyebrowColor = getEyebrowColor(background);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    eyebrowColor,
    "font-medium mb-4 uppercase tracking-wider text-sm",
    className
  ], "class:list")}${addAttribute(dataAos, "data-aos")}${spreadAttributes(dataAosDelay && { "data-aos-delay": dataAosDelay })}> ${text} </div>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/Eyebrow.astro", void 0);

export { $$Eyebrow as $, featureLists as f, getFeatureBySlug as g };
