import React from "react";
import productDetailData from "@/data/pages/product-detail.json";

interface ProductDetailTabsSectionProps {
  scrollToSection: (id: string) => void;
}

export function ProductDetailTabsSection({ scrollToSection }: ProductDetailTabsSectionProps) {
  return (
    <nav className="detail-tabs" aria-label="Product detail sections">
      <button onClick={() => scrollToSection("overview")}>Overview</button>
      <button onClick={() => scrollToSection("included")}>What’s included</button>
      <button onClick={() => scrollToSection("delivery")}>Delivery & setup</button>
      <button onClick={() => scrollToSection("safety")}>Safety</button>
      <button onClick={() => scrollToSection("reviews")}>Reviews</button>
      <button onClick={() => scrollToSection("compare")}>Compare</button>
    </nav>
  );
}
