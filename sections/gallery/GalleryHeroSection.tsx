import React from "react";
import galleryData from "@/data/pages/gallery.json";

export function GalleryHeroSection() {
  const { hero } = galleryData;
  return (
    <section className="gallery-restored-hero">
      <div>
        <span>{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <a href={hero.ctaHref}>{hero.ctaText}</a>
      </div>
      <img src={hero.image} alt={hero.imageAlt} />
    </section>
  );
}
