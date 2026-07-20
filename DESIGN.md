---
name: EcoAlu
description: Vietnam's high-tech circular-economy aluminum factory — dark industrial authority, precise emerald identity.
colors:
  forest-void: "#011a13"
  page-shell: "#041221"
  primary-forest: "#01241b"
  primary: "#059669"
  accent-vivid: "#10b981"
  accent-deep: "#047857"
  mint-surface: "#f4faf6"
  white: "#ffffff"
  ink-primary: "#1e293b"
  ink-secondary: "#475569"
  ink-muted: "#64748b"
  ink-subtle: "#94a3b8"
  surface-subtle: "#f8fafc"
  surface-low: "#f1f5f9"
  border-default: "#e2e8f0"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.875rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1rem, 2vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Roboto, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  contact-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "16px"
  form-container:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "32px"
  form-input:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  form-input-focus:
    backgroundColor: "{colors.white}"
---

# Design System: EcoAlu

## 1. Overview

**Creative North Star: "The Green Authority"**

EcoAlu's design system is built on institutional mass paired with a single earned green signal. The page shell is near-black (#041221) — the weight of a hundred-thousand-ton operation. Against it, the primary emerald (#059669) reads not as decoration but as a mark of certification: precise, specific, earned. White light sections break the dark rhythm when the content demands openness; they are not the default, they are the relief. Every surface earns its color.

This system rejects two failure modes by name. "Generic Vietnamese corporate" — the cluttered, banner-heavy, gradient-overloaded aesthetic that collapses authority into noise. And "greenwashing SaaS" — the leaf icon, the stock forest photograph, the surface-level ESG gesture. EcoAlu's green is industrial. It shows up on buttons, section anchors, icon containers, and data highlights because it is the mark of a real process, not a brand campaign.

The design is corporate without being corporate-cold. Montserrat headings at extrabold carry ambition; Roboto body text carries precision. Spacing is generous — section rhythm at 80px — because scale communicates capacity. Framer Motion entrance animations are present but restrained: fade-up, single pass, reduced-motion respected. Motion serves orientation, not entertainment.

**Key Characteristics:**
- Dark mass (near-black shell) as default authority; white sections as deliberate relief
- Emerald green as earned signal, not decoration — used at ≤15% of any screen surface
- Extrabold Montserrat headings + clean Roboto body = industrial precision pairing
- Flat-first elevation: borders and subtle shadows over blur or glassmorphism
- Section headings uppercase, tracked, with a 4px emerald rule beneath — once per heading, not decorative everywhere
- Confident and direct components: solid fills, clear hierarchy, immediate hover feedback

## 2. Colors: The Authority Palette

Two deep darks anchor every page; one precise green marks every action and accent; slates handle the legibility layer.

### Primary
- **Emerald Authority** (`#059669`): The brand's identity mark. Appears on primary buttons, section heading underlines, icon containers, active navigation states, and focus borders. Never used as a large fill on light sections — its power comes from scarcity.
- **Vivid Emerald** (`#10b981`): The brighter accent used in gradient text on display elements (hero `text-gradient-green`) and hover deepening. Secondary to the primary; appears only when the context is already dark.
- **Deep Emerald** (`#047857`): Button hover state. Provides depth without a hue shift.

### Secondary
- **Mint Surface** (`#f4faf6`): Tinted light background for icon containers (`p-2.5 bg-primary-light`), section tint backgrounds, and light-mode card alternates. The only green that appears as a fill on light surfaces.

### Neutral
- **Forest Void** (`#011a13`): The deep origin of the hero gradient — the most saturated dark. Used only in hero overlays and extreme shadow depths.
- **Page Shell** (`#041221`): The site's page-level background (`min-h-screen bg-[#041221]`). Near-black navy-tinted. The dominant visual mass of every page.
- **Primary Forest** (`#01241b`): Used for the deepest dark text on dark backgrounds, and as the CSS theme `--color-primary-dark`. Forest-tinted, not cold.
- **Pure White** (`#ffffff`): Light section backgrounds (About, Contact, Products). Sharp contrast against the dark shell.
- **Dark Slate** (`#1e293b`): Primary body text on white sections. Sufficient contrast at WCAG AA.
- **Secondary Text** (`#475569`): Caption text, supporting body copy, card descriptions.
- **Muted Text** (`#64748b`): Placeholder labels, subdued info.
- **Subtle Labels** (`#94a3b8`): ALL CAPS labels, field tags, section kickers in uppercase tracked style.
- **Surface Subtle** (`#f8fafc`): Input backgrounds at rest. Near-invisible off-white.
- **Surface Low** (`#f1f5f9`): Tab container backgrounds, mobile drawer fills.
- **Border Default** (`#e2e8f0`): Input borders, card strokes. Light and structural, not decorative.

### Named Rules

