import React from "react";
import packagesData from "@/data/pages/packages.json";

interface PackagesDetailSectionProps {
  selected: any;
}

export function PackagesDetailSection({ selected }: PackagesDetailSectionProps) {
  return (
    <>
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
    </>
  );
}
