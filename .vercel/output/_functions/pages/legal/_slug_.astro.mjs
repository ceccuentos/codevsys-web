import { a as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cp1educF.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_IQZdsUy-.mjs';
import { b as $$Layout } from '../../chunks/Layout_BvKR9mbp.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_CQp3A22S.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const legalEntries = await getCollection("legal");
  return legalEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  let slugParam = Astro2.params.slug;
  if (Array.isArray(slugParam)) {
    slugParam = slugParam.join("/");
  }
  const entrys = await getCollection("legal");
  const entry = entrys.find((p) => p.id === slugParam);
  if (!entry) {
    throw new Error("La p\xE1gina legal solicitada no existe. Verifica el slug en la URL o el nombre del archivo Markdown.");
  }
  const { Content } = await renderEntry(entry);
  const seoTitle = entry.data.seo?.title || entry.data.title;
  const seoDescription = entry.data.seo?.description || "";
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(entry.data.lastUpdated).replace(/^([a-záéíóúñ]+) (\d+), (\d{4})$/i, (match, month, day, year) => `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`);
  const heroContent = {
    title: entry.data.title,
    description: "",
    overlayOpacity: 0.8
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<article class="site-container--small mx-auto px-8 prose pb-base text-sm"> <div class="mt-12 mb-8"> <p class="text-sm text-body-base/80">Última actualización: ${formattedDate}</p> </div> ${renderComponent($$result2, "Content", Content, {})} </article> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/legal/[slug].astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/legal/[slug].astro";
const $$url = "/legal/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
