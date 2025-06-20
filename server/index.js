import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      // ✅ 1. Read raw HTML template
      let template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

      // ✅ 2. Let Vite transform it (injects HMR + module preamble)
      template = await vite.transformIndexHtml(url, template);

      // ✅ 3. SSR the app
      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
      const appHtml = await render(); // ❗ should be executed

      // ✅ 4. Inject app HTML
      const html = template.replace(`<!--app-html-->`, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(5173, () => {
    console.log('Server running at http://localhost:5173');
  });
}

createServer();