import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import packagesData from "@/data/pages/packages.json";

interface PackagesPageProps {
  detail?: string;
  eventPackages: any[];
}

export function PackagesPage({ detail, eventPackages }: PackagesPageProps) {
  const selected = eventPackages.find((x) => x.slug === detail);

  if (selected) {
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
          <div className="product-crumb">
            <a href="/packages">Packages</a>
            <span>›</span>
            {selected.title}
          </div>
          <section className="package-detail">
            <img src={selected.image} alt={selected.title} />
            <div>
              <div className="eyebrow">
                {selected.event} · {selected.guests}
              </div>
              <h1>{selected.title}</h1>
              <p>{packagesData.detail.description}</p>
              <div className="package-price">
                {selected.price}
                <small>{packagesData.detail.priceNote}</small>
              </div>
              <h3>{packagesData.detail.inclusionsHeading}</h3>
              <p>{selected.items}</p>
              <div className="package-options">
                <label>
                  <span>Guest count</span>
                  <input defaultValue={selected.guests.split(" ")[0]} />
                </label>
                <label>
                  <span>Service</span>
                  <select>
                    <option>Delivery & collection</option>
                    <option>Warehouse pickup & return</option>
                  </select>
                </label>
              </div>
              <a className="public-cta" href={packagesData.detail.ctaHref}>
                {packagesData.detail.ctaText}
              </a>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    );
  }

  const { landingHero } = packagesData;

  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="image-hero">
          <img src={landingHero.image} alt={landingHero.imageAlt} />
          <div>
            <div className="eyebrow">{landingHero.eyebrow}</div>
            <h1>{landingHero.title}</h1>
            <p>{landingHero.description}</p>
            <a className="public-cta" href={landingHero.cta.href}>
              {landingHero.cta.text}
            </a>
          </div>
        </section>
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
      </main>
      <PublicFooter />
    </div>
  );
}
