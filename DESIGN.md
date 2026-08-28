---
name: Rodrigo C. G. Pena Personal Website
description: A warm, field-note-inspired personal landing page for an interdisciplinary academic researcher.
colors:
    terracotta-signal: "#CE534D"
    archive-paper: "#F1EED9"
    graphite-umber: "#46433A"
    paper-wash: "rgba(255, 255, 255, 0.26)"
    graphite-hairline: "rgba(70, 67, 58, 0.18)"
    graphite-rule: "rgba(70, 67, 58, 0.42)"
typography:
    display:
        fontFamily: "Vollkorn, serif"
        fontSize: "clamp(2.3rem, 6vw, 2.8em)"
        fontWeight: 700
        lineHeight: normal
    headline:
        fontFamily: "Vollkorn, serif"
        fontSize: "2em"
        fontWeight: 700
        lineHeight: normal
    title:
        fontFamily: "Vollkorn, serif"
        fontSize: "1.3em"
        fontWeight: 400
        lineHeight: normal
    body:
        fontFamily: "Vollkorn, serif"
        fontSize: "1rem"
        fontWeight: 400
        lineHeight: normal
    label:
        fontFamily: "Vollkorn, serif"
        fontSize: "0.8rem"
        fontWeight: 400
        lineHeight: normal
rounded:
    panel: "6px"
    circle: "50%"
spacing:
    panel-y: "1rem"
    inner: "1.25rem"
    outer: "2.5rem"
components:
    inline-link:
        textColor: "{colors.terracotta-signal}"
        typography: "{typography.body}"
    field-note:
        backgroundColor: "{colors.paper-wash}"
        textColor: "{colors.graphite-umber}"
        rounded: "{rounded.panel}"
        padding: "{spacing.panel-y} {spacing.inner}"
    identity-portrait:
        backgroundColor: "{colors.archive-paper}"
        rounded: "{rounded.circle}"
        size: "clamp(200px, 30vw, 400px)"
    profile-icon-link:
        textColor: "{colors.graphite-umber}"
        size: "1.2em"
---

# Design System: Rodrigo C. G. Pena Personal Website

## Overview

**Creative North Star: "The Interdisciplinary Field Note"**

The Interdisciplinary Field Note treats the homepage as a concise page from a working researcher's notebook: personal enough to reveal the person behind the work, structured enough to orient a new collaborator, and spare enough to send visitors onward without friction. Its warm paper ground, bookish serif, circular portrait, and restrained terracotta signals make the page thoughtful and approachable rather than institutional.

The system is editorial and restrained. Content carries the hierarchy, whitespace keeps the compact page calm, and decoration is limited to hairline borders, one accent color, and a few precise geometric gestures. The result should remain professional but never corporate-polished or formal.

**Key Characteristics:**

- Warm archive-paper canvas with graphite text and a single terracotta signal.
- Bookish, conversational typography using one serif family throughout.
- Flat, paper-like depth built from translucent washes, borders, and outlines.
- Compact editorial composition that privileges biography, links, and the portrait.
- Responsive transition from a stacked personal note to a balanced two-column folio.

## Colors

The palette reads like warm paper, dry pigment, and pencil-dark type: quiet neutrals establish the field while terracotta marks the paths outward.

### Primary

- **Terracotta Signal** (`#CE534D`): The sole accent, used for inline links and other navigational signals that move the visitor beyond the page.

### Neutral

- **Archive Paper** (`#F1EED9`): The page canvas and the thin separator around the portrait.
- **Graphite Umber** (`#46433A`): Primary text, icon, divider, and portrait-outline color.
- **Paper Wash** (`rgba(255, 255, 255, 0.26)`): Translucent field-note panel surface; it lightens the canvas without introducing a white card.
- **Graphite Hairline** (`rgba(70, 67, 58, 0.18)`): Quiet panel perimeter.
- **Graphite Rule** (`rgba(70, 67, 58, 0.42)`): Stronger left-edge rule that gives note panels their editorial structure.

### Named Rules

**The One Signal Rule.** Terracotta marks links and small navigational signals; its rarity gives it meaning, so it does not become a large decorative fill.

**The Warm Paper Rule.** Archive Paper is the continuous canvas. White appears only as a translucent wash, never as an opaque card layer.

## Typography

**Display Font:** Vollkorn (with generic serif fallback)
**Body Font:** Vollkorn (with generic serif fallback)
**Label Font:** Vollkorn (with generic serif fallback)

**Character:** Vollkorn is bookish and conversational: visibly literary without turning the page into a formal publication. A single family keeps the small site personal and coherent; hierarchy comes from scale and weight rather than from contrasting typefaces.

### Hierarchy

