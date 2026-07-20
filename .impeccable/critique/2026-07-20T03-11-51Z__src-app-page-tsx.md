---
target: homepage
total_score: 20
p0_count: 1
p1_count: 2
timestamp: 2026-07-20T03-11-51Z
slug: src-app-page-tsx
---
Method: dual-agent (A: a54fb7009c0c65940 · B: ad95c5b9c45104d23)
Target: src/app/page.tsx (EcoAlu homepage, all sections)

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No active-section highlight in nav while scrolling; scroll position is invisible to the header |
| 2 | Match System / Real World | 2 | "Tỷ" / "B" units opaque to international buyers; placeholder phone +84 (0) 123 456 789 visible |
| 3 | User Control and Freedom | 2 | 5-second silent form-state reset; no per-field error feedback; no persistent "Contact" shortcut |
| 4 | Consistency and Standards | 3 | Products tabs use rounded-full pills; News tabs use rounded rectangles — same UI element, different shapes |
| 5 | Error Prevention | 1 | No required-field indication before submit; no real API; no tel pattern validation |
| 6 | Recognition Rather Than Recall | 3 | Product specs shown inline; ESG and Download buttons have no affordance signal (dead interactive elements) |
| 7 | Flexibility and Efficiency | 2 | All nav dropdown sub-items link to same parent URL; no deep-linking; no keyboard shortcuts |
| 8 | Aesthetic and Minimalist Design | 2 | 6 consecutive white sections; Stats barely distinguishable from About above it; 7 identical cert cards |
| 9 | Error Recovery | 1 | Contact form has no error path — simulated submit unconditionally shows success regardless of outcome |
| 10 | Help and Documentation | 1 | No spec sheet downloads, no brochure, no MOQ info, no "how to order" — secondary CTA from PRODUCT.md absent |
| **Total** | | **20/40** | **Acceptable — significant improvements needed before users are happy** |

---

## Anti-Patterns Verdict

**LLM assessment**: Moderate AI slop confidence. The strongest tell is not any single element but the structural uniformity: every section opens with the same centered heading + emerald underline bar (8/8 sections use the identical pattern). When the signature appears on every section without variation, it stops being a signature and becomes scaffolding. Compound this with identical card grid recipes across AboutUs (6 cards), Stats (4 cards), ESG pillars (3 cards), Certifications (7 cards), and News (multiple cards) — all using icon-container + bold title + xs description — and the page reads as one template applied 12 times.

The color identity is the other major tell. DESIGN.md defines "the page shell is near-black (#041221) — the weight of a hundred-thousand-ton operation" and "white sections are deliberate contrast breaks, not the default." The built page is the inverse: a white site with a dark hero and dark footer. The dark authority claimed in PRODUCT.md is not the site a visitor actually sees.

**Deterministic scan** (8 findings, exit code 2):
- `gradient-text` (warning) — globals.css line 34: `.text-gradient-green` is defined. BUT: manual cross-check confirms it has zero usages in any component file. The class exists and is available, which is what the detector flagged. Not an active misuse. **False positive on the anti-pattern; the DESIGN.md rule is being followed.**
- `side-tab` (warning) — news/[id]/page.tsx line 98: `border-l-4` on a blockquote element. **False positive** — conventional editorial blockquote styling, not a card accent stripe.
- `bounce-easing` (warning) — Contact.tsx line 171: `animate-bounce` on the CheckCircle success icon. **Real finding.** Bounce easing is explicitly banned. The Impeccable rule: "No bounce, no elastic." Replace with `animate-pulse` or a Framer Motion scale entrance.
- `design-system-radius` (advisory) × 2 — globals.css scrollbar (4px) and Hero.tsx Swiper bullet (2px). The Hero bullet (`border-radius: 2px`) is real — the 32×4px pill bullet uses 2px but the DESIGN.md scale starts at `rounded-sm: 6px`. The scrollbar 4px is cosmetic chrome, not UI. Mixed verdict.
- `design-system-font-size` (advisory) × 3 — text-[9px] in News.tsx line 120, text-[11px] in News.tsx line 129 and news/[id] line 150. **Real findings.** These are off the type scale. The manual scan adds text-[10px] in Contact.tsx (contact card labels), Stats.tsx, and Products.tsx — 3 more off-ramp sizes the detector missed, for a total of ~6 components with arbitrary pixel font sizes.
- Manual findings not in detector: `backdrop-blur-sm` present in 4 components (Header mobile overlay, Contact form container, Distribution info card, ESG pillar cards). DESIGN.md explicitly rejects glassmorphism. Three of these four are inert (blurring through a solid background does nothing visual) but the habit is present and will compound.
- Manual finding: 2 eyebrow kicker spans — ESG.tsx line 42 and Distribution.tsx line 79 — both use `text-xs font-heading font-bold tracking-widest uppercase` above the main h2. DESIGN.md does not ban eyebrows but SKILL.md's absolute ban rule flags "tiny uppercase tracked eyebrow above every section." Two of 12 sections have this; tolerable but watch the count.

