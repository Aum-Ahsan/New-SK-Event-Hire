import React from "react";
import packagesData from "@/data/pages/packages.json";

interface PackagesGridSectionProps {
  eventPackages: any[];
}

export function PackagesGridSection({ eventPackages }: PackagesGridSectionProps) {
  return (
    <section className="public-section">
      <div className="package-grid">
        {eventPackages.map((p) => (
          <article className="package-card" key={p.slug}>
            <img src={p.image} alt={p.title} />
            <div>
              <small>
                {p.event} · {p.guests}
              </small>
              <h2>{p.title}</h2>
              <p>{p.items}</p>
              <footer>
                <b>{p.price}</b>
                <a href={`/package-${p.slug}`}>View & customise →</a>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
