

# Aquavistas Website — Implementation Plan

## Brand Design System
Bright & nautical aesthetic using exact brand colours from the style guide:
- **AVS Teal** `#00A8C4` — Primary accent colour (CTAs, highlights, logo)
- **AVS Deep Navy** `#081A30` — Headings, dark text, nav
- **AVS Pearl White** `#F7F9FB` — Page backgrounds
- **AVS Slate Grey** `#4D5663` — Body copy, secondary text
- **Pure White** `#FFFFFF` — Cards, contrast sections

Typography: Helvetica Neue (fallback: Helvetica, Arial). Headlines in ALL CAPS with teal or navy. Clean, airy layouts with generous whitespace.

The uploaded logo (`aquavistas_3.png`) and icon (`icon.png`) will be used as the site logo and favicon respectively.

---

## Pages

### 1. Homepage
- **Hero**: Full-width section with bold headline "Premium Entertainment for Superyachts" + tagline "Onboard, Anywhere" + teal CTA "Explore Our Shows"
- **Trusted By**: Scrolling logo strip of brokerage partners (Edmiston, TWW, N&J, Fraser, Burgess, IYC, etc.) — placeholder logos initially
- **Locations We Cover**: Visual grid/icons showing Mediterranean & Caribbean ports
- **Proven Process / What to Expect**: 4-step visual walkthrough (Enquire → We Design → We Deliver → Wow) explaining timeline, space needed, how to brief guests
- **3 Uniques**: Why crew, brokers, agents choose us — three card sections (Award-Winning Shows, Onboard Anywhere, We Wow)
- **As Featured In**: Forbes mention, press logos
- **Yacht Portfolio**: Scrolling list of yacht names performed on (social proof)
- **Newsletter Signup** with checkbox
- **Trailers Section**: Embedded video placeholder area

### 2. Shows Page — Interactive Map
- Constellation/bubble layout matching the mockup — all ~27 shows displayed as circular nodes with connecting lines on a light background
- **Hover**: Circle enlarges smoothly, show name appears
- **Click**: Modal popup with show details (description, duration, performers, video placeholder) + "Enquire About This Show" CTA
- Shows: Treasure Rush, Murder Mystery, Magic Circle President, Jazz Band, Sean Heydon, Alex Trust, Mind 2 Mind, Visual Variety, Overboard, Michael Jackson, Taylor Swift, Classical, Daft Punk, Celebrations, Tribute Bands, Family & Friends, Cabaret, ABBA, Burlesque, Magic Mike, Great Gatsby, Little Ones, Wizardly Party, Freestyle Football, Superhero Academy, Supercharged, Aquavistas Got Talent, "More on Request"
- All shows have placeholder descriptions

### 3. Individual Show Pages
- Dedicated route per show (`/shows/treasure-rush`, etc.)
- Show hero with name, description, key details
- Video embed placeholder
- "Enquire About This Show" CTA linking to enquiry form with show pre-selected

### 4. About Page
- Company story — film & TV production background
- Clear LTH + Aquavistas connection ("same company, one brand")
- 3 unique selling points
- Where we operate map
- Founder/team spotlight section

### 5. Press & References
- Forbes feature prominently displayed
- Grid of press mentions
- Client testimonials

### 6. Blog (News & Insights)
- Blog listing page with featured post hero + grid
- Individual blog post template
- Static placeholder posts for now

### 7. Enquiry Page
- Structured form capturing:
  - Show Date(s) — date picker
  - Boat Name — text input
  - Shows Interested In — multi-select dropdown
  - Location — text/dropdown
  - Guest Profile — number of guests, ages, nationalities
  - Special Requests — textarea
  - Contact info (name, email, phone)
  - Newsletter subscription checkbox ✅
- Confirmation message on submit
- Frontend-only for now (no backend)

### 8. Contact Page
- Contact details, email, phone
- Quick link to enquiry form
- Social media links

---

## Site-Wide Elements
- **Navigation**: Clean top nav — Logo left, links right: Home, Shows, About, Press, Blog, Enquiry, Contact
- **Footer**: Full footer with nav links, LTH connection, newsletter signup, social links
- **Favicon**: Set to the uploaded yacht icon
- **SEO Copy**: Yacht-focused terminology throughout (superyacht, charter entertainment, onboard entertainment, Mediterranean yachting, etc.)
- **Fully Responsive**: Mobile-first — crew will browse on phones
- **Smooth Animations**: Subtle scroll animations, hover effects on show bubbles

---

## What's Included Now (Phase 1)
All pages built with full UI, interactive shows constellation, enquiry form (frontend), placeholder content, all routing, brand colours and typography applied.

## Deferred to Phase 2
Backend/CRM integration, real video embeds, blog CMS, newsletter API integration, real imagery replacement.

