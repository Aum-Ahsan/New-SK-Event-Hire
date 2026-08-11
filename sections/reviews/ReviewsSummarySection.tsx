import React from "react";
import reviewsData from "@/data/pages/reviews.json";

export function ReviewsSummarySection() {
  const { summary } = reviewsData;
  return (
    <section className="review-summary editorial-section">
      <span>{summary.eyebrow}</span>
      <h2>{summary.title}</h2>
      <p>{summary.description}</p>
      <div>
        <strong>
          4.8
          <small>
            out of 5<br />
            ★★★★★
          </small>
        </strong>
        <div className="rating-bars">
          {[
            [5, 78],
            [4, 16],
            [3, 4],
            [2, 1],
            [1, 1],
          ].map((x) => (
            <label key={x[0]}>
              {x[0]} ★{" "}
              <i>
                <b style={{ width: `${x[1]}%` }} />
              </i>
              <em>{x[1]}%</em>
            </label>
          ))}
        </div>
      </div>
      <nav>
        {["Hire experience", "Delivery & setup", "Product quality", "Customer care", "Value"].map((x) => (
          <a href="#review-list" key={x}>
            {x}
          </a>
        ))}
      </nav>
    </section>
  );
}
