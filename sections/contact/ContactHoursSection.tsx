import React from "react";
import contactData from "@/data/pages/contact.json";

export function ContactHoursSection() {
  const { hours } = contactData;
  return (
    <section className="hours editorial-section">
      <div>
        <span>{hours.eyebrow}</span>
        <h2>{hours.title}</h2>
        <p>{hours.description}</p>
      </div>
      <dl>
        {hours.list.map((item, i) => (
          <div key={i}>
            <dt>{item.term}</dt>
            <dd>{item.details}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
