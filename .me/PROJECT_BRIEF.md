## Project Brief: Luxury Skincare Concierge Demo Store

**One-line pitch:** A Hydrogen storefront for a fictional luxury skincare brand, where occasion-based bundles and a concierge AI demonstrate hospitality-driven ecommerce thinking.

**Portfolio goal:** Show frontend execution quality, taste, and a distinctive point of view (hospitality + ecommerce) that separates you from generic Hydrogen demos.

### Stack

- Shopify Hydrogen (deployed to Vercel)
- Free Shopify Partner dev store as the backend
- Anthropic or OpenAPI API for the concierge feature (low spend cap)
- TypeScript throughout

### Scope — In

- Homepage with editorial hero + occasion bundles as primary merchandising
- 6–10 individual SKUs across 2–3 occasion bundles
- Product detail pages (PDP)
- Collection page
- Cart drawer
- Concierge page/panel — single LLM-powered consultation that recommends a bundle with concierge-style reasoning
- Polished loading states, transitions, empty states, image loading
- README that frames the hospitality angle and walks a reviewer through the thinking

### Scope — Out (do not build)

Account pages, auth, search, reviews, wishlist, multi-currency, blog, checkout customization. If you find yourself building any of these, stop.

### Concierge entry point

Editorial hero → occasion bundles dominate the homepage → concierge offered as the "not sure which set?" path. Hospitality thinking is visible in the merchandising itself, AI is the delightful secondary layer.

### Brand reference

Aesop - https://www.aesop.com/
Use as tone and visual reference only — do not lift copy or imagery. You'll invent a fictional brand name and identity that lives in that register.

### Bundles (placeholder — refine in copy session)

Three occasion bundles, hospitality-framed:

- The Long-Haul Recovery Set
- The First Night Away
- The Morning After
  (Names will likely change once we draft copy. The framing — skincare as guest moments — is the load-bearing idea.)

### Weekend time budget (~16 working hours)

**Friday evening (2 hrs) — Pre-work, before any code**

- Lock fictional brand name and one-line positioning.
- Image gathering: 8–10 AI-generated product shots with consistent prompting (one visual treatment, repeat), 6–8 Unsplash editorial shots with shared palette. Drop in folder, name properly. Do not revisit.

**Saturday morning (3 hrs) — Setup + copy**

- Hydrogen scaffold, Shopify Partner dev store, products and collections loaded.
- Deploy to Vercel, verify live link works early.
- 60–90 min copy session (drafting product descriptions, bundle names + framing, concierge voice, microcopy). Do this with help; don't freestyle it Sunday night.

**Saturday afternoon/evening (5 hrs) — Build the store**

- Homepage with editorial hero and bundles as the merchandising spine
- PDP, collection, cart drawer
- Get to "functionally complete and not ugly"

**Sunday morning (4 hrs) — Concierge feature**

- Concierge panel, single Anthropic API call, streaming response
- Returns bundle recommendation with concierge reasoning
- Entry points from homepage and from a "not sure?" CTA near the bundles
- Stop at "good enough, working, polished." Do not expand scope.

**Sunday afternoon (4 hrs) — Polish, the part that actually sells the project**

- Page transitions, image loading (blur-up or skeletons), cart drawer animation, type details, spacing, empty states, error states for the concierge, mobile pass.
- This is where "premium" gets earned. Protect this time aggressively.

**Sunday evening (1 hr) — README**

- README: brand framing, the hospitality angle, what's in/out of scope and why, screenshots, link to live demo

### What "done" looks like

A linkable URL. Loads fast. Feels expensive in the small moments. A reviewer scrolling for 90 seconds understands the hospitality framing before they ever click the concierge. When they do click it, the response streams in cleanly and the recommendation reads like it came from a knowledgeable human.

### The thing that will try to kill this project

Scope creep on the AI feature. Your skincare formulation system instincts will pull you toward "while I'm here, let me also build…" — don't. One Claude call, bundle recommendation, concierge reasoning, ship it. Anything more is a different project.

---

**Amoire\***Skincare for where you are right now.(Concierge page: A concierge for your skin, wherever you've arrived.)\*
