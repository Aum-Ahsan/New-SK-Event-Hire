import React from "react";
import blogData from "@/data/pages/blog.json";

interface BlogGridSectionProps {
  query: string;
  setQuery: (val: string) => void;
  filtered: any[];
  guides: readonly any[];
  subscribed: boolean;
  setSubscribed: (val: boolean) => void;
}

export function BlogGridSection({
  query,
  setQuery,
  filtered,
  guides,
  subscribed,
  setSubscribed,
}: BlogGridSectionProps) {
  const { featured } = blogData;
  return (
    <>
      <section className="featured-guide editorial-section">
        <img src={featured.image} alt={featured.imageAlt} />
        <div>
          <span>{featured.eyebrow}</span>
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <a href={featured.ctaHref}>{featured.ctaText}</a>
        </div>
      </section>

      <section className="topic-browser editorial-section">
        <span>BROWSE BY TOPIC</span>
        <h2>Browse planning topics</h2>
        <div>
          {["Planning basics", "Tables & chairs", "Marquees", "Delivery & setup", "Lighting", "Weather", "Venues", "Guest experience"].map((x, i) => (
            <a href="#latest-guides" key={x}>
              <i>{["▣", "◫", "⌂", "▤", "✦", "☂", "⌖", "♡"][i]}</i>
              <b>{x}</b>
              <small>Guides and checklists →</small>
            </a>
          ))}
        </div>
      </section>

      <section id="latest-guides" className="latest-guides">
        <div className="editorial-section">
          <header>
            <div>
              <span>LATEST ARTICLES</span>
              <h2>Latest event guides</h2>
            </div>
            <a href="#guide-search">View all guides</a>
          </header>
          <div>
            {filtered.map((g) => (
              <article key={g[0]}>
                <img src={g[2]} alt={g[0]} />
                <small>{g[1]}</small>
                <h3>{g[0]}</h3>
                <p>Clear, practical advice from the SK Event Hire planning and operations team.</p>
                <a href="/blog-how-many-tables-and-chairs">Read guide →</a>
              </article>
            ))}
          </div>
          {!filtered.length && <p>No planning guides match “{query}”.</p>}
        </div>
      </section>

      <section id="guide-search" className="guide-search editorial-section">
        <div>
          <span>FIND A GUIDE</span>
          <h2>Find the answer you need</h2>
          <p>Search by product, venue, layout or delivery question.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            ⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles and guides" />
            <button>Search</button>
          </label>
          <select>
            <option>All topics</option>
            <option>Planning basics</option>
            <option>Products</option>
            <option>Delivery</option>
          </select>
          <select>
            <option>Most helpful</option>
            <option>Newest</option>
          </select>
          {!filtered.length && (
            <aside>
              <b>No guides found for “{query}”.</b>
              <p>Try a shorter search or browse all planning topics.</p>
              <button type="button" onClick={() => setQuery("")}>
                Clear search
              </button>
              <a href="#latest-guides">Ask the planning team</a>
            </aside>
          )}
        </form>
      </section>

      <section className="article-entry editorial-section">
        <span>FEATURED LONG-FORM GUIDE</span>
        <h2>Ready for the complete planning guide?</h2>
        <p>Open the dedicated article page for layouts, quantities, examples and venue checks.</p>
        <a className="public-cta" href="/blog-how-many-tables-and-chairs">
          Read complete guide →
        </a>
      </section>

      <section className="mentioned-products">
        <div className="editorial-section">
          <header>
            <div>
              <span>PRODUCTS IN THIS GUIDE</span>
              <h2>Products mentioned in this guide</h2>
            </div>
            <a href="/products">Browse all products</a>
          </header>
          <div>
            {[
              ["White Bentwood Chair", "/images/chairs-product.png"],
              ["Rustic Timber Trestle Table", "/images/tables-product.png"],
              ["Round Dining Table", "/images/tableware-product.png"],
              ["Table & Tableware Package", "/images/decor-product.png"],
            ].map((x) => (
              <article key={x[0]}>
                <img src={x[1]} alt={x[0]} />
                <h3>{x[0]}</h3>
                <a href="/products">Check availability</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-advice">
        <img src="/images/warehouse-team.png" alt="Event planner advising customers" />
        <div>
          <span>PRACTICAL EVENT SUPPORT</span>
          <h2>Need advice for your event?</h2>
          <p>Share your guest count and venue details. We’ll help calculate a practical starting list.</p>
          <a href="/planning">Ask a planning specialist</a>
          <small>No obligation · Melbourne support</small>
        </div>
      </section>

      <section className="keep-planning editorial-section">
        <span>KEEP READING</span>
        <h2>Keep planning</h2>
        <div>
          {guides.slice(0, 3).map((g) => (
            <article key={g[0]}>
              <img src={g[2]} alt={g[0]} />
              <h3>{g[0]}</h3>
              <a href="/blog-how-many-tables-and-chairs">Read guide →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div>
          <b>Helpful ideas, occasionally</b>
          <p>Practical planning guides and seasonal event advice.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
          }}
        >
          <input type="email" required placeholder="Email address" />
          <button>{subscribed ? "Subscribed ✓" : "Subscribe"}</button>
          <small>{subscribed ? "✓ You’re subscribed. Check your inbox for confirmation." : "No spam. Unsubscribe whenever you like."}</small>
        </form>
      </section>
    </>
  );
}
