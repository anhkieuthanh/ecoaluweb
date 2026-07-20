---
target: homepage
total_score: 21
p0_count: 1
p1_count: 3
timestamp: 2026-07-20T03-40-33Z
slug: src-app-page-tsx
---
Method: dual-agent (A: Explore · B: Explore)
Target: src/app/page.tsx (EcoAlu homepage, all sections) — Re-run after colorize + harden + polish session

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Form has spinner; no active-section nav highlight; no reference number on success |
| 2 | Match System / Real World | 3 | Cert badges now legible by family; VI voice authentic; "Tỷ/B" unit gloss still absent |
| 3 | User Control and Freedom | 2 | No form draft save; nav dropdowns all link to parent URL; no breadcrumbs on sub-pages |
| 4 | Consistency and Standards | 3 | Tabs now unified (rounded on both Products + News); cert badges systematic; 3 button families still diverge |
| 5 | Error Prevention | 1 | No required-field indicators; no live validation; form submits empty without feedback |
| 6 | Recognition Rather Than Recall | 3 | Products + certs visible inline; cert family colors scannable at a glance |
| 7 | Flexibility and Efficiency | 2 | No alloy grade filter; no keyboard shortcuts; no deep-link from nav dropdowns |
| 8 | Aesthetic and Minimalist Design | 3 | Dark sections (Stats + ESG) break white monotony; cert badges add visual distinction; mint used in 4 sections — oversaturated |
| 9 | Error Recovery | 1 | Contact form unconditionally shows success; no error path; no recovery copy |
| 10 | Help and Documentation | 1 | No spec sheet downloads, no FAQ, no cert PDF links, no "how to order" |
| **Total** | | **21/40** | **Acceptable — improvements needed; up from 20/40** |

---

## Anti-Patterns Verdict

**LLM assessment**: Meaningful progress. The dark-shell identity (Stats + ESG) now exists in the built product — the fundamental contradiction from the first critique is resolved. Cert typographic badges pass the credibility test: a procurement manager can scan ISO, RoHS, EN, JIS, ASTM in under 3 seconds and know they're seeing real families. The slop tell that remains is **mint background syndrome**: Distribution, Solutions, Library, and Partners all share the same primary-light (#f4faf6) surface, making 4 of 12 sections visually identical. The rhythm is dark → white → mint → white → mint → dark → mint → white → mint → contact — erratic rather than deliberate. The second remaining tell is the generic contact form: a single textarea for all inquiry types signals a company that hasn't thought through its sales process.

**Deterministic scan**: 7 findings (exit 2), all false positives or pre-existing intentional micro-sizes. All session fixes confirmed clean — none reappear.
- `gradient-text` globals.css:34 — `.text-gradient-green` defined, zero usages. False positive.
- `design-system-radius` globals.css:60 (4px) — browser scrollbar chrome, not UI. False positive.
- `design-system-font-size` ESG.tsx:150 `text-[11px]`, :154 `text-[8px]` — cert badge prefix/code, intentional micro-label in fixed 48×48 container.
- `design-system-radius` Hero.tsx:129 (2px) — Swiper pagination pill, pre-existing.
- `design-system-font-size` News.tsx:120 `text-[9px]`, :129 `text-[11px]` — category badge and date chrome, intentional.

**Visual overlays**: Browser automation not available. No overlay injection this run.

---

## Overall Impression

The page has a credible authority skeleton now. Hero → dark Stats → dark ESG creates the weight the brand brief calls for. But everything between those anchors (Distribution → Products → Solutions → Library → Partners) is mint-or-white soup with no rhythm. A procurement manager who scrolled from Stats to ESG wondering "is this what it's like?" would give up before reaching Contact. The form itself is the other critical gap: it's sized for a general inquiry, not for someone evaluating a 100,000 ton/year aluminum supplier.

---

## What's Working

**1. Dark-section authority is real now.** Stats and ESG on #041221 deliver the industrial weight DESIGN.md specified. The emerald radial accents (rgba(5,150,105,0.07-0.08)) are subtle enough to feel environmental, not decorative. The page has a visual center of gravity it lacked before.

**2. Cert typographic badges are shipping-ready.** ISO → emerald, RoHS → amber, EN → sky, JIS → violet, ASTM → orange is a system a B2B evaluator can scan and trust. The prefix + code split (ISO / 9001) makes each badge self-explanatory. Hover transitions to solid fill with white text gives confident interactive feedback.

**3. Product filter UX is coherent.** `rounded` tabs (Products and News now match), AnimatePresence layout transitions, and inline spec tables give technical buyers enough to pre-qualify without a sales call. The tab shape fix removed the SaaS pill tell.

---

## Priority Issues

**[P0] Form validation missing — lead loss at highest-intent moment**
- **What**: Contact form has no required-field indicators, no live validation, and no error feedback. An empty form submission shows the same success animation as a complete one.
- **Why it matters**: B2B procurement inquiries are high-stakes. A buyer who fills 3 of 4 fields and gets a silent success has no idea the lead was lost. Trust collapses at the exact moment it should peak.
- **Fix**: Add blur-triggered validation per field (name, phone, message required). Red border + inline error message. Disable submit until required fields pass. Success copy should include a next-step promise: "We'll respond within 24 hours via the phone number you provided."
- **Suggested command**: `/impeccable harden`

