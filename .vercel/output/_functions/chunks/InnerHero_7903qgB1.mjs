import { a as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Cbj1YpFU.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$InnerHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InnerHero;
  const { content } = Astro2.props;
  const opacity = content.overlayOpacity ?? 1;
  return renderTemplate`<!-- <section class="w-full border-b pt-38 pb-18 relative"> -->${maybeRenderHead()}<section class="w-full border-b pt-38 pb-18 relative"> <div class="absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"> ${content.backgroundImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": content.backgroundImage, "alt": "", "width": 1920, "height": 1080, "class": "w-full h-full object-cover", "quality": 70, "format": "webp" })}`} <div class="hero-background absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"${addAttribute(`opacity: ${opacity};`, "style")}></div> </div> <div class="site-container mx-auto px-4 relative z-10"> <div> <h1 class="text-white" data-aos="fade-up">${content.title}</h1> ${content.description && renderTemplate`<p class="subtitle text-white" data-aos="fade-up" data-aos-delay="100">${content.description}</p>`} </div> </div> </section>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/sections/InnerHero.astro", void 0);

export { $$InnerHero as $ };
