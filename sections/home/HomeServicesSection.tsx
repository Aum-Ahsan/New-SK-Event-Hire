import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeServicesSection() {
  const { servicesHeading, services } = homeData;
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{servicesHeading.eyebrow}</div>
          <h2>{servicesHeading.title}</h2>
          <p>{servicesHeading.description}</p>
        </div>
        <a href={servicesHeading.link.href}>{servicesHeading.link.text}</a>
      </div>
      <div className="service-grid">
        {services.map((x) => (
          <article key={x[0]}>
            <img src={x[3]} alt={x[0]} />
            <div>
              <small>EVENT HIRE SERVICE</small>
              <h3>{x[0]}</h3>
              <p>{x[1]}</p>
              <b>{x[2]}</b>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
