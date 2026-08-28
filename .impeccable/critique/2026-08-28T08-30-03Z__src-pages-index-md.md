---
target: homepage
total_score: 18
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-28T08-30-03Z
slug: src-pages-index-md
---

Method: dual-agent (A: /root/critique_design_review · B: /root/critique_detector_evidence)

## Design Health Score

| #         | Heuristic                       | Score     | Key Issue                                                                                               |
| --------- | ------------------------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| 1         | Visibility of System Status     | 4         | Static links use clear native browser states; no hidden operation needs progress feedback.              |
| 2         | Match System / Real World       | 2         | Natural voice, but "Latest" presents an obsolete role and omits the current interdisciplinary position. |
| 3         | User Control and Freedom        | 4         | Standard anchors create no trapped state and preserve normal browser navigation.                        |
| 4         | Consistency and Standards       | 3         | Visually coherent, but three `h1` elements and generic "here" links break content conventions.          |
| 5         | Error Prevention                | n/a       | No form, destructive action, or consequential in-page input exists.                                     |
| 6         | Recognition Rather Than Recall  | 2         | Eight icon-only destinations and two "here" links force visitors to recognize brands or infer targets.  |
| 7         | Flexibility and Efficiency      | n/a       | This landing page has no repeatable task that needs accelerators.                                       |
| 8         | Aesthetic and Minimalist Design | 3         | Strong restraint; breakpoint extremes weaken reading width and composition.                             |
| 9         | Error Recovery                  | n/a       | The page has no transactional or recoverable in-page error state.                                       |
| 10        | Help and Documentation          | n/a       | The landing-page task should be self-explanatory; separate help would not improve it.                   |
| **Total** |                                 | **18/24** | **Good (75%)**                                                                                          |

## Design Specificity Verdict

**LLM assessment:** Specificity is **3/4**. The portrait, pronunciation, Archive Paper canvas, Vollkorn typography, graphite line work, and restrained Terracotta Signal feel authored for Rodrigo and avoid corporate academic-site clichés. The weakness is that the portrait carries most of the specificity. The right column could belong to almost any academic, and "The Interdisciplinary Field Note" stops at a pale panel with a left rule instead of surfacing current questions, collaboration themes, or deliberately curated paths through the work.

**Deterministic scan:** The mandatory source scan returned **0 findings** (`[]`, exit 0) for `src/pages/index.md`. The injected rendered detector found exactly **one warning** at both desktop and mobile: `cream-palette` on the `#F1EED9` body background, mapped to `src/styles/main.scss:3,13`. This is a contextual false positive: Archive Paper and the continuous warm canvas are explicit, user-approved design commitments. The useful warning is narrower—other details must stay specific enough that the page reads as a field note, not generic tasteful beige. The browser evidence independently confirmed the stale role and April 10, 2025 update date that the qualitative review identified.

**Visual overlays:** Injection succeeded in isolated headless Chromium and produced one overlay in desktop and mobile. No native in-app browser presentation API was available, so there is **no reliable user-visible `[Human]` tab**. The evidence came from matching headless DOM results, console output, and captured screenshots; both critique-only servers were stopped.

## Overall Impression

The homepage has a warm, memorable identity and a remarkably calm composition for a small personal site. Its single biggest opportunity is to make the current interdisciplinary role and the three most useful onward routes unmistakable in the first viewport. Right now the page looks more current and intentional than its facts and navigation actually are.

## What's Working

1. **A humane identity:** The portrait, pronunciation, warm palette, and serif voice feel personal without becoming casual or ornamental.
2. **Restraint supports trust:** Flat paper surfaces, sparse accent usage, and generous whitespace fit an academic collaborator's landing page and avoid marketing-page theatrics.
3. **Sound interaction foundations:** Native anchors, logical tab order, accessible names on all icon links, visible browser focus, and overflow-safe layouts provide a solid base.

## Cognitive Load

The page has **moderate cognitive load**: grouping and the broad reading hierarchy work, but three checklist items fail—chunking, minimal choices, and recognition. The profile row is the clearest overload point: it presents **eight simultaneous icon-only options**, exceeding the four-choice threshold without visible categories or priority. The two generic "here" links add recall work because visitors must read surrounding sentences to know their destinations.

## Emotional Journey

