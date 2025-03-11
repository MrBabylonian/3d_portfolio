import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();

// Adding CORS for API requests if needed
app.use(oakCors({
  origin: "*", // Allow all origins
  optionsSuccessStatus: 200
}));

// CRITICAL: Double-check these file paths
// Make sure the path to your static files is correct
const DIST_PATH = `${Deno.cwd()}/dist`; // This should match where your build files are

// First try to serve as a static file
app.use(async (ctx, next) => {
  try {
    const path = ctx.request.url.pathname;
    // Try serving the requested file directly
    await ctx.send({
      root: DIST_PATH,
      path,
      index: "index.html", // This serves index.html for / path
    });
  } catch {
    // If file not found, move to next handler
    await next();
  }
});

// THIS IS THE MOST IMPORTANT PART - ensures all routes go to index.html
app.use(async (ctx) => {
  try {
    // Always serve index.html for any path not found above
    // This enables client-side routing to work
    await ctx.send({
      root: DIST_PATH,
      path: "index.html" // Note: we're directly specifying index.html here
    });
  } catch (error) {
    console.error("Error serving index.html:", error);
    ctx.response.status = 500;
    ctx.response.body = "Internal Server Error";
  }
});

// Handle requests with the oak application
serve((req) => {
  return app.handle(req).then((response) => {
    return response || new Response("Not Found", { status: 404 });
  }).catch((error) => {
    console.error("Error handling request:", error);
    return new Response("Internal Server Error", { status: 500 });
  });
});