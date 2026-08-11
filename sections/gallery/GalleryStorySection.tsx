import React from "react";
import galleryData from "@/data/pages/gallery.json";

export function GalleryStorySection() {
  const { story } = galleryData as any;
  const backText = story?.backText || "← Back to gallery";
  const heroTag = story?.heroTag || "THE FINAL RESULT";
  const defaultTitle = story?.defaultTitle || "Weather-ready garden reception";
  const defaultSubtitle = story?.defaultSubtitle || "Warm, welcoming and ready before the first guest arrived.";
  const briefTag = story?.briefTag || "THE BRIEF";
  const productsTag = story?.productsTag || "WHAT MADE IT WORK";
  const lessonTag = story?.lessonTag || "WHY THIS LAYOUT WORKED";
  const finalTag = story?.finalTag || "PLANNING YOUR EVENT?";

  return (
    <>
      <section className="case-banner event-result-hero">
        <img src="/images/hero-event.png" alt="Weather-ready garden reception" />
        <div>
          <a href="/gallery">{backText}</a>
          <span>{heroTag}</span>
          <h1>{defaultTitle}</h1>
          <p>{defaultSubtitle}</p>
          <small>Richmond, Victoria · 80 guests · Full-service setup</small>
        </div>
      </section>
      <section className="editorial-section case-story">
        <div>
          <span className="section-kicker">{briefTag}</span>
          <h2>A warm outdoor celebration with a practical weather plan</h2>
          <p>
            The couple wanted an intimate garden atmosphere without risking comfort or logistics. The plan paired natural timber furniture with covered
            dining, layered lighting and a clear wet-weather fallback.
          </p>
          <div className="story-stats">
            <b>
              80<small>guests</small>
            </b>
            <b>
              5 hrs<small>setup</small>
            </b>
            <b>
              2<small>crew</small>
            </b>
            <b>
              1<small>delivery</small>
            </b>
          </div>
        </div>
        <img src="/images/warehouse-team.png" alt="Event planners reviewing the setup plan" />
      </section>
      <section className="editorial-section case-products">
        <div>
          <span className="section-kicker">{productsTag}</span>
          <h2>Products and services working as one plan</h2>
          {[
            ["Natural Bentwood Chairs", "80 × dining chairs", "$352"],
            ["Rustic Timber Tables", "10 × 1.8m tables", "$420"],
            ["Warm Festoon Lighting", "4 × lighting runs", "$380"],
            ["Marquee & weather cover", "Installed structure", "$1,850"],
          ].map((x) => (
            <div className="case-product-row" key={x[0]}>
              <img
                src={
                  x[0].includes("Chair")
                    ? "/images/chairs-product.png"
                    : x[0].includes("Table")
                    ? "/images/tables-product.png"
                    : x[0].includes("Marquee")
                    ? "/images/marquee-product.png"
                    : "/images/lighting-product.png"
                }
                alt=""
              />
              <span>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
              </span>
              <strong>{x[2]}</strong>
            </div>
          ))}
        </div>
        <div className="case-collage">
          <img src="/images/hero-event.png" alt="Finished dining setup" />
          <img src="/images/chairs-product.png" alt="White chairs" />
          <img src="/images/decor-product.png" alt="Garden details" />
        </div>
      </section>
      <section className="case-lesson editorial-section">
        <div className="case-collage">
          <img src="/images/lighting-product.png" alt="Warm lighting" />
          <img src="/images/hero-event.png" alt="Dining layout" />
          <img src="/images/decor-product.png" alt="Styled table and garden details" />
        </div>
        <div>
          <span className="section-kicker">{lessonTag}</span>
          <h2>A clear layout, covered dining and an organised setup sequence</h2>
          <p>One circulation route kept service practical while the lighting layers made the garden feel intimate after dark.</p>
          <blockquote style={{ border: "none" }}>Practical takeaway: build the weather plan into the layout from the beginning.</blockquote>
          <a href="/request-quote">Build my event options</a>
        </div>
      </section>
      <section className="case-final">
        <img src="/images/hero-event.png" alt="Garden event" />
        <div>
          <span>{finalTag}</span>
          <h2>Use this event as a practical starting point.</h2>
          <p>Tell us what you liked and we’ll adapt the products, quantities and logistics for your venue.</p>
          <a href="/request-quote">Build a similar event</a>
          <a href="/products">Explore hire range</a>
        </div>
      </section>
    </>
  );
}
