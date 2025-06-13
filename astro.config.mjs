import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// Get the site URL from environment variable or use a default for local development
const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default await defineConfig({
  output: 'server',
  adapter: vercel(),
  site,
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`
        }
      }
    },
    optimizeDeps: {
      include: ['aos']
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: ''
    }
  },
  integrations: [
    // sitemap({
    //   changefreq: 'weekly',
    //   priority: 0.7,
    //   lastmod: new Date(),
    //   filter: (page) => !page.includes('/404'),
    //   entryLimit: 10000,
    // }),

    // sitemap({
    //   changefreq: 'weekly',
    //   priority: 0.7,
    //   lastmod: new Date(),
    //   filter: (page) => !page.includes('/404'),
    //   entryLimit: 10000,
    //   customPages: async () => {
    //     const blogPosts = await getCollection('blog');

    //     const dynamicRoutes = blogPosts.map((post) => `/blog/${post.slug}/`);

    //     const staticRoutes = [
    //       '/',
    //       '/blog/',
    //       '/contact/',
    //       '/legal/',
    //       '/servicios/consultoria-nerc-cip/',
    //       '/servicios/ia-generativa/',
    //       '/servicios/integraciones-software/',
    //       '/servicios/ley-ciberseguridad-chilena/',
    //       '/team/',
    //     ];

    //     return [...staticRoutes, ...dynamicRoutes];
    //   },
    // }),
  ],
  image: {
    // Allow all remote patterns (https and http)
    remotePatterns: [
      {
        protocol: "https"
      },
      {
        protocol: "http"
      }
    ]
  }
});