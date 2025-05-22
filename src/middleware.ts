import { defineMiddleware } from "astro/middleware";


// Direccionamiento a aulasx.codevsys.cl
export const onRequest = defineMiddleware(async (context, next) => {
  const url = context.url.pathname;

  if (url.startsWith("/aulavirtual")) {
    const redirectTo = `https://aulasx.codevsys.cl${url.replace("/aulavirtual", "")}`;
    return Response.redirect(redirectTo, 301);

  }

  return next();
});
