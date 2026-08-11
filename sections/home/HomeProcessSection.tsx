import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeProcessSection() {
  const { processHeading, processSteps } = homeData;
  return (
    <section className="home-section process">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{processHeading.eyebrow}</div>
          <h2>{processHeading.title}</h2>
        </div>
      </div>
      <div>
        {processSteps.map((x) => (
          <article key={x[0]}>
            <i>{x[0]}</i>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
            <a href="/request-quote">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
