import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import galleryData from "@/data/pages/gallery.json";

interface GalleryPageProps {
  story?: boolean;
  showcaseCards: readonly any[];
}

function GalleryStoryPage() {
  return (
    <div className="public-site editorial-page story-detail">
      <PublicHeader active="Gallery" />
      <main>
        <section className="case-banner event-result-hero">
          <img src="/images/hero-event.png" alt="Weather-ready garden reception" />
          <div>
            <a href="/gallery">← Back to gallery</a>
            <span>THE FINAL RESULT</span>
            <h1>Weather-ready garden reception</h1>
            <p>Warm, welcoming and ready before the first guest arrived.</p>
            <small>Richmond, Victoria · 80 guests · Full-service setup</small>
          </div>
        </section>
        <section className="editorial-section case-story">
          <div>
            <span className="section-kicker">THE BRIEF</span>
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
            <span className="section-kicker">WHAT MADE IT WORK</span>
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
            <span className="section-kicker">WHY THIS LAYOUT WORKED</span>
            <h2>A clear layout, covered dining and an organised setup sequence</h2>
            <p>One circulation route kept service practical while the lighting layers made the garden feel intimate after dark.</p>
            <blockquote>Practical takeaway: build the weather plan into the layout from the beginning.</blockquote>
            <a href="/request-quote">Build my event options</a>
          </div>
        </section>
        <section className="case-final">
          <img src="/images/hero-event.png" alt="Garden event" />
          <div>
            <span>PLANNING YOUR EVENT?</span>
            <h2>Use this event as a practical starting point.</h2>
            <p>Tell us what you liked and we’ll adapt the products, quantities and logistics for your venue.</p>
            <a href="/request-quote">Build a similar event</a>
            <a href="/products">Explore hire range</a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export function GalleryPage({ story = false, showcaseCards }: GalleryPageProps) {
  const [visible, setVisible] = useState(8);
  const [activeTag, setActiveTag] = useState("All");
  const [preview, setPreview] = useState<(typeof showcaseCards)[number] | null>(null);

  if (story) return <GalleryStoryPage />;

  const shown = showcaseCards.filter((x) => activeTag === "All" || x.tags.includes(activeTag as never));
  const { hero } = galleryData;

  return (
    <div className="public-site editorial-page">
      <PublicHeader active="Gallery" />
      <main>
        <section className="gallery-restored-hero">
          <div>
            <span>{hero.eyebrow}</span>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
            <a href={hero.ctaHref}>{hero.ctaText}</a>
          </div>
          <img src={hero.image} alt={hero.imageAlt} />
        </section>
        <section id="gallery-browser" className="gallery-browser gallery-listing-only">
          <div className="editorial-section">
            <div className="filter-pills gallery-chip-bar">
              {["All", "Wedding", "Outdoor", "Warm lighting"].map((tag) => (
                <button
                  className={activeTag === tag ? "active" : ""}
                  onClick={() => {
                    setActiveTag(tag);
                    setVisible(8);
                  }}
                  key={tag}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="masonry-gallery gallery-event-grid">
              {shown.slice(0, visible).map((x) => (
                <article key={x.title}>
                  <button className="gallery-image-button" onClick={() => setPreview(x)} aria-label={`Preview ${x.title}`}>
                    <img src={x.image} alt={x.title} />
                    <span>View image</span>
                  </button>
                  <div className="gallery-card-details">
                    <div className="gallery-card-tags">
                      {x.tags.map((tag: string) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="gallery-event-title" href={`/gallery-event-${x.slug}`}>
                      <h3>{x.title}</h3>
                    </a>
                    <b>{x.meta}</b>
                    <p>{x.details}</p>
                    <a className="gallery-view-action" href={`/gallery-event-${x.slug}`}>
                      View event details <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {visible < shown.length && (
              <button className="load-more" onClick={() => setVisible(visible + 4)}>
                Load more events
              </button>
            )}
          </div>
        </section>
        {preview && (
          <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${preview.title} image preview`} onClick={() => setPreview(null)}>
            <div onClick={(e) => e.stopPropagation()}>
              <button className="gallery-lightbox-close" onClick={() => setPreview(null)} aria-label="Close image preview">
                ×
              </button>
              <img src={preview.image} alt={preview.title} />
              <footer>
                <div>
                  <b>{preview.title}</b>
                  <span>{preview.meta}</span>
                </div>
                <a href={`/gallery-event-${preview.slug}`}>View event details →</a>
              </footer>
            </div>
          </div>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}
