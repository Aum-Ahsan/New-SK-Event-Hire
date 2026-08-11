import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningCtaSection() {
  const { cta } = planningData;
  return (
    <section className="planning-cta">
      <div>
        <span>{cta.eyebrow}</span>
        <h2>{cta.title}</h2>
      </div>
      <a href={cta.links[0].href}>{cta.links[0].text}</a>
      <a href={cta.links[1].href}>{cta.links[1].text}</a>
    </section>
  );
}
