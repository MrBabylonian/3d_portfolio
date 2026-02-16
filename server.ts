// @ts-nocheck
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.192.0/http/file_server.ts";

// Access environment variables
const PORT = Deno.env.get("PORT") || "8000";
const FS_ROOT = Deno.env.get("FS_ROOT") || "dist";
const EMAILJS_SERVICE_ID = Deno.env.get("VITE_3D_PORTFOLIO_EMAILJS_SERVICE_ID");
const EMAILJS_TEMPLATE_ID = Deno.env.get(
	"VITE_3D_PORTFOLIO_EMAILJS_TEMPLATE_ID",
);
const EMAILJS_PUBLIC_KEY = Deno.env.get("VITE_3D_PORTFOLIO_EMAILJS_PUBLIC_KEY");

// Check if all required environment variables are set
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
	console.error("Missing required environment variables for EmailJS");
	Deno.exit(1);
}

serve(
	async (req) => {
		const pathname = new URL(req.url).pathname;

		if (pathname === "/env") {
			return new Response(
				JSON.stringify({
					EMAILJS_SERVICE_ID,
					EMAILJS_TEMPLATE_ID,
					EMAILJS_PUBLIC_KEY,
				}),
				{
					headers: { "content-type": "application/json; charset=utf-8" },
				},
			);
		}

		const response = await serveDir(req, {
			fsRoot: FS_ROOT,
			urlRoot: "",
			showDirListing: false,
			enableCors: true,
		});

		if (
			response.status === 404 &&
			!pathname.startsWith("/api/") &&
			!pathname.match(/\.\w+$/)
		) {
			return new Response(await Deno.readTextFile(`${FS_ROOT}/index.html`), {
				headers: { "content-type": "text/html; charset=utf-8" },
			});
		}

		return response;
	},
	{ port: parseInt(PORT) },
);
