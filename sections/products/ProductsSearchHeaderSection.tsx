import React from "react";
import productsData from "@/data/pages/products.json";

interface ProductsSearchHeaderSectionProps {
  query: string;
  setQuery: (val: string) => void;
  sort: string;
  setSort: (val: string) => void;
}

export function ProductsSearchHeaderSection({
  query,
  setQuery,
  sort,
  setSort,
}: ProductsSearchHeaderSectionProps) {
  const { searchHeader } = productsData as any;
  const placeholder = searchHeader?.placeholder || 'Search "Tiffany chair", "heater" or "6m marquee"';
  const buttonText = searchHeader?.buttonText || "Search";
  const sortLabel = searchHeader?.sortLabel || "Sort by";

  return (
    <section className="catalogue-search">
      <label>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', color: '#8898a7', flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder} />
        <button type="button">{buttonText}</button>
      </label>
      <span>
        {sortLabel}{" "}
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
  );
}
