import React from "react";
import sitemapData from "@/data/pages/sitemap.json";

export function SitemapHeroSection() {
  const { hero } = sitemapData;
  return (
    <section className="simple-hero">
      <div className="eyebrow">{hero.eyebrow}</div>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
    </section>
  );
}