- **Display** (700, fluid `2.3rem-2.8em`, normal line-height): The owner's name in the identity header.
- **Headline** (700, `2em`, normal line-height): Page and content-section headings.
- **Title** (400, `1.3em`, normal line-height): The pronunciation line beneath the name.
- **Body** (400, `1rem`, normal line-height): Biography, current-role context, and explanatory prose.
- **Label** (400, `0.8rem`, normal line-height): Quiet update metadata and other tertiary annotations.

### Named Rules

**The One Voice Rule.** Use Vollkorn across display, prose, and labels; do not create hierarchy by introducing an unrelated display or interface family.

## Layout

The homepage is mobile-first and vertically stacked below 1000px. The identity header has `2.5rem` outer spacing, the main column has `2.5rem` side margins, and the portrait scales from 200px to 400px with `clamp(200px, 30vw, 400px)`.

At 1000px and above, the viewport becomes a centered two-column composition: 40% for the portrait and identity, 50% for the biography and links. The columns meet across a `1.25rem` inner gap and retain `2.5rem` outer margins. The wrapper fills at least the viewport height and vertically centers the composition. Field-note panels use `1rem 1.25rem` internal padding with `1.25rem` vertical separation.

Secondary pages can collapse to a centered single content column. Lists retain generous indents, while the social/profile link cluster is horizontally centered and compact.

## Elevation & Depth

The system remains flat and paper-like. It creates separation with tonal transparency, thin borders, and line weight rather than conventional drop shadows. Field-note panels use a translucent paper wash with a hairline perimeter and stronger left rule. The circular portrait uses `0 0 0 3px #46433A` as a crisp outer ring, paired with a 2px Archive Paper separator; the effect is an outline, not floating elevation.

### Shadow Vocabulary

- **Portrait Ring** (`box-shadow: 0 0 0 3px #46433A`): A structural outline used only around the circular portrait.

### Named Rules

**The Flat Paper Rule.** Content surfaces stay flat at rest; use wash, border, or outline to establish structure instead of soft card shadows.

## Shapes

The form language is restrained and purposeful. Biography panels use a modest 6px radius that softens their paper-note framing without becoming pill-like. The portrait is a true circle with a double-ring silhouette. Links, headings, dividers, and the icon row otherwise remain unboxed. The animated 404 illustration is the geometric exception: a fine wireframe figure that uses the same graphite color and avoids introducing a second material language.

## Components

### Inline Links

- **Character:** Quietly distinctive editorial references.
- **Color:** Terracotta Signal at rest.
- **Hover:** Add an underline without changing the palette.
- **Focus:** Preserve a visible, high-contrast keyboard focus indication.

### Field-note Panels

- **Corner Style:** Soft rectangle (`6px`).
- **Background:** Paper Wash over Archive Paper.
- **Shadow Strategy:** None; see the Flat Paper Rule.
- **Border:** 1px Graphite Hairline perimeter with a 3px Graphite Rule left edge.
- **Internal Padding:** `1rem 1.25rem`.

### Identity Header

- **Portrait:** Circular, 200-400px responsive size, with a 2px Archive Paper separator and 3px Graphite Umber outer ring.
- **Name:** Centered display text with no extra top or bottom margin.
- **Pronunciation:** Centered title text with generous space below it.

### Profile Navigation

- **Style:** A centered, compact row of icon-only links.
- **Color:** Graphite Umber icons within the warm page field.
- **Spacing:** Each item has `0.8em` vertical rhythm and small horizontal offsets rather than a container.
- **Accessibility:** Every icon link carries a descriptive accessible label.

### Dividers and Metadata

- **Divider:** A 1px Graphite Umber line that fades to transparent at both ends.
- **Metadata:** Centered, `0.8rem` tertiary text for page-update information.

### Wireframe 404

- **Style:** An unfilled graphite wireframe with rounded line ends and point vertices.
- **Motion:** Slow continuous spatial rotation, with a static rendered state when reduced motion is requested.

## Do's and Don'ts

### Do:

- **Do** keep Archive Paper continuous across the page and use Paper Wash only for gentle grouping.
- **Do** reserve Terracotta Signal for links and other small paths outward.
- **Do** build hierarchy with Vollkorn's scale, weight, and whitespace.
- **Do** preserve the circular portrait, compact profile-link row, and 1000px two-column transition.
- **Do** keep decoration structural: hairlines, rules, outlines, and the occasional geometric illustration.

### Don't:

- **Don't** replace the warm paper-and-terracotta palette with a corporate or institutional color system.
- **Don't** add opaque white cards, soft floating shadows, glass effects, or dashboard-like surface stacks.
- **Don't** introduce an unrelated sans-serif or display face without deliberately redesigning the identity.
- **Don't** turn Terracotta Signal into a large background treatment or ubiquitous accent.
- **Don't** make the page formal, promotional, or dense at the expense of its concise personal voice.
