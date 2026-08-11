import React from "react";
import collectionsData from "@/data/pages/collections.json";

interface CollectionsGridSectionProps {
  cards: [string, string, string, string][];
  type?: string;
  hireProducts: any[];
}

export function CollectionsGridSection({ cards, type, hireProducts }: CollectionsGridSectionProps) {
  const { grid } = collectionsData as any;
  const exploreText = grid?.exploreText || "Explore collection";
  const viewText = grid?.viewText || "View collection →";
  const weddingEyebrow = grid?.weddingEyebrow || "Wedding favourites";
  const weddingTitle = grid?.weddingTitle || "Build a coordinated look";

  return (
    <>
      <section className="public-section">
        <div className="collection-grid">
          {cards.map((c) => (
            <a href={c[3]} key={c[0]}>
              <img src={c[2]} alt={c[0]} />
              <span>
                <small>{exploreText}</small>
                <h2>{c[0]}</h2>
                <p>{c[1]}</p>
                <b>{viewText}</b>
              </span>
            </a>
          ))}
        </div>
      </section>
      {type && (
        <section className="catalogue-section">
          <div className="section-intro">
            <div>
              <div className="eyebrow">{weddingEyebrow}</div>
              <h2>{weddingTitle}</h2>
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
    </>
  );
}
