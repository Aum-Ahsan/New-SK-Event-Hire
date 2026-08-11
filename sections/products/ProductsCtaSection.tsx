import React from "react";
import productsData from "@/data/pages/products.json";

export function ProductsCtaSection() {
  const { cta } = productsData;
  return (
    <section className="catalogue-cta">
      <div>
        <small>{cta.eyebrow}</small>
        <h2>{cta.title}</h2>
        <p>{cta.description}</p>
      </div>
      <div>
        <a href={cta.primaryCta.href}>{cta.primaryCta.text}</a>
        <a href={cta.secondaryCta.href}>{cta.secondaryCta.text}</a>
      </div>
    </section>
  );
}
