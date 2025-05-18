import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_DAN-WyZE.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_7903qgB1.mjs';
import { $ as $$FeatureDetails, a as $$Stats, s as statsLists } from '../../chunks/stats_DzXqKdRC.mjs';
import { g as getFeatureBySlug, $ as $$Eyebrow } from '../../chunks/Eyebrow_BGW8U6ZE.mjs';
export { renderers } from '../../renderers.mjs';

const $$LeyMarcoCiberseguridad = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Servicios - Ley 21663",
    //"Contact Us",
    description: ""
  };
  const feature = getFeatureBySlug("ley-marco-ciberseguridad");
  const beneficios = [
    "Cumples con la Ley 21.663 mediante pol\xEDticas y reportes claros, garantizando trazabilidad legal y t\xE9cnica ante fiscalizaciones y auditor\xEDas.",
    "Reduces el impacto de incidentes operativos con DRP y BIA, asegurando continuidad de servicios esenciales en entornos cr\xEDticos.",
    "Mejoras la capacidad de respuesta con protocolos definidos y personal entrenado, acortando tiempos de detecci\xF3n, contenci\xF3n y notificaci\xF3n al CSIRT.",
    "Fortaleces la cultura interna de ciberseguridad, promoviendo el involucramiento de todas las \xE1reas en la protecci\xF3n de informaci\xF3n y sistemas.",
    "Aumentas la confianza de clientes y entes reguladores al demostrar una gesti\xF3n proactiva y madura de riesgos cibern\xE9ticos."
  ];
  const sideBySideStats = {
    eyebrow: "IMPACTO",
    title: "Resultados tangibles para tu organizaci\xF3n",
    description: "En promedio, las organizaciones que implementan este servicio experimentan mejoras significativas en sus proyectos y operaciones clave.",
    variant: "side-by-side",
    stats: statsLists.ley_marco.stats,
    content: {
      title: "Resultados tangibles para tu organizaci\xF3n",
      description: "En promedio, las organizaciones que implementan este servicio experimentan mejoras significativas en sus proyectos y operaciones clave."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cont\xE1ctanos", "description": "Ayudamos a empresas del sector energ\xE9tico y de infraestructura cr\xEDtica a cumplir con los est\xE1ndares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${feature && renderTemplate`${renderComponent($$result2, "FeatureDetails", $$FeatureDetails, { "feature": feature })}`}${maybeRenderHead()}<div class="bg-background-light text-headline-light py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"> <div class="md:col-span-2"> <div class="mb-6 flex items-center gap-2"> ${renderComponent($$result2, "Eyebrow", $$Eyebrow, { "text": "Beneficios", "background": "base" })} </div> <div class="space-y-8"> ${beneficios.map((beneficio) => renderTemplate`<div class="text-2xl md:text-3xl font-normal leading-tight">${beneficio}</div>`)} </div> </div> <div class="flex justify-center md:justify-end"> <!-- Icono de ciberseguridad: candado SVG --> <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 48 48"> <rect x="10" y="20" width="28" height="20" rx="4" fill="none" stroke="#0f3c5c" stroke-width="2"></rect> <path d="M16 20v-5a8 8 0 1 1 16 0v5" stroke="#0f3c5c" stroke-width="2" fill="none"></path> <circle cx="24" cy="30" r="2.5" fill="none" stroke="#0f3c5c" stroke-width="2"></circle> <path d="M24 32.5V36" stroke="#0f3c5c" stroke-width="2"></path> </svg> <!-- <svg width="160px" height="160px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8.00169L16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> --> </div> </div> </div> </div> ${renderComponent($$result2, "Stats", $$Stats, { "content": sideBySideStats, "background": "base", "padding": "base" })} ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/ley-marco-ciberseguridad.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/ley-marco-ciberseguridad.astro";
const $$url = "/servicios/ley-marco-ciberseguridad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LeyMarcoCiberseguridad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
