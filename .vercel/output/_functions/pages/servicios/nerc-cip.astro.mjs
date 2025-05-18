import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_r8YmDUun.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_7903qgB1.mjs';
import { $ as $$FeatureDetails, a as $$Stats, s as statsLists } from '../../chunks/stats_gHeGc8J5.mjs';
import { g as getFeatureBySlug, $ as $$Eyebrow } from '../../chunks/Eyebrow_B43Ctfsx.mjs';
export { renderers } from '../../renderers.mjs';

const $$NercCip = createComponent(($$result, $$props, $$slots) => {
  const title = "NERC CIP";
  const description = "Ayudamos a empresas del sector energ\xE9tico y de infraestructura cr\xEDtica a cumplir con los est\xE1ndares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo.";
  const heroContent = {
    title: "Servicios - NERC-CIP",
    //"Contact Us",
    description: ""
  };
  const feature = getFeatureBySlug("nerc-cip");
  const beneficios = [
    "Asegura el cumplimiento regulatorio y evita sanciones del Coordinador El\xE9ctrico Nacional.",
    "Fortalece la continuidad operativa frente a amenazas cibern\xE9ticas en sistemas cr\xEDticos.",
    "Mejora la visibilidad y control sobre tus activos OT e IT clave.",
    "Promueve una cultura organizacional proactiva en ciberseguridad industrial."
  ];
  const sideBySideStats = {
    eyebrow: "IMPACTO",
    title: "El impacto esperado en tu organizaci\xF3n",
    description: "En media obtenemos estos resultados al aplicar este servicio en los proyectos.",
    variant: "side-by-side",
    stats: statsLists.nerc_cip.stats,
    content: {
      title: "El impacto esperado en tu organizaci\xF3n",
      description: "En media obtenemos estos resultados al aplicar este servicio en los proyectos."
      // button: {
      //     text: "Discover Titan Core",
      //     link: "/theme-info",
      //     variant: "primary" as const
      // }
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": "../src/assets/images/servicios/servicio-1.webp" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${feature && renderTemplate`${renderComponent($$result2, "FeatureDetails", $$FeatureDetails, { "feature": feature })}`}${maybeRenderHead()}<div class="bg-background-light text-headline-light py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"> <div class="md:col-span-2"> <div class="mb-6 flex items-center gap-2"> ${renderComponent($$result2, "Eyebrow", $$Eyebrow, { "text": "Beneficios", "background": "base" })} </div> <div class="space-y-8"> ${beneficios.map((beneficio) => renderTemplate`<div class="text-2xl md:text-3xl font-normal leading-tight">${beneficio}</div>`)} </div> </div> <div class="flex justify-center md:justify-end"> <!-- Icono de ciberseguridad: candado SVG --> <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="none" viewBox="0 0 48 48"> <rect x="10" y="20" width="28" height="20" rx="4" fill="none" stroke="#0f3c5c" stroke-width="2"></rect> <path d="M16 20v-5a8 8 0 1 1 16 0v5" stroke="#0f3c5c" stroke-width="2" fill="none"></path> <circle cx="24" cy="30" r="2.5" fill="none" stroke="#0f3c5c" stroke-width="2"></circle> <path d="M24 32.5V36" stroke="#0f3c5c" stroke-width="2"></path> </svg> </div> </div> </div> </div> ${renderComponent($$result2, "Stats", $$Stats, { "content": sideBySideStats, "background": "base", "padding": "base" })} ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/nerc-cip.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/nerc-cip.astro";
const $$url = "/servicios/nerc-cip";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NercCip,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
