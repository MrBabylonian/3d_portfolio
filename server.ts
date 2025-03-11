import { Application, send } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
const PORT = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8000;

// This logs all my requests with response times
// Helps me see what's happening while developing
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// I'm measuring how long each request takes
// This adds a header with timing information 
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// This middleware tries to find static files first
// Important for serving my React app's assets
app.use(async (ctx, next) => {
  const path = ctx.request.url.pathname;
  
  try {
    // Try to find a matching file in my dist folder
    await send(ctx, path, {
      root: `${Deno.cwd()}/dist`,
      index: "index.html"
    });
    return; // Found the file, no need to do anything else
  } catch {
    // Couldn't find the file, so let the next handler deal with it
    await next();
  }
});

// This is the important part that fixes my refresh issue!
// For any route that doesn't match a static file, serve index.html
// This lets React Router take over and handle the routing client-side
app.use(async (ctx) => {
  try {
    // Serve my SPA's index.html for any route not matched above
    await send(ctx, "index.html", { 
      root: `${Deno.cwd()}/dist` 
    });
  } catch (error) {
    console.error("Error serving index.html:", error);
    ctx.response.status = 500;
    ctx.response.body = "Internal server error";
  }
});

console.log(`🚀 Server running on http://localhost:${PORT}`);
await app.listen({ port: PORT });