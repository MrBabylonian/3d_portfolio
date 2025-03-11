import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.192.0/http/file_server.ts";

serve(async (req) => {
    const pathname = new URL(req.url).pathname;

    // Try to serve static files from the dist directory
    const response = await serveDir(req, {
        fsRoot: "dist",
        urlRoot: "",
        showDirListing: false,
        enableCors: true,
    });

    // If the file wasn't found and it's not an API route or static file,
    // serve the index.html (for SPA client-side routing)
    if (
        response.status === 404 &&
        !pathname.startsWith("/api/") &&
        !pathname.match(/\.\w+$/)
    ) {
        return new Response(await Deno.readTextFile("dist/index.html"), {
            headers: { "content-type": "text/html; charset=utf-8" },
        });
    }

    return response;
}, { port: 8000 });