import React from "react";
import productsData from "@/data/pages/products.json";
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
  guestCount: number | "";
  setGuestCount: (val: number | "") => void;
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
  const { availabilityPlanner } = productsData as any;
  const title = availabilityPlanner?.title || "See what is available for your event";
  const subtitle = availabilityPlanner?.subtitle || "Set your dates, location and guest count to check relevant hire stock.";
  const buttonText = availabilityPlanner?.buttonText || "Check availability";

  const isChecked = availability.includes("products checked for");

  return (
    <section className="planning-search catalogue-planner">
      <div className="search-title">
        <div>
          <b>{title}</b>
          <span className={isChecked ? "availability-subtitle checked" : "availability-subtitle"}>
            {availability}
          </span>
        </div>
      </div>
      <div className="search-fields catalogue-availability-fields">
        <label>
          <span>EVENT TYPE</span>
          <select
            value={eventType === "All" ? "" : eventType}
            onChange={(e) => {
              setEventType(e.target.value);
              setPage(1);
            }}
          >
            <option value="" disabled hidden>Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          <span>EVENT DATE</span>
          <input id="event-date" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <label>
          <span>RETURN DATE</span>
          <input id="return-date" type="date" min={eventDate || undefined} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </label>
        <label>
          <span>POSTCODE</span>
          <input
            id="event-postcode"
            inputMode="numeric"
            placeholder="Postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.replace(/\D/g, "").slice(0, 4))}
          />
        </label>
        <label>
          <span>NUMBER OF GUESTS</span>
          <input
            type="number"
            min="1"
            placeholder="Guests"
            value={guestCount}
            onChange={(e) => {
              const val = e.target.value;
              setGuestCount(val === "" ? "" : Math.max(1, Number(val) || 1));
            }}
          />
        </label>
        <button
          onClick={() =>
            setAvailability(
              eventDate && returnDate && postcode.length === 4 && guestCount !== ""
                ? `42 products checked for ${eventDate.split("-").reverse().join("/")}–${returnDate.split("-").reverse().join("/")} · ${guestCount} guests · ${postcode}`
                : "Complete both dates, postcode and guest count to check availability."
            )
          }
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
