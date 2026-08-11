import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningRememberedSection() {
  const { remembered } = planningData;
  return (
    <section className="planning-section remembered">
      <div>
        <span>{remembered.eyebrow}</span>
        <h2>{remembered.title}</h2>
        <p>{remembered.quote}</p>
        <b>{remembered.author}</b>
        <a href={remembered.link.href}>{remembered.link.text}</a>
      </div>
      <img src={remembered.image} alt={remembered.imageAlt} />
    </section>
  );
}
