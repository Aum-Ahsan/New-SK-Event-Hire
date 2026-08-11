import React from "react";
import legalData from "@/data/pages/legal.json";

export function LegalHeroSection() {
  const { hero } = legalData;
  return (
    <section className="legal-hero">
      <span>{hero.eyebrow}</span>
      <h1>
        Policies and important
        <br />
        information
      </h1>
      <p>{hero.description}</p>
      <div>
        <a href={hero.ctaHref}>{hero.ctaText}</a>
        <a href="/contact">Contact our team</a>
      </div>
      <small>{hero.effective}</small>
    </section>
  );
}
