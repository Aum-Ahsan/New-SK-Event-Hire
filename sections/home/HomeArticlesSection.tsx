import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeArticlesSection() {
  const { articlesHeading, articlesList } = homeData as any;
  const items = articlesList || [
    { category: "PLANNING BASICS", title: "How many chairs and tables do I need?", linkText: "Read guide →", image: "/images/chairs-product.png", href: "/blog" },
    { category: "OUTDOOR EVENTS", title: "Choosing the right marquee size", linkText: "Read guide →", image: "/images/marquee-product.png", href: "/blog" },
    { category: "SEASONAL", title: "Outdoor winter party checklist", linkText: "Read guide →", image: "/images/lighting-product.png", href: "/blog" }
  ];

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
        {items.map((x: any) => (
          <article key={x.title}>
            <img src={x.image} alt={x.title} />
            <small>{x.category || "PLANNING GUIDE"}</small>
            <h3>{x.title}</h3>
            <a href={x.href || "/blog"}>{x.linkText || "Read guide →"}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
