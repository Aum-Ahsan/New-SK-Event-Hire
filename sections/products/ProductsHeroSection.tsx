import React from "react";
import productsData from "@/data/pages/products.json";

export function ProductsHeroSection() {
  const { hero } = productsData;
  return (
    <section className="catalogue-hero">
      <img src={hero.image} alt={hero.imageAlt} />
      <div>
        <div className="product-crumb">
          <a href="/">Home</a>
          <span>›</span>Hire Products
        </div>
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
      </div>
    </section>
  );
}
