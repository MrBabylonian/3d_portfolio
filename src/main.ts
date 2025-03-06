// filepath: c:\Users\bedir\OneDrive\Desktop\3d_portfolio\main.ts
import { serve } from "https://deno.land/std@0.217.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.217.0/http/file_server.ts";

const handler = async (request: Request): Promise<Response> => {
    const url = new URL(request.url);
    return serveDir(request, {
        fsRoot: "./dist", // Change this to the directory where Vite outputs the build files
        urlRoot: "",
        showDirListing: true,
        enableCors: true,
    });
};

console.log("Listening on http://localhost:8000");
serve(handler);