**Visual overlays**: No browser automation was used. No live overlay available in this run.

---

## Overall Impression

The hero is genuinely strong — the right visual vocabulary for an industrial authority brand. Then the page whites out for 10 consecutive sections and never returns. The North Star ("The Green Authority") exists in the design system documentation but not in the actual product. The most urgent work is not component polish — it's resolving the fundamental contradiction between what DESIGN.md says this site is and what was actually built. The second-biggest problem is that multiple CTAs across the site (ESG Report, nav dropdowns, form submission) lead nowhere or do nothing.

---

## What's Working

**1. The hero section is the strongest deliverable on the page.** Full-viewport factory photography with directional gradient overlay, a single clear emerald CTA, and a sequenced Framer Motion entrance (h1 → subtext → button, 0.4s stagger) creates the right opening impression. The 32×4px Swiper pagination pill is a confident, non-default design choice. This section passes the brand slop test; it does not read as AI-generated.

**2. Contact section information architecture is correctly sequenced for B2B.** Phone → email → branch selector → map → form matches the actual mental model of a procurement manager. The 7-col/5-col asymmetric grid gives contact info priority over the form, which is the right call when trust must be established before a buyer commits to a formal inquiry.

**3. Products filter UX works.** AnimatePresence with layout animation on filter change avoids jarring reflows. Product cards surface specs, capacity, and a category badge inline. The information density matches what a technical buyer needs to pre-qualify a product before requesting a sample or quote.

---

## Priority Issues

**[P0] White-section monotony contradicts the entire brand identity**
- **What**: DESIGN.md positions this as a dark-shell authority site where white sections are "deliberate contrast breaks." The built page is a white site. AboutUs → Stats → Products → ESG → News → Contact — 6 consecutive sections — are all white or near-white (`#ffffff` or `#f8fafc`). The dark shell (`#041221`) set on the page wrapper in page.tsx is completely hidden. Stats uses `bg-[#f8fafc]` — barely 5% gray against the surrounding white sections, imperceptible on most screens.
- **Why it matters**: The anti-reference in PRODUCT.md is "Generic Vietnamese corporate." The current implementation reads as exactly that: white background, green accents, Montserrat headings. The dark authority that differentiates EcoAlu from every other Vietnamese B2B site doesn't exist in the shipped product.
- **Fix**: Alternate section backgrounds on a deliberate rhythm. Minimum: move Stats and ESG to dark shell (`bg-[#041221]` with white text). This creates the pattern: dark hero → white About → dark Stats → white Products → dark ESG → white Contact — which is what DESIGN.md was written for. Stats metrics on dark will read as the credibility climax they're meant to be.
- **Suggested command**: `/impeccable colorize` (apply the committed dark-shell color strategy to the white-washed sections)

**[P1] Certification grid shows 7 identical generic Award icons — converts credibility proof into filler**
- **What**: ESG.tsx renders the certifications sub-section with every cert using the same `Award` Lucide icon in the same circular container. ISO 9001, ISO 14001, JIS H4100, RoHS — visually indistinguishable at a glance. All 7 look like placeholder content.
- **Why it matters**: PRODUCT.md's belief ladder step 2 is "Their product quality is certified to international standards." The design must make certs legible and specific. A B2B procurement manager who evaluates 30 Asian aluminum suppliers per year will recognize 7 identical award badges as template filler within 2 seconds — exactly the trust failure PRODUCT.md warns against.
- **Fix**: Replace generic Award icons with colored two-letter abbreviation badges (ISO, JIS, RoHS) or actual certification mark SVGs. Add cert body names beneath each. At minimum, vary the icon container color so the 7 cards are visually distinct.
- **Suggested command**: `/impeccable harden` (edge case: certifications section needs real visual proof treatment)

