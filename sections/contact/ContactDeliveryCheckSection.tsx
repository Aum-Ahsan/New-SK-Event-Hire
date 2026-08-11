import React from "react";
import contactData from "@/data/pages/contact.json";

interface ContactDeliveryCheckSectionProps {
  postcode: string;
  setPostcode: (val: string) => void;
  area: string;
  checkArea: () => void;
}

export function ContactDeliveryCheckSection({
  postcode,
  setPostcode,
  area,
  checkArea,
}: ContactDeliveryCheckSectionProps) {
  const { deliveryCoverage } = contactData;
  return (
    <section id="delivery-area" className="delivery-check editorial-section">
      <div>
        <span>{deliveryCoverage.eyebrow}</span>
        <h2>{deliveryCoverage.title}</h2>
        <p>{deliveryCoverage.description}</p>
        <label>
          <input value={postcode} onChange={(e) => setPostcode(e.target.value)} aria-label="Postcode" />
          <button onClick={checkArea}>Check area</button>
        </label>
        <strong>{area}</strong>
      </div>
      <div className="area-results">
        {deliveryCoverage.results.map((res, i) => (
          <article className={res.type !== "default" ? res.type : ""} key={i}>
            <b>{res.title}</b>
            <small>{res.subtitle}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
