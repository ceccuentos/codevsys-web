import { getCollection } from 'astro:content';

export async function GET() {
  const siteUrl = 'https://www.codevsys.cl'; // ✅ Usa tu dominio real

  // Obtiene los posts desde la colección "blog"
  const blogPosts = await getCollection('blog');

  // Puedes incluir aquí tus rutas estáticas también
  const staticRoutes = [
    '/',
    '/blog/',
    '/contact/',
    '/legal/',
    '/servicios/consultoria-nerc-cip/',
    '/servicios/ia-generativa/',
    '/servicios/integraciones-software/',
    '/servicios/ley-ciberseguridad-chilena/',
    '/team/',
  ];

  const staticUrls = staticRoutes.map((path) => {
    return `<url>
  <loc>${siteUrl}${path}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`;
  });

  const blogUrls = blogPosts.map((post) => {
    const slug = post.id.replace(/\.md$/, '');
    // const lastmodx =
    //   post.data.updated || post.data.publishDate || new Date().toISOString().split('T')[0];
    const lastmod = new Date(post.data.updated || post.data.publishDate || Date.now()).toISOString();


    return `<url>
  <loc>${siteUrl}/blog/${slug}/</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...blogUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
