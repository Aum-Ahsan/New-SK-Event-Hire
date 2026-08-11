import React from "react";
import contactData from "@/data/pages/contact.json";

export function ContactBottomSection() {
  const { bottom } = contactData;
  return (
    <section className="contact-bottom">
      <div>
        <span>{bottom.eyebrow}</span>
        <h2>{bottom.title}</h2>
        <p>{bottom.description}</p>
      </div>
      <a href={bottom.links[0].href}>{bottom.links[0].text}</a>
      <a href={bottom.links[1].href}>{bottom.links[1].text}</a>
    </section>
  );
}
