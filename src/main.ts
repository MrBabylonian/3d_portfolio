import { serveDir } from "https://deno.land/std@0.217.0/http/file_server.ts";

const handler = async (request: Request): Promise<Response> => {
    return serveDir(request, {
        fsRoot: "./dist", // Change this to the directory where Vite outputs the build files
        urlRoot: "",
        showDirListing: true,
        enableCors: true,
    });
};

console.log("Listening on http://localhost:8000");
const server = Deno.listen({ port: 8000 });

for await (const conn of server) {
    (async () => {
        const httpConn = Deno.serveHttp(conn);
        for await (const requestEvent of httpConn) {
            const response = await handler(requestEvent.request);
            requestEvent.respondWith(response);
        }
    })();
}