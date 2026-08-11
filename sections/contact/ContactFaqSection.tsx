import React from "react";
import contactData from "@/data/pages/contact.json";

export function ContactFaqSection() {
  const { faq } = contactData;
  return (
    <section className="contact-faq">
      <header>
        <span>{faq.eyebrow}</span>
        <h2>{faq.title}</h2>
      </header>
      <div>
        {faq.items.map((q, i) => (
          <details key={q} open={i === 0}>
            <summary>
              {q}
              <span>＋</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
