// Simple file server for Deno Deploy

// Define the port - Deno Deploy will set the PORT env variable
const port = parseInt(Deno.env.get("PORT") || "8000");

// Handle HTTP requests
async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  let path = url.pathname;
  
  // Default to index.html for root path or directories
  if (path === "/" || path.endsWith("/")) {
    path += "index.html";
  }

  try {
    // Try to serve the file from the dist directory
    // Remove leading slash for relative path
    const filePath = `./dist${path}`;
    const file = await Deno.readFile(filePath);
    
    // Set appropriate content type based on file extension
    const contentType = getContentType(path);
    
    return new Response(file, {
      status: 200,
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=3600"
      }
    });
  } catch (e) {
    // If file not found, serve index.html (for SPA routing)
    if (e instanceof Deno.errors.NotFound) {
      try {
        const indexFile = await Deno.readFile("./dist/index.html");
        return new Response(indexFile, {
          status: 200,
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=3600"
          }
        });
      } catch (indexError) {
        return new Response("Not Found", { status: 404 });
      }
    }
    
    // Server error
    console.error("Server error:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
}

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
Deno.serve({ port }, handler);