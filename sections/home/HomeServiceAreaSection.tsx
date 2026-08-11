import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeServiceAreaSection() {
  const { serviceArea } = homeData;
  return (
    <section className="service-area-home">
      <img src={serviceArea.image} alt={serviceArea.imageAlt} />
      <div>
        <div className="eyebrow">{serviceArea.eyebrow}</div>
        <h2>{serviceArea.title}</h2>
        <p>{serviceArea.description}</p>
        <div className="area-search">
          <input placeholder={serviceArea.inputPlaceholder} />
          <a href={serviceArea.buttonHref}>{serviceArea.buttonText}</a>
        </div>
        <small>{serviceArea.note}</small>
      </div>
    </section>
  );
}
