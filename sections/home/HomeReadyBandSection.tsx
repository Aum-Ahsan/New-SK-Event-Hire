import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeReadyBandSection() {
  const { readyBand } = homeData;
  return (
    <section className="ready-band">
      <img src={readyBand.leftImage} alt={readyBand.leftImageAlt} />
      <div className="ready-copy">
        <div className="eyebrow">{readyBand.eyebrow}</div>
        <h2>{readyBand.title}</h2>
        <p>{readyBand.description}</p>
        <div>
          {readyBand.actions.map((act, i) => (
            <a key={i} href={act.href} className={act.primary ? "public-cta" : ""}>
              {act.text}
            </a>
          ))}
        </div>
      </div>
      <img src={readyBand.rightImage} alt={readyBand.rightImageAlt} />
    </section>
  );
}
