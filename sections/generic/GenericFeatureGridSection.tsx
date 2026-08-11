import React from "react";

interface GenericFeatureGridSectionProps {
  items: [string, string][];
}

export function GenericFeatureGridSection({ items }: GenericFeatureGridSectionProps) {
  return (
    <section className="public-section">
      <div className="feature-grid">
        {items.map((x, i) => (
          <article className="feature-card" key={x[0]}>
            <i>{String(i + 1).padStart(2, "0")}</i>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
            <a href="/contact">Ask about this →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
