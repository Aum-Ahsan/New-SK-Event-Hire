import React, { useState } from "react";
import homeData from "@/data/pages/home.json";

export function HomeReviewsSection() {
  const { reviewsHeading, reviewsSummary, reviews } = homeData;
  const [reviewIndex, setReviewIndex] = useState(0);

  return (
    <section className="home-section testimonial">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{reviewsHeading.eyebrow}</div>
          <h2>{reviewsHeading.title}</h2>
          <p>{reviewsHeading.description}</p>
        </div>
      </div>
      <div className="testimonial-layout">
        <aside>
          <b>{reviewsSummary.rating}</b>
          <span>{reviewsSummary.stars}</span>
          <small>{reviewsSummary.label}</small>
        </aside>
        <div className="review-slider">
          {reviews.map((review, i) => (
            <blockquote className={reviewIndex === i ? "active" : ""} key={review.name}>
              <header>
                <i aria-hidden="true">{review.initials}</i>
                <div>
                  <b>{review.name}</b>
                  <small>{review.address}</small>
                  <em>✓ Verified hire</em>
                </div>
                <div className="review-rating">
                  <span>★★★★★</span>
                  <b>{review.rating}</b>
                  <small>{review.count}</small>
                </div>
              </header>
              <p>“{review.quote}”</p>
              <footer>
                <b>{review.event}</b>
                <small>{review.date}</small>
              </footer>
            </blockquote>
          ))}
          <nav>
            <button aria-label="Previous review" onClick={() => setReviewIndex((reviewIndex + 2) % 3)}>
              ←
            </button>
            <span aria-live="polite">
              {reviewIndex + 1} / {reviews.length}
            </span>
            <button aria-label="Next review" onClick={() => setReviewIndex((reviewIndex + 1) % 3)}>
              →
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
