import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_DNILZkIK.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_7903qgB1.mjs';
import { $ as $$FeatureDetails, a as $$Stats, s as statsLists } from '../../chunks/stats_7QCJMm69.mjs';
import { g as getFeatureBySlug, $ as $$Eyebrow } from '../../chunks/Eyebrow_BI2u-5qU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Ia = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Servicios - IA",
    //"Contact Us",
    description: ""
  };
  const feature = getFeatureBySlug("ia");
  const beneficios = [
    "Automatizas decisiones clave con IA, reduciendo tiempos operativos y aumentando la precisi\xF3n en procesos cr\xEDticos del negocio.",
    "Mejoras la experiencia del usuario mediante chatbots que responden con rapidez, coherencia y comprensi\xF3n contextual avanzada.",
    "Optimizas procesos con agentes aut\xF3nomos que toman decisiones y ejecutan acciones de forma independiente, reduciendo la intervenci\xF3n humana.",
    "Proteges datos sensibles con anonimizaci\xF3n inteligente, garantizando cumplimiento normativo y confianza en el tratamiento de la informaci\xF3n.",
    "Automatizas flujos de trabajo y procesos de toma de decisiones utilizando modelos de IA, aumentando la eficiencia operativa y reduciendo errores.",
    "Escalas soluciones de IA generativa que se adaptan a tus sistemas actuales y evolucionan con tus necesidades futuras."
  ];
  const sideBySideStats = {
    eyebrow: "IMPACTO",
    title: "Resultados tangibles para tu organizaci\xF3n",
    description: "En promedio, las organizaciones que implementan este servicio experimentan mejoras significativas en sus proyectos y operaciones clave.",
    variant: "side-by-side",
    stats: statsLists.ia.stats,
    content: {
      title: "Resultados tangibles para tu organizaci\xF3n",
      description: "En promedio, las organizaciones que implementan este servicio experimentan mejoras significativas en sus proyectos y operaciones clave."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cont\xE1ctanos", "description": "Ayudamos a empresas del sector energ\xE9tico y de infraestructura cr\xEDtica a cumplir con los est\xE1ndares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${feature && renderTemplate`${renderComponent($$result2, "FeatureDetails", $$FeatureDetails, { "feature": feature })}`}${maybeRenderHead()}<div class="bg-background-light text-headline-light py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"> <div class="md:col-span-2"> <div class="mb-6 flex items-center gap-2"> ${renderComponent($$result2, "Eyebrow", $$Eyebrow, { "text": "Beneficios", "background": "base" })} </div> <div class="space-y-8"> ${beneficios.map((beneficio) => renderTemplate`<div class="text-2xl md:text-3xl font-normal leading-tight">${beneficio}</div>`)} </div> </div> <div class="flex justify-center md:justify-end"> <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 48 48" fill="none"> <!-- Cuerpo principal --> <rect x="8" y="18" width="32" height="18" rx="6" stroke="#0f3c5c" stroke-width="2" fill="none"></rect> <!-- Cabeza --> <rect x="16" y="10" width="16" height="12" rx="6" stroke="#0f3c5c" stroke-width="2" fill="none"></rect> <!-- Boca --> <rect x="18.5" y="26" width="11" height="5" rx="2.5" stroke="#0f3c5c" stroke-width="2" fill="none"></rect> <!-- Ojos --> <circle cx="18" cy="16" r="2" stroke="#0f3c5c" stroke-width="2" fill="none"></circle> <circle cx="30" cy="16" r="2" stroke="#0f3c5c" stroke-width="2" fill="none"></circle> <!-- Antena --> <rect x="23" y="6" width="2" height="6" rx="1" fill="none" stroke="#0f3c5c" stroke-width="2"></rect> <!-- Patas laterales --> <rect x="6" y="28" width="4" height="8" rx="2" fill="none" stroke="#0f3c5c" stroke-width="2"></rect> <rect x="38" y="28" width="4" height="8" rx="2" fill="none" stroke="#0f3c5c" stroke-width="2"></rect> </svg> </div> </div> </div> </div>  ${renderComponent($$result2, "Stats", $$Stats, { "content": sideBySideStats, "background": "base", "padding": "base" })} ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/ia.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/ia.astro";
const $$url = "/servicios/ia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
