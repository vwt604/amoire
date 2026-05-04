## Deployment

- Oxygen hosting requires a paid Shopify plan — Partner dev stores are on the "Development" plan and are blocked at both the admin UI and CLI level (`ACCESS_DENIED` on `hydrogenStorefronts`).
- The new Hydrogen (2026.x, React Router 7) has no official Vercel deployment path. The Vercel template on their site targets old Remix-based Hydrogen v1/v2.
- The community Vercel workaround requires a custom Vite plugin + Upstash Redis + `@mjackson/node-fetch-server` — too complex for a weekend project.
- Cloudflare Workers is the cleanest self-host option since the scaffold already targets that runtime, but not worth the setup time for a portfolio piece.
- **Decision: record a screen capture video instead of deploying live.**