1. **Arrival:** Warm, distinctive, and personal; the portrait immediately lowers formality.
2. **Orientation:** The name and pronunciation establish identity, but "Latest" delivers obsolete information and does not explain the interdisciplinary role.
3. **Connection:** Brasília, the Rhine, EPFL, and the doctoral topic build credible human context.
4. **Decision:** The experience turns into brand-glyph decoding just when a visitor needs a clear next step.
5. **Departure:** The 2025 update date and old title create doubt about whether the profiles and contact details are current.

## Priority Issues

### 1. [P1] The first professional fact is stale

- **Why it matters:** The page's primary promise is rapid, trustworthy orientation, but `src/pages/index.md:10` says "Senior Data Scientist at CeDA" while `PRODUCT.md` records "Team Lead Scientific Support at CeDA & sciCORE, University of Basel." The interdisciplinary researcher/data-scientist positioning is also absent.
- **Fix:** Replace the first sentence with the confirmed role and collaboration focus, rename "Latest" to a durable label such as "Current work" or "What I do," and make the update metadata truthful or automatic.
- **Suggested command:** `/impeccable clarify`

### 2. [P1] Links fail contrast and semantic clarity

- **Why it matters:** Terracotta Signal is approximately 3.62:1 on Archive Paper and 3.76:1 on the panel wash, below WCAG AA for normal text. Links rely on color alone until hover. The rendered document also contains three `h1` elements: the name, "Latest," and "About me."
- **Fix:** Darken the link tone or add a persistent non-color affordance such as an underline, keep the name as the sole `h1`, and demote content sections to `h2`.
- **Suggested command:** `/impeccable audit`

### 3. [P2] Link aggregation is compact but opaque

- **Why it matters:** Eight adjacent icon-only profile choices require brand recognition and give every destination equal weight. Sighted visitors cannot see the accessible labels, while two "here" links conceal whether they open a thesis or genealogy PDF.
- **Fix:** Promote three primary paths—such as publications, code, and email—with visible names; group or demote secondary profiles; replace "here" with descriptive link text.
- **Suggested command:** `/impeccable distill`

### 4. [P2] The responsive breakpoint produces opposite readability failures

- **Why it matters:** At 999px the prose column grows to roughly 919px, producing long lines; at 1000px the new 40/50 split makes the name wrap awkwardly. At 320px, fixed 2.5rem margins consume 25% of the viewport and leave a 240px reading column.
- **Fix:** Add a readable max-width to stacked prose, use fluid narrow-screen gutters, and activate the two-column layout only when both columns have adequate intrinsic width.
- **Suggested command:** `/impeccable adapt`

### 5. [P2] Search and social previews hide the useful context

- **Why it matters:** The default meta description and Open Graph title/site name emphasize the IPA pronunciation, while the OG description is only "Personal Website." Shared links do not reveal the current role, institution, discipline, or reason to visit.
- **Fix:** Use Rodrigo's name for the title/site name and a concise current-positioning sentence for meta and Open Graph descriptions; keep the pronunciation on the visible page.
- **Suggested command:** `/impeccable clarify`

## Persona Red Flags

**Jordan (Confused First-Timer):** The first factual statement is wrong, "Latest" is vague, eight profile glyphs have no visible names, and "here" links conceal their destinations. Jordan cannot confidently decide where to go next within five seconds.

**Riley (Deliberate Stress Tester):** Comparing the current-role claim, the April 2025 update date, and linked external profiles exposes a trust-breaking contradiction. Riley also finds semantic inconsistency in three top-level headings and a legacy HTTP DOI link.

**Casey (Distracted Mobile User):** At 320px, fixed side margins leave a narrow 240px reading column and create a long 1377px page. The primary onward choices arrive only after the biography, and slow loading can leave the externally hosted Vollkorn face or icon fonts temporarily unavailable.

## Minor Observations

- The portrait is an empty CSS-background home link; decide whether it is decorative or deserves meaningful image semantics.
- "For more information, such as list of publications…" is missing "a."
- The thesis DOI uses `http`; prefer its HTTPS form.
- The pronunciation is a strong personal detail, but visitors unfamiliar with IPA receive no plain-language or audio aid.
- Icon weights and optical sizes vary noticeably; Zenodo is much smaller than GitHub, GitLab, or LinkedIn.
- The manually maintained update date makes future staleness likely.

## Questions to Consider

1. If a visitor saw only the portrait, name, and first sentence, what specific collaboration should they know to approach Rodrigo about?
2. Are all eight profile destinations truly equal, or should the page commit visibly to three primary paths and demote the rest?
3. Should "The Interdisciplinary Field Note" remain an atmosphere, or include a small piece of real field-note content such as current collaboration themes or selected work?
