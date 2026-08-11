import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeHeroSection() {
  const { hero } = homeData;
  return (
    <section className="home-hero">
      <img src={hero.image} alt={hero.imageAlt} />
      <div className="home-hero-copy">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <div className="hero-actions">
          <a className="public-cta" href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
          <a className="hero-light" href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
        </div>
      </div>
    </section>
  );
}
