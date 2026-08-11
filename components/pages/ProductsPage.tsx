import React, { useRef, useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { categories, eventTypes } from "@/components/common/CategoryCards";
import productsData from "@/data/pages/products.json";
import { ProductsHeroSection } from "@/sections/products/ProductsHeroSection";
import { ProductsCtaSection } from "@/sections/products/ProductsCtaSection";

export function ProductsPage({ hireProducts }: { hireProducts: any[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(true);
  const [eventType, setEventType] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("recommended");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [page, setPage] = useState(1);
  const [eventDate, setEventDate] = useState("2026-09-12");
  const [returnDate, setReturnDate] = useState("2026-09-14");
  const [postcode, setPostcode] = useState("3000");
  const [guestCount, setGuestCount] = useState(80);
  const categoryRail = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, start: 0, left: 0 });
  const [availability, setAvailability] = useState("Set your dates, postcode and guest count, then check availability.");

  const baseListing = [...hireProducts];
  const listing = baseListing
    .filter((p) => {
      const matchesQuery = `${p.name} ${p.category} ${p.summary}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      const eventCategoryMap: Record<string, string[]> = {
        "Wedding or engagement": ["Chairs", "Tables", "Marquees", "Lighting", "Tableware", "Décor", "Flooring & staging", "Lounge & bar"],
        "Birthday or private party": ["Chairs", "Tables", "Lighting", "Décor", "Lounge & bar"],
        "Corporate event": ["Chairs", "Tables", "Lighting", "Flooring & staging", "Lounge & bar"],
        "Outdoor garden party": ["Chairs", "Tables", "Marquees", "Lighting", "Lounge & bar"],
      };
      const matchesEvent = eventType === "All" || eventCategoryMap[eventType]?.includes(p.category);
      const numericPrice = Number(p.price.replace(/[^0-9.]/g, "")) || 0;
      return matchesQuery && matchesCategory && matchesEvent && numericPrice <= maxPrice;
    })
    .sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : sort === "za"
        ? b.name.localeCompare(a.name)
        : sort === "low"
        ? parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""))
        : sort === "high"
        ? parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, ""))
        : sort === "new"
        ? b.slug.localeCompare(a.slug)
        : 0
    );

  const pageSize = 9;
  const pageCount = Math.max(1, Math.ceil(listing.length / pageSize));
  const visibleProducts = listing.slice((page - 1) * pageSize, page * pageSize);

  const goToPage = (next: number) => {
    setPage(Math.min(pageCount, Math.max(1, next)));
    document.querySelector(".results-head")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setAvailableOnly(false);
    setEventType("All");
    setMaxPrice(3000);
    setPage(1);
  };

  return (
    <div className="public-site approved-catalogue">
      <PublicHeader active="Hire Products" />
      <main>
        <ProductsHeroSection />
        <section className="planning-search catalogue-planner">
          <div className="search-title">
            <div>
              <b>See what’s available for your event</b>
              <span>Set your dates, location and guest count to check relevant hire stock.</span>
            </div>
            <small>{availability}</small>
          </div>
          <div className="search-fields catalogue-availability-fields">
            <label>
              <span>EVENT TYPE</span>
              <select value={eventType === "All" ? eventTypes[0] : eventType} onChange={(e) => { setEventType(e.target.value); setPage(1); }}>
                {eventTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              <span>EVENT DATE</span>
              <input id="event-date" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </label>
            <label>
              <span>RETURN DATE</span>
              <input id="return-date" type="date" min={eventDate} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
            </label>
            <label>
              <span>POSTCODE</span>
              <input id="event-postcode" inputMode="numeric" value={postcode} onChange={(e) => setPostcode(e.target.value.replace(/\D/g, "").slice(0, 4))} />
            </label>
            <label>
              <span>NUMBER OF GUESTS</span>
              <input type="number" min="1" value={guestCount} onChange={(e) => setGuestCount(Math.max(1, Number(e.target.value) || 1))} />
            </label>
            <button
              onClick={() =>
                setAvailability(
                  eventDate && returnDate && postcode.length === 4
                    ? `42 products checked for ${eventDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")} · ${guestCount} guests · ${postcode}`
                    : "Complete both dates and a four-digit postcode."
                )
              }
            >
              Check availability
            </button>
          </div>
        </section>

        <section className="category-rail">
          <div className="eyebrow">Browse your way</div>
          <div className="rail-head">
            <h2>Browse by subcategory</h2>
            <div className="rail-actions">
              <span>Click and drag to browse</span>
              <button aria-label="Previous categories" onClick={() => categoryRail.current?.scrollBy({ left: -460, behavior: "smooth" })}>
                ←
              </button>
              <button aria-label="Next categories" onClick={() => categoryRail.current?.scrollBy({ left: 460, behavior: "smooth" })}>
                →
              </button>
              <button onClick={() => setCategory("All")}>View all categories</button>
            </div>
          </div>
          <div
            ref={categoryRail}
            className="category-drag-rail"
            onPointerDown={(e) => {
              drag.current = { active: true, start: e.clientX, left: categoryRail.current?.scrollLeft || 0 };
              categoryRail.current?.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              if (drag.current.active && categoryRail.current) {
                categoryRail.current.scrollLeft = drag.current.left - (e.clientX - drag.current.start);
              }
            }}
            onPointerUp={(e) => {
              drag.current.active = false;
              categoryRail.current?.releasePointerCapture(e.pointerId);
            }}
            onPointerCancel={() => {
              drag.current.active = false;
            }}
          >
            {categories.map((c) => (
              <button className={category === c[0] ? "active" : ""} onClick={() => setCategory(c[0])} key={c[0]}>
                <img src={c[2]} alt={c[0]} />
                <b>{c[0]}</b>
              </button>
            ))}
          </div>
        </section>

        <section className="catalogue-search">
          <label>
            ⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={'Search “Tiffany chair”, “heater” or “6m marquee”'} />
            <button type="button">Search</button>
          </label>
          <span>
            Sort by{" "}
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="new">Newest first</option>
            </select>
          </span>
        </section>

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
        <ProductsCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}
