import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningPricingSupportSection() {
  const { pricingSupport } = planningData;
  return (
    <section className="planning-section pricing-support">
      <header>
        <span>{pricingSupport.eyebrow}</span>
        <h2>{pricingSupport.title}</h2>
        <p>{pricingSupport.description}</p>
      </header>
      <div>
        {pricingSupport.cards.map((card, i) => (
          <article key={i}>
            <span>{card.badge}</span>
            <h3>{card.price}</h3>
            <p>{card.description}</p>
            <ul>
              {card.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a href={card.link.href}>{card.link.text}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
