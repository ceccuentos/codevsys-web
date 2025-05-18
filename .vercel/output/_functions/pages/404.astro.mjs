import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { a as $$Layout, b as $$Button } from '../chunks/Layout_DAN-WyZE.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "P\xE1gina no encontrada";
  const seoDescription = "Ups! Esta p\xE1gina no existe o fue movida a otro contenido.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-[80vh] flex items-center"> <div class="site-container mx-auto px-4 py-base text-center"> <div class="max-w-2xl mx-auto"> <h1 class="mb-4 text-9xl font-bold text-primary" data-aos="fade-up">404</h1> <h2 class="mb-8" data-aos="fade-up" data-aos-delay="100">Página no encontrada</h2> <p class="text-body-base mb-12" data-aos="fade-up" data-aos-delay="200">
La página que buscas no existe o fue removida.
                    Por favor verifica la URL o navega al Homepage.
</p> <div data-aos="fade-up" data-aos-delay="300"> ${renderComponent($$result2, "Button", $$Button, { "href": "/", "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Volver al Homepage
` })} </div> </div> </div> </div> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/404.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
