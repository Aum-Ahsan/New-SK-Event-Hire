import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeCategoriesSection() {
  const { categoriesHeading, categoriesList } = homeData as any;
  const items = categoriesList || [
    { name: "Chairs & Seating", image: "/images/chairs-product.png", href: "/products" },
    { name: "Tables", image: "/images/tables-product.png", href: "/products" },
    { name: "Marquees & Tents", image: "/images/marquee-product.png", href: "/products" },
    { name: "Heating & Cooling", image: "/images/lighting-product.png", href: "/products" },
    { name: "Lighting & Sound", image: "/images/lighting-product.png", href: "/products" },
    { name: "Tableware & Linen", image: "/images/tableware-product.png", href: "/products" },
    { name: "Catering Equipment", image: "/images/flooring-product.png", href: "/products" },
    { name: "Décor & Games", image: "/images/decor-product.png", href: "/products" }
  ];

  const row1 = items.slice(0, 4);
  const row2 = items.slice(4);

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
        <div className="category-scroll-row">
          {row1.map((x: any) => (
            <a href={x.href} key={x.name}>
              <img src={x.image} alt={x.name} />
              <span>
                {x.name} <b>→</b>
              </span>
            </a>
          ))}
        </div>
        {row2.length > 0 && (
          <div className="category-scroll-row">
            {row2.map((x: any) => (
              <a href={x.href} key={x.name}>
                <img src={x.image} alt={x.name} />
                <span>
                  {x.name} <b>→</b>
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