**[P1] Mint background oversaturation — 4 sections, no rhythm**
- **What**: Distribution, Solutions, Library, and Partners all use `bg-primary-light` (#f4faf6). Combined with the 2 white sections (Products, News) between dark anchors, the page reads as mint-and-white for its entire middle third.
- **Why it matters**: Dark sections were added to create rhythm. But the rhythm is currently: dark Hero → white About → dark Stats → **mint Distribution → white Products → mint Solutions → dark ESG → mint Library → white News → mint Partners** → white Contact → dark Footer. The mint repetition blurs the rhythm entirely.
- **Fix**: Consolidate to 2 mint sections maximum. Solutions and Partners → white. Library → white or fold into ESG dark block. This creates the clean alternation DESIGN.md intended.
- **Suggested command**: `/impeccable colorize`

**[P1] Nav dropdown deep-links still broken — false affordances site-wide**
- **What**: Header.tsx `getSubmenuItems()` returns About sub-items (Board, Vision, Philosophy) and Products sub-items (Ingot, Billet, Profile) all linking to `/about/` and `/products/` respectively. `src/app/products/[id]/` exists as an untracked directory — product detail pages appear in progress. Every dropdown item is a false affordance.
- **Why it matters**: A procurement manager clicking "Aluminum Billet" in the nav expects the billet detail page. Landing on the generic products list reads as a broken site.
- **Fix**: Update `getSubmenuItems()` to use `/products/ingot/`, `/products/billet/`, `/products/profile/` once [id] pages are ready. As a stop-gap, remove dropdown sub-items rather than keeping false affordances. Foot product links have the same bug — fix both at once.
- **Suggested command**: `/impeccable harden`

**[P1] Contact form lacks B2B procurement structure**
- **What**: Single generic textarea. No "Request Type" routing (RFQ vs. cert documentation vs. general inquiry). No alloy grade, quantity, or delivery date fields. For a company selling 100,000 tons/year, this form is sized for a home improvement contractor.
- **Why it matters**: A CPO evaluating EcoAlu for their approved vendor list needs to send: product spec requirements, quantity, delivery terms, compliance documents needed. A generic message field means the sales team gets "I need aluminum" with no context.
- **Fix**: Add "Request Type" select (RFQ / Specifications / Certificate Documentation / General Inquiry). Conditionally show relevant fields per type. At minimum add a "Company" field — B2B buyers expect it.
- **Suggested command**: `/impeccable shape`

**[P2] Placeholder phone number still visible in Contact section**
- **What**: `+84 (0) 123 456 789` — clearly a placeholder. Any experienced buyer recognizes it immediately.
- **Why it matters**: Critical trust failure at highest conversion intent. Mentioned in previous critique, not fixed.
- **Fix**: Replace with a real phone number or remove it if not yet operational. A missing number is less damaging than a fake one.
- **Suggested command**: `/impeccable harden`

---

## Persona Red Flags

**Jordan (First-timer inbound, SEM lead from "aluminum ingot supplier Vietnam"):**
- Lands hero, reads "100,000 tons/year" in Stats (good) — but then hits mint Distribution section that reads like logistics marketing, not product specs. Loses thread before reaching Products.
- Clicks "Aluminum Ingot" in Products nav dropdown → lands on `/products/` not `/products/ingot/`. Assumes site is broken.
- Fills contact form, submits with phone field empty (no error shown) → lead lost.

**Riley (Stress tester, sustainability procurement officer):**
- Locates ISO 14001 badge in cert grid, hovers → badge fills green, title highlights. But no click action — no cert PDF, no issue date, no accreditation body. Dead end for a compliance audit.
- ESG Report button → still does nothing. Carbon Credit button → still does nothing. Two dead CTAs in the section that matters most to Riley.
- Submits contact form twice rapidly — no double-submission guard. Same success animation fires twice.

**Casey (Mobile user, regional distributor, one-handed on iPhone):**
- News filter: 6 category tabs wrap into 2–3 lines on 375px viewport. No horizontal scroll container. Looks broken.
- Cert grid: 2-col on mobile squishes `text-[8px]` cert code into illegibility. Badge prefix still readable, code not.
- Contact form: "Message" textarea requires typing on mobile. No `request_type` select to shortcut the inquiry.

**Minh (Vietnamese CPO, warm referral, evaluating for approved vendor list):**
- Footer contact labels ("HQ:", "Factory:", "Hotline:") are English-only in VI mode. Small but signals incomplete i18n.
- Sees `+84 (0) 123 456 789` — immediately recognizes as placeholder. Trust drops to zero at the moment of highest purchase intent.
- ESG Report download button → nothing. For an AVL submission, Minh needs ISO cert scans and quality policy PDF. Cannot self-serve.

---

## Minor Observations

- `text-[8px]` cert code in ESG typographic badge is intentional but borderline unreadable on mobile. Worth monitoring at 320px viewport.
- Hero Swiper pagination `border-radius: 2px` (flagged by detector as off DESIGN.md scale) — pre-existing; minor.
- Footer column labels ("HQ:", "Factory:", "Hotline:", "Email:") are hardcoded English strings, not using `t()`. They don't localize in VI or CN modes.
- ESG "Carbon Credit" and "ESG Report" buttons remain dead interactive elements with no affordance signal that they're non-functional. Either wire them or remove them.
- `prefers-reduced-motion` not handled in individual Framer Motion components. DESIGN.md requires this; global `MotionConfig` or `useReducedMotion` hook not in use.

---

## Questions to Consider

1. **Are `/products/[id]/` pages ready to ship?** If yes, updating `getSubmenuItems()` is a 15-minute fix with significant trust payoff. If no, removing dropdown sub-items prevents false affordances until they're ready.

2. **What happens to form submissions today?** If they're discarded (simulated only), the P0 form validation fix is a prerequisite for any marketing spend. A form that loses leads is worse than no form.

3. **Can the ESG Report and cert documentation be self-served?** If PDF downloads are available, wiring those buttons turns the ESG section from visual proof into a conversion tool for compliance-driven buyers.
