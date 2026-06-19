import { LEARN_ARTICLES, LEARN_PUBLISHED, articleDates } from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import { SITE_ORIGIN, learnArticlePath } from "@/content/learn/locales";

// Static RSS feed for the English /learn guides (emitted at build time).
export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const meta = getMeta("en");
  const self = `${SITE_ORIGIN}/learn/feed.xml`;
  const items = LEARN_ARTICLES.map((a) => {
    const am = meta.articles[a.slug];
    const url = `${SITE_ORIGIN}${learnArticlePath("en", a.slug)}`;
    const pub = new Date(`${articleDates(a).published}T00:00:00Z`).toUTCString();
    return `    <item>
      <title>${esc(am?.title ?? a.slug)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(am?.description ?? "")}</description>
      <pubDate>${pub}</pubDate>
    </item>`;
  }).join("\n");

  const lastBuild = new Date(`${LEARN_PUBLISHED}T00:00:00Z`).toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>HealthLog Learn</title>
    <link>${SITE_ORIGIN}/learn</link>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
    <description>${esc(meta.ui.hubIntro)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
