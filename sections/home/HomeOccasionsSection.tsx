import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeOccasionsSection() {
  const { occasionsHeading, occasions } = homeData;
  return (
    <section className="home-section">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{occasionsHeading.eyebrow}</div>
          <h2>{occasionsHeading.title}</h2>
          <p>{occasionsHeading.description}</p>
        </div>
        <a href={occasionsHeading.link.href}>{occasionsHeading.link.text}</a>
      </div>
      <div className="occasion-grid">
        {occasions.map((x, i) => (
          <a className={i === 0 ? "occasion-main" : ""} href={x[2]} key={x[0]}>
            <img src={x[1]} alt={x[0]} />
            <span>{x[0]}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
