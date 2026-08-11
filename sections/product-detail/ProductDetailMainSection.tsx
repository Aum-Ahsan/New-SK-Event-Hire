import React from "react";
import productDetailData from "@/data/pages/product-detail.json";

interface ProductDetailMainSectionProps {
  p: any;
  gallery: string[];
  selectedImage: string;
  setSelectedImage: (img: string) => void;
  zoomed: boolean;
  setZoomed: (val: boolean) => void;
  colourClass: string;
  finish: string;
  setFinish: (val: string) => void;
  size: string;
  setSize: (val: string) => void;
  cushion: string;
  setCushion: (val: string) => void;
  startDate: string;
  setStartDate: (val: string) => void;
  startTime: string;
  setStartTime: (val: string) => void;
  returnDate: string;
  setReturnDate: (val: string) => void;
  returnTime: string;
  setReturnTime: (val: string) => void;
  quantity: number;
  setQuantity: (val: number) => void;
  checked: boolean;
  setChecked: (val: boolean) => void;
  unitDaily: number;
  rentalDays: number;
  hireSubtotal: number;
  bond: number;
  gst: number;
  total: number;
}

export function ProductDetailMainSection({
  p,
  gallery,
  selectedImage,
  setSelectedImage,
  zoomed,
  setZoomed,
  colourClass,
  finish,
  setFinish,
  size,
  setSize,
  cushion,
  setCushion,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  returnDate,
  setReturnDate,
  returnTime,
  setReturnTime,
  quantity,
  setQuantity,
  checked,
  setChecked,
  unitDaily,
  rentalDays,
  hireSubtotal,
  bond,
  gst,
  total,
}: ProductDetailMainSectionProps) {
  return (
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
  );
}
