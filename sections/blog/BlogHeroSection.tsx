import React from "react";
import blogData from "@/data/pages/blog.json";

interface BlogHeroSectionProps {
  query: string;
  setQuery: (val: string) => void;
}

export function BlogHeroSection({ query, setQuery }: BlogHeroSectionProps) {
  const { hero } = blogData;
  return (
    <section className="blog-hero">
      <div>
        <span>{hero.eyebrow}</span>
        <h1>
          The SK Event
          <br />
          Planning Guide
        </h1>
        <p>{hero.description}</p>
        <label>
          ⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={hero.searchPlaceholder} />
          <button>Search</button>
        </label>
      </div>
      <img src={hero.image} alt={hero.imageAlt} />
    </section>
  );
}
