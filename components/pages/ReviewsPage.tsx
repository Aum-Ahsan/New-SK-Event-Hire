import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import reviewsData from "@/data/pages/reviews.json";

function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return (
    <div className={`field ${wide ? "wide-field" : ""} ${area ? "area-field" : ""}`}>
      <label>{label}</label>
      <input readOnly defaultValue={value || ""} />
    </div>
  );
}

interface ReviewsPageProps {
  publicReviews: readonly any[];
}

export function ReviewsPage({ publicReviews }: ReviewsPageProps) {
  const [event, setEvent] = useState("All events");
  const [rating, setRating] = useState("All ratings");
  const [submitted, setSubmitted] = useState(false);

  const visible = publicReviews.filter((r) => (event === "All events" || r.event === event) && (rating === "All ratings" || r.rating === Number(rating)));
  const { hero, summary } = reviewsData;

  return (
    <div className="public-site reviews-page">
      <PublicHeader />
      <main>
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

        <section id="review-list" className="editorial-section review-browser">
          <span>FIND THE RIGHT FEEDBACK</span>
          <h2>Find relevant reviews</h2>
          <div className="review-filters">
            <label>
              Event type
              <select value={event} onChange={(e) => setEvent(e.target.value)}>
                <option>All events</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Birthday</option>
              </select>
            </label>
            <label>
              Rating
              <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option>All ratings</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
              </select>
            </label>
            <label>
              Service
              <select>
                <option>All services</option>
                <option>Delivery & setup</option>
                <option>Product hire</option>
              </select>
            </label>
            <label>
              Sort by
              <select>
                <option>Most helpful</option>
                <option>Newest</option>
                <option>Highest rated</option>
              </select>
            </label>
          </div>
          <div className="review-count">
            {visible.length} verified reviews{" "}
            <button
              onClick={() => {
                setEvent("All events");
                setRating("All ratings");
              }}
            >
              Clear filters
            </button>
          </div>
          {visible.map((r) => (
            <article className="verified-review" key={r.title}>
              <header>
                <i>{r.name[0]}</i>
                <span>
                  <b>{r.name}</b>
                  <small>✓ Verified booking · {r.location}</small>
                </span>
                <strong>{"★".repeat(r.rating)}</strong>
              </header>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <img src={r.image} alt={r.title} />
              <aside>
                <b>{r.product}</b>
                <span>Products and service used for this event</span>
                <a href="/products">View hire products →</a>
              </aside>
              <footer>
                Helpful? <button>Yes</button>
                <button>Report</button>
                <time>Published July 2026</time>
              </footer>
            </article>
          ))}
          {!visible.length && (
            <div className="empty-reviews">
              <h3>No reviews match these filters.</h3>
              <p>Clear one or more filters to see verified event feedback.</p>
              <button
                onClick={() => {
                  setEvent("All events");
                  setRating("All ratings");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="review-filter-empty">
          <div>⌕</div>
          <span>
            <small>FILTERED RESULT</small>
            <h2>No reviews match these filters.</h2>
            <p>Try another event type, service or rating.</p>
          </span>
          <a href="#review-list">Clear filters</a>
        </section>

        <section className="post-event editorial-section">
          <div>
            <span>YOUR COMPLETED EVENT</span>
            <h2>How did your event hire go?</h2>
            <p>Your verified booking is ready for feedback. Reviews help future customers plan with confidence.</p>
            <b>SK-260611-084 · Wedding reception</b>
            <a href="#review-form">Share your review →</a>
          </div>
          <img src="/images/tableware-product.png" alt="Dining setup from completed event" />
          <aside>
            <img src="/images/lighting-product.png" alt="Event lighting" />
            <b>Your hire included</b>
            <small>Chairs · tables · lighting · delivery and setup</small>
          </aside>
        </section>

        <section id="review-form" className="review-form-wrap">
          <div className="editorial-section">
            <header>
              <span>SHARE YOUR EXPERIENCE</span>
              <h2>Tell us about your experience</h2>
              <p>Your feedback is connected to your completed booking and reviewed before publication.</p>
            </header>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => document.getElementById("review-thanks")?.scrollIntoView({ behavior: "smooth" }), 50);
              }}
            >
              <section>
                <h3>
                  <i>1</i> Rate your experience
                </h3>
                <div className="rating-grid">
                  {["Overall rating", "Delivery & setup", "Product quality", "Customer care", "Communication", "Value for money"].map((x) => (
                    <label key={x}>
                      <span>{x}</span>
                      <b>★★★★★</b>
                    </label>
                  ))}
                </div>
              </section>
              <section>
                <h3>
                  <i>2</i> Share the helpful details
                </h3>
                <label>
                  Review title<input defaultValue="Beautiful products and a very organised team" />
                </label>
                <label>
                  Tell us about your event
                  <textarea defaultValue="The products arrived clean and beautifully presented. Delivery and collection were both on time, and the team answered every question clearly." />
                </label>
                <label>
                  What stood out most?
                  <textarea defaultValue="The care taken with setup and the quality of the furniture." />
                </label>
                <div className="form-grid">
                  <Field label="Event type" value="Wedding reception" />
                  <Field label="Suburb / venue" value="Richmond VIC" />
                </div>
              </section>
              <section>
                <h3>
                  <i>3</i> Add event photos <small>Optional</small>
                </h3>
                <div className="photo-upload">
                  ⇧<b>Drop photos here</b>
                  <span>JPG or PNG · up to 10MB each</span>
                  <button type="button">Choose photos</button>
                </div>
                <div className="upload-previews">
                  <img src="/images/hero-event.png" alt="Uploaded event photo" />
                  <img src="/images/tableware-product.png" alt="Uploaded table setting" />
                </div>
              </section>
              <section>
                <h3>
                  <i>4</i> Before you submit
                </h3>
                <label className="check">
                  <input type="checkbox" defaultChecked /> I confirm this review reflects my genuine experience.
                </label>
                <label className="check">
                  <input type="checkbox" defaultChecked /> SK Event Hire may publish my first name, initial and event photos.
                </label>
                <div className="privacy-note">Your address, phone number, email and booking value are never displayed publicly.</div>
                <footer>
                  <span>Your review will be checked before publication.</span>
                  <button>Submit review →</button>
                </footer>
              </section>
            </form>
          </div>
        </section>

        <section id="review-thanks" className={`review-thanks ${submitted ? "show" : ""}`}>
          <i>✓</i>
          <div>
            <span>REVIEW RECEIVED</span>
            <h2>Thank you for your feedback.</h2>
            <p>Your review is being checked against booking SK-260611-084. We’ll let you know when it is published.</p>
            <a href="/reviews-account">View my reviews</a>
            <a href="/gallery">See event inspiration</a>
          </div>
          <aside>
            <b>What happens next?</b>
            <p>Verification usually takes one to two business days. You can update photo consent from your account.</p>
          </aside>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
