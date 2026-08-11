import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningMeetTeamSection() {
  const { meetTeam } = planningData;
  return (
    <section className="planning-section meet-team">
      <header>
        <span>{meetTeam.eyebrow}</span>
        <h2>{meetTeam.title}</h2>
      </header>
      <div>
        {meetTeam.cards.map((card, i) => (
          <article key={i}>
            <img src={card.image} alt={card.imageAlt} />
            <span>
              <b>{card.title}</b>
              <small>{card.subtitle}</small>
              <a href={card.link.href}>{card.link.text}</a>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
