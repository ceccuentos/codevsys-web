import { a as createAstro, c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cp1educF.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_IQZdsUy-.mjs';
import { $ as $$PaginatedBlogLayout } from '../../chunks/PaginatedBlogLayout_HQxWun9E.mjs';
import { c as categories } from '../../chunks/BlogPost_BzdnHy9w.mjs';
import { c as blogSetting } from '../../chunks/Layout_BvKR9mbp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.publish !== false;
  });
  const activeCategories = categories.filter(
    (category) => allPosts.some((post) => post.data.categories?.includes(category.name))
  );
  return activeCategories.map((category) => ({
    params: { slug: [category.slug] },
    // slug debe ser un array
    props: { category }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  let slugArray = Astro2.params.slug;
  if (!Array.isArray(slugArray)) {
    slugArray = [slugArray];
  }
  const slugString = slugArray.join("/");
  const category = categories.find((cat) => cat.slug === slugString);
  if (!category) {
    throw new Error("No se encontró la categoría para este slug.");
  }
  const currentPage = parseInt(Astro2.url.searchParams.get("page") || "1");
  const posts = await getCollection("blog", ({ data }) => {
    const isPublished = data.publish !== false;
    const hasCategory = data.categories?.includes(category.name);
    return isPublished && hasCategory;
  });
  const sortedPosts = posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / blogSetting.postsPerPage);
  const start = (currentPage - 1) * blogSetting.postsPerPage;
  const end = start + blogSetting.postsPerPage;
  const paginatedPosts = sortedPosts.slice(start, end);
  return renderTemplate`${renderComponent($$result, "PaginatedBlogLayout", $$PaginatedBlogLayout, { "posts": paginatedPosts, "currentPage": currentPage, "totalPages": totalPages, "baseUrl": `/category/${category.slug}`, "title": category.name, "subtitle": category.description, "currentCategory": category.name })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/category/[...slug].astro", void 0);
const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/category/[...slug].astro";
const $$url = "/category/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
