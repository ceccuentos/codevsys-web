import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_r8YmDUun.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_7903qgB1.mjs';
import { $ as $$FeatureDetails, a as $$Stats, s as statsLists } from '../../chunks/stats_CVlsdaIA.mjs';
import { g as getFeatureBySlug, $ as $$Eyebrow } from '../../chunks/Eyebrow_Cc5qLdqg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Integraciones = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Servicios - Integraciones",
    //"Contact Us",
    description: ""
  };
  const feature = getFeatureBySlug("integraciones");
  const beneficios = [
    "Conectas tus sistemas clave en una arquitectura unificada, eliminando silos y mejorando la coordinaci\xF3n entre todas las \xE1reas del negocio.",
    "Tomas decisiones m\xE1s r\xE1pidas y acertadas al contar con datos consolidados de finanzas, clientes, operaciones y log\xEDstica en tiempo real.",
    "Aumentas la productividad automatizando tareas manuales, eliminando reprocesos y reduciendo errores por falta de integraci\xF3n.",
    "Escalas tu operaci\xF3n digital con desarrollos web a medida que se adaptan a tus procesos y herramientas actuales.",
    "Proteges tu informaci\xF3n ante fallos o ciberataques mediante respaldos automatizados, cifrados y validados regularmente sin intervenci\xF3n manual."
  ];
  const sideBySideStats = {
    eyebrow: "IMPACTO",
    title: "Resultados tangibles para tu organizaci\xF3n",
    description: "En promedio, las organizaciones que implementan este servicio experimentan mejoras significativas en sus proyectos y operaciones clave.",
    variant: "side-by-side",
    stats: statsLists.integraciones.stats,
    content: {
      title: "Resultados tangibles para tu organizaci\xF3n",
      description: "En promedio, las organizaciones que implementan este servicio experimentan mejoras significativas en sus proyectos y operaciones clave."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cont\xE1ctanos", "description": "Ayudamos a empresas del sector energ\xE9tico y de infraestructura cr\xEDtica a cumplir con los est\xE1ndares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${feature && renderTemplate`${renderComponent($$result2, "FeatureDetails", $$FeatureDetails, { "feature": feature })}`}${maybeRenderHead()}<div class="bg-background-light text-headline-light py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"> <div class="md:col-span-2"> <div class="mb-6 flex items-center gap-2"> ${renderComponent($$result2, "Eyebrow", $$Eyebrow, { "text": "Beneficios", "background": "base" })} </div> <div class="space-y-8"> ${beneficios.map((beneficio) => renderTemplate`<div class="text-2xl md:text-3xl font-normal leading-tight">${beneficio}</div>`)} </div> </div> <div class="flex justify-center md:justify-end"> <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32" fill="none"> <path d="M27,4H5C3.3,4,2,5.3,2,7v18c0,1.7,1.3,3,3,3h22c1.7,0,3-1.3,3-3V7C30,5.3,28.7,4,27,4z M9.1,7.6c0.1-0.1,0.1-0.2,0.2-0.3
	c0.1-0.1,0.2-0.2,0.3-0.2C10,6.9,10.4,7,10.7,7.3c0.1,0.1,0.2,0.2,0.2,0.3C11,7.7,11,7.9,11,8c0,0.3-0.1,0.5-0.3,0.7
	C10.5,8.9,10.3,9,10,9C9.7,9,9.5,8.9,9.3,8.7C9.1,8.5,9,8.3,9,8C9,7.9,9,7.7,9.1,7.6z M6,8c0-0.3,0.1-0.5,0.3-0.7
	c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1C6.7,7,6.7,7,6.8,7c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1
	c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3C8,7.7,8,7.9,8,8c0,0.1,0,0.3-0.1,0.4C7.9,8.5,7.8,8.6,7.7,8.7C7.5,8.9,7.3,9,7,9
	S6.5,8.9,6.3,8.7C6.1,8.5,6,8.3,6,8z M11.7,21.3c0.4,0.4,0.4,1,0,1.4C11.5,22.9,11.3,23,11,23s-0.5-0.1-0.7-0.3l-3-3
	c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L9.4,19L11.7,21.3z M12.6,8.9c-0.1-0.1-0.2-0.1-0.3-0.2
	c-0.1-0.1-0.2-0.2-0.2-0.3C12,8.3,12,8.1,12,8c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.4,1.4,0
	c0.1,0.1,0.2,0.2,0.2,0.3C14,7.7,14,7.9,14,8c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3C13.5,8.9,13.3,9,13,9
	C12.9,9,12.7,9,12.6,8.9z M18.9,15.4l-4,8C14.7,23.8,14.4,24,14,24c-0.2,0-0.3,0-0.4-0.1c-0.5-0.2-0.7-0.8-0.4-1.3l4-8
	c0.2-0.5,0.8-0.7,1.3-0.4C18.9,14.4,19.1,15,18.9,15.4z M24.7,19.7l-3,3C21.5,22.9,21.3,23,21,23s-0.5-0.1-0.7-0.3
	c-0.4-0.4-0.4-1,0-1.4l2.3-2.3l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3C25.1,18.7,25.1,19.3,24.7,19.7z" stroke="#0f3c5c" stroke-width="1.5" fill="none"></path> </svg> </div> </div> </div> </div>  ${renderComponent($$result2, "Stats", $$Stats, { "content": sideBySideStats, "background": "base", "padding": "base" })} ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/integraciones.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/integraciones.astro";
const $$url = "/servicios/integraciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Integraciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
