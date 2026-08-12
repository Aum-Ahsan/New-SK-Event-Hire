import React, { useState } from "react";
import homeData from "@/data/pages/home.json";

export function HomeReviewsSection() {
  const { reviewsHeading, reviewsSummary, reviews } = homeData as any;
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviewList = (reviews as any[]) || [];

  return (
    <section className="home-section testimonial">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{reviewsHeading?.eyebrow || "VERIFIED CUSTOMER FEEDBACK"}</div>
          <h2>{reviewsHeading?.title || "Trusted for events that matter"}</h2>
          <p>{reviewsHeading?.description || "Real feedback will be shown only after verified completed bookings."}</p>
        </div>
      </div>

      <div className="testimonial-layout">
        <aside>
          <b>{reviewsSummary?.rating || "4.9"}</b>
          <span>{reviewsSummary?.stars || "★★★★★"}</span>
          <small>{reviewsSummary?.label || "Sample presentation for verified reviews"}</small>
        </aside>

        <div className="review-slider">
          {reviewList.map((review: any, i: number) => (
            <blockquote className={reviewIndex === i ? "active" : ""} key={`${review.name}-${i}`}>
              <header>
                <i aria-hidden="true">{(review.name || review.author || "C")[0]}</i>
                <div className="review-header-info">
                  <div className="review-author-row">
                    <b>{review.name || "Verified Customer"}</b>
                    <div className="review-rating">
                      <span>★★★★★</span>
                    </div>
                  </div>
                  {review.address && <small>{review.address}</small>}
                  <em>{review.badge || "✓ Verified hire"}</em>
                </div>
              </header>

              <p>“{review.quote}”</p>

              <footer>
                <div>
                  {review.author && review.name && <b>{review.author}</b>}
                  {review.date && <small>{review.date}</small>}
                </div>
                <nav className="review-nav-bottom">
                  <button
                    aria-label="Previous review"
                    onClick={() => setReviewIndex((reviewIndex + reviewList.length - 1) % reviewList.length)}
                  >
                    ←
                  </button>
                  <span aria-live="polite">
                    {reviewIndex + 1} / {reviewList.length}
                  </span>
                  <button
                    aria-label="Next review"
                    onClick={() => setReviewIndex((reviewIndex + 1) % reviewList.length)}
                  >
                    →
                  </button>
                </nav>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
