import React from "react";

export function BlogArticleSection() {
  return (
    <>
      <div className="detail-back">
        <a href="/blog">← Back to planning guides</a>
      </div>
      <article className="guide-article">
        <header>
          <div>
            <span>EVENT PLANNING GUIDE</span>
            <h1>How Many Tables and Chairs Do I Need?</h1>
            <p>A practical guide to calculating event seating and table quantities without crowding the room.</p>
            <small>By SK Event Hire planning team · Updated 24 July 2026 · 8 minute read</small>
          </div>
          <img src="/images/marquee-product.png" alt="Marquee table layout example" />
        </header>
        <div className="article-layout">
          <aside>
            <b>In this guide</b>
            {["Start with your event style", "Estimate chair quantities", "Estimate table quantities", "Compare layouts", "Space and access"].map((x, i) => (
              <a href={`#guide-${i + 1}`} key={x}>
                {i + 1}. {x}
              </a>
            ))}
            <a href="/request-quote">Get planning help</a>
          </aside>
          <div className="article-copy">
            <p>You can calculate a reliable starting quantity using your confirmed guest count, event format and the way each space will be used.</p>
            <blockquote style={{ border: "none" }}>
              <b>Quick planning rule</b> Start with one chair per seated guest, then add only the furniture required by each distinct event zone.
            </blockquote>
            {["Start with your event style", "Estimate chair quantities", "Estimate table quantities", "Compare layout examples", "Space, access and confirmation"].map((x, i) => (
              <section id={`guide-${i + 1}`} key={x}>
                <h2>
                  {i + 1}. {x}
                </h2>
                <p>Plan this stage against your guest count, venue dimensions, accessible routes, service paths and the exact hire products selected.</p>
                {i === 3 && <img src="/images/marquee-product.png" alt="Example event layout" />}
              </section>
            ))}
            <a className="public-cta" href="/request-quote">
              Ask us to check your layout →
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
