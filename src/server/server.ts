import express from "express";
import { createServer } from "vite";

import fsp from "fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, "index.html");

const root = process.cwd();
const PORT = process.env.PORT || 3001;

async function startServer() {
  const app = express();
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      const template = await fsp.readFile(indexHTML, "utf8");
      const transformHTML = await vite.transformIndexHtml(url, template);
      const [startHTML, endHTML] = transformHTML.split("<!--app-->");

      const render = (await vite.ssrLoadModule("./src/entry-server.tsx"))
        .render;

      try {
        res.write(startHTML);
        const stream = render(url, {
          onShellReady() {
            stream.pipe(res);
          },
          onAllReady() {
            res.write(endHTML);
            res.end();
          },
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return app;
}

startServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running >>> http://localhost:${PORT}`);
  });
});
