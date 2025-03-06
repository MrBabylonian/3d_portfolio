import { Hono } from "https://deno.land/x/hono@v3.11.7/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.11.7/middleware.ts";

// Define the port - Deno Deploy will set the PORT env variable
const port = parseInt(Deno.env.get("PORT") || "8000");

const app = new Hono();

// Serve static files from the dist directory
app.use("/*", serveStatic({ root: "./dist" }));

// For SPA routing - serve index.html for paths that don't match static files
app.get("*", async (c) => {
  try {
    const file = await Deno.readFile("./dist/index.html");
    return new Response(file, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=3600"
      }
    });
  } catch (e) {
    return new Response("Not Found", { status: 404 });
  }
});

// Helper function to determine content type
function getContentType(path: string): string {
  const extension = path.split(".").pop()?.toLowerCase();
  const contentTypes: Record<string, string> = {
    "html": "text/html; charset=utf-8",
    "css": "text/css; charset=utf-8",
    "js": "text/javascript; charset=utf-8",
    "json": "application/json; charset=utf-8",
    "png": "image/png",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "gif": "image/gif",
    "svg": "image/svg+xml",
    "ico": "image/x-icon",
    "woff": "font/woff",
    "woff2": "font/woff2",
    "ttf": "font/ttf",
    "otf": "font/otf",
    "mp4": "video/mp4",
    "webm": "video/webm",
    "glb": "model/gltf-binary",
    "gltf": "model/gltf+json"
  };
  
  return contentTypes[extension || ""] || "application/octet-stream";
}

console.log(`HTTP server running on http://localhost:${port}/`);

// Start the server
Deno.serve({ port }, app.fetch);