import { a as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, F as Fragment } from '../../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_BCIsIKml.mjs';
import { a as $$Layout } from '../../chunks/Layout_DNILZkIK.mjs';
import 'clsx';
import { $ as $$Date } from '../../chunks/Date_Ca2DQN8_.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Cbj1YpFU.mjs';
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
    //params: { slug: [post.id] },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "image": seoImage }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-120 absolute top-0 left-0 z-0 overflow-hidden border-b border-black"> ${post.data.featuredImage && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": post.data.featuredImage, "alt": "", "width": 1920, "height": 1080, "class": "w-full h-full object-cover grayscale opacity-20", "quality": 60 })} <div class="absolute inset-0 bg-primary/10 backdrop-blur-md"></div> ` })}`} </div> <article class="site-container--small mx-auto px-4 prose relative z-10 pb-base"> <div class="mt-42 mb-12 text-center"> <h1>${post.data.title}</h1> <div class="flex items-center justify-center gap-4 text-gray-600"> ${renderComponent($$result2, "Date", $$Date, { "date": post.data.publishDate })} ${post.data.categories && renderTemplate`<div class="flex flex-wrap gap-2"> ${post.data.categories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryPill", $$CategoryPill, { "category": category })}`)} </div>`} </div> </div> ${post.data.featuredImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": post.data.featuredImage, "alt": "", "width": 1200, "height": 675, "class": "w-full h-auto rounded-lg border mb-12 border-black", "quality": 80, "format": "webp" })}`} <div class="mt-8"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ` })}`;
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
