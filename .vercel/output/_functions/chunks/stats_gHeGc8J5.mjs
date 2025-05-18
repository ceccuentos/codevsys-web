import { a as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate, d as addAttribute, e as renderScript, r as renderComponent } from './astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                      */
import { b as $$Button } from './Layout_r8YmDUun.mjs';
import { $ as $$Eyebrow } from './Eyebrow_B43Ctfsx.mjs';
import { g as getPaddingClass, a as getBackgroundColor, b as getTextColor } from './styleUtils_tC4Hqp-N.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$FeatureDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureDetails;
  const { feature } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12" data-astro-cid-kzefcnob> <div class="site-container px-4" data-astro-cid-kzefcnob> <div class="mb-12" data-astro-cid-kzefcnob> <h2 class="text-4xl font-bold mb-4 text-primary" data-astro-cid-kzefcnob> ${feature.title} </h2> ${feature.descriptionPage && renderTemplate`<p class="text-lg text-gray-700 max-w-2xl mb-8" data-astro-cid-kzefcnob> ${feature.descriptionPage} </p>`} </div> ${feature.featuresPage && feature.featuresPage.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-kzefcnob> ${feature.featuresPage.map((card) => renderTemplate`<div class="bg-white rounded-lg shadow p-6 flex flex-col items-start" data-astro-cid-kzefcnob> ${card.image && renderTemplate`<img${addAttribute(card.image, "src")}${addAttribute(card.title, "alt")} class="w-full h-48 object-cover rounded mb-4 border border-gray-200" loading="lazy" data-astro-cid-kzefcnob>`} <h3 class="text-xl font-semibold mb-2 text-primary" data-astro-cid-kzefcnob>${card.title}</h3> <p class="text-sm text-gray-700" data-astro-cid-kzefcnob>${card.description}</p> </div>`)} </div>`} </div> </section> `;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/sections/FeatureDetails.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Stats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    content,
    background = "base",
    padding,
    paddingTop,
    paddingBottom
  } = Astro2.props;
  const variant = content.variant || "default";
  const {
    eyebrow,
    title,
    description,
    stats,
    content: contentContent
  } = content;
  const bgColor = getBackgroundColor(background);
  const textColor = getTextColor(background);
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["overflow-hidden", bgColor, paddingClass], "class:list")}> <div class="site-container px-4"> ${variant === "default" && (title || description) && renderTemplate`<div class="text-center mb-16"> ${eyebrow && renderTemplate`${renderComponent($$result, "Eyebrow", $$Eyebrow, { "text": eyebrow, "background": background })}`} ${title && renderTemplate`<h2${addAttribute([textColor], "class:list")} data-aos="fade-up"> ${title} </h2>`} ${description && renderTemplate`<p${addAttribute(["mt-4", textColor, "opacity-90"], "class:list")} data-aos="fade-up" data-aos-delay="100"> ${description} </p>`} </div>`} <div${addAttribute([
    variant === "side-by-side" ? "grid md:grid-cols-2 gap-12 items-center" : ""
  ], "class:list")}> ${variant === "side-by-side" && contentContent && renderTemplate`<div class="content-section" data-aos="fade-right"> ${eyebrow && renderTemplate`${renderComponent($$result, "Eyebrow", $$Eyebrow, { "text": eyebrow, "background": background })}`} <h2${addAttribute([textColor], "class:list")}>${contentContent.title}</h2> <p${addAttribute(["mt-4", textColor, "opacity-90"], "class:list")}>${contentContent.description}</p> ${contentContent.button && renderTemplate`<div class="mt-8"> ${renderComponent($$result, "Button", $$Button, { "href": contentContent.button.link, "variant": contentContent.button.variant || "primary" }, { "default": ($$result2) => renderTemplate`${contentContent.button.text}` })} </div>`} </div>`} <div${addAttribute([
    variant === "default" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" : "grid grid-cols-2 gap-8"
  ], "class:list")}> ${stats.map((stat, index) => renderTemplate`<div class="text-center"${addAttribute(variant === "side-by-side" ? "fade-left" : "fade-up", "data-aos")}${addAttribute(index * 100, "data-aos-delay")}> <div${addAttribute(["text-4xl font-bold mb-2", textColor], "class:list")}> <span class="stat-number"${addAttribute(stat.value, "data-target")}> ${stat.prefix || ""}${0}${stat.suffix || ""} </span> </div> <p${addAttribute(["text-lg", textColor, "opacity-90"], "class:list")}> ${stat.label} </p> </div>`)} </div> </div> </div> </section> ${renderScript($$result, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/sections/Stats.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/sections/Stats.astro", void 0);

const statsLists = {
  nerc_cip: {
    stats: [
      {
        value: 70,
        label: "Visibilidad de activos críticos",
        prefix: "+",
        suffix: "%"
      },
      {
        value: 3,
        label: " Identificación de activos, usando metodologías ágiles y herramientas de escaneo.",
        suffix: " Semanas"
      },
      {
        value: 60,
        label: "Incidentes sin notificación",
        prefix: "-",
        suffix: "%"
      },
      {
        value: 55,
        label: "Tiempos de respuesta ante incidentes",
        prefix: "-",
        suffix: "%"
      }
    ]
  },
  ley_marco: {
    stats: [
      {
        value: 65,
        label: " Mejora en la capacidad de respuesta a incidentes.",
        prefix: "+",
        suffix: "%"
      },
      {
        value: 50,
        label: " Tiempo promedio de detección de incidentes.",
        prefix: "-",
        suffix: "%"
      },
      {
        value: 100,
        label: " Cumplimiento en los plazos de reporte al CSIRT Nacional.",
        suffix: "%"
      },
      {
        value: 70,
        label: " Aumento en la concientización del personal.",
        prefix: "+",
        suffix: "%"
      }
    ]
  },
  ia: {
    stats: [
      {
        value: 60,
        label: " Mejora en la precisión de respuestas mediante sistemas RAG.",
        prefix: "+",
        suffix: "%"
      },
      {
        value: 85,
        label: " reducción en errores humanos al implementar agentes autónomos.",
        prefix: "-",
        suffix: "%"
      },
      {
        value: 100,
        label: " Cumplimiento en normativas de privacidad con técnicas de anonimización de datos.",
        suffix: "%"
      },
      {
        value: 70,
        label: " eficiencia en procesos automatizados mediante IA generativa.",
        prefix: "+",
        suffix: "%"
      }
    ]
  },
  integraciones: {
    stats: [
      {
        value: 65,
        label: " Eficiencia operativa al automatizar procesos entre ERP, CRM y plataformas web.",
        prefix: "+",
        suffix: "%"
      },
      {
        value: 50,
        label: " Tiempos de respuesta a clientes gracias a la integración entre ventas, operaciones y logística.",
        prefix: "-",
        suffix: "%"
      },
      {
        value: 80,
        label: " Disponibilidad de información crítica para la toma de decisiones en tiempo real.",
        suffix: "%"
      },
      {
        value: 90,
        label: " Reducción en riesgo de pérdida de datos al implementar respaldos programados y verificados.",
        prefix: "",
        suffix: "%"
      }
    ]
  }
};

export { $$FeatureDetails as $, $$Stats as a, statsLists as s };
