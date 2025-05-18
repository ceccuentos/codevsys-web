import { a as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("http://localhost:4321");
const $$Date = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Date;
  const { date } = Astro2.props;
  const dateObj = new Date(date instanceof Date ? date.getTime() : date);
  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided to Date component");
  }
  const rawDate = dateObj.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const formattedDate = rawDate.replace(/de ([a-záéíóúñ]+) de/, (match, month) => {
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    return `de ${capitalizedMonth},`;
  });
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(dateObj.toISOString(), "datetime")} class="text-sm text-body-base"> ${formattedDate} </time>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/Date.astro", void 0);

export { $$Date as $ };
