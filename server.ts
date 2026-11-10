import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';

// Since we're in ESM, we need these helpers
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const isProd = process.env.NODE_ENV === 'production';
  const port = process.env.PORT || 3000;

  // Use the data from the app to populate meta tags
  // We'll dynamic import to avoid issues during build
  const { PRODUCTS, BLOG_POSTS, DISTRIBUTOR_INFO, CATALOG_CONFIG } = await import('./src/data/hgwData.ts');

  let vite: any;
  const clientPath = isProd 
    ? path.resolve(__dirname, 'client') 
    : path.resolve(__dirname, 'dist/client');
  const templatePath = isProd
    ? path.resolve(__dirname, 'client/index.html')
    : path.resolve(__dirname, 'index.html');

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(clientPath, { index: false }));
  }

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = '';
      if (!isProd) {
        template = fs.readFileSync(templatePath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(templatePath, 'utf-8');
      }

      // Default SEO values
      let title = DISTRIBUTOR_INFO.pageTitle;
      let description = "Productos Health Green World en Panamá: Café Ganoderma, arándanos, turmalina y suplementos. Envíos nacionales Servientrega 24-48h.";
      let ogImage = CATALOG_CONFIG.catalogCoverImage;

      // SEO Logic based on URL
      // Product: /producto/:id
      const productMatch = url.match(/^\/producto[s]?\/([^/?#]+)/);
      if (productMatch) {
        const productId = productMatch[1];
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
          title = `${product.name} | ${DISTRIBUTOR_INFO.pageTitle}`;
          description = `${product.shortDescription.slice(0, 155)}... Precio: $${product.price.toFixed(2)} USD. Envío a todo Panamá.`;
          ogImage = product.image;
        }
      }

      // Article: /articulo/:id or /blog/:id
      const articleMatch = url.match(/^\/(?:articulo|blog)\/([^/?#]+)/);
      if (articleMatch) {
        const articleId = articleMatch[1];
        const article = BLOG_POSTS.find(a => a.id === articleId);
        if (article) {
          title = `${article.title} | ${DISTRIBUTOR_INFO.pageTitle}`;
          description = article.excerpt;
          ogImage = article.image;
        }
      }

      // Static routes titles
      if (url === '/acerca-de') title = `Acerca de | ${DISTRIBUTOR_INFO.pageTitle}`;
      if (url === '/servicios') title = `Servicios & Negocio | ${DISTRIBUTOR_INFO.pageTitle}`;
      if (url === '/contacto') title = `Contacto | ${DISTRIBUTOR_INFO.pageTitle}`;
      if (url === '/catalogo') title = `Catálogo Digital | ${DISTRIBUTOR_INFO.pageTitle}`;
      if (url === '/productos') title = `Productos | ${DISTRIBUTOR_INFO.pageTitle}`;
      if (url === '/blog') title = `Artículos | ${DISTRIBUTOR_INFO.pageTitle}`;

      // Replacement Logic
      const host = req.get('host') || 'hgwpanama.com';
      const protocol = req.protocol || 'https';
      const fullUrl = `${protocol}://${host}${url}`;

      let html = template
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${title}" />`)
        .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
        .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`)
        .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
        .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`)
        .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`)
        .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${description}" />`);

      // Add image tags if not present or update them
      if (ogImage) {
        if (html.includes('property="og:image"')) {
          html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${ogImage}" />`);
        } else {
          html = html.replace('</head>', `  <meta property="og:image" content="${ogImage}" />\n  </head>`);
        }

        if (html.includes('name="twitter:image"')) {
          html = html.replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${ogImage}" />`);
        } else {
          html = html.replace('</head>', `  <meta name="twitter:image" content="${ogImage}" />\n  </head>`);
        }
      }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (!isProd) vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
