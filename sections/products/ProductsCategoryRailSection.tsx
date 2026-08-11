import React from "react";
import productsData from "@/data/pages/products.json";
import { categories } from "@/components/common/CategoryCards";

interface ProductsCategoryRailSectionProps {
  category: string;
  setCategory: (val: string) => void;
  categoryRail: React.RefObject<HTMLDivElement | null>;
  drag: React.MutableRefObject<{ active: boolean; start: number; left: number }>;
}

export function ProductsCategoryRailSection({
  category,
  setCategory,
  categoryRail,
  drag,
}: ProductsCategoryRailSectionProps) {
  const { categoryRail: railConfig } = productsData as any;
  const eyebrow = railConfig?.eyebrow || "Browse your way";
  const title = railConfig?.title || "Browse by subcategory";
  const dragText = railConfig?.dragText || "Click and drag to browse";
  const viewAllText = railConfig?.viewAllText || "View all categories";

  return (
    <section className="category-rail">
      <div className="eyebrow">{eyebrow}</div>
      <div className="rail-head">
        <h2>{title}</h2>
        <div className="rail-actions">
          <span>{dragText}</span>
          <button aria-label="Previous categories" onClick={() => categoryRail.current?.scrollBy({ left: -460, behavior: "smooth" })}>
            ←
          </button>
          <button aria-label="Next categories" onClick={() => categoryRail.current?.scrollBy({ left: 460, behavior: "smooth" })}>
            →
          </button>
          <button onClick={() => setCategory("All")}>{viewAllText}</button>
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
  );
}
