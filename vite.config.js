import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const STATIC_PATH = "/static";

async function handleRequest(req) {
  const url = new URL(req.url);
  const path = url.pathname;

  // Serve static files from /static path
  if (path.startsWith(STATIC_PATH)) {
    try {
      const filePath = path.replace(STATIC_PATH, "");
      const file = await Deno.readFile(`./dist${filePath}`);
      const contentType = getContentType(filePath);
      return new Response(file, {
        headers: { "content-type": contentType },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }

  // Serve index.html for all other routes
  try {
    const html = await Deno.readFile("./dist/index.html");
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (e) {
    console.error("Error reading index.html:", e);
    return new Response("Server Error", { status: 500 });
  }
}

serve(handleRequest);

function getContentType(path) {
  const ext = path.split('.').pop()?.toLowerCase();
  const types = {
    'html': 'text/html',
    'js': 'application/javascript',
    'css': 'text/css',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'json': 'application/json',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'glb': 'model/gltf-binary',
    'gltf': 'model/gltf+json',
  };
  return types[ext] || 'text/plain';
}