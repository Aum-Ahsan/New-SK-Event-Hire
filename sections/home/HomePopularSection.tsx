import React from "react";
import homeData from "@/data/pages/home.json";

export function HomePopularSection() {
  const { popularHeading, popular } = homeData;
  return (
    <section className="home-section cool">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{popularHeading.eyebrow}</div>
          <h2>{popularHeading.title}</h2>
          <p>{popularHeading.description}</p>
        </div>
        <a href={popularHeading.link.href}>{popularHeading.link.text}</a>
      </div>
      <div className="popular-grid">
        {popular.map((x) => (
          <article key={x[0]}>
            <a href={x[4]}>
              <img src={x[3]} alt={x[0]} />
            </a>
            <div>
              <small>{x[1]}</small>
              <h3>{x[0]}</h3>
              <span>
                ★★★★★ <em>4.9</em>
              </span>
              <b>{x[2]}</b>
              <a href={x[4]}>＋</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
