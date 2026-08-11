import React from "react";
import contactData from "@/data/pages/contact.json";

export function ContactHeroSection() {
  const { hero } = contactData;
  return (
    <section className="contact-main-hero">
      <div>
        <span>{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
        <a href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
        <small>{hero.badge}</small>
      </div>
      <img src={hero.image} alt={hero.imageAlt} />
    </section>
  );
}