**The Scarcity Rule.** Emerald (#059669) appears on ≤15% of any given screen surface. One button, one underline, one icon fill. Its authority depends on its rarity. When green appears everywhere, it becomes wallpaper.

**The Dark Shell Rule.** White sections are contrast moments — About, Contact, and product cards — not the default mode. The page shell (#041221) is the dominant visual mass. Do not switch to white-background sections by default when adding new content; confirm whether the content warrants the break.

## 3. Typography

**Display Font:** Montserrat (800 weight for hero, 700 for section headings; fallback: sans-serif)
**Body Font:** Roboto (400 weight; fallback: sans-serif)
**Interface Font:** Inter (used in component details and mixed UI elements)

**Character:** Montserrat's geometric weight signals industrial ambition without decorative flair. Roboto's engineered neutrality keeps body copy precise and scannable. The pairing reads confident in every language: Latin, Vietnamese diacritics, and CJK characters.

### Hierarchy

- **Display** (800 weight, `clamp(1.875rem, 6vw, 3.75rem)`, leading 1.1, tracking −0.02em): Hero slide titles only. Full-width, white on dark. Maximum 3.75rem (~60px); above that the page shouts.
- **Headline** (700 weight, `clamp(1.875rem, 4vw, 2.25rem)`, leading 1.25, tracking +0.05em, UPPERCASE): Section headings (`text-3xl sm:text-4xl tracking-wide uppercase`). Always paired with a 4px emerald underline rule (`h-1 bg-primary w-16 rounded-full`). Never used on more than one heading per section.
- **Title** (700 weight, `1rem–1.25rem`, leading 1.4): Card headings, subsection titles, branch names in contact. Sentence case.
- **Body** (400 weight, `0.875rem`, leading 1.625): Primary prose — section descriptions, card copy, contact info. Maximum line length 65–75ch on desktop.
- **Label** (700 weight, `0.625rem`, leading 1.4, tracking +0.08em, UPPERCASE): Field labels, category tags, section kickers (when used), hotline/email descriptors. Use sparingly and never on more than one text element per visual group.

### Named Rules

**The Heading Underline Rule.** Every `<h2>` section heading gets exactly one 4px emerald underline bar (`h-1 bg-primary w-16 rounded-full`), centered or left-aligned based on section layout. No section heading is exempt; no section heading gets two.

**The ALL CAPS Restraint Rule.** Uppercase tracking is used on section headings and on `label`-level text only. Do not apply `uppercase tracking-wide` to body copy, card titles, or CTA buttons. The CTA button uses sentence case or title case, not all caps — authority doesn't need to shout.

## 4. Elevation

EcoAlu uses flat-first elevation: surfaces are distinguished by tonal background and border, not by shadow depth. Shadows appear as feedback to state (hover, active, modal presence), not as ambient layer-stacking.

The `bg-glass` utility (`background: white; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05)`) is the standard card surface. The `bg-glass-heavy` variant (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)`) is used for major containers like the contact form. These are not decorative; they separate interactive containers from static backgrounds with the minimum shadow needed.

### Shadow Vocabulary

- **Resting card** (`box-shadow: 0 1px 3px rgba(0,0,0,0.05)`): Standard card at rest — `bg-glass`. Barely perceptible; present only to distinguish the card from a white section background.
- **Heavy container** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)`): Contact form, major form containers — `bg-glass-heavy`. Structural, not decorative.
- **Button lift** (`box-shadow: 0 4px 6px -1px rgba(5,150,105,0.2)`): Primary button hover state — colored shadow in the primary hue. Uses `shadow-primary/20` → `shadow-primary/40` on hover. The only colored shadow in the system.
- **Elevated drawer** (`box-shadow: 0 25px 50px rgba(0,0,0,0.25)`): Mobile nav drawer (`shadow-2xl`). Appears only in overlay contexts.

### Named Rules

**The Flat-by-Default Rule.** No surface has a shadow at rest unless it is an explicitly interactive card or a major form container. Static content blocks, section backgrounds, and decorative elements: no shadow. Shadows are interaction signals, not layout decorators.

## 5. Components

### Buttons

Confident and direct — solid fills, clear hierarchy, immediate feedback on hover with both color and micro-lift.

- **Shape:** Gently rectangular with soft corners (6px radius)
- **Primary (hero CTA):** Emerald fill (`#059669`), white text, Montserrat 700, `0.05em` tracking, `14px 32px` padding. Hover: `#047857` fill + −2px translateY lift + colored shadow deepens.
- **Primary (light section):** Same spec; appears in language switcher active state and form submit context.
- **Ghost / Outline:** Transparent background, emerald border and text, same radius and padding. Used where a secondary action must coexist with a primary on the same surface.
- **Language Switcher Tab:** Pill variant (`rounded-md`), `px-2 py-1`, text-xs Montserrat bold. Active state: emerald fill + white text. Inactive: transparent + slate text. Never more than 3 side-by-side.

### Cards / Containers

- **Corner Style:** 12px radius (contact info cards, icon-linked items); 16px for major containers (contact form wrapper)
- **Background:** Pure white (`#ffffff`) on white sections; transparent with border on dark sections
- **Shadow Strategy:** Resting card shadow only (see Elevation); no shadow on dark-background cards
- **Border:** 1px solid `#e2e8f0` (border-default). Border is structural, not decorative. No colored card borders.
- **Internal Padding:** 16px (contact cards), 24–32px (form container)

### Inputs / Fields

- **Style:** Filled resting state (`#f8fafc` background), 1px solid `#e2e8f0` border, 6px radius
- **Label:** Uppercase, 10px, 700 weight, slate-500, tracking-wide. Always above the field.
- **Focus:** Border shifts to `#059669`, background lifts to white. No glow or blur — clean border shift only.
- **Error / Disabled:** Not yet implemented; when added, use `#ef4444` for error border, `#f1f5f9` + `#94a3b8` text for disabled.

### Navigation

- **Transparent on load:** Full-width, blended into the hero image via gradient overlay. Text white.
- **Scrolled (solid):** White background (`bg-white/95`), 1px bottom border (`border-slate-100`), `shadow-sm`. Logo text darkens to primary-dark.
- **Nav links:** Montserrat 700, text-xs to text-sm, tracking-wide. Default: context-dependent (white on transparent, slate-700 on solid). Hover: emerald. Active: emerald.
- **Dropdown:** White card, `rounded-md shadow-xl`, `ring-1 ring-black/5`. Items: text-xs Montserrat semibold, slate-700. Hover: `bg-primary-light text-primary`. Divider: `border-b border-slate-100`.
- **Mobile drawer:** Full-height right panel, `w-4/5 max-w-sm`, white, `shadow-2xl`, slides in from right. Closes with X button top-right.

### Section Heading with Anchor Rule

A signature pattern used across every major section. Structure: centered `<h2>` in uppercase Montserrat bold + emerald gradient/text + a 4px wide, 64px-long, rounded-full emerald bar beneath. This is the EcoAlu section heading signature. Do not vary it arbitrarily.

## 6. Do's and Don'ts

### Do:

- **Do** use `#059669` emerald for ≤15% of any screen surface — one button, one underline, one icon fill per view.
- **Do** keep the page shell (`#041221`) as the dominant background; white sections are deliberate contrast breaks, not the default.
- **Do** pair Montserrat (700–800 weight) for all headings and Roboto (400) for all body copy — no mixing within a single text element.
- **Do** use the section heading signature: uppercase `<h2>` + emerald underline bar (`h-1 bg-primary w-16 rounded-full mx-auto`). Every section. Once. Centered or left-aligned.
- **Do** include real proof with every claim: capacity numbers next to product headings, ISO certification names next to quality claims, partner logos as logos not as text.
- **Do** cap hero display text at 3.75rem (60px) maximum — the hero is one of many sections, not a billboard.
- **Do** include `@media (prefers-reduced-motion: reduce)` alternatives for every Framer Motion animation. The trilingual audience includes accessibility-sensitive contexts.
- **Do** test every text color against its background for WCAG 2.1 AA: ≥4.5:1 for body text, ≥3:1 for large text. The dark slate (`#1e293b`) on white (`#ffffff`) passes at 13.9:1. Slate-500 (`#64748b`) on white passes at 5.74:1; do not go lighter.

### Don't:

- **Don't** use leaf icons, stock forest photography, or generic "green = sustainable" visual shorthand for ESG content. EcoAlu's sustainability is industrial — certifications, circular economy process diagrams, specific metrics. If you can't cite a standard or a number, don't design for it visually.
- **Don't** produce cluttered layouts with banner-heavy headers, multiple competing CTAs per section, or gradient text on every heading. One CTA per section. One gradient text use (the hero display title). Everywhere else: solid color.
- **Don't** add glassmorphism (backdrop-filter: blur, frosted-glass cards) decoratively. The `bg-glass` utility is flat and bordered by design; it replaced an earlier blurred version for good reason. No frosted cards, no blurred section backgrounds.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards or callouts. Use full border, background tint, or a leading icon instead.
- **Don't** apply `background-clip: text` gradient to headings outside the designated `.text-gradient-green` utility class. That utility is reserved for the hero section's display heading only.
- **Don't** add new section heading patterns that deviate from the uppercase + emerald underline signature. Consistency across 12+ sections is what makes the system feel authoritative, not designed ad hoc.
- **Don't** translate ESG commitment through color alone — emerald accent color is the brand, not the sustainability signal. ESG content needs its own section with specific claims, not just a green color wash.
- **Don't** use `rounded-full` on buttons — the pill shape reads as SaaS or consumer app, not industrial authority. Buttons stay at 6px radius.
