import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeGuidanceSection() {
  const { guidance } = homeData;
  return (
    <section className="help-split">
      <div>
        <div className="eyebrow">{guidance.eyebrow}</div>
        <h2>{guidance.title}</h2>
        <p>{guidance.description}</p>
        {guidance.points && guidance.points.length > 0 && (
          <div className="guidance-points">
            {guidance.points.map((pt, i) => (
              <span key={i}>
                <b>✓</b> {pt}
              </span>
            ))}
          </div>
        )}
        <div className="guidance-actions" style={{ marginTop: "24px" }}>
          <a href={guidance.teamLink.href}>{guidance.teamLink.text}</a>
        </div>
      </div>
      <img src={guidance.image} alt={guidance.imageAlt} />
    </section>
  );
}
