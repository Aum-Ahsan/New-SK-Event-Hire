import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningHeroSection() {
  const { hero } = planningData;
  return (
    <section className="planning-hero">
      <img src={hero.image} alt={hero.imageAlt} />
      <div>
        <span>{hero.eyebrow}</span>
        <h1>
          Your event,
          <br />
          thoughtfully planned.
        </h1>
        <p>{hero.description}</p>
        <div>
          <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
          <a href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
        </div>
        <small>{hero.badge}</small>
      </div>
    </section>
  );
}
