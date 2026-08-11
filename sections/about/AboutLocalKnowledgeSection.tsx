import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutLocalKnowledgeSection() {
  const { localKnowledge } = aboutData;
  return (
    <section className="local-knowledge editorial-section">
      <div className="service-map real-map">
        <iframe
          title="Melbourne event hire service area"
          loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=144.55%2C-38.18%2C145.35%2C-37.55&amp;layer=mapnik&amp;marker=-37.8136%2C144.9631"
        />
        <i>SK</i>
        <span>Melbourne CBD</span>
        <span>Inner North</span>
        <span>Inner East</span>
        <span>Western suburbs</span>
        <span>Bayside</span>
      </div>
      <div>
        <span>{localKnowledge.eyebrow}</span>
        <h2>{localKnowledge.title}</h2>
        <p>{localKnowledge.description}</p>
        <ul>
          {localKnowledge.points.map((pt, i) => (
            <li key={i}>
              <b>{pt.title}</b>
              <small>{pt.subtitle}</small>
            </li>
          ))}
        </ul>
        <a href={localKnowledge.link.href}>{localKnowledge.link.text}</a>
      </div>
    </section>
  );
}
