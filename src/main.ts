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
    handleHttp(conn);
}

async function handleHttp(conn: Deno.Conn) {
    const buffer = new Uint8Array(1024);
    const bytesRead = await conn.read(buffer);
    if (bytesRead === null) {
        conn.close();
        return;
    }

    const requestText = new TextDecoder().decode(buffer.subarray(0, bytesRead));
    const request = new Request("http://localhost:8000", {
        method: "GET",
        headers: new Headers(),
    });

    const response = await handler(request);
    const responseText = await response.text();
    const responseHeaders = Array.from(response.headers.entries())
        .map(([key, value]) => `${key}: ${value}`)
        .join("\r\n");

    const responseMessage = `HTTP/1.1 ${response.status} ${response.statusText}\r\n${responseHeaders}\r\n\r\n${responseText}`;
    await conn.write(new TextEncoder().encode(responseMessage));
    conn.close();
}