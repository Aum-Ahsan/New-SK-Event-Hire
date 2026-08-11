import React from "react";
import homeData from "@/data/pages/home.json";
import { eventTypes } from "@/components/common/CategoryCards";

export function HomeSearchSection() {
  const { search } = homeData;
  return (
    <section className="planning-search">
      <div className="search-title">
        <div>
          <b>{search.title}</b>
          <span>{search.subtitle}</span>
        </div>
        <a href={search.briefLink.href}>{search.briefLink.text}</a>
      </div>
      <div className="search-fields home-availability-fields">
        <label>
          <span>EVENT TYPE</span>
          <select defaultValue="Wedding or engagement">
            {eventTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          <span>EVENT DATE</span>
          <input type="date" defaultValue="2026-11-14" />
        </label>
        <label>
          <span>RETURN DATE</span>
          <input type="date" defaultValue="2026-11-15" />
        </label>
        <label>
          <span>LOCATION</span>
          <input defaultValue="Melbourne VIC" />
        </label>
        <label>
          <span>NUMBER OF GUESTS</span>
          <input type="number" min="1" defaultValue="80" />
        </label>
        <a href="/products">{search.buttonText}</a>
      </div>
    </section>
  );
}
