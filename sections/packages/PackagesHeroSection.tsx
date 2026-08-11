import React from "react";
import packagesData from "@/data/pages/packages.json";

export function PackagesHeroSection() {
  const { landingHero } = packagesData;
  return (
    <section className="image-hero">
      <img src={landingHero.image} alt={landingHero.imageAlt} />
      <div>
        <div className="eyebrow">{landingHero.eyebrow}</div>
        <h1>{landingHero.title}</h1>
        <p>{landingHero.description}</p>
        <a className="public-cta" href={landingHero.cta.href}>
          {landingHero.cta.text}
        </a>
      </div>
    </section>
  );
}
