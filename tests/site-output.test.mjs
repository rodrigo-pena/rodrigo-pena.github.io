import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const homepage = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const stylesheet = await readFile(new URL("../dist/assets/main.css", import.meta.url), "utf8");

function countMatches(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function relativeLuminance(hexColor) {
  const channels = hexColor
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(firstColor, secondColor) {
  const firstLuminance = relativeLuminance(firstColor);
  const secondLuminance = relativeLuminance(secondColor);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

test("presents the confirmed current role and interdisciplinary positioning", () => {
  assert.match(homepage, /computer science researcher and data scientist/);
  assert.match(homepage, /interdisciplinary collaborations/);
  assert.doesNotMatch(homepage, /Senior Data Scientist/);
  assert.doesNotMatch(homepage, /Page updated on April 10, 2025/);
});

test("uses one page heading followed by semantic section headings", () => {
  assert.equal(countMatches(homepage, /<h1(?:\s|>)/g), 1);
  assert.match(homepage, /<h2[^>]*>Current work<\/h2>/);
  assert.match(homepage, /<h2[^>]*>About me<\/h2>/);
  assert.match(homepage, /<h2[^>]*>Links &amp; contact<\/h2>/);
});

test("makes primary and secondary destinations visible and descriptive", () => {
  assert.match(homepage, /href="https:\/\/ceda\.unibas\.ch\/"[^>]*>Projects<\/a>/);
  assert.match(homepage, />Publications<\/a>/);
  assert.match(homepage, />Code<\/a>/);
  assert.match(homepage, />Email<\/a>/);
  assert.match(homepage, />GitHub<\/a>/);
  assert.match(homepage, />ORCID<\/a>/);
  assert.match(homepage, />Zenodo<\/a>/);
  assert.match(homepage, />LinkedIn<\/a>/);
  assert.match(homepage, />Mastodon<\/a>/);
  assert.doesNotMatch(homepage, />here<\/a>/i);
  assert.doesNotMatch(homepage, /icons below/i);
  assert.doesNotMatch(homepage, /fontawesome|academicons/i);
});

test("publishes useful professional search and social metadata", () => {
  assert.match(homepage, /<title>Rodrigo C\. G\. Pena • Computer Science Researcher &amp; Data Scientist<\/title>/);
  assert.match(homepage, /<meta property="og:title" content="Rodrigo C\. G\. Pena • Computer Science Researcher &amp; Data Scientist">/);
  assert.match(homepage, /<meta property="og:site_name" content="Rodrigo C\. G\. Pena">/);
  assert.doesNotMatch(homepage, /<meta[^>]+content="\(ʁoˈdɾiɡu/);
});

test("keeps normal-size link text above WCAG AA contrast", () => {
  const linkColor = stylesheet.match(/a\s*\{[^}]*color:\s*(#[0-9A-F]{6})/i)?.[1];

  assert.ok(linkColor, "expected a global hexadecimal link color");
  assert.ok(
    contrastRatio(linkColor, "#F1EED9") >= 4.5,
    `${linkColor} must reach 4.5:1 against Archive Paper`
  );
  assert.match(stylesheet, /a\s*\{[^}]*text-decoration:\s*underline/s);
});

test("gives profile navigation links a 44px minimum target", () => {
  const profileLinkRule = stylesheet.match(
    /\.profile-link-list a\s*\{(?<declarations>[^}]*)\}/
  )?.groups?.declarations;

  assert.ok(profileLinkRule, "expected a profile-link rule");
  assert.match(profileLinkRule, /min-width:\s*44px/);
  assert.match(profileLinkRule, /min-height:\s*44px/);
});
