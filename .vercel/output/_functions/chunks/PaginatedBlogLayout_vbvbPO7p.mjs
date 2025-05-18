import { c as createComponent, a as createAstro, r as renderComponent, m as maybeRenderHead, b as renderTemplate, d as addAttribute } from './astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { $ as $$, a as $$Layout, b as $$Button } from './Layout_r8YmDUun.mjs';
import { c as categories, $ as $$BlogPost } from './BlogPost_vS9ZV2io.mjs';
import { g as getCollection } from './_astro_content_BduOr-eq.mjs';
import { $ as $$InnerHero } from './InnerHero_7903qgB1.mjs';

const $$Astro$3 = createAstro("http://localhost:4321");
const $$ChevronLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ChevronLeft;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-left", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15 18-6-6 6-6"></path> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/ChevronLeft.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$ChevronRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ChevronRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m9 18 6-6-6-6"></path> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/ChevronRight.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { posts, currentCategory } = Astro2.props;
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.publish !== false;
  });
  const activeCategories = categories.filter(
    (category) => allPosts.some((post) => post.data.categories?.includes(category.name))
  );
  return renderTemplate`${maybeRenderHead()}<section class="site-container mx-auto px-4 py-base"> <div class="mb-16 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6" data-aos="fade-in" data-aos-delay="100"> <div class="w-full"> <h2 class="text-lg font-semibold mb-4">Filtrar por Categorías:</h2> <div class="flex flex-wrap gap-2"> <a href="/blog"${addAttribute(`px-4 sm:px-6 py-2 sm:py-3 leading-none rounded-md text-small flex items-center justify-center transition-colors border border-primary duration-200 ${!currentCategory ? "bg-primary text-body-dark shadow-md" : "bg-background text-body-base hover:bg-background-light hover:text-body-light"}`, "class")}>
Mostrar Todos
</a> ${activeCategories.map((category) => renderTemplate`<a${addAttribute(`/category/${category.slug}`, "href")}${addAttribute(`px-4 sm:px-6 py-2 sm:py-3 leading-none rounded-md text-small flex items-center justify-center transition-colors border border-primary duration-200 ${currentCategory === category.name ? "bg-primary text-body-dark shadow-md" : "bg-background text-body-base hover:bg-background-light hover:text-body-light"}`, "class")}${addAttribute(category.description, "title")}> ${category.name} </a>`)} </div> </div> <p class="text-small text-body-base text-left sm:text-right whitespace-nowrap">
Mostrando <span class="font-bold text-primary">${posts.length}</span> of <span class="font-bold text-primary">${allPosts.length}</span> artículos
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${posts.map((post, index) => renderTemplate`<div> ${renderComponent($$result, "BlogPost", $$BlogPost, { "title": post.data.title, "excerpt": post.data.excerpt, "featuredImage": post.data.featuredImage || "", "publishDate": post.data.publishDate, "categories": post.data.categories || [], "slug": post.id, "index": index })} </div>`)} </div> ${posts.length === 0 && renderTemplate`<p class="text-center text-gray-500 py-8">No se encontraron artículos para esta categoría</p>`} </section>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/blog/BlogList.astro", void 0);

const blogHeroImage = new Proxy({"src":"/_astro/blog-hero.DJ8AbyDk.png","width":1536,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/cristiancontrerascabrera/astro/codevsys-web/src/assets/images/blog-hero.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://localhost:4321");
const $$PaginatedBlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PaginatedBlogLayout;
  const seoTitle = "Blog";
  const seoDescription = "Nuestro blog es donde comparten nuestras ideas y pensamientos sobre las \xFAltimas tendencias en el mundo de la web.";
  const {
    posts: paginatedPosts,
    currentPage,
    totalPages,
    baseUrl,
    title,
    subtitle,
    currentCategory
  } = Astro2.props;
  const nextPage = currentPage < totalPages ? `${baseUrl}/${currentPage + 1}` : null;
  const prevPage = currentPage > 1 ? currentPage - 1 === 1 ? baseUrl : `${baseUrl}/${currentPage - 1}` : null;
  const heroContent = {
    title,
    description: subtitle,
    backgroundImage: blogHeroImage,
    overlayOpacity: 0.2
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": paginatedPosts, "currentCategory": currentCategory })} ${totalPages > 1 && renderTemplate`<nav class="pagination-nav" aria-label="Blog pagination" data-aos="fade-in"> <div class="container mx-auto px-4 py-12"> <div class="flex items-center justify-center gap-6"> ${prevPage && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": prevPage, "variant": "primary", "class": "flex items-center gap-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ChevronLeft", $$ChevronLeft, { "size": 20 })}
Anterior
` })}`} <div class="flex items-center gap-2"> ${Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => renderTemplate`<a${addAttribute(pageNum === 1 ? baseUrl : `${baseUrl}/${pageNum}`, "href")}${addAttribute(`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${currentPage === pageNum ? "bg-primary text-white" : "hover:bg-white hover:text-body-base"}`, "class")}${addAttribute(currentPage === pageNum ? "page" : void 0, "aria-current")}> ${pageNum} </a>`)} </div> ${nextPage && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": nextPage, "variant": "primary" }, { "default": ($$result3) => renderTemplate`
Siguiente
${renderComponent($$result3, "ChevronRight", $$ChevronRight, { "size": 20 })} ` })}`} </div> </div> </nav>`} </main> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/blog/PaginatedBlogLayout.astro", void 0);

export { $$PaginatedBlogLayout as $ };
