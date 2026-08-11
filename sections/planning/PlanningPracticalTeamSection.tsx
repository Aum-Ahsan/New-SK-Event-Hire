import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningPracticalTeamSection() {
  const { practicalTeam } = planningData;
  return (
    <section className="planning-section practical-team">
      <div>
        <span>{practicalTeam.eyebrow}</span>
        <h2>{practicalTeam.title}</h2>
        <p>{practicalTeam.description}</p>
        <ul>
          {practicalTeam.bullets.map((b) => (
            <li key={b}>✓ {b}</li>
          ))}
        </ul>
        <a href={practicalTeam.link.href}>{practicalTeam.link.text}</a>
      </div>
      <div className="planning-collage">
        {practicalTeam.images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </section>
  );
}
