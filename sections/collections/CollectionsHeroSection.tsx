import React from "react";

interface CollectionsHeroSectionProps {
  title: string;
  type?: string;
}

export function CollectionsHeroSection({ title, type }: CollectionsHeroSectionProps) {
  return (
    <section className="simple-hero">
      <div className="eyebrow">Curated event collections</div>
      <h1>{title}</h1>
      <p>
        {type
          ? "Build a coordinated wedding from ceremony seating to reception dining, lighting and late-night lounge areas."
          : "Browse coordinated products and editable packages selected around the type of event you are planning."}
      </p>
    </section>
  );
}
