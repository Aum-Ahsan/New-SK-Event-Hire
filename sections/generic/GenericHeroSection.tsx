import React from "react";

interface GenericHeroSectionProps {
  p: { eyebrow: string; title: string; text: string; image: string };
}

export function GenericHeroSection({ p }: GenericHeroSectionProps) {
  return (
    <section className="image-hero">
      <img src={p.image} alt={p.title} />
      <div>
        <div className="eyebrow">{p.eyebrow}</div>
        <h1>{p.title}</h1>
        <p>{p.text}</p>
        <div className="hero-actions">
          <a className="public-cta" href="/request-quote">
            Request a quote
          </a>
          <a className="outline-cta" href="/contact">
            Talk to the team
          </a>
        </div>
      </div>
    </section>
  );
}
