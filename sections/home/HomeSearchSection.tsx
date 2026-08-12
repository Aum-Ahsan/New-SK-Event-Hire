import React, { useState } from "react";
import homeData from "@/data/pages/home.json";
import { eventTypes } from "@/components/common/CategoryCards";

export function HomeSearchSection() {
  const { search } = homeData;
  const [eventType, setEventType] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [guests, setGuests] = useState<number | "">("");

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
          <span>EVENT TYPE</span>
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="" disabled hidden>Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{search.eventDateLabel || "EVENT DATE"}</span>
          <input
            type="text"
            placeholder={search.eventDatePlaceholder || "Choose date"}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
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
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
        <label>
          <span>{search.postcodeLabel || "DELIVERY POSTCODE"}</span>
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder={search.postcodePlaceholder || "Enter postcode"}
          />
        </label>
        <label>
          <span>{search.guestsLabel || "GUESTS"}</span>
          <input
            type="number"
            min="0"
            value={guests}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "") {
                setGuests("");
              } else {
                const parsed = parseInt(val, 10);
                setGuests(isNaN(parsed) ? "" : Math.max(0, parsed));
              }
            }}
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

