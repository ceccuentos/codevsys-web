import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment, e as renderScript } from '../chunks/astro/server_CkC9QQwS.mjs';
import 'kleur/colors';
import { $ as $$, b as $$Button, s as siteConfig, a as $$Layout } from '../chunks/Layout_DAN-WyZE.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_7903qgB1.mjs';
import 'clsx';
import { d as getHeadlineColor, e as getInputBackgroundColor, f as getInputTextColor, a as getBackgroundColor, g as getPaddingClass, b as getTextColor } from '../chunks/styleUtils_tC4Hqp-N.mjs';
import { $ as $$Mail } from '../chunks/Mail_Bo20pgEw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$7 = createAstro("http://localhost:4321");
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:4321");
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/node_modules/lucide-astro/dist/Phone.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321");
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    label,
    type = "text",
    id,
    name,
    placeholder = "",
    required = false,
    disabled = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(`
            w-full px-4 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            disabled:bg-background-dark/10 disabled:text-body-base/50 disabled:cursor-not-allowed 
            placeholder:text-body-base/50
            ${className}
        `, "class")}> </div>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/form/Input.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Textarea;
  const {
    label,
    id,
    name,
    rows = 4,
    placeholder = "",
    required = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(rows, "rows")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(`
            w-full px-4 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            placeholder:text-body-base/50
            ${className}
        `, "class")}></textarea> </div>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/form/Textarea.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Radio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Radio;
  const {
    label,
    id,
    name,
    options,
    required = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(`block text-sm font-medium mb-2 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <div class="space-y-2"> ${options.map((option, index) => renderTemplate`<div class="flex items-center space-x-2"> <input type="radio"${addAttribute(`${id}-${index}`, "id")}${addAttribute(name, "name")}${addAttribute(option.value, "value")}${addAttribute(required, "required")}${addAttribute(`
                        h-4 w-4 
                        border-primary/20
                        text-primary 
                        focus:ring-primary 
                        ${className}
                    `, "class")}> <label${addAttribute(`${id}-${index}`, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")}> ${option.label} </label> </div>`)} </div> </div>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/form/Radio.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const {
    label,
    id,
    name,
    options,
    required = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> ${options ? (
    // Multiple checkboxes
    renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <label${addAttribute(`block text-sm font-medium mb-2 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <div class="space-y-2"> ${options.map((option, index) => renderTemplate`<div class="flex items-center space-x-2"> <input type="checkbox"${addAttribute(`${id}-${index}`, "id")}${addAttribute(name, "name")}${addAttribute(option.value, "value")}${addAttribute(required, "required")}${addAttribute(`
                                h-4 w-4 
                                rounded 
                                border-primary/20
                                text-primary 
                                focus:ring-primary 
                                ${className}
                            `, "class")}> <label${addAttribute(`${id}-${index}`, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")}> ${option.label} </label> </div>`)} </div> ` })}`
  ) : (
    // Single checkbox
    renderTemplate`<div class="flex items-center space-x-2"> <input type="checkbox"${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(`
                    h-4 w-4 
                    rounded 
                    border-primary/20
                    text-primary 
                    focus:ring-primary 
                    ${className}
                `, "class")}> <label${addAttribute(id, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> </div>`
  )} </div>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/form/Checkbox.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Select;
  const {
    label,
    id,
    name,
    options,
    required = false,
    placeholder = "Select an option",
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <select${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(`
            w-full px-3 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            ${className}
        `, "class")}> <option value="" disabled${addAttribute(!required, "selected")}> ${placeholder} </option> ${options.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}> ${option.label} </option>`)} </select> </div>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/ui/form/Select.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const hearAboutOptions = [
    { label: "Búscador Web", value: "Buscador" },
    { label: "Social Media", value: "Social" },
    { label: "Amigos/Colegas", value: "Amigos" },
    { label: "Otros", value: "Otros" }
  ];
  const interestOptions = [
    { label: "Ciberseguridad", value: "Ciberseguridad" },
    { label: "Desarrollo Web", value: "Desarrollo Web" },
    { label: "Integración de Aplicaciones", value: "Integración de Aplicaciones" },
    { label: "Consultoría", value: "Consultoría" }
  ];
  const serviceOptions = [
    { label: "Implementación NERC-CIP Chilena", value: "Nerc Cip" },
    { label: "Implementación de asistentes con IA Generativa", value: "IA Generativa" },
    { label: "Ley de Ciberseguridad 21.663", value: "Ley de Ciberseguridad" },
    { label: "Integración de aplicaciones con sistemas ERP", value: "Integración" },
    { label: "Desarrollo Web", value: "Desarrollo Web" }
  ];
  const formBackground = "light";
  return renderTemplate(_a || (_a = __template(["", '<form id="contact-form" enctype="multipart/form-data" class="space-y-6 bg-white p-6 rounded-lg"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"> ', " ", ' </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"> ', " ", ' </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"> ', " ", " </div> ", " ", ' <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-sm"> ', ' </div> <div class="mt-4 flex justify-center"> <div class="g-recaptcha"', '></div> </div> <div class="mt-6"> ', ' </div> <div id="form-message" class="mt-4 text-center text-base"></div> </form> <!-- Modal de éxito --> <div id="success-modal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.4); z-index:50; align-items:center; justify-content:center;"> <div style="background:white; padding:2rem 1.5rem; border-radius:0.75rem; max-width:90vw; text-align:center; box-shadow:0 8px 32px rgba(0,0,0,0.2);"> <h2 class="text-xl font-bold mb-4">¡Mensaje enviado correctamente!</h2> <p class="mb-6">Gracias por contactarnos. Pronto te responderemos.</p> <button id="close-modal-btn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Cerrar</button> </div> </div> <script src="https://www.google.com/recaptcha/api.js" async defer></script> ', ""])), maybeRenderHead(), renderComponent($$result, "Input", $$Input, { "label": "Nombre", "id": "name", "name": "name", "required": true, "background": formBackground }), renderComponent($$result, "Input", $$Input, { "label": "Email", "type": "email", "id": "email", "name": "email", "required": true, "background": formBackground }), renderComponent($$result, "Input", $$Input, { "label": "Teléfono", "type": "tel", "id": "phone", "name": "phone", "background": formBackground }), renderComponent($$result, "Input", $$Input, { "label": "Compañía", "id": "company", "name": "company", "background": formBackground }), renderComponent($$result, "Radio", $$Radio, { "label": "¿Cómo se enteró de nosotros?", "id": "hear-about", "name": "hear-about", "options": hearAboutOptions, "required": true, "background": formBackground }), renderComponent($$result, "Checkbox", $$Checkbox, { "label": "Áreas de Interés", "id": "interests", "name": "interests", "options": interestOptions, "background": formBackground }), renderComponent($$result, "Textarea", $$Textarea, { "class": "text-sm", "label": "Mensaje", "id": "message", "name": "message", "required": true, "background": formBackground }), renderComponent($$result, "Checkbox", $$Checkbox, { "label": "Estoy de acuerdo con los términos y condiciones", "id": "terms", "name": "terms", "required": true, "background": formBackground }), renderComponent($$result, "Select", $$Select, { "label": "¿Qué servicios le interesan?", "id": "service", "name": "service", "options": serviceOptions, "required": true, "placeholder": "Escoge un Servicio", "background": formBackground }), addAttribute("6Ldxe7UqAAAAAB1HJWP6YwBK232afpPJy9xfn-Bs", "data-sitekey"), renderComponent($$result, "Button", $$Button, { "type": "submit" }, { "default": async ($$result2) => renderTemplate`Enviar` }), renderScript($$result, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/forms/Contact.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/forms/Contact.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const {
    content,
    background = "base",
    padding,
    paddingTop,
    paddingBottom
  } = Astro2.props;
  const bgColor = getBackgroundColor(background);
  const textColor = getTextColor(background);
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([bgColor, paddingClass], "class:list")}> <div class="site-container px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2${addAttribute([textColor], "class:list")}>Información de Contacto</h2> <p${addAttribute([textColor], "class:list")}>
Completa el formulario y uno de nuestros expertos te contactará para ofrecerte soluciones personalizadas en ciberseguridad, integración de ERP y desarrollo de software con IA generativa.
</p> <p${addAttribute([textColor], "class:list")}> <br>O si prefiere, puede contactarnos directamente vía Email o Teléfono
</p> <div${addAttribute(["flex flex-col gap-2 mt-4", textColor], "class:list")}> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "Mail", $$Mail, { "aria-hidden": "true" })} <a${addAttribute(`mailto:${siteConfig.Socials.Email}`, "href")}>${siteConfig.Socials.Email}</a></div> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "Phone", $$Phone, { "aria-hidden": "true" })} <a${addAttribute(`tel:${siteConfig.Socials.Phone}`, "href")}>${siteConfig.Socials.Phone}</a></div> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "MapPin", $$MapPin, { "aria-hidden": "true" })} <a${addAttribute(`https://maps.google.com/?q=${siteConfig.Socials.Location}`, "href")}>${siteConfig.Socials.Location}</a></div> </div> </div> <div> ${renderComponent($$result, "Contact", $$Contact, {})} </div> </div> </div> </section>`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/components/sections/ContactInfo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Cont\xE1ctanos",
    //"Contact Us",
    description: "Para obtener mayor informaci\xF3n."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cont\xE1ctanos", "description": "Para obtener mayor informaci\xF3n." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "ContactInfo", $$ContactInfo, { "background": "base", "padding": "base" })} ` })}`;
}, "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/contact/index.astro", void 0);

const $$file = "/Users/cristiancontrerascabrera/astro/codevsys-web/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
