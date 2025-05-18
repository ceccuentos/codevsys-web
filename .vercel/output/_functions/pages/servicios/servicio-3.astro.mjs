import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from '../../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Servicio3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="site-container px-4 py-16"> <h1>Servicio 3</h1> <p>Página de detalle para el Servicio 3. (Contenido pendiente)</p> </section>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/servicio-3.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/servicios/servicio-3.astro";
const $$url = "/servicios/servicio-3";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicio3,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
