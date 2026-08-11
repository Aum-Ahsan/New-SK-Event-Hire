import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeServiceAreaSection() {
  const { serviceArea } = homeData as any;
  return (
    <section className="service-area-home">
      <div className="service-area-image-wrap">
        <img
          src={serviceArea?.image || "/images/warehouse-team.png"}
          alt={serviceArea?.imageAlt || "Melbourne delivery & pickup"}
          className="service-area-img"
        />
        <span className="service-area-badge">
          Melbourne delivery & pickup
        </span>
      </div>
      <div className="service-area-content">
        <div className="eyebrow">{serviceArea?.eyebrow || "DELIVERY & CUSTOMER PICKUP"}</div>
        <h2>{serviceArea?.title || "Event hire across Melbourne"}</h2>
        <p>{serviceArea?.description || "Enter your postcode to see delivery options and an indicative fee. Customer pickup is also available by appointment."}</p>
        <div className="area-search">
          <input placeholder={serviceArea?.inputPlaceholder || "Enter postcode"} />
          <a href={serviceArea?.buttonHref || "/contact"}>{serviceArea?.buttonText || "Check area"}</a>
        </div>
        <small>{serviceArea?.note || "Final delivery timing and pricing are confirmed with your booking."}</small>
      </div>
    </section>
  );
}
