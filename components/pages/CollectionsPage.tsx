import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { CollectionsHeroSection } from "@/sections/collections/CollectionsHeroSection";
import { CollectionsGridSection } from "@/sections/collections/CollectionsGridSection";

interface CollectionsPageProps {
  type?: string;
  hireProducts: any[];
}

export function CollectionsPage({ type, hireProducts }: CollectionsPageProps) {
  const title = type === "weddings" ? "Wedding hire collection" : "Shop by event";
  const cards: [string, string, string, string][] = [
    ["Weddings", "Ceremony, reception, dining and dance-floor essentials.", "/images/hero-event.png", "/collection-weddings"],
    ["Birthdays & parties", "Flexible furniture, bar, lighting and styling pieces.", "/images/lounge-product.png", "/packages"],
    ["Corporate events", "Presentation, dining, networking and branded-event equipment.", "/images/tables-product.png", "/packages"],
    ["Outdoor events", "Marquees, flooring, weather walls, lighting and heaters.", "/images/marquee-product.png", "/packages"],
  ];

  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <CollectionsHeroSection title={title} type={type} />
        <CollectionsGridSection cards={cards} type={type} hireProducts={hireProducts} />
      </main>
      <PublicFooter />
    </div>
  );
}
