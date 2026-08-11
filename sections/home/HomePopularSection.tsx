import React from "react";
import homeData from "@/data/pages/home.json";

export function HomePopularSection() {
  const { popularHeading, popularItems } = homeData as any;
  const items = popularItems || [
    { name: "White Bistro Chair", tag: "AVAILABLE", price: "From $3.50 / day", rating: "4.9 (84)", image: "/images/chairs-product.png", href: "/products" },
    { name: "1.8m Trestle Table", tag: "POPULAR", price: "From $17.00 / day", rating: "4.8 (62)", image: "/images/tables-product.png", href: "/products" },
    { name: "Mushroom Gas Heater", tag: "WINTER READY", price: "From $130 / day", rating: "4.9 (47)", image: "/images/lighting-product.png", href: "/products" },
    { name: "3m × 6m Pop-up Marquee", tag: "SETUP AVAILABLE", price: "From $390 / event", rating: "4.9 (39)", image: "/images/marquee-product.png", href: "/products" }
  ];

  return (
    <section className="home-section cool">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{popularHeading.eyebrow}</div>
          <h2>{popularHeading.title}</h2>
          <p>{popularHeading.description}</p>
        </div>
        <a href={popularHeading.link.href}>{popularHeading.link.text}</a>
      </div>
      <div className="popular-grid">
        {items.map((x: any) => (
          <article key={x.name}>
            <a href={x.href || "/products"}>
              <img src={x.image} alt={x.name} />
            </a>
            <div>
              <small style={{ display: "inline-block", background: "#e8f5e9", color: "#2e7d32", padding: "2px 6px", borderRadius: "4px", fontSize: "10px", fontWeight: "700" }}>
                {x.tag}
              </small>
              <h3>{x.name}</h3>
              <span>
                ★★★★★ <em>{x.rating || "4.9"}</em>
              </span>
              <b>{x.price}</b>
              <a href={x.href || "/products"}>♡</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
