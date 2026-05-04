# Design Brief: Homepage

## Problem

A visitor arrives at an unfamiliar luxury skincare brand with no prior relationship. Traditional skincare merchandising — organized by ingredient, skin type, or concern — puts the cognitive burden entirely on the shopper. They have to know what they need before they can find it. Amoire's customers don't shop that way. They're packing for a trip, recovering from a long flight, or waking up somewhere new. The moment is the entry point, not the formula.

## Solution

A homepage that leads with occasion. The editorial hero establishes brand register before anything is for sale. Three bundle cards below it offer three legible, self-describing entry points — each named for a guest moment. A concierge block after the bundles catches the visitor who sees all three and still isn't sure. The hospitality framing is visible in the merchandising itself; the concierge is the delightful secondary layer, not the primary pitch.

## Experience Principles

1. **Occasion over ingredient** — Surface the guest moment, not the formula. Every section header, card label, and piece of microcopy should describe a situation, not a product attribute.
2. **Editorial restraint over promotional noise** — No discount badges, countdown timers, urgency mechanics, or popups. The page should read like the opening spread of a design hotel's welcome booklet.
3. **Legibility over comprehensiveness** — Three bundles, shown well. Not a grid of eight products with filters. The homepage job is orientation, not catalog.

## Aesthetic Direction

- **Philosophy**: Quiet luxury editorial — warm, restrained, material-aware. The page feels considered rather than designed.
- **Tone**: Calm, knowing, slightly intimate. Like a recommendation from someone who has stayed everywhere.
- **Reference points**: Aesop (object-forward restraint), The Line Hotel (hospitality meets editorial), Kinfolk (warm minimalism with serif typography)
- **Anti-references**: Clinical skincare DTC (bold CTAs, before/after grids, ingredient callouts), fast-fashion DTC (discount banners, sticky "Buy Now," excessive social proof)

## Existing Patterns

The codebase is a lightly-scaffolded Hydrogen starter. No brand tokens exist yet — this brief is the first definition of them.

- **Typography**: None set. **Defining here**: Cormorant Garamond for all display/editorial type (headings, hero, bundle names); DM Sans for UI type (prices, button labels, nav, captions).
- **Colors**: Only `--color-dark: #000` and `--color-light: #fff` exist. **Defining here**: warm off-white background (`#F4EFE8`), deep warm near-black (`#1C1714`), sand/tan for borders and muted text (`#B8A99A`), optional deep olive accent (`#3A4A38`).
- **Spacing**: Tailwind v4 defaults, no custom scale yet.
- **Components**: Header, Footer, AddToCartButton, ProductImage, Aside (cart drawer) exist as functional scaffold with no brand styling applied.

## Component Inventory

| Component | Status | Notes |
| --- | --- | --- |
| `HeroSection` | New | Full-bleed lifestyle image, brand name + tagline, single CTA |
| `BundleCard` | New | Bundle name, occasion framing line, price, "Add to bag" |
| `BundlesGrid` | New | Section wrapper, 3-column desktop / 1-column mobile |
| `ConciergeBlock` | New | Full-width editorial invitation to the concierge, text + CTA link |
| `Header` | Modify | Replace "Hydrogen" with "Amoire", remove search, adjust nav items |
| `Footer` | Modify | Brand copy, simplified links (no account, no blog) |
| `AddToCartButton` | Modify | Restyle: minimal border button, brand typography, no default browser style |

## Key Interactions

**Hero CTA → bundle section**
User clicks "Explore the sets." Page smooth-scrolls to the BundlesGrid section. No new navigation, no page load. CTA should be keyboard accessible with visible focus ring.

**"Add to bag" → cart drawer**
Clicking "Add to bag" on any BundleCard fires the existing CartForm/Aside mechanism. Cart drawer slides in from the right. Bundle implementation note: treat each bundle as a single Shopify product for the demo (simplest path). If multi-SKU bundles are needed later, that's a separate decision.

**Concierge block CTA → concierge page**
The concierge block contains a text link or minimal button: "Start the consultation" (or equivalent). Links to `/concierge` route. Not a modal — full page navigation.

**Loading states**
- Hero image: fade in on load (no layout shift — reserve aspect ratio with a placeholder)
- Bundle cards: skeleton state while Shopify data resolves (gray placeholder blocks matching card dimensions)
- "Add to bag" button: disabled + subtle loading indicator while cart mutation is in flight

## Layout Specification

### Hero
- Full viewport height (`100vh`) on all breakpoints
- Lifestyle/environmental image fills the frame (`object-fit: cover`)
- Brand name ("Amoire") centered, Cormorant Garamond, large display size
- Tagline ("Skincare for where you are right now.") below brand name, smaller, same typeface
- CTA ("Explore the sets") below tagline — minimal button, DM Sans, border style (not filled)
- Text and CTA positioned center-bottom third of frame to keep image readable above

### Bundles section
- Section heading: "The Sets" or "Choose your moment" — Cormorant Garamond, centered
- 3-column grid on desktop (≥768px), 1-column on mobile
- Card: large image (square or 3:4), bundle name, one-line occasion framing text, price, "Add to bag"
- No card border — let whitespace do the separation work
- Section background: warm off-white (distinct from page white if needed)

### Concierge block
- Full width, centered content, generous vertical padding
- Heading: "Not sure which set?" or "Let the concierge decide." — Cormorant Garamond
- One supporting line of body copy — DM Sans
- Single link/button: "Start the consultation" — minimal, consistent with hero CTA style
- Background: slightly warmer or darker tone to signal section break (e.g. the deep olive, or a very dark near-black)

## Responsive Behavior

| Breakpoint | Hero | Bundles | Concierge |
| --- | --- | --- | --- |
| Mobile (<768px) | Full viewport height, stacked text, CTA below | Single column, full-width cards | Full width, text centered, stacked |
| Desktop (≥768px) | Full viewport height | 3-column grid | Full width, centered text block, constrained max-width |

The bundles section changes layout (not just size) on mobile: cards stack vertically and images should be a fixed height (not square) to keep cards scannable without excessive scroll.

## Accessibility Requirements

- Hero image: descriptive `alt` text describing the scene (not the product)
- All interactive elements keyboard-navigable with visible `:focus-visible` ring
- "Add to bag" button: accessible name includes bundle name (e.g. "Add The First Night Away to bag")
- Color contrast: all body text at minimum 4.5:1 against backgrounds; large display type at minimum 3:1
- Smooth scroll: respect `prefers-reduced-motion` — if set, skip animation and jump directly

## Open Questions

- **Bundle Shopify structure**: Treat as single product per bundle (recommended for demo) or multi-SKU? Needs decision before building `BundleCard` + GraphQL query.
- **Hero image**: Lifestyle/environmental editorial shot. Source TBD (AI-generated or Unsplash per project brief). Aspect ratio and focal point will affect text positioning.
- **Bundle names**: Current placeholders are The Long-Haul Recovery Set, The First Night Away, The Morning After. Final names and occasion framing lines come from the copy session.

## Out of Scope

- Individual product thumbnails inside bundle cards
- Hover-reveal pricing (decided: price visible at all times)
- Sticky or floating concierge CTA
- Collection page, PDP, search, account — any page beyond the homepage
- Bundle "frequently bought together" logic or upsell mechanics
- Animation beyond fade-in on image load and smooth scroll
