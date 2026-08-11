import React, { useRef, useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { ProductsHeroSection } from "@/sections/products/ProductsHeroSection";
import { ProductsAvailabilityPlannerSection } from "@/sections/products/ProductsAvailabilityPlannerSection";
import { ProductsCategoryRailSection } from "@/sections/products/ProductsCategoryRailSection";
import { ProductsSearchHeaderSection } from "@/sections/products/ProductsSearchHeaderSection";
import { ProductsWorkspaceSection } from "@/sections/products/ProductsWorkspaceSection";
import { ProductsCtaSection } from "@/sections/products/ProductsCtaSection";

export function ProductsPage({ hireProducts }: { hireProducts: any[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(true);
  const [eventType, setEventType] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("recommended");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [page, setPage] = useState(1);
  const [eventDate, setEventDate] = useState("2026-09-12");
  const [returnDate, setReturnDate] = useState("2026-09-14");
  const [postcode, setPostcode] = useState("3000");
  const [guestCount, setGuestCount] = useState(80);
  const categoryRail = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, start: 0, left: 0 });
  const [availability, setAvailability] = useState("Set your dates, postcode and guest count, then check availability.");

  const baseListing = [...hireProducts];
  const listing = baseListing
    .filter((p) => {
      const matchesQuery = `${p.name} ${p.category} ${p.summary}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      const eventCategoryMap: Record<string, string[]> = {
        "Wedding or engagement": ["Chairs", "Tables", "Marquees", "Lighting", "Tableware", "Décor", "Flooring & staging", "Lounge & bar"],
        "Birthday or private party": ["Chairs", "Tables", "Lighting", "Décor", "Lounge & bar"],
        "Corporate event": ["Chairs", "Tables", "Lighting", "Flooring & staging", "Lounge & bar"],
        "Outdoor garden party": ["Chairs", "Tables", "Marquees", "Lighting", "Lounge & bar"],
      };
      const matchesEvent = eventType === "All" || eventCategoryMap[eventType]?.includes(p.category);
      const numericPrice = Number(p.price.replace(/[^0-9.]/g, "")) || 0;
      return matchesQuery && matchesCategory && matchesEvent && numericPrice <= maxPrice;
    })
    .sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : sort === "za"
        ? b.name.localeCompare(a.name)
        : sort === "low"
        ? parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""))
        : sort === "high"
        ? parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, ""))
        : sort === "new"
        ? b.slug.localeCompare(a.slug)
        : 0
    );

  const pageSize = 9;
  const pageCount = Math.max(1, Math.ceil(listing.length / pageSize));
  const visibleProducts = listing.slice((page - 1) * pageSize, page * pageSize);

  const goToPage = (next: number) => {
    setPage(Math.min(pageCount, Math.max(1, next)));
    document.querySelector(".results-head")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setAvailableOnly(false);
    setEventType("All");
    setMaxPrice(3000);
    setPage(1);
  };

  return (
    <div className="public-site approved-catalogue">
      <PublicHeader active="Hire Products" />
      <main>
        <ProductsHeroSection />
        <ProductsAvailabilityPlannerSection
          availability={availability}
          eventType={eventType}
          setEventType={setEventType}
          eventDate={eventDate}
          setEventDate={setEventDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          postcode={postcode}
          setPostcode={setPostcode}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
          setAvailability={setAvailability}
          setPage={setPage}
        />
        <ProductsCategoryRailSection category={category} setCategory={setCategory} categoryRail={categoryRail} drag={drag} />
        <ProductsSearchHeaderSection query={query} setQuery={setQuery} sort={sort} setSort={setSort} />
        <ProductsWorkspaceSection
          availableOnly={availableOnly}
          setAvailableOnly={setAvailableOnly}
          category={category}
          setCategory={setCategory}
          eventType={eventType}
          setEventType={setEventType}
          setPage={setPage}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          clearFilters={clearFilters}
          listing={listing}
          visibleProducts={visibleProducts}
          view={view}
          setView={setView}
          page={page}
          pageCount={pageCount}
          goToPage={goToPage}
          availability={availability}
        />
        <ProductsCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}
