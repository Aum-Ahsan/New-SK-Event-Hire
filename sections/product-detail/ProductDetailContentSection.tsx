import React from "react";
import productDetailData from "@/data/pages/product-detail.json";

interface ProductDetailContentSectionProps {
  p: any;
}

export function ProductDetailContentSection({ p }: ProductDetailContentSectionProps) {
  const { content } = productDetailData as any;
  const helpEyebrow = content?.helpEyebrow || "Need assistance?";
  const helpTitle = content?.helpTitle || "Questions about this item?";

  return (
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
          <blockquote style={{ border: "none" }}>
            “The chairs arrived spotless and looked beautiful for our ceremony. Quantities and delivery timing were easy to confirm.”
            <footer>Verified wedding customer · Carlton North</footer>
            <a>Read all 142 reviews</a>
          </blockquote>
        </div>
      </section>
    </section>
  );
}
