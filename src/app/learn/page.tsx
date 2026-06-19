import type { Metadata } from "next";

import { getMeta } from "@/content/learn/meta";
import {
  SITE_ORIGIN,
  hreflangMap,
  learnHubPath,
} from "@/content/learn/locales";
import { LearnHub } from "@/components/learn/learn-hub";
import { LearnShell, hubPaths } from "@/components/learn/learn-shell";

export function generateMetadata(): Metadata {
  const meta = getMeta("en");
  return {
    title: `${meta.ui.hubTitle} — Learn`,
    description: meta.ui.hubIntro,
    alternates: {
      canonical: `${SITE_ORIGIN}/learn`,
      languages: hreflangMap((l) => learnHubPath(l)),
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${meta.ui.hubTitle} | HealthLog`,
      description: meta.ui.hubIntro,
      url: `${SITE_ORIGIN}/learn`,
      type: "website",
      siteName: "HealthLog",
      locale: "en_US",
    },
  };
}

export default function LearnHubPage() {
  return (
    <LearnShell locale="en" paths={hubPaths()}>
      <LearnHub locale="en" />
    </LearnShell>
  );
}
