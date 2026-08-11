import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutTeamSection() {
  const { team } = aboutData;
  return (
    <section className="people-behind">
      <header>
        <span>{team.eyebrow}</span>
        <h2>{team.title}</h2>
        <p>{team.description}</p>
      </header>
      <div>
        {team.roles.map((x) => (
          <article key={x[0]}>
            <img src={x[2]} alt={x[0]} />
            <span>TEAM ROLE</span>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
            <a href="/contact">Meet the team →</a>
          </article>
        ))}
      </div>
      <small>{team.note}</small>
    </section>
  );
}
