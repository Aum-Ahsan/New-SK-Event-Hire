import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutFinalSection() {
  const { final } = aboutData;
  return (
    <section className="about-final">
      <img src={final.image} alt={final.imageAlt} />
      <div>
        <span>{final.eyebrow}</span>
        <h2>{final.title}</h2>
        <p>{final.description}</p>
        <a href={final.primaryCta.href}>{final.primaryCta.text}</a>
        <a href={final.secondaryCta.href}>{final.secondaryCta.text}</a>
      </div>
    </section>
  );
}
