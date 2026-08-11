import React from "react";

interface ProductDetailBreadcrumbsSectionProps {
  category: string;
  name: string;
}

export function ProductDetailBreadcrumbsSection({ category, name }: ProductDetailBreadcrumbsSectionProps) {
  return (
    <div className="product-crumb">
      <a href="/">Home</a>
      <span>›</span>
      <a href="/products">Hire Products</a>
      <span>›</span>
      <a href={`/products#${category}`}>{category}</a>
      <span>›</span>
      {name}
    </div>
  );
}
