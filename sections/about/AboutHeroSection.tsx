import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutHeroSection() {
  const { hero } = aboutData;
  return (
    <section className="about-main-hero">
      <div>
        <span>{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <div>
          <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
          <a href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
        </div>
        <small>{hero.badge}</small>
      </div>
      <figure>
        <img src={hero.image} alt={hero.imageAlt} />
        <figcaption>
          <b>{hero.captionTitle}</b>
          <span>{hero.captionSubtitle}</span>
        </figcaption>
      </figure>
    </section>
  );
}
