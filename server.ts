import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const app = express();
const port = 8000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "custom",
});
app.use(vite.middlewares);

app.use("*", async (req, res, next) => {
  const url = req.originalUrl;

  try {
    let template = fs.readFileSync(
      path.resolve(__dirname, "index.html"),
      "utf-8"
    );
    template = await vite.transformIndexHtml(url, template);
    const html = template.split(`<!--ssr-->`);
    const { render } = await vite.ssrLoadModule("./src/entry-server.tsx");
    const { pipe } = await render(url, {
      onShellReady() {
        res.write(html[0]);
        pipe(res);
      },
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
    });
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    next(e);
  }
});

app.listen(port, () => {
  console.log(`Server started at\x1b[33m http://localhost:${port} \x1b[0m`);
});
