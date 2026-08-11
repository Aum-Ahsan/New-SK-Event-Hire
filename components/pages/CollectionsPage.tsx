import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";

interface CollectionsPageProps {
  type?: string;
  hireProducts: any[];
}

export function CollectionsPage({ type, hireProducts }: CollectionsPageProps) {
  const title = type === "weddings" ? "Wedding hire collection" : "Shop by event";
  const cards = [
    ["Weddings", "Ceremony, reception, dining and dance-floor essentials.", "/images/hero-event.png", "/collection-weddings"],
    ["Birthdays & parties", "Flexible furniture, bar, lighting and styling pieces.", "/images/lounge-product.png", "/packages"],
    ["Corporate events", "Presentation, dining, networking and branded-event equipment.", "/images/tables-product.png", "/packages"],
    ["Outdoor events", "Marquees, flooring, weather walls, lighting and heaters.", "/images/marquee-product.png", "/packages"],
  ];

  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="simple-hero">
          <div className="eyebrow">Curated event collections</div>
          <h1>{title}</h1>
          <p>
            {type
              ? "Build a coordinated wedding from ceremony seating to reception dining, lighting and late-night lounge areas."
              : "Browse coordinated products and editable packages selected around the type of event you are planning."}
          </p>
        </section>
        <section className="public-section">
          <div className="collection-grid">
            {cards.map((c) => (
              <a href={c[3]} key={c[0]}>
                <img src={c[2]} alt={c[0]} />
                <span>
                  <small>Explore collection</small>
                  <h2>{c[0]}</h2>
                  <p>{c[1]}</p>
                  <b>View collection →</b>
                </span>
              </a>
            ))}
          </div>
        </section>
        {type && (
          <section className="catalogue-section">
            <div className="section-intro">
              <div>
                <div className="eyebrow">Wedding favourites</div>
                <h2>Build a coordinated look</h2>
              </div>
            </div>
            <div className="product-list-grid">
              {hireProducts.slice(0, 6).map((p) => (
                <article className="product-list-card" key={p.slug}>
                  <a href={`/product-${p.slug}`}>
                    <img src={p.image} alt={p.name} />
                  </a>
                  <div>
                    <small>{p.category}</small>
                    <h3>{p.name}</h3>
                    <p>{p.summary}</p>
                    <footer>
                      <b>{p.price}</b>
                      <a href={`/product-${p.slug}`}>View →</a>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}
