import React from "react";
import helpData from "@/data/pages/help.json";

interface HelpHeroSectionProps {
  query: string;
  setQuery: (val: string) => void;
  jump: (id: string) => void;
}

export function HelpHeroSection({ query, setQuery, jump }: HelpHeroSectionProps) {
  const { hero } = helpData;
  return (
    <section className="help-hero">
      <div>
        <span>{hero.eyebrow}</span>
        <h1>
          How can we
          <br />
          help?
        </h1>
        <p>{hero.description}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            jump("search-help");
          }}
        >
          <label>
            ⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={hero.placeholder} />
          </label>
          <button>Search help</button>
        </form>
        <small>{hero.popular}</small>
      </div>
      <div className="help-illustration">
        <i>?</i>
        <b>⌕</b>
        <span>HELP</span>
      </div>
    </section>
  );
}
