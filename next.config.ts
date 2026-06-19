import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  // Allow `.mdx` route segments (used by the /learn guides) alongside tsx.
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    // Turbopack serialises loader options, so remark/rehype plugins must be
    // referenced by package name (string), not as imported function objects.
    // GFM gives footnote syntax ([^1]) and tables; slug + autolink turn every
    // heading into a linkable anchor.
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [
      ["rehype-slug"],
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

export default withMDX(nextConfig);
