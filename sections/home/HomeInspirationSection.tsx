import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeInspirationSection() {
  const { inspirationHeading, inspiration } = homeData;
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{inspirationHeading.eyebrow}</div>
          <h2>{inspirationHeading.title}</h2>
          <p>{inspirationHeading.description}</p>
        </div>
        <a href={inspirationHeading.link.href}>{inspirationHeading.link.text}</a>
      </div>
      <div className="inspiration-grid">
        {inspiration.map((item, i) => (
          <a
            key={i}
            className={item.main ? "inspiration-main" : ""}
            href="/gallery"
          >
            <img src={item.image} alt={item.alt} />
            <span>{item.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
