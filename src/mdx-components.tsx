import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Global MDX element map. MDX is used only by the /learn guides, so the prose
 * typography itself is handled by the `.prose-learn` scope in globals.css —
 * this file only adds behaviour the markup can't express on its own:
 *
 *   - Links: internal (`/…`, `#…`) route through next/link; external links
 *     open in a new tab with safe rel attributes and a subtle marker.
 *   - <Aside>: a callout box authors can drop into an article for caveats and
 *     "talk to a clinician" framing, matching the docs site's tone.
 */

function SmartLink({
  href = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

export function Aside({
  type = "note",
  title,
  children,
}: {
  type?: "note" | "caution";
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className={`learn-aside learn-aside--${type}`} role="note">
      {title ? <p className="learn-aside__title">{title}</p> : null}
      {children}
    </aside>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: SmartLink,
    Aside,
    ...components,
  };
}
