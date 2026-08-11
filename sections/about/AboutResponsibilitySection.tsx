import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutResponsibilitySection() {
  const { responsibility } = aboutData;
  return (
    <section className="hire-care">
      <div>
        <span>{responsibility.eyebrow}</span>
        <h2>{responsibility.title}</h2>
        <p>{responsibility.description}</p>
        <div>
          {responsibility.items.map((x) => (
            <article key={x[0]}>
              <b>✓ {x[0]}</b>
              <small>{x[1]}</small>
            </article>
          ))}
        </div>
        <blockquote>{responsibility.quote}</blockquote>
      </div>
      <img src={responsibility.image} alt={responsibility.imageAlt} />
    </section>
  );
}
