import React from "react";
import { eventTypes } from "@/components/common/CategoryCards";
import productsData from "@/data/pages/products.json";

interface ProductsWorkspaceSectionProps {
  availableOnly: boolean;
  setAvailableOnly: (val: boolean) => void;
  category: string;
  setCategory: (val: string) => void;
  eventType: string;
  setEventType: (val: string) => void;
  setPage: (val: number) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  clearFilters: () => void;
  listing: any[];
  visibleProducts: any[];
  view: "grid" | "list";
  setView: (val: "grid" | "list") => void;
  page: number;
  pageCount: number;
  goToPage: (next: number) => void;
  availability: string;
}

export function ProductsWorkspaceSection({
  availableOnly,
  setAvailableOnly,
  category,
  setCategory,
  eventType,
  setEventType,
  setPage,
  maxPrice,
  setMaxPrice,
  clearFilters,
  listing,
  visibleProducts,
  view,
  setView,
  page,
  pageCount,
  goToPage,
  availability,
}: ProductsWorkspaceSectionProps) {
  return (
    <section className="catalogue-workspace">
      <aside className="catalogue-filters">
        <div className="filter-card-head">
          <div>
            <div className="eyebrow">Refine products</div>
            <h3>Narrow your results</h3>
          </div>
          <button onClick={clearFilters}>Clear all</button>
        </div>
        <fieldset>
          <legend>Availability</legend>
          <label>
            <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} />
            Available for my dates<small>42</small>
          </label>
          <label>
            <input type="checkbox" />
            Show alternatives<small>8</small>
          </label>
        </fieldset>
        <fieldset>
          <legend>Category</legend>
          <label>
            <input type="radio" name="category" checked={category === "All"} onChange={() => setCategory("All")} />
            All products<small>42</small>
          </label>
          {["Chairs", "Tables", "Marquees", "Lighting", "Tableware"].map((x, i) => (
            <label key={x}>
              <input type="radio" name="category" checked={category === x} onChange={() => setCategory(x)} />
              {x}
              <small>{18 - i * 2}</small>
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Event type</legend>
          <label>
            <input type="radio" name="event" checked={eventType === "All"} onChange={() => { setEventType("All"); setPage(1); }} />
            All event types
          </label>
          {eventTypes.map((x) => (
            <label key={x}>
              <input type="radio" name="event" checked={eventType === x} onChange={() => { setEventType(x); setPage(1); }} />
              {x}
            </label>
          ))}
        </fieldset>
        <fieldset className="price-range-filter">
          <legend>Price per item/event</legend>
          <div>
            <span>$0</span>
            <output>${maxPrice.toLocaleString()}</output>
          </div>
          <input aria-label="Maximum price" type="range" min="0" max="3000" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
          <small>Showing items priced up to ${maxPrice.toLocaleString()}</small>
        </fieldset>
      </aside>
      <div className="catalogue-results">
        <div className="results-head">
          <div>
            <h2>{listing.length} products</h2>
            <small>{availability}</small>
          </div>
          <div>
            <button className={view === "grid" ? "active" : ""} onClick={() => setView("grid")} aria-label="Grid view">
              ▦
            </button>
            <button className={view === "list" ? "active" : ""} onClick={() => setView("list")} aria-label="List view">
              ☷
            </button>
          </div>
        </div>
        <div className="filter-chips">
          {availableOnly && (
            <span>
              Available for my dates <button onClick={() => setAvailableOnly(false)}>×</button>
            </span>
          )}
          {category !== "All" && (
            <span>
              {category} <button onClick={() => setCategory("All")}>×</button>
            </span>
          )}
          {eventType !== "All" && (
            <span>
              {eventType} <button onClick={() => setEventType("All")}>×</button>
            </span>
          )}
          <button onClick={clearFilters}>Clear all</button>
        </div>
        <div className={`reference-product-grid ${view === "list" ? "list-view" : ""}`}>
          {visibleProducts.map((p, i) => (
            <article key={p.slug}>
              <a className="product-image" href={`/product-${p.slug}`}>
                <img src={p.image} alt={p.name} />
                <em>{i % 4 === 0 ? "POPULAR" : i % 5 === 0 ? "PREMIUM" : ""}</em>
                <i>♡</i>
              </a>
              <div>
                <small>{p.category}</small>
                <h3>
                  <a href={`/product-${p.slug}`}>{p.name}</a>
                </h3>
                <span className="stars">
                  ★ 4.{9 - (i % 3)} <small>({12 + i})</small>
                </span>
                <p>● &nbsp;Available · Professional unit prepared</p>
                <div className="colour-dot">● &nbsp;{(i % 3) + 1} colour{(i % 3) ? "s" : ""}</div>
                <b className="catalogue-price">
                  from <strong>{p.price.replace("each", "")}</strong>{" "}
                  <small>
                    per item / day
                    <br />
                    GST calculated at checkout
                  </small>
                </b>
                <footer>
                  <a href={`/product-${p.slug}`}>View details</a>
                  <a href="/basket">Quick add</a>
                </footer>
              </div>
            </article>
          ))}
        </div>
        {listing.length === 0 && (
          <div className="empty-results">
            <h3>No matching products</h3>
            <p>Try another search or clear the filters to see the complete hire range.</p>
            <button onClick={clearFilters}>Clear filters</button>
          </div>
        )}
        {listing.length > 0 && (
          <nav className="catalogue-pages" aria-label="Product pages">
            <button disabled={page === 1} onClick={() => goToPage(page - 1)}>
              ← Previous
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button className={page === n ? "active" : ""} aria-current={page === n ? "page" : undefined} onClick={() => goToPage(n)} key={n}>
                {n}
              </button>
            ))}
            <button disabled={page === pageCount} onClick={() => goToPage(page + 1)}>
              Next →
            </button>
          </nav>
        )}
        <section className="catalogue-advice">
          <img src={productsData.advice.image} alt={productsData.advice.imageAlt} />
          <div>
            <div className="eyebrow">{productsData.advice.eyebrow}</div>
            <h2>{productsData.advice.title}</h2>
            <p>{productsData.advice.description}</p>
            {productsData.advice.links.map((lnk, i) => (
              <b key={i}>{lnk}</b>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
