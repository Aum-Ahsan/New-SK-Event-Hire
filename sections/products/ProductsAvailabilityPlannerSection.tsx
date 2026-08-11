import React from "react";
import { eventTypes } from "@/components/common/CategoryCards";

interface ProductsAvailabilityPlannerSectionProps {
  availability: string;
  eventType: string;
  setEventType: (val: string) => void;
  eventDate: string;
  setEventDate: (val: string) => void;
  returnDate: string;
  setReturnDate: (val: string) => void;
  postcode: string;
  setPostcode: (val: string) => void;
  guestCount: number;
  setGuestCount: (val: number) => void;
  setAvailability: (val: string) => void;
  setPage: (val: number) => void;
}

export function ProductsAvailabilityPlannerSection({
  availability,
  eventType,
  setEventType,
  eventDate,
  setEventDate,
  returnDate,
  setReturnDate,
  postcode,
  setPostcode,
  guestCount,
  setGuestCount,
  setAvailability,
  setPage,
}: ProductsAvailabilityPlannerSectionProps) {
  return (
    <section className="planning-search catalogue-planner">
      <div className="search-title">
        <div>
          <b>See what’s available for your event</b>
          <span>Set your dates, location and guest count to check relevant hire stock.</span>
        </div>
        <small>{availability}</small>
      </div>
      <div className="search-fields catalogue-availability-fields">
        <label>
          <span>EVENT TYPE</span>
          <select
            value={eventType === "All" ? eventTypes[0] : eventType}
            onChange={(e) => {
              setEventType(e.target.value);
              setPage(1);
            }}
          >
            {eventTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          <span>EVENT DATE</span>
          <input id="event-date" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <label>
          <span>RETURN DATE</span>
          <input id="return-date" type="date" min={eventDate} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </label>
        <label>
          <span>POSTCODE</span>
          <input id="event-postcode" inputMode="numeric" value={postcode} onChange={(e) => setPostcode(e.target.value.replace(/\D/g, "").slice(0, 4))} />
        </label>
        <label>
          <span>NUMBER OF GUESTS</span>
          <input type="number" min="1" value={guestCount} onChange={(e) => setGuestCount(Math.max(1, Number(e.target.value) || 1))} />
        </label>
        <button
          onClick={() =>
            setAvailability(
              eventDate && returnDate && postcode.length === 4
                ? `42 products checked for ${eventDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")} · ${guestCount} guests · ${postcode}`
                : "Complete both dates and a four-digit postcode."
            )
          }
        >
          Check availability
        </button>
      </div>
    </section>
  );
}
