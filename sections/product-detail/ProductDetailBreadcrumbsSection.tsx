import React from "react";
import productDetailData from "@/data/pages/product-detail.json";

interface ProductDetailBreadcrumbsSectionProps {
  category: string;
  name: string;
}

export function ProductDetailBreadcrumbsSection({ category, name }: ProductDetailBreadcrumbsSectionProps) {
  const { breadcrumbs } = productDetailData as any;
  const root = breadcrumbs?.root || "Home";
  const hireProducts = breadcrumbs?.hireProducts || "Hire Products";

  return (
    <div className="product-crumb">
      <a href="/">{root}</a>
      <span>›</span>
      <a href="/products">{hireProducts}</a>
      <span>›</span>
      <a href={`/products#${category}`}>{category}</a>
      <span>›</span>
      {name}
    </div>
  );
}
