import React from "react";
import compareData from "@/data/pages/compare.json";

export function CompareHeroSection() {
  const { hero } = compareData;
  return (
    <section className="simple-hero">
      <div className="eyebrow">{hero.eyebrow}</div>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
    </section>
  );
}
