import React from "react";

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
  return (
    <section className="catalogue-search">
      <label>
        ⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={'Search “Tiffany chair”, “heater” or “6m marquee”'} />
        <button type="button">Search</button>
      </label>
      <span>
        Sort by{" "}
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
