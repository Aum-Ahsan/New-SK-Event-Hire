import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";

interface ProductDetailPageProps {
  slug: string;
  hireProducts: any[];
}

export function ProductDetailPage({ slug, hireProducts }: ProductDetailPageProps) {
  const p = hireProducts.find((x) => x.slug === slug) || hireProducts[0];
  const gallery = [p.image, "/images/hero-event.png", "/images/warehouse-team.png", "/images/tables-product.png", "/images/lighting-product.png"];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [zoomed, setZoomed] = useState(false);
  const [finish, setFinish] = useState("White");
  const [cushion, setCushion] = useState("White");
  const [size, setSize] = useState("Standard");
  const [quantity, setQuantity] = useState(40);
  const [startDate, setStartDate] = useState("2026-09-12");
  const [returnDate, setReturnDate] = useState("2026-09-14");
  const [startTime, setStartTime] = useState("16:00");
  const [returnTime, setReturnTime] = useState("10:00");
  const [checked, setChecked] = useState(false);
  const sameCategory = hireProducts.filter((x) => x.category === p.category && x.slug !== p.slug);
  const related = [...sameCategory, ...hireProducts.filter((x) => x.category !== p.category && x.slug !== p.slug)].slice(0, 10);
  const colourClass = `variant-${finish.toLowerCase()} size-${size.toLowerCase()} cushion-${cushion.toLowerCase()}`;
  const dayMs = 24 * 60 * 60 * 1000;
  const rentalDays = Math.max(1, Math.ceil((new Date(`${returnDate}T00:00:00`).getTime() - new Date(`${startDate}T00:00:00`).getTime()) / dayMs));
  const baseDaily = p.category === "Chairs" ? 2 : Math.max(2, Number(p.price.replace(/[^0-9.]/g, "")) || 2);
  const finishMultiplier: Record<string, number> = { White: 1, Gold: 1.25, Black: 1.15, Red: 1.1, Blue: 1.1 };
  const sizeMultiplier: Record<string, number> = { Kids: 0.75, Small: 0.9, Standard: 1, Large: 1.25 };
  const cushionMultiplier: Record<string, number> = { White: 1, Ivory: 1.08, Black: 1.05, Red: 1.1, Blue: 1.1 };
  const unitDaily = baseDaily * finishMultiplier[finish] * sizeMultiplier[size] * cushionMultiplier[cushion];
  const hireSubtotal = unitDaily * quantity * rentalDays;
  const bond = hireSubtotal >= 1000 ? 200 : hireSubtotal > 300 ? 100 : 50;
  const gst = hireSubtotal * 0.1;
  const total = hireSubtotal + bond + gst;

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="public-site approved-detail">
      <PublicHeader active="Hire Products" />
      <main>
        <div className="product-crumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/products">Hire Products</a>
          <span>›</span>
          <a href={`/products#${p.category}`}>{p.category}</a>
          <span>›</span>
          {p.name}
        </div>
        <section className="product-detail">
          <div className={`product-gallery ${zoomed ? "zoomed" : ""} ${colourClass}`}>
            <div className="detail-thumbs">
              {gallery.map((image, n) => (
                <button className={selectedImage === image ? "active" : ""} onClick={() => setSelectedImage(image)} key={`${image}-${n}`}>
                  <img src={image} alt={`${p.name} view ${n + 1}`} />
                </button>
              ))}
            </div>
            <button className="main-product-image" onClick={() => setZoomed(!zoomed)} aria-label="Toggle product image zoom">
              <img src={selectedImage} alt={`${finish} ${size} ${p.name} with ${cushion} cushion`} />
              <i className="cushion-preview" aria-hidden="true" />
            </button>
            <div className="image-assurance">
              <span>◉ Product preview updates with colour, size and cushion</span>
              <button onClick={() => setZoomed(!zoomed)}>⌕ {zoomed ? "Reset zoom" : "Zoom image"}</button>
            </div>
          </div>
          <div className="product-copy">
            <div className="detail-badges">
              POPULAR {checked && <span>AVAILABLE FOR YOUR DATES</span>}
            </div>
            <h1>{p.name}</h1>
            <div className="rating">
              ★★★★★ <span>4.9 (142) · Write a review</span>
            </div>
            <p>{p.description}</p>
            <h3>Product colour</h3>
            <div className="swatch-buttons">
              {[
                ["White", "#f3f0e9"],
                ["Gold", "#c6a15b"],
                ["Black", "#202326"],
                ["Red", "#a93232"],
                ["Blue", "#315b8a"],
              ].map((x) => (
                <button aria-label={`${x[0]} product colour`} className={finish === x[0] ? "active" : ""} style={{ background: x[1] }} onClick={() => setFinish(x[0])} key={x[0]}>
                  <span>{x[0]}</span>
                </button>
              ))}
            </div>
            <h3>Size</h3>
            <div className="size-buttons">
              {["Kids", "Small", "Standard", "Large"].map((x) => (
                <button className={size === x ? "active" : ""} onClick={() => setSize(x)} key={x}>
                  {x}
                </button>
              ))}
            </div>
            <h3>Seat cushion colour</h3>
            <div className="swatch-buttons cushions">
              {[
                ["White", "#fafafa"],
                ["Ivory", "#e9dfc7"],
                ["Black", "#252525"],
                ["Red", "#9d3030"],
                ["Blue", "#315b8a"],
              ].map((x) => (
                <button aria-label={`${x[0]} cushion`} className={cushion === x[0] ? "active" : ""} style={{ background: x[1] }} onClick={() => setCushion(x[0])} key={x[0]}>
                  <span>{x[0]}</span>
                </button>
              ))}
            </div>
            <section className="booking-panel-detail">
              <h3>When do you need it?</h3>
              <p className="date-format-note">Enter dates in day / month / year order.</p>
              <div className="booking-date-grid">
                <label>
                  Event / start date
                  <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setChecked(false); }} />
                  <small>{startDate.split("-").reverse().join(" / ")}</small>
                </label>
                <label>
                  Start time
                  <input type="time" value={startTime} onChange={(e) => { setStartTime(e.target.value); setChecked(false); }} />
                </label>
                <label>
                  Return date
                  <input type="date" min={startDate} value={returnDate} onChange={(e) => { setReturnDate(e.target.value); setChecked(false); }} />
                  <small>{returnDate.split("-").reverse().join(" / ")}</small>
                </label>
                <label>
                  Return time
                  <input type="time" value={returnTime} onChange={(e) => { setReturnTime(e.target.value); setChecked(false); }} />
                </label>
              </div>
              <div className="quantity-availability-row">
                <label>
                  Quantity{" "}
                  <span>
                    <button onClick={() => { setQuantity(Math.max(1, quantity - 1)); setChecked(false); }}>−</button>
                    <input inputMode="numeric" value={quantity} onChange={(e) => { setQuantity(Math.max(1, Number(e.target.value) || 1)); setChecked(false); }} />
                    <button onClick={() => { setQuantity(quantity + 1); setChecked(false); }}>＋</button>
                  </span>
                </label>
                {checked && <small><b>155 available</b> on your selected dates</small>}
              </div>
              <button disabled={!startDate || !returnDate || new Date(returnDate) < new Date(startDate)} onClick={() => setChecked(true)}>
                {checked
                  ? `✓ ${quantity} available for ${startDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")}`
                  : "Check availability"}
              </button>
            </section>
            <section className="price-panel rental-breakdown">
              <small>Estimated rental total</small>
              <b>${total.toFixed(2)}</b>
              <p>
                {quantity} × ${unitDaily.toFixed(2)} per day × {rentalDays} day{rentalDays === 1 ? "" : "s"}
              </p>
              <hr />
              <span>Selected combination <b>{finish} · {size} · {cushion} cushion</b></span>
              <span>Hire subtotal <b>${hireSubtotal.toFixed(2)}</b></span>
              <span>Refundable security bond <b>${bond.toFixed(2)}</b></span>
              <span>GST (10%) <b>${gst.toFixed(2)}</b></span>
              <span className="price-total">Total payable <b>${total.toFixed(2)}</b></span>
              <em>Bond is $50 up to $300 hire value, $100 above $300, and $200 from $1,000. Final availability and delivery charges are confirmed during booking.</em>
              <a href="/basket">Add to quote</a>
              <a href="/create-quote-01">Book this product</a>
            </section>
          </div>
        </section>
        <nav className="detail-tabs" aria-label="Product detail sections">
          <button onClick={() => scrollToSection("overview")}>Overview</button>
          <button onClick={() => scrollToSection("included")}>What’s included</button>
          <button onClick={() => scrollToSection("delivery")}>Delivery & setup</button>
          <button onClick={() => scrollToSection("safety")}>Safety</button>
          <button onClick={() => scrollToSection("reviews")}>Reviews</button>
          <button onClick={() => scrollToSection("compare")}>Compare</button>
        </nav>
        <section className="detail-content" id="overview">
          <div className="eyebrow">Product details</div>
          <h2>At a glance</h2>
          <p>Important dimensions and practical details for planning your layout.</p>
          <div className="glance-grid">
            {[
              ["Overall width", "40 cm"],
              ["Overall height", "92 cm"],
              ["Seat height", "45 cm"],
              ["Seat width", "38 × 40 cm"],
              ["Material", p.finish],
              ["Weight", "4.3 kg"],
              ["Use", "Indoor / outdoor"],
              ["Stackable", "8 high"],
            ].map((x) => (
              <span key={x[0]}>
                <small>{x[0]}</small>
                <b>{x[1]}</b>
              </span>
            ))}
          </div>
          <section className="layout-guide">
            <img src={p.image} alt="Chair dimensions" />
            <div>
              <h3>Check your venue layout</h3>
              <p>Use dimensions to plan table spacing and make sure wheelchair paths and accessible aisle clearance are allowed.</p>
              <button>Download dimension guide</button>
            </div>
          </section>
          <section className="detail-split reverse" id="included">
            <div>
              <div className="eyebrow">Your hire includes</div>
              <h2>Included with your hire</h2>
              {["Selected chair frame and size", "Selected padded seat cushion", "Professional cleaning before hire", "Protective transport and handling"].map((x) => (
                <p key={x}>✓ &nbsp;{x}</p>
              ))}
            </div>
            <img src={p.image} alt="Chair finish detail" />
          </section>
          <section className="detail-split" id="delivery">
            <img src="/images/warehouse-team.png" alt="Delivery and event setup" />
            <div>
              <div className="eyebrow">Delivery & collection</div>
              <h2>How it gets to your event</h2>
              {[
                ["Delivery", "Available across Melbourne. Pricing depends on distance, access and order size."],
                ["Customer pickup", "Available by confirmed appointment for suitable orders."],
                ["Setup", "Optional placement service. Venue layout and access must be confirmed."],
                ["Minimum order", "Applies to delivered orders and is confirmed in your quote."],
              ].map((x) => (
                <p key={x[0]}>
                  <b>{x[0]}</b>
                  {x[1]}
                </p>
              ))}
            </div>
          </section>
          <section className="safety-band" id="safety">
            <div>
              <div className="eyebrow">Care & responsibility</div>
              <h2>Use it safely</h2>
              <p>Simple handling and venue checks help protect guests and equipment.</p>
            </div>
            <ol>
              <li><b>Level surface</b>Place chairs on stable, level flooring.</li>
              <li><b>Weather awareness</b>Move under cover during wind or severe weather.</li>
              <li><b>Safe use</b>Do not stand on chairs or exceed rated seating use.</li>
              <li><b>Return condition</b>Keep clean, dry and ready for collection.</li>
            </ol>
          </section>
          <section className="review-band" id="reviews">
            <div className="eyebrow">Verified customer feedback</div>
            <h2>What customers say</h2>
            <div>
              <aside>
                <b>4.9</b>
                <span>★★★★★</span>
                <small>Based on 142 verified hires</small>
              </aside>
              <blockquote>
                “The chairs arrived spotless and looked beautiful for our ceremony. Quantities and delivery timing were easy to confirm.”
                <footer>Verified wedding customer · Carlton North</footer>
                <a>Read all 142 reviews</a>
              </blockquote>
            </div>
          </section>
        </section>
        <section className="complete-setup">
          <div className="eyebrow">Frequently hired together</div>
          <h2>Complete your setup</h2>
          <p>Add compatible items without leaving this product.</p>
          <div className="related-grid reference-product-grid">
            {related.slice(0, 8).map((x, i) => (
              <article key={x.slug}>
                <a className="product-image" href={`/product-${x.slug}`}>
                  <img src={x.image} alt={x.name} />
                  <em>{i % 3 === 0 ? "POPULAR" : ""}</em>
                  <i>♡</i>
                </a>
                <div>
                  <small>{x.category}</small>
                  <h3>
                    <a href={`/product-${x.slug}`}>{x.name}</a>
                  </h3>
                  <span className="stars">
                    ★ 4.9 <small>({24 + i})</small>
                  </span>
                  <p>● &nbsp;Available · Professional unit prepared</p>
                  <b className="catalogue-price">
                    from <strong>{x.price}</strong>
                  </b>
                  <footer>
                    <a href={`/product-${x.slug}`}>View details</a>
                    <a href="/basket">Quick add</a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="comparison-promo" id="compare">
          <div>
            <div className="eyebrow">Product comparison</div>
            <h2>Choose the option that fits your event.</h2>
            <p>Compare price, dimensions, capacity, finish and minimum hire side by side before adding products to your quote.</p>
          </div>
          <a className="public-cta" href="/compare">
            Compare hire products
          </a>
        </section>
        <section className="catalogue-section related-products">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Related hire products</div>
              <h2>You may also like</h2>
            </div>
            <a href="/products">View the complete catalogue →</a>
          </div>
          <div className="related-grid reference-product-grid">
            {related.slice(2, 10).map((x, i) => (
              <article key={x.slug}>
                <a className="product-image" href={`/product-${x.slug}`}>
                  <img src={x.image} alt={x.name} />
                  <em>{i % 4 === 0 ? "POPULAR" : ""}</em>
                  <i>♡</i>
                </a>
                <div>
                  <small>{x.category}</small>
                  <h3>
                    <a href={`/product-${x.slug}`}>{x.name}</a>
                  </h3>
                  <span className="stars">
                    ★ 4.8 <small>({18 + i})</small>
                  </span>
                  <p>{x.summary}</p>
                  <b className="catalogue-price">
                    from <strong>{x.price}</strong>
                  </b>
                  <footer>
                    <a href={`/product-${x.slug}`}>View details</a>
                    <a href="/basket">Quick add</a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="recent-products">
          <div className="eyebrow">Your hire shortlist</div>
          <h2>Recently viewed</h2>
          <div>
            {hireProducts.slice(0, 8).map((x) => (
              <a href={`/product-${x.slug}`} key={x.slug}>
                <img src={x.image} alt={x.name} />
                <span>
                  <b>{x.name}</b>
                  <small>{x.price}</small>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
