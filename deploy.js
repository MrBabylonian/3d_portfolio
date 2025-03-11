import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Simplify the handler to always serve index.html for any route
serve(async (req) => {
  const url = new URL(req.url);
  const path = url.pathname;
  
  console.log(`Request for: ${path}`);
  
  try {
    // First try to serve static assets
    if (path.match(/\.(js|css|ico|png|jpg|jpeg|svg|gif|woff|woff2|ttf|eot)$/)) {
      // This is a static file request
      try {
        const file = await Deno.readFile(`./dist${path}`);
        
        // Determine content type based on file extension
        const contentType = getContentType(path);
        
        return new Response(file, {
          status: 200,
          headers: {
            "content-type": contentType,
          },
        });
      } catch (e) {
        console.error(`Error serving static file ${path}:`, e);
        // If file not found, continue to serve index.html
      }
    }
    
    // For any other route or if static file not found, serve index.html
    const indexHtml = await Deno.readFile("./dist/index.html");
    return new Response(indexHtml, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  } catch (e) {
    console.error("Error:", e);
    return new Response("Server Error", { status: 500 });
  }
});

// Helper function to determine content type
function getContentType(path) {
  const ext = path.split('.').pop().toLowerCase();
  const contentTypes = {
    'js': 'application/javascript',
    'css': 'text/css',
    'html': 'text/html',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject'
  };
  
  return contentTypes[ext] || 'text/plain';
}