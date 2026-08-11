import React, { useState } from "react";
import homeData from "@/data/pages/home.json";

export function HomeFaqSection() {
  const { faqHeading, faqs } = homeData;
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <section className="home-section faq">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{faqHeading.eyebrow}</div>
          <h2>{faqHeading.title}</h2>
        </div>
        <a href={faqHeading.link.href}>{faqHeading.link.text}</a>
      </div>
      <div>
        {faqs.map((q, i) => (
          <div className={`faq-item ${faqOpen === i ? "open" : ""}`} key={q}>
            <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}>
              {q}
              <span>{faqOpen === i ? "−" : "＋"}</span>
            </button>
            {faqOpen === i && (
              <p>
                {i === 0
                  ? "Standard hire normally covers your agreed event period, with delivery and collection windows confirmed in the quotation. Longer hires can be arranged."
                  : "Our team will confirm the exact option, timing and any associated charge in your quotation."}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
