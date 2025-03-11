import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();

// Adding CORS to handle API requests if needed later
app.use(oakCors({
  origin: "*", // I'm allowing all origins for now, might restrict later
  optionsSuccessStatus: 200
}));

// This handles my static files from the dist directory
app.use(async (ctx, next) => {
  try {
    const path = ctx.request.url.pathname;
    // Try serving the requested file directly
    await ctx.send({
      root: `${Deno.cwd()}/dist`,
      index: "index.html",
      path
    });
  } catch {
    // If file not found, move to next handler
    await next();
  }
});

// This is crucial - it serves index.html for all routes
// Fixes the refresh issue I was having with React Router
app.use(async (ctx) => {
  await ctx.send({
    root: `${Deno.cwd()}/dist`,
    index: "index.html"
  });
});

// Setup handler for Deno Deploy
serve((req) => {
  return app.handle(req).then((response) => {
    return response || new Response("Not Found", { status: 404 });
  }).catch((error) => {
    console.error("Error handling request:", error);
    return new Response("Internal Server Error", { status: 500 });
  });
});