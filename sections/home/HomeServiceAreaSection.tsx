import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeServiceAreaSection() {
  const { serviceArea } = homeData;
  return (
    <section className="service-area-home">
      <div style={{ position: "relative" }}>
        <img src={serviceArea.image} alt={serviceArea.imageAlt} style={{ width: "100%", height: "270px", objectFit: "cover", borderRadius: "8px", display: "block" }} />
        <span style={{ position: "absolute", bottom: "12px", left: "12px", background: "#092742", color: "#fff", padding: "6px 12px", borderRadius: "4px", fontSize: "11px", fontWeight: "700" }}>
          Melbourne delivery & pickup
        </span>
      </div>
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
