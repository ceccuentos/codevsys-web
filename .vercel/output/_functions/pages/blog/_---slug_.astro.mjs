import { a as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, F as Fragment, d as addAttribute } from '../../chunks/astro/server_Cp1educF.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_7qRJ6TIs.mjs';
import { b as $$Layout, a as $$Button } from '../../chunks/Layout_BvKR9mbp.mjs';
import 'clsx';
import { $ as $$Date } from '../../chunks/Date_DlSMD_mB.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BhyCBfHW.mjs';
import { $ as $$Subscription } from '../../chunks/Subscription_C4-7Aty7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$CategoryPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoryPill;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="px-2 py-1 text-sm rounded-sm bg-primary/10 text-primary border-primary border flex items-center justify-center leading-none font-medium"> ${category} </span>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/CategoryPill.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const styleGuideSection = {
    eyebrow: "Síguenos",
    headline: "Suscríbete al Newsletter",
    description: "Mantente informado sobre ciberseguridad, NERC-CIP, IA generativa, innovación tecnológica y mejores prácticas para industrias críticas.",
    newsLetterForm: [
      {
        title: "¡Recibe nuestras actualizaciones periódicas!",
        description: "Entérate antes que nadie sobre nuevas regulaciones, casos de uso de IA generativa, herramientas de automatización y tendencias tecnológicas clave para tu empresa.",
        successTitle: "¡Suscripción exitosa!",
        successMessage: "Gracias por unirte. Revisa tu bandeja de entrada para comenzar a recibir nuestros contenidos exclusivos.",
        buttonText: "Suscribirme",
        fileDownload: ""
      }
    ]
  };
  let slugParam = Astro2.params.slug;
  if (Array.isArray(slugParam)) {
    slugParam = slugParam.join("/");
  }
  const posts = await getCollection("blog");
  const post = posts.find((p) => p.id === slugParam);
  if (!post) {
    throw new Error("Post no encontrado");
  }
  const { Content } = await renderEntry(post);
  const allPublishedPosts = (await getCollection("blog")).filter((p) => p.data.publish === true).sort((a, b) => new globalThis.Date(b.data.publishDate).valueOf() - new globalThis.Date(a.data.publishDate).valueOf());
  const currentIndex = allPublishedPosts.findIndex((p) => p.id === post.id);
  const nextChronologicalPost = currentIndex > 0 ? allPublishedPosts[currentIndex - 1] : null;
  const prevChronologicalPost = currentIndex < allPublishedPosts.length - 1 ? allPublishedPosts[currentIndex + 1] : null;
  const seoTitle = post.data.seo?.title || post.data.title;
  const seoDescription = post.data.seo?.description || post.data.excerpt;
  let seoImage = post.data.seo?.image;
  if (seoImage && !seoImage.startsWith("http")) {
    const siteUrl = "http://localhost:4321";
    seoImage = new URL(seoImage.startsWith("/") ? seoImage : `/${seoImage}`, siteUrl).toString();
  } else if (!seoImage && post.data.featuredImage) {
    const siteUrl = "http://localhost:4321";
    seoImage = new URL(post.data.featuredImage.src, siteUrl).toString();
  }
  const showSubscription = !!post.data.showSubscription;
  const subscriptionContent = post.data.subscriptionContent || styleGuideSection;
  const showBrochure = post.data.showBrochure === true;
  const brochureText = post.data.brochureText;
  const brochureButtonText = post.data.brochureButtonText || "Descargar";
  const brochureLink = post.data.brochureLink || "#subscription";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "image": seoImage, "jsonLdString": post.data.jsonLdString }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-120 absolute top-0 left-0 z-0 overflow-hidden border-b border-black"> ${post.data.featuredImage && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": post.data.featuredImage, "alt": "", "width": 1920, "height": 1080, "class": "w-full h-full object-cover grayscale opacity-20", "quality": 60 })} <div class="absolute inset-0 bg-primary/10 backdrop-blur-md"></div> ` })}`} </div> <article class="site-container--small mx-auto px-4 prose relative z-10 pb-base"> <div class="mt-42 mb-12 text-center"> <h1>${post.data.title}</h1> <div class="flex items-center justify-center gap-4 text-gray-600"> ${renderComponent($$result2, "DateDisplay", $$Date, { "date": post.data.publishDate })} ${post.data.categories && renderTemplate`<div class="flex flex-wrap gap-2"> ${post.data.categories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryPill", $$CategoryPill, { "category": category })}`)} </div>`} </div> </div> ${showBrochure && brochureText && renderTemplate`<section class="py-8 md:py-12 bg-surface-light border-t border-b border-black/10"> <div class="site-container--small"> <div class="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-lg shadow-xl border border-black/15 text-center"> <p class="text-xl md:text-2xl font-semibold mb-6 text-text"> ${brochureText} </p> ${renderComponent($$result2, "Button", $$Button, { "href": brochureLink, "variant": "accent", "size": "lg", "class": "glow-button mx-auto" }, { "default": async ($$result3) => renderTemplate`${brochureButtonText}` })} </div> </div> </section>`} ${post.data.featuredImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": post.data.featuredImage, "alt": "", "width": 1200, "height": 675, "class": "w-full max-w-4xl mx-auto h-auto rounded-lg border mb-12 border-black", "quality": 80, "format": "webp" })}`} <div class="mt-8"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ${(prevChronologicalPost || nextChronologicalPost) && renderTemplate`<nav class="site-container--small mx-auto px-4 mt-12 py-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6"> <div class="w-full md:w-1/2 text-left"> ${prevChronologicalPost && renderTemplate`<a${addAttribute(`/blog/${prevChronologicalPost.id}/`, "href")} class="block p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-accent dark:hover:border-accent group transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-surface-dark"> <span class="text-xs text-gray-500 dark:text-gray-400 block mb-1">&larr; Artículo Anterior</span> <span class="font-semibold text-lg text-text dark:text-text-dark group-hover:text-accent dark:group-hover:text-accent transition-colors duration-200">${prevChronologicalPost.data.title}</span> </a>`} </div> <div class="w-full md:w-1/2 text-right"> ${nextChronologicalPost && renderTemplate`<a${addAttribute(`/blog/${nextChronologicalPost.id}/`, "href")} class="block p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-accent dark:hover:border-accent group transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-surface-dark"> <span class="text-xs text-gray-500 dark:text-gray-400 block mb-1">Siguiente Artículo &rarr;</span> <span class="font-semibold text-lg text-text dark:text-text-dark group-hover:text-accent dark:group-hover:text-accent transition-colors duration-200">${nextChronologicalPost.data.title}</span> </a>`} </div> </nav>`}${showSubscription && renderTemplate`${renderComponent($$result2, "Subscription", $$Subscription, { "content": subscriptionContent, "imagePosition": "right", "background": "light", "padding": "base" })}`}` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/blog/[...slug].astro", void 0);
const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
