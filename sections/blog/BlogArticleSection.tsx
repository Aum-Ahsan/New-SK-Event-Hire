import React from "react";
import blogData from "@/data/pages/blog.json";

export function BlogArticleSection() {
  const { article } = blogData as any;
  const backText = article?.backText || "← Back to planning guides";
  const categoryTag = article?.categoryTag || "EVENT PLANNING GUIDE";
  const defaultTitle = article?.defaultTitle || "How Many Tables and Chairs Do I Need?";
  const defaultSummary = article?.defaultSummary || "A practical guide to calculating event seating and table quantities without crowding the room.";
  const metaText = article?.metaText || "By SK Event Hire planning team · Updated 24 July 2026 · 8 minute read";
  const quickRule = article?.quickRule || "Quick planning rule: Start with one chair per seated guest, then add only the furniture required by each distinct event zone.";

  return (
    <>
      <div className="detail-back">
        <a href="/blog">{backText}</a>
      </div>
      <article className="guide-article">
        <header>
          <div>
            <span>{categoryTag}</span>
            <h1>{defaultTitle}</h1>
            <p>{defaultSummary}</p>
            <small>{metaText}</small>
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
              {quickRule}
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
