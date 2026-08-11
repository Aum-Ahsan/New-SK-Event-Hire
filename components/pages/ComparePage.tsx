import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import compareData from "@/data/pages/compare.json";

export function ComparePage({ hireProducts }: { hireProducts: any[] }) {
  const { hero, actions } = compareData;
  const ps = [hireProducts[0], hireProducts[1], hireProducts[2]];
  const rows: [string, (p: any) => string][] = [
    ["Category", (p) => p.category],
    ["From price", (p) => p.price],
    ["Dimensions", (p) => p.dimensions],
    ["Capacity", (p) => p.capacity],
    ["Finish", (p) => p.finish],
    ["Minimum hire", (p) => p.minimum],
  ];

  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="simple-hero">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </section>
        <section className="compare-wrap">
          <div className="compare-table">
            <div className="compare-head">
              <b>Compare</b>
              {ps.map((p) => (
                <article key={p.slug}>
                  <img src={p.image} alt={p.name} />
                  <small>{p.category}</small>
                  <h2>{p.name}</h2>
                  <a href={`/product-${p.slug}`}>View product →</a>
                </article>
              ))}
            </div>
            {rows.map((r) => (
              <div className="compare-row" key={r[0]}>
                <b>{r[0]}</b>
                {ps.map((p) => (
                  <span key={p.slug}>{r[1](p)}</span>
                ))}
              </div>
            ))}
          </div>
          <div className="compare-actions">
            <a className="outline-cta" href={actions.addReplaceHref}>
              {actions.addReplaceText}
            </a>
            <a className="public-cta" href={actions.requestQuoteHref}>
              {actions.requestQuoteText}
            </a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
