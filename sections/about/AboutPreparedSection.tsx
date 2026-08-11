import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutPreparedSection() {
  const { prepared } = aboutData;
  return (
    <section className="prepared-band">
      <div>
        <span>{prepared.eyebrow}</span>
        <h2>{prepared.title}</h2>
        <img src={prepared.image} alt={prepared.imageAlt} />
      </div>
      <div className="prepared-list">
        {prepared.items.map((x) => (
          <article key={x[0]}>
            <i>✓</i>
            <b>{x[0]}</b>
            <small>{x[1]}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