**[P1] News article images recycle hero photography — destroys editorial credibility**
- **What**: News.tsx maps article category to image: `enterprise → hero-factory-1.png`, `market → hero-factory-2.png`. Every article in the same category shows the same hero image. Multiple enterprise news cards show identical thumbnails.
- **Why it matters**: A news section where every card in a category shares an identical thumbnail signals template content to any experienced buyer. Combined with the simulated form submission, this compounds into "this site is not fully operational."
- **Fix**: Add an `image` field to news.json for article-specific images. Fall back to category images only when no article image exists. Short-term workaround: vary which hero image maps to which article based on article index rather than category.
- **Suggested command**: `/impeccable harden` (missing content states and real data paths)

**[P2] Products tabs use `rounded-full` pill shape, violating DESIGN.md + creating cross-section inconsistency**
- **What**: Products.tsx category filter buttons use `rounded-full`. News.tsx category filter buttons use `rounded`. DESIGN.md explicitly bans rounded-full on buttons: "the pill shape reads as SaaS or consumer app, not industrial authority."
- **Why it matters**: Two adjacent sections with different tab shapes signal an unfinished design system. The Products pills also directly violate the documented system rule.
- **Fix**: Change Products category buttons to `rounded-md`. Reconcile News and Products tabs to share one component or at minimum the same border-radius.
- **Suggested command**: `/impeccable polish` (component consistency pass)

**[P2] All nav dropdown sub-items link to same parent URL — navigation is broken**
- **What**: Header.tsx `getSubmenuItems()` returns About sub-items (Board, Vision, Philosophy) and Products sub-items (Ingot, Billet, Profile) — all link to `/about/` and `/products/` respectively. Every dropdown item is a false affordance.
- **Why it matters**: `src/app/products/[id]/` exists as an untracked directory in the git status — product detail pages appear to be in progress. Meanwhile every dropdown sub-item is delivering the wrong page. A user who clicks "Aluminum Billet" in the nav expects the Billet product page.
- **Fix**: Update `getSubmenuItems()` to use real deep-link URLs (`/products/ingot/`, `/products/billet/`, etc.) once the `[id]` pages are ready. As a stop-gap, remove the dropdown items rather than keeping false affordances.
- **Suggested command**: `/impeccable harden` (broken navigation is a functional gap)

**[P3] `animate-bounce` on contact success icon — explicit ban**
- **What**: Contact.tsx line 171 uses `animate-bounce` on the `CheckCircle` success icon. Detector finding: `bounce-easing` warning.
- **Why it matters**: DESIGN.md (and SKILL.md absolute bans): "No bounce, no elastic." Bounce easing on a success confirmation also reads lightweight and consumer-app, inconsistent with industrial authority.
- **Fix**: Replace `animate-bounce` with `motion.div` scale-in entrance (`initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 15, stiffness: 200 }}`) — delivers a confident pop without the cartoonish bounce loop.
- **Suggested command**: `/impeccable animate` (replace banned easing, add reduced-motion guards across all sections)

---

## Persona Red Flags

**Jordan (first-timer B2B visitor)**:
- Clicks hero "Contact" CTA — scrolls past 10 sections to reach the form. No sticky "Get Quote" shortcut persists.
- Sees Stats: "980 Tỷ" — in English mode this becomes "980B" with no unit gloss. Billion what? VND? USD?
- Clicks an AboutUs detail card (hover changes border + text color, implying clickability) — nothing happens. False affordance.
- Clicks "ESG Report" button — nothing happens. Dead interactive element.

