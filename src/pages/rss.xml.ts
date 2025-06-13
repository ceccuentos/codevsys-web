import { getCollection } from 'astro:content';

export async function GET() {

  const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';
  const posts = (await getCollection('blog'))
    .filter(post => post.data.publish)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const items = posts.map(post => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${site}/blog/${post.id.replace(/^blog\//, "")}/</link>
      <guid>${site}/blog/${post.id.replace(/^blog\//, "")}/</guid>
      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>

      <description><![CDATA[${post.data.excerpt}]]></description>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog de Codevsys</title>
      <link>${site}/blog/</link>
      <description>Últimos artículos sobre ciberseguridad, cumplimiento y tecnología</description>
      <language>es</language>
      <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
      <lastBuildDate>${posts[0]?.data.updated ? posts[0].data.updated.toUTCString() : posts[0]?.data.publishDate.toUTCString()}</lastBuildDate>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
