import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://www.codevsys.cl'; // Cambia si es necesario
  const posts = (await getCollection('blog'))
    .filter(post => post.data.publish)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const items = posts.map(post => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${site}/blog/${post.id.replace(/^blog\//, "")}/</link>
      <guid>${site}/blog/${post.id.replace(/^blog\//, "")}/</guid>
      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>
      ${post.data.updated ? `<lastBuildDate>${post.data.updated.toUTCString()}</lastBuildDate>` : ''}
      <description><![CDATA[${post.data.excerpt}]]></description>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog de Codevsys</title>
      <link>${site}/blog/</link>
      <description>Últimos artículos sobre ciberseguridad, cumplimiento y tecnología</description>
      <language>es</language>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
