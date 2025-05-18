import { a as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_r8YmDUun.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_7903qgB1.mjs';
import { g as getCollection } from '../chunks/_astro_content_DG9eIubY.mjs';
import { g as getPaddingClass } from '../chunks/styleUtils_tC4Hqp-N.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Cbj1YpFU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$TeamGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamGrid;
  const { padding, paddingTop, paddingBottom } = Astro2.props;
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  const teamMembers = await getCollection("team", ({ data }) => {
    return data.publish !== false;
  });
  const sortedTeamMembers = teamMembers.sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["relative", paddingClass], "class:list")}> <div class="site-container mx-auto px-4"> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-x-8 xl:gap-y-14"> ${sortedTeamMembers.map((member, index) => renderTemplate`<div class="flex flex-col group" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-aos-duration="800"> <a${addAttribute(`/team/${member.id}`, "href")} class="flex flex-col group rounded-md"> <div class="relative mb-4 overflow-hidden rounded-md"> <span class="absolute inset-0 -mt-12 h-400 w-1/2 translate-x-[250%] rotate-12 bg-white opacity-20  group-hover:transition-all  group-hover:duration-300 ease-out group-hover:translate-x-[-250%] z-10"></span> ${member.data.headshot ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": member.data.headshot, "alt": "", "width": 896, "height": 1280, "quality": 80, "format": "webp", "class": "w-full h-auto aspect-[3/4] object-cover rounded-md group-hover:scale-[1.02] hover:brightness-110 transition-all duration-500 ease-in-out", "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="w-full aspect-[3/4] bg-gray-200 rounded-md flex items-center justify-center"> <span class="text-gray-400">No Image</span> </div>`} </div> <h3 class="text-h5 font-medium transition-colors duration-500 group-hover:text-primary"> ${member.data.name} </h3> <p class="text-xsmall text-body-base">${member.data.jobTitle}</p> </a> </div>`)} </div> </div> </section>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/sections/TeamGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Nosotros";
  const seoDescription = "Somos una Startup joven nacida a partir del convencimiento de que las personas pueden aportar al desarrollo de una sociedad a trav\xE9s de iniciativas tecnol\xF3gicas que apuntan alto y que ven en el crecimiento mutuo una oportunidad de aportar al mundo en que vivimos. Somos un equipo de entusiastas del software que se ha ganado un nombre por su af\xE1n por innovar y adaptarse.";
  const heroContent = {
    title: "Nosotros",
    description: "Somos una Startup joven nacida a partir del convencimiento de que las personas pueden aportar al desarrollo de una sociedad a trav\xE9s de iniciativas tecnol\xF3gicas que apuntan alto y que ven en el crecimiento mutuo una oportunidad de aportar al mundo en que vivimos."
  };
  const manifiesto = [{
    name: "Manifiesto",
    description: "Codevsys naci\xF3 a mediados del 2020 como un sue\xF1o: usar la tecnolog\xEDa para hacerle la vida m\xE1s f\xE1cil a las personas.\nDesde entonces, no hemos parado de construir soluciones que resuelven problemas reales, de manera simple, \xFAtil y eficiente.\n\nCreemos que la tecnolog\xEDa tiene sentido cuando est\xE1 al servicio de las personas. Que el c\xF3digo solo importa cuando conecta, mejora, simplifica.\n\nNos mueve la colaboraci\xF3n, la comunicaci\xF3n transparente y una \xE9tica clara en cada decisi\xF3n. Por eso trabajamos codo a codo con nuestros clientes, entendiendo sus desaf\xEDos como propios y dise\xF1ando soluciones que no solo funcionan: que transforman.\n\nSomos un equipo t\xE9cnico, s\xED. Pero tambi\xE9n humano. Nos gusta escuchar, iterar, resolver.\n\nCreamos software. Integramos sistemas. Automatizamos tareas. Damos vida a ideas.\n\nY lo hacemos con un solo norte: que cada soluci\xF3n sea una herramienta que potencie el negocio, pero sobre todo, que le facilite la vida a quienes la usan.\n\nPorque al final del d\xEDa, esa es nuestra verdadera meta: tecnolog\xEDa con prop\xF3sito, soluciones con impacto."
  }];
  const misionContent = [{
    name: "Misi\xF3n",
    description: "Lograr la satisfacci\xF3n total del cliente proporcionando el mejor servicio y recursos t\xE9cnicos para entregar valor y beneficios a las mejores soluciones de software que potencian sistemas y conducen al \xE9xito."
  }];
  const visionContent = [{
    name: "Visi\xF3n",
    description: "Convertirnos en uno de los mejores partners de desarrollo de negocios en Latinoam\xE9rica, a trav\xE9s de la tecnolog\xEDa y el deseo de entregar calidad de vida a las personas y aportar a la sociedad."
  }];
  const valoresContent = [
    {
      name: "1",
      description: "Ofrecer soluciones innovadoras entregadas de manera eficiente y a tiempo."
    },
    {
      name: "2",
      description: "Entregar m\xE1xima eficiencia y aumentar la productividad con la menor cantidad de recursos posible."
    },
    {
      name: "3",
      description: "Trabajo en equipo y colaboraci\xF3n centrada en las necesidades del cliente."
    },
    {
      name: "4",
      description: "Crecimiento e innovaci\xF3n, actuando con transparencia, honestidad y compromiso."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<section class="py-small"> <div class="site-container px-8"> <div class="space-y-12"> <div> <h2 class="text-2xl font-semibold text-[#3557c1] mb-4">Manifiesto</h2> <ul class="space-y-3"> ${manifiesto.map((manifiesto2) => renderTemplate`<li> <span class="text-base text-gray-800">${unescapeHTML(manifiesto2.description.replace(/\n/g, "<br>"))}</span> </li>`)} </ul> </div> <div> <h2 class="text-2xl font-semibold text-[#3557c1] mb-4">Misión</h2> <ul class="space-y-3"> ${misionContent.map((misionContent2) => renderTemplate`<li> <span class="text-base text-gray-800">${misionContent2.description}</span> </li>`)} </ul> </div> <div> <h2 class="text-2xl font-semibold text-[#3557c1] mb-4">Visión</h2> <ul class="space-y-3"> ${visionContent.map((visionContent2) => renderTemplate`<li> <span class="text-base text-gray-800">${visionContent2.description}</span> </li>`)} </ul> </div> <div> <h2 class="text-2xl font-semibold text-[#3557c1] mb-4">Valores</h2> <ul class="space-y-3"> ${valoresContent.map((valoresContent2) => renderTemplate`<li> <span class="font-bold text-base text-[#3557c1] mr-2">${valoresContent2.name}.</span> <span class="text-base text-gray-800">${valoresContent2.description}</span> </li>`)} </ul> </div> </div> </div> </section> <section class="py-10"> <div class="site-container px-4 md:px-8 max-w-5xl mx-auto"> <h2 class="text-3xl font-extrabold text-[#3557c1] mb-2 text-center tracking-tight">Nuestro Equipo</h2> <p class="text-lg text-gray-600 text-center mb-10">Conoce a las personas que hacen posible nuestra misión</p> ${renderComponent($$result2, "TeamGrid", $$TeamGrid, { "padding": "base" })} </div> </section> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/team/index.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/team/index.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
