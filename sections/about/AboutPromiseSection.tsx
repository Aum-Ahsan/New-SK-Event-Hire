import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutPromiseSection() {
  const { promise } = aboutData;
  return (
    <section className="about-expect">
      <header>
        <span>{promise.eyebrow}</span>
        <h2>{promise.title}</h2>
        <p>{promise.description}</p>
      </header>
      <div>
        {promise.standards.map((x, i) => (
          <article key={x[0]}>
            <i>{["✣", "▢", "▣", "◇", "♡"][i]}</i>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
