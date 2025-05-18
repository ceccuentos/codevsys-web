import { a as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate, d as addAttribute, r as renderComponent, e as renderScript } from './astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Date } from './Date_Ca2DQN8_.mjs';
import { $ as $$Image } from './_astro_assets_Cbj1YpFU.mjs';

const categories = [
  {
    name: "Tech",
    slug: "tech",
    description: "Latest in technology and software development"
  },
  {
    name: "Web Development",
    slug: "web-development",
    description: "Tips and insights for better web development"
  },
  {
    name: "Design",
    slug: "design",
    description: "Exploring design and user experience"
  },
  {
    name: "Accessibility",
    slug: "accessibility",
    description: "Exploring accessibility and user experience"
  },
  {
    name: "Theme Usage",
    slug: "theme-usage",
    description: "Learn how to use the theme"
  },
  {
    name: "Astro JS",
    slug: "astro-js",
    description: "Everything about Astro JS framework and development"
  },
  {
    name: "SEO",
    slug: "seo",
    description: "Search engine optimization strategies and best practices"
  },
  {
    name: "NERC-CIP",
    slug: "nerc-cip",
    description: "Todo acerca del marco normativo NERC-CIP adaptación a la industria Chilena"
  },
  {
    name: "Ciberseguridad",
    slug: "ciberseguridad",
    description: "Explorar temas y noticias de ciberseguridad"
  }
];

const $$Astro$1 = createAstro("http://localhost:4321");
const $$HashtagCategory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HashtagCategory;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors duration-300 mr-2">
#${category.toLowerCase().replace(/\s+/g, "")} </span>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/HashtagCategory.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, excerpt, featuredImage, publishDate, categories: postCategories, slug, index } = Astro2.props;
  const validCategories = postCategories.filter(
    (categoryName) => categories.some((category) => category.name === categoryName)
  );
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${slug}`, "href")} class="group flex flex-col h-full overflow-hidden bg-white rounded-lg border border-black transition-all duration-300 hover:border-primary" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <div class="relative aspect-[16/9] overflow-hidden border-black border-b group-hover:border-primary transition-colors duration-300"> ${featuredImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": featuredImage, "alt": "", "width": 600, "height": 338, "class": "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" })}`} <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> </div> <div class="py-4 px-4 flex flex-col flex-grow relative">  <div class="text-sm text-gray-600 mb-3 group-hover:text-primary/80 transition-colors duration-300"> ${renderComponent($$result, "Date", $$Date, { "date": publishDate })} </div> <h2 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300"> ${title} </h2> <p class="mt-2 mb-8 text-body-base line-clamp-4 flex-grow text-small group-hover:text-gray-700 transition-colors duration-300"> ${excerpt} </p>  <div class="absolute bottom-4 left-4 flex flex-wrap"> ${validCategories.map((categoryName) => renderTemplate`<div class="category-tag"> ${renderComponent($$result, "HashtagCategory", $$HashtagCategory, { "category": categoryName })} </div>`)} </div> </div> </a> ${renderScript($$result, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/blog/BlogPost.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/blog/BlogPost.astro", void 0);

export { $$BlogPost as $, categories as c };
