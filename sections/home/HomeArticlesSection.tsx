import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeArticlesSection() {
  const { articlesHeading, articles } = homeData;
  return (
    <section className="home-section articles">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{articlesHeading.eyebrow}</div>
          <h2>{articlesHeading.title}</h2>
        </div>
        <a href={articlesHeading.link.href}>{articlesHeading.link.text}</a>
      </div>
      <div>
        {articles.map((x) => (
          <article key={x[0]}>
            <img src={x[1]} alt={x[0]} />
            <small>PLANNING GUIDE</small>
            <h3>{x[0]}</h3>
            <a href="/blog">Read guide →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
