import React from "react";
import productDetailData from "@/data/pages/product-detail.json";

interface ProductDetailRelatedSectionProps {
  related: any[];
  hireProducts: any[];
}

function DraggableSlider({ children, innerRef, className }: { children: React.ReactNode, innerRef: React.RefObject<HTMLDivElement | null>, className: string }) {
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!innerRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - innerRef.current.offsetLeft);
    setScrollLeft(innerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !innerRef.current) return;
    e.preventDefault();
    const x = e.pageX - innerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    innerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (isDragging) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <div
      ref={innerRef}
      className={className}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onClickCapture={onClickCapture}
      style={{ cursor: isDown ? 'grabbing' : 'grab', scrollSnapType: isDown ? 'none' : '' }}
    >
      {children}
    </div>
  );
}

export function ProductDetailRelatedSection({ related, hireProducts }: ProductDetailRelatedSectionProps) {
  const setupRef = React.useRef<HTMLDivElement>(null);
  const relatedRef = React.useRef<HTMLDivElement>(null);
  const recentRef = React.useRef<HTMLDivElement | null>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const amount = direction === "left" ? -320 : 320;
      ref.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="complete-setup">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">Frequently hired together</div>
            <h2>Complete your setup</h2>
            <p>Add compatible items without leaving this product.</p>
          </div>
          <div className="slider-nav" style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => scroll(setupRef, "left")} aria-label="Scroll left" style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #0a2b49", background: "#fff", cursor: "pointer", display: "grid", placeItems: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a2b49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button onClick={() => scroll(setupRef, "right")} aria-label="Scroll right" style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #0a2b49", background: "#fff", cursor: "pointer", display: "grid", placeItems: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a2b49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
        <DraggableSlider className="related-grid reference-product-grid hide-scrollbars" innerRef={setupRef}>
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
        </DraggableSlider>
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
        <div className="section-intro" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">Related hire products</div>
            <h2>You may also like</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href="/products" style={{ fontSize: "14px", fontWeight: "bold", color: "#0a2b49" }}>View the complete catalogue →</a>
          </div>
        </div>
        <DraggableSlider className="related-grid reference-product-grid hide-scrollbars" innerRef={relatedRef}>
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
        </DraggableSlider>
      </section>
      <section className="recent-products">
        <div className="eyebrow">Your hire shortlist</div>
        <h2>Recently viewed</h2>
        <DraggableSlider className="hide-scrollbars" innerRef={recentRef}>
          {hireProducts.slice(0, 8).map((x) => (
            <a href={`/product-${x.slug}`} key={x.slug}>
              <img src={x.image} alt={x.name} />
              <span>
                <b>{x.name}</b>
                <small>{x.price}</small>
              </span>
            </a>
          ))}
        </DraggableSlider>
      </section>
    </>
  );
}
