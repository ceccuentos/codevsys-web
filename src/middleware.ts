import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (pathname.startsWith("/aulavirtual")) {
    const newPath = pathname.replace("/aulavirtual", "");
    const target = `https://aulasx.codevsys.cl${newPath}${search}`;
    return Response.redirect(target, 301);
  }

  return next();
});
