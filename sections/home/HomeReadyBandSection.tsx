import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeReadyBandSection() {
  const { readyBand } = homeData as any;
  return (
    <section className="ready-band">
      <img src={readyBand?.leftImage || "/images/decor-product.png"} alt={readyBand?.leftImageAlt || "Decor"} />
      <div className="ready-copy">
        <div className="eyebrow">{readyBand?.eyebrow || "LET'S MAKE IT EASY"}</div>
        <h2>{readyBand?.title || "Ready to start planning?"}</h2>
        <p>{readyBand?.description || "Browse products, build a quote or tell our team what you have in mind."}</p>
        <div className="ready-actions">
          {readyBand?.actions ? (
            readyBand.actions.map((act: any, i: number) => (
              <a key={i} href={act.href} className="ready-btn">
                {act.text}
              </a>
            ))
          ) : (
            <>
              <a href="/products" className="ready-btn">Browse hire products</a>
              <a href="/quote" className="ready-btn">Get a quote</a>
              <a href="/contact" className="ready-btn">Talk to our team</a>
            </>
          )}
        </div>
      </div>
      <img src={readyBand?.rightImage || "/images/lighting-product.png"} alt={readyBand?.rightImageAlt || "Lighting"} />
    </section>
  );
}
