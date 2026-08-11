import React from "react";

interface CollectionsGridSectionProps {
  cards: [string, string, string, string][];
  type?: string;
  hireProducts: any[];
}

export function CollectionsGridSection({ cards, type, hireProducts }: CollectionsGridSectionProps) {
  return (
    <>
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
    </>
  );
}
