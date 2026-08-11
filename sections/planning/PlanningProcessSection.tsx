import React from "react";
import planningData from "@/data/pages/planning.json";

export function PlanningProcessSection() {
  const { process } = planningData;
  return (
    <section className="planning-process">
      <div className="planning-section">
        <span>{process.eyebrow}</span>
        <h2>{process.title}</h2>
        <div>
          {process.steps.map((x) => (
            <article key={x[0]}>
              <i>{x[0]}</i>
              <b>{x[1]}</b>
              <p>{process.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