**Riley (stress tester)**:
- Submits contact form — gets success state for 5 seconds, then form silently resets. No confirmation email. No ticket number. No proof of submission. Submission is actually discarded (simulated only).
- Clicks "Aluminum Billet" in Products nav dropdown — lands on `/products/` instead of the billet page.
- Clicks "Carbon Credit" button in ESG — nothing happens. Same for "ESG Report."

**Casey (mobile user)**:
- Opens mobile nav drawer — sub-navigation items are absent. Cannot access "Vision & Mission" or specific product pages from mobile. Mobile drawer is single-level only.
- News filter: 6 category tabs wrap awkwardly into multiple lines. No horizontal scroll container. Creates a confused tag cloud on 375px viewports.
- Contact section: Google Maps iframe takes 256px of vertical space before the form on mobile — form is far below the fold.

**Minh (Vietnamese procurement manager, first visit, desktop)**:
- Evaluating supplier stability: no founding year or operational start date visible anywhere on the page. The Stats "Năm Kinh Nghiệm" counter likely shows this, but reviewing Stats shows the data comes from translations.json — which was not verified in this assessment.
- Footer contact info: "HQ:", "Factory:", "Hotline:", "Email:" labels are hardcoded in English, not translated in Vietnamese mode.
- Sees the phone number `+84 (0) 123 456 789` — immediately recognizes it as a placeholder. Critical trust failure at the moment of highest conversion intent.
- Wants Billet specs for a specific alloy series: finds Series 6000 on the product card but cannot see the full spec table without navigating to the product detail page — the card gives a summary but the `detail.specTable` data that exists in products.json is only shown on the `[id]` detail page.

---

## Minor Observations

- `backdrop-blur-sm` appears in 4 components (ESG, Distribution, Contact, Header mobile overlay). Three of four are inert on solid backgrounds but the habit is present and violates DESIGN.md's glassmorphism rule. The Header mobile overlay use is the only genuinely functional one.
- `text-justify` on body copy throughout multiple sections creates visible word-spacing gaps in Vietnamese diacritical text. Use `text-left` for Vietnamese and CJK content.
- `text-[10px]`, `text-[9px]`, `text-[11px]` appear across at least 6 components — off-ramp sizes not in DESIGN.md's type scale. Consolidate to `label` (0.625rem) or `body` (0.875rem).
- `z-45` on the mobile nav drawer — not in Tailwind's default scale. May compile as an arbitrary value or silently fall back to `z-auto`. Should be `z-40` or `z-50`.
- `prefers-reduced-motion` not handled in individual Framer Motion components. DESIGN.md requires this. Framer Motion's global `MotionConfig` or per-component `useReducedMotion` hook not in use.
- Hero Swiper pagination bullets use `border-radius: 2px` — outside DESIGN.md's rounded scale (starts at 6px). Minor but flagged by detector.
- The gradient text utility `.text-gradient-green` is defined in globals.css but has zero usages in component files. Available but unused — correct per DESIGN.md's restriction.
- Footer product links all go to `/products/` same as nav dropdowns. Deep-linking is broken site-wide, not just in the header.

---

## Questions to Consider

**1. Why was the dark-shell identity specified in DESIGN.md but not built?**
The most impactful single decision would be alternating section backgrounds between dark (#041221) and white. Was the current white-dominant build a client direction, a readability assumption, or simply implementation drift from the initial Stavian Metal reference? The answer determines whether the fix is a design change or a technical constraint to work around.

**2. What does a procurement manager's click journey actually reach?**
Map every CTA on the page to its real destination: hero button → contact form (simulated), ESG Report → nothing, Carbon Credit → nothing, Ingot dropdown → wrong page, Billet dropdown → wrong page, Footer product links → wrong page. The site is visually complete but functionally a prototype. How many of these are unfinished features vs. design choices?

**3. If EcoAlu has real certifications, why aren't their marks shown?**
ISO 9001, ISO 14001, JIS H4100, RoHS certification marks are trademarked graphics with established visual identities. Procurement managers recognize them instantly — that recognition is exactly the trust signal PRODUCT.md's belief ladder depends on. What's the barrier to using the actual certification marks instead of generic Award icons?

---

Trend for `src-app-page-tsx` (last 5 runs): First run for this target, no trend yet.
