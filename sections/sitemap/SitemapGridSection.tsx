import React from "react";
import sitemapData from "@/data/pages/sitemap.json";

interface SitemapGridSectionProps {
  groups: [string, [string, string][]][];
}

export function SitemapGridSection({ groups }: SitemapGridSectionProps) {
  const { grid } = sitemapData as any;
  const arrowText = grid?.arrowText || "→";

  return (
    <section className="sitemap-grid">
      {groups.map((g) => (
        <article key={g[0]}>
          <h2>{g[0]}</h2>
          {g[1].map((x) => (
            <a href={x[1]} key={x[0]}>
              {x[0]} <span>{arrowText}</span>
            </a>
          ))}
        </article>
      ))}
    </section>
  );
}
