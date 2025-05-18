import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DAN-WyZE.mjs';
import { g as getCollection } from '../chunks/_astro_content_BA2AxaBL.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_7903qgB1.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const legalEntries = await getCollection("legal");
  const sortedEntries = legalEntries.sort((a, b) => a.data.title.localeCompare(b.data.title));
  const heroContent = {
    title: "Legal Information",
    description: "Important policies and terms governing the use of our services",
    overlayOpacity: 0.8
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Legal Information" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<section class="py-small"> <div class="site-container px-8"> <div class="space-y-6"> ${sortedEntries.map((entry) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(entry.data.lastUpdated);
    return renderTemplate`<div class="border-b border-body-base/10 pb-6"> <a${addAttribute(`/legal/${entry.id}`, "href")} class="group"> <h2 class="text-medium group-hover:text-accent transition-colors"> ${entry.data.title} </h2> <p class="text-sm text-body-base/80 mt-2">Last updated: ${formattedDate}</p> </a> </div>`;
  })} </div> </div> </section> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/legal/index.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/legal/index.astro";
const $$url = "/legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
