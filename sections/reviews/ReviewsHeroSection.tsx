import React from "react";
import reviewsData from "@/data/pages/reviews.json";

export function ReviewsHeroSection() {
  const { hero } = reviewsData;
  return (
    <section className="reviews-hero">
      <div>
        <span>{hero.eyebrow}</span>
        <h1>
          Real events.
          <br />
          Honest experiences.
        </h1>
        <p>{hero.description}</p>
        <div>
          <a href={hero.ctaLeft.href}>{hero.ctaLeft.text}</a>
          <a href={hero.ctaRight.href}>{hero.ctaRight.text}</a>
        </div>
        <small>{hero.badge}</small>
      </div>
      <figure>
        <img src={hero.image} alt={hero.imageAlt} />
        <figcaption>
          ★★★★★ 4.8 out of 5<br />
          <small>Based on verified event hires</small>
        </figcaption>
      </figure>
    </section>
  );
}
