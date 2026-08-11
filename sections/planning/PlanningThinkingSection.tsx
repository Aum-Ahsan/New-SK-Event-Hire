import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningThinkingSection() {
  const { thinking } = planningData;
  return (
    <section className="planning-thinking">
      <div className="planning-section">
        <header>
          <span>{thinking.eyebrow}</span>
          <h2>{thinking.title}</h2>
        </header>
        <div>
          {thinking.cards.map((x) => (
            <article key={x[0]}>
              <img src={x[1]} alt={x[0]} />
              <div>
                <h3>{x[0]}</h3>
                <p>{thinking.cardText}</p>
                <a href={thinking.link.href}>{thinking.link.text}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
