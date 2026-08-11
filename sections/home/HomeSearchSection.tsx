import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeSearchSection() {
  const { search } = homeData;
  return (
    <section className="planning-search">
      <div className="search-title">
        <div>
          <b>{search.title}</b>
        </div>
        <a href={search.briefLink?.href || "/products"}>{search.briefLink?.text || "Browse without dates \u2192"}</a>
      </div>
      <div className="search-fields home-availability-fields">
        <label>
          <span>{search.eventDateLabel || "EVENT DATE"}</span>
          <input
            type="text"
            placeholder={search.eventDatePlaceholder || "Choose date"}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
          />
        </label>
        <label>
          <span>{search.returnDateLabel || "RETURN DATE"}</span>
          <input
            type="text"
            placeholder={search.returnDatePlaceholder || "Choose date"}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
          />
        </label>
        <label>
          <span>{search.postcodeLabel || "DELIVERY POSTCODE"}</span>
          <input
            type="text"
            placeholder={search.postcodePlaceholder || "Enter Melbourne postcode"}
          />
        </label>
        <label>
          <span>{search.guestsLabel || "GUESTS"}</span>
          <input
            type="text"
            placeholder={search.guestsPlaceholder || "How many?"}
          />
        </label>
        <a href="/products">{search.buttonText || "Check availability"}</a>
      </div>
      <p style={{ margin: "14px 0 0", fontSize: "12px", color: "#7c8a94", lineHeight: "1.4" }}>
        {search.subtitle || "No payment required. Availability and delivery are confirmed before your booking is approved."}
      </p>
    </section>
  );
}
