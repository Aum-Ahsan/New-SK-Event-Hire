import React from "react";
import homeData from "@/data/pages/home.json";
import { categories } from "@/components/common/CategoryCards";

export function HomeCategoriesSection() {
  const { categoriesHeading } = homeData;
  const startCards = categories.slice(0, 8);
  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{categoriesHeading.eyebrow}</div>
          <h2>{categoriesHeading.title}</h2>
          <p>{categoriesHeading.description}</p>
        </div>
        <a href={categoriesHeading.link.href}>{categoriesHeading.link.text}</a>
      </div>
      <div className="category-photo-grid">
        {startCards.map((x) => (
          <a href="/products" key={x[0]}>
            <img src={x[2]} alt={x[0]} />
            <span>
              {x[0]} <b>→</b>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
