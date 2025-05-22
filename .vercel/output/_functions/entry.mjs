import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C4HYLYjw.mjs';
import { manifest } from './manifest_DtWo1P_l.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/newsletter.astro.mjs');
const _page4 = () => import('./pages/blog/_page_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page7 = () => import('./pages/category/_slug_/_page_.astro.mjs');
const _page8 = () => import('./pages/category/_---slug_.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/legal/_slug_.astro.mjs');
const _page11 = () => import('./pages/legal.astro.mjs');
const _page12 = () => import('./pages/servicios/ia.astro.mjs');
const _page13 = () => import('./pages/servicios/integraciones.astro.mjs');
const _page14 = () => import('./pages/servicios/ley-marco-ciberseguridad.astro.mjs');
const _page15 = () => import('./pages/servicios/nerc-cip.astro.mjs');
const _page16 = () => import('./pages/team.astro.mjs');
const _page17 = () => import('./pages/team/_---slug_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/api/newsletter.ts", _page3],
    ["src/pages/blog/[page].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/blog/[...slug].astro", _page6],
    ["src/pages/category/[slug]/[page].astro", _page7],
    ["src/pages/category/[...slug].astro", _page8],
    ["src/pages/contact/index.astro", _page9],
    ["src/pages/legal/[slug].astro", _page10],
    ["src/pages/legal/index.astro", _page11],
    ["src/pages/servicios/ia.astro", _page12],
    ["src/pages/servicios/integraciones.astro", _page13],
    ["src/pages/servicios/ley-marco-ciberseguridad.astro", _page14],
    ["src/pages/servicios/nerc-cip.astro", _page15],
    ["src/pages/team/index.astro", _page16],
    ["src/pages/team/[...slug].astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bc0718ad-e859-45f4-b002-9d37f1d2ea15",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
