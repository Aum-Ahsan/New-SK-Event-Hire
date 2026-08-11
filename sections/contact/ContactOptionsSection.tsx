import React from "react";
import contactData from "@/data/pages/contact.json";

export function ContactOptionsSection() {
  const { optionsHeading, options } = contactData;
  return (
    <section className="contact-options editorial-section">
      <span>{optionsHeading.eyebrow}</span>
      <h2>{optionsHeading.title}</h2>
      <div>
        {options.map((x, i) => (
          <article key={x[0]}>
            <i>{["⌕", "✉", "⌖", "◇"][i]}</i>
            <span>{x[0]}</span>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
            <a href={x[3]}>Start here →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
