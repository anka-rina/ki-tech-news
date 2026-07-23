#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inlineMarkdown(value) {
  let output = escapeHtml(value);
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/_([^_]+)_/g, "<em>$1</em>");
  return output;
}

function parseMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const title = lines.find((line) => line.startsWith("# "))?.slice(2) ?? "GPT KI- & Tech-Briefing";
  const metadata = lines.filter((line) => /^\*\*(Erstellt von|Ausgabe|Stand):\*\*/.test(line));
  const h2s = lines
    .filter((line) => line.startsWith("## "))
    .map((line) => ({ text: line.slice(3), id: slugify(line.slice(3)) }));

  const output = [];
  let paragraph = [];
  let listType = null;
  let inStory = false;
  let inSection = false;

  const closeParagraph = () => {
    if (!paragraph.length) return;
    output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (!listType) return;
    output.push(`</${listType}>`);
    listType = null;
  };
  const closeStory = () => {
    if (!inStory) return;
    closeParagraph();
    closeList();
    output.push("</article>");
    inStory = false;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("# ") || /^\*\*(Erstellt von|Ausgabe|Stand):\*\*/.test(line)) {
      closeParagraph();
      continue;
    }
    if (line.startsWith("## ")) {
      closeStory();
      closeParagraph();
      closeList();
      if (inSection) output.push("</section>");
      const text = line.slice(3);
      output.push(`<section class="reading-section" id="${slugify(text)}"><h2>${inlineMarkdown(text)}</h2>`);
      inSection = true;
      continue;
    }
    if (line.startsWith("### ")) {
      closeStory();
      closeParagraph();
      closeList();
      const text = line.slice(4);
      const isNumberedStory = /^\d+\.\s/.test(text);
      if (isNumberedStory) {
        const number = text.match(/^\d+/)?.[0] ?? "";
        const heading = text.replace(/^\d+\.\s*/, "");
        output.push(`<article class="story"><div class="story-number">${number}</div><h3>${inlineMarkdown(heading)}</h3>`);
        inStory = true;
      } else {
        output.push(`<h3>${inlineMarkdown(text)}</h3>`);
      }
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      closeParagraph();
      if (listType !== "ul") {
        closeList();
        output.push("<ul>");
        listType = "ul";
      }
      output.push(`<li>${inlineMarkdown(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      closeParagraph();
      if (listType !== "ol") {
        closeList();
        output.push("<ol>");
        listType = "ol";
      }
      output.push(`<li>${inlineMarkdown(line.replace(/^\d+\.\s+/, ""))}</li>`);
      continue;
    }
    if (line.startsWith("> ")) {
      closeParagraph();
      closeList();
      output.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
      continue;
    }
    closeList();
    paragraph.push(line);
  }
  closeStory();
  closeParagraph();
  closeList();
  if (inSection) output.push("</section>");

  return { title, metadata, h2s, content: output.join("\n") };
}

function htmlDocument({ title, metadata, h2s, content, sourceName }) {
  const metaHtml = metadata.map((line) => `<span>${inlineMarkdown(line.replace(/  $/, ""))}</span>`).join("");
  const toc = h2s.map(({ text, id }) => `<a href="#${id}">${inlineMarkdown(text)}</a>`).join("");
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<title>${escapeHtml(title)}</title>
<style>
:root{--bg:#090b12;--surface:#111522;--surface2:#161b2a;--line:#293149;--ink:#f4f1fb;--body:#d7d6e1;--muted:#9696aa;--purple:#b69cff;--purple2:#7e67d9;--cyan:#70d9d2;--warm:#ffcf8a;--measure:760px}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:radial-gradient(900px 480px at 75% -10%,rgba(126,103,217,.24),transparent 60%),linear-gradient(180deg,#0c0f19 0,var(--bg) 35%);color:var(--body);font:17px/1.74 ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;text-rendering:optimizeLegibility}
a{color:#c9bbff;text-decoration-thickness:1px;text-underline-offset:3px}
a:hover{color:#fff}
.topbar{max-width:1120px;margin:auto;padding:20px 24px;display:flex;justify-content:space-between;gap:16px;align-items:center}
.brand{color:var(--purple);font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.back{font-size:13px;color:var(--muted);text-decoration:none}
.hero{max-width:1120px;margin:22px auto 0;padding:56px clamp(24px,6vw,74px);border:1px solid var(--line);border-radius:28px;background:linear-gradient(135deg,rgba(182,156,255,.13),rgba(17,21,34,.93) 48%,rgba(112,217,210,.06));box-shadow:0 28px 90px rgba(0,0,0,.28)}
.kicker{color:var(--cyan);font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin-bottom:18px}
h1{max-width:850px;margin:0;color:var(--ink);font:800 clamp(34px,6vw,66px)/1.02 ui-serif,Georgia,serif;letter-spacing:-.045em}
.meta{display:flex;flex-wrap:wrap;gap:8px 24px;margin-top:28px;color:var(--muted);font-size:13px}
.layout{max-width:1120px;margin:0 auto;padding:50px 24px 100px;display:grid;grid-template-columns:220px minmax(0,var(--measure));gap:64px;align-items:start}
.toc{position:sticky;top:22px;border-left:1px solid var(--line);padding-left:18px}
.toc-label{color:var(--muted);font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.13em;margin-bottom:12px}
.toc a{display:block;padding:7px 0;color:#aaa9bb;text-decoration:none;font-size:13px;line-height:1.35}
.toc a:hover{color:var(--ink)}
main{min-width:0}
.reading-section{margin:0 0 70px;scroll-margin-top:24px}
.reading-section>h2{color:var(--ink);font:750 clamp(25px,4vw,36px)/1.14 ui-serif,Georgia,serif;letter-spacing:-.025em;margin:0 0 26px;padding-bottom:14px;border-bottom:1px solid var(--line)}
p{margin:0 0 1.25em}
strong{color:#f5f0ff;font-weight:750}
em{color:#b8b6c6}
code{background:#090c14;border:1px solid var(--line);padding:.12em .42em;border-radius:6px;color:#d5c9ff;font-size:.88em}
.story{position:relative;margin:0 0 24px;padding:30px 32px;background:linear-gradient(145deg,var(--surface2),var(--surface));border:1px solid var(--line);border-radius:20px;box-shadow:0 14px 42px rgba(0,0,0,.16)}
.story-number{position:absolute;right:24px;top:20px;color:rgba(182,156,255,.18);font:800 54px/1 ui-serif,Georgia,serif}
.story h3{position:relative;color:var(--ink);font:750 23px/1.23 ui-serif,Georgia,serif;letter-spacing:-.018em;margin:0 48px 22px 0}
h3{color:var(--warm);font-size:20px;margin:34px 0 14px}
ul,ol{padding-left:1.3em;margin:0 0 1.5em}
li{padding-left:.35em;margin:.5em 0}
li::marker{color:var(--purple)}
blockquote{margin:24px 0;padding:16px 20px;border-left:3px solid var(--purple);background:rgba(182,156,255,.07);border-radius:0 12px 12px 0}
#kurzlage{font-size:19px;line-height:1.78}
#quellenverzeichnis li{font-size:15px}
.footer{max-width:var(--measure);margin:0 auto 60px;padding:0 24px;color:var(--muted);font-size:12px;text-align:center}
@media(max-width:880px){.hero{margin:12px 16px 0;padding:42px 28px;border-radius:22px}.layout{display:block;padding-top:30px}.toc{position:relative;top:0;border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-bottom:48px}.toc a{display:inline-block;margin:0 16px 6px 0}.story{padding:25px 22px}.story h3{font-size:21px}}
@media(max-width:520px){body{font-size:16px}.topbar{padding:16px}.hero{padding:34px 22px}.layout{padding:34px 16px 70px}.story{margin-left:-4px;margin-right:-4px;padding:24px 18px;border-radius:16px}.story-number{font-size:42px}.reading-section{margin-bottom:54px}}
@media print{body{background:#fff;color:#222}.topbar,.toc{display:none}.hero{border:0;box-shadow:none;padding:20px 0}.hero h1,.reading-section>h2,.story h3,strong{color:#111}.layout{display:block;padding:20px 0}.story{break-inside:avoid;background:#fff;box-shadow:none}.footer{color:#555}}
</style>
</head>
<body>
<nav class="topbar"><a class="brand" href="../../../index.html">KI Tech News</a><a class="back" href="../../../index.html">← Alle Briefings</a></nav>
<header class="hero">
  <div class="kicker">GPT · Daily Intelligence</div>
  <h1>${escapeHtml(title.replace(/^GPT KI- & Tech-Briefing – /, ""))}<br>KI- &amp; Tech-Briefing</h1>
  <div class="meta">${metaHtml}</div>
</header>
<div class="layout">
  <aside class="toc" aria-label="Inhalt"><div class="toc-label">Inhalt</div>${toc}</aside>
  <main>${content}</main>
</div>
<footer class="footer">Aus ${escapeHtml(sourceName)} gerendert · Inhalte sind Analyse, keine Anlage-, Rechts- oder Steuerberatung.</footer>
</body>
</html>
`;
}

async function main() {
  const input = process.argv[2];
  if (!input) throw new Error("Aufruf: node scripts/render_gpt_briefing.mjs <briefing.md> [ausgabe.html]");
  if (!input.endsWith(".md")) throw new Error("Eingabe muss eine Markdown-Datei sein.");
  const output = process.argv[3] || input.replace(/\.md$/, ".html");
  const markdown = await readFile(input, "utf8");
  const parsed = parseMarkdown(markdown);
  await writeFile(output, htmlDocument({ ...parsed, sourceName: path.basename(input) }), "utf8");
  console.log(`HTML erstellt: ${output}`);
}

main().catch((error) => {
  console.error(`Fehler: ${error.message}`);
  process.exitCode = 1;
});
