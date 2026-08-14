import React, { useState } from "react";
import productDetailData from "@/data/pages/product-detail.json";

interface ProductDetailTabsSectionProps {
  scrollToSection: (id: string) => void;
}

export function ProductDetailTabsSection({ scrollToSection }: ProductDetailTabsSectionProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const handleClick = (id: string) => {
    setActiveTab(id);
    scrollToSection(id);
  };

  return (
    <nav className="detail-tabs" aria-label="Product detail sections">
      <button className={activeTab === "overview" ? "active" : ""} onClick={() => handleClick("overview")}>Overview</button>
      <button className={activeTab === "included" ? "active" : ""} onClick={() => handleClick("included")}>What’s included</button>
      <button className={activeTab === "delivery" ? "active" : ""} onClick={() => handleClick("delivery")}>Delivery & setup</button>
      <button className={activeTab === "safety" ? "active" : ""} onClick={() => handleClick("safety")}>Safety</button>
      <button className={activeTab === "reviews" ? "active" : ""} onClick={() => handleClick("reviews")}>Reviews</button>
      <button className={activeTab === "compare" ? "active" : ""} onClick={() => handleClick("compare")}>Compare</button>
    </nav>
  );
}
