import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { $ as $$ } from './Layout_r8YmDUun.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/Mail.astro", void 0);

export { $$Mail as $ };
