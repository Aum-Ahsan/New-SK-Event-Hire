import React from "react";
import collectionsData from "@/data/pages/collections.json";

interface CollectionsHeroSectionProps {
  title: string;
  type?: string;
}

export function CollectionsHeroSection({ title, type }: CollectionsHeroSectionProps) {
  const { hero } = collectionsData as any;
  const eyebrow = hero?.eyebrow || "Curated event collections";
  const defaultDesc = hero?.description || "Browse coordinated products and editable packages selected around the type of event you are planning.";
  const typeDesc = hero?.typeDescription || "Build a coordinated wedding from ceremony seating to reception dining, lighting and late-night lounge areas.";

  return (
    <section className="simple-hero">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{type ? typeDesc : defaultDesc}</p>
    </section>
  );
}
