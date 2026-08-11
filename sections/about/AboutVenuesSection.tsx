import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutVenuesSection() {
  const { venues } = aboutData;
  return (
    <section className="venue-planning editorial-section">
      <div>
        <span>{venues.eyebrow}</span>
        <h2>{venues.title}</h2>
        <p>{venues.description}</p>
        <div>
          {venues.items.map((x) => (
            <article key={x[0]}>
              <b>{x[0]}</b>
              <small>{x[1]}</small>
            </article>
          ))}
        </div>
        <blockquote>{venues.quote}</blockquote>
      </div>
      <img src={venues.image} alt={venues.imageAlt} />
    </section>
  );
}
