import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningEventsSection() {
  const { eventsHelp } = planningData;
  return (
    <section className="planning-events">
      <div className="planning-section">
        <header>
          <span>{eventsHelp.eyebrow}</span>
          <h2>{eventsHelp.title}</h2>
          <p>{eventsHelp.description}</p>
        </header>
        <div className="planning-event-grid">
          {eventsHelp.list.map((x, i) => (
            <a className={i === 0 ? "large" : ""} href="/contact" key={x[0]}>
              <img src={x[2]} alt={x[0]} />
              <span>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
                <em>Plan this event →</em>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
