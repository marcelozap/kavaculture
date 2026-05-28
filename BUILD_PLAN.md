# Kava Culture Mobile Ordering Upgrade

## What This Is

This project is not a replacement for [kavaculture.com](https://kavaculture.com).

It is an upgrade layer for Kava Culture's existing digital experience:

- the current site builds brand, discovery, mission, and location awareness
- this product helps guests take action after interest is created
- the focus is location-based mobile ordering, tipping, featured drinks, and store-specific events

Short positioning:

> "You already have the brand website. This is the next layer that helps guests actually order."

## Product Goal

Build a phone-first ordering experience that can work across multiple Kava Culture locations while preserving the Kava Culture visual identity and menu language.

The experience should:

- feel native to the Kava Culture brand
- work on mobile first
- let guests choose a location before ordering
- simplify menu discovery
- support tipping and phone checkout
- allow each store to feature its own drinks, promotions, and events

## Current Concept State

Current concept repo:

- GitHub: `https://github.com/marcelozap/kavaculture`
- Local path: `/Users/a14/Documents/kavaculture`
- Domain: `kavaculture.xyz`

Current front-end concept includes:

- multi-location flow for Orlando, Winter Springs, and Lake Mary
- location selector near the top of the page
- location-specific hero content
- location-specific featured drinks and events messaging
- interactive drink preview / poster-style stage
- drink-building flow with:
  - feeling
  - botanical infusion
  - drink selection
  - flavor add-ons
  - elevate options
  - gratuity
  - payment choice
- simplified menu UX:
  - show 6 featured drinks first
  - reveal full menu only on request

Important note:

This is currently a polished front-end concept. It should now be translated into a more production-realistic guest flow.

## What The Real Build Should Be

The production version should be framed as a location-specific mobile ordering product that can plug into Kava Culture's current web presence.

Recommended deployment model:

- keep [kavaculture.com](https://kavaculture.com) as the primary brand site
- add this as a dedicated ordering layer, subdomain, or embedded location flow
- likely paths:
  - `order.kavaculture.com`
  - `kavaculture.com/order`
  - `kavaculture.com/locations/orlando/order`

## Core UX Principles

The live product should:

1. Show, not explain.
2. Reduce cognitive overload.
3. Start with location first.
4. Start with featured drinks first.
5. Keep checkout realistic and fast.
6. Preserve the Kava Culture tone, menu language, and visual atmosphere.

## Recommended User Flow

### 1. Entry

Guest lands on a Kava Culture ordering page from:

- QR code in-store
- location page
- text link
- Instagram/social link
- event page

### 2. Choose Location

Guest selects:

- Orlando
- Winter Springs
- Lake Mary
- future stores as added

Location selection should update:

- featured drinks
- store-specific messaging
- events
- availability / menu overrides

### 3. Browse Featured Drinks

Guest first sees:

- 4 to 6 featured drinks for that location
- strongest visual options first
- one clear way to open the full menu

The full menu should remain available, but not be the first thing shown.

### 4. Customize

Guest can choose:

- feeling
- infusion
- drink
- optional flavor add-ons
- elevate / premium options

This should be lightweight, not overbuilt.

### 5. Review + Tip

Guest sees:

- order summary
- quantity
- gratuity options
- final price

### 6. Phone Checkout

Preferred realistic flow:

- Apple Pay / card first for lowest friction
- optional other payment rails later if desired

Important:

- do not rely on manual bank entry as the primary UX
- optimize for fastest completion and most believable real-world usage

### 7. Confirmation

Guest sees:

- order confirmed
- selected location
- order number
- estimated prep time
- pickup instructions

## Business Value To Emphasize

This product should be sold internally as an upgrade in:

- guest experience
- location-specific merchandising
- mobile ordering readiness
- digital tipping capture
- repeat customer convenience
- events-to-orders funneling

Avoid leading with:

- "website redesign"
- "replace your current site"
- "beat Clover" or competitor comparison language

Better framing:

- smoother phone ordering
- store-specific featured menus
- stronger mobile guest flow
- action layer after the brand site

## Build Priorities

### Phase 1: Production UX Cleanup

Convert the current concept into a more realistic live product experience.

Tasks:

- simplify hero copy
- reduce presentation-like explanatory text
- make the first screen more product-like
- tighten mobile spacing and hierarchy
- make checkout labels feel real and not conceptual
- ensure all sections feel like a usable flow, not a pitch deck

### Phase 2: Real Menu Data Model

Replace hardcoded concept data with structured store/menu data.

Suggested data model:

- locations
- drink categories
- featured drinks per location
- drink availability by location
- prices by location if needed
- events by location

Suggested sources:

- internal menu source of truth
- POS export
- CMS
- JSON config if lightweight

### Phase 3: Real Ordering Logic

Implement actual order creation and persistence.

Needs:

- cart / order session
- line items
- modifiers
- gratuity
- customer info
- location routing
- order status

### Phase 4: Payments

Implement real hosted checkout.

Recommended approach:

- Stripe Checkout or similar hosted checkout
- Apple Pay enabled
- card support
- domain verification
- successful return URL
- canceled return URL
- paid webhook confirmation

Do not overcomplicate v1.

### Phase 5: Store Operations

Connect orders to how the bar actually works.

Possibilities:

- staff order dashboard
- email notifications
- SMS confirmation
- kitchen/bar display
- simple admin order queue

### Phase 6: Events Integration

Tie ordering and events together more naturally.

Possible patterns:

- upcoming events by location
- event-night featured drinks
- order before event CTA
- location-specific event modules

## Technical Handoff Notes

Current concept files:

- `index.html`
- `styles.css`
- `app.js`

These currently function as a front-end prototype and design direction.

Recommended production stack options:

### Option A: Lightweight

- Next.js
- Tailwind or scoped CSS
- structured JSON/CMS-backed content
- Stripe Checkout
- simple admin or webhook-driven order handling

### Option B: Very Fast MVP

- keep current front-end structure
- refactor into components
- add a lightweight backend
- use hosted checkout
- use store configs for locations/menu content

### Option C: Platform Integration

- integrate with existing Kava Culture stack if there is one
- embed ordering per location into current site architecture

## Suggested Data Shape

Example:

```json
{
  "locations": [
    {
      "id": "orlando",
      "name": "Orlando",
      "featuredDrinkIds": ["fijian-sunset", "twisted-tonic"],
      "eventLink": "/events/orlando"
    }
  ],
  "drinks": [
    {
      "id": "fijian-sunset",
      "name": "Fijian Sunset",
      "category": "Botanical Cocktails",
      "price": 18,
      "availableAt": ["orlando", "winter-springs"]
    }
  ]
}
```

## What Should Change From The Current Concept

Keep:

- location-first structure
- featured drinks first
- Kava Culture language and tone
- immersive but branded visual identity
- phone-first ordering feel

Reduce:

- heavy concept copy
- overly presentation-like sections
- anything that feels like a sales deck instead of a live product

Improve:

- realism of checkout
- clarity of store-level flow
- performance
- accessibility
- production readiness

## Acceptance Criteria For V1

V1 is successful if:

- guests can choose a location quickly
- guests can see a short featured menu first
- guests can open the full menu if needed
- guests can build a drink without confusion
- guests can tip and check out on phone
- store-specific events and featured items can be changed per location
- the product feels like part of Kava Culture, not a separate unrelated app

## Pitch Summary For Internal Use

This should be described as:

> a mobile ordering and location-experience upgrade for Kava Culture

Not:

> a new main website

Best one-line explanation:

> "KavaCulture.com builds interest. This helps guests take action."

## Immediate Next Steps

1. Decide whether this becomes a subdomain, embedded flow, or location-page upgrade.
2. Confirm real payment provider and checkout path.
3. Confirm where menu and location data will live.
4. Replace concept copy with production-ready guest copy.
5. Build a real v1 order flow with hosted checkout.
