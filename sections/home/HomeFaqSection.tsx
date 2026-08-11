import React, { useState } from "react";
import homeData from "@/data/pages/home.json";

export function HomeFaqSection() {
  const { faqHeading, faqs } = homeData as any;
  const [faqOpen, setFaqOpen] = useState<number>(-1);

  const faqList = (faqs as any[]) || [
    "How long is the standard hire period?",
    "Do you deliver, set up and collect?",
    "Can I collect and return the equipment myself?",
    "What happens if my event date changes?",
    "Is a security bond required?"
  ];

  return (
    <section className="home-section faq">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{faqHeading?.eyebrow || "FREQUENTLY ASKED"}</div>
          <h2>{faqHeading?.title || "Questions before you book?"}</h2>
        </div>
        {faqHeading?.link && (
          <a href={faqHeading.link.href}>{faqHeading.link.text}</a>
        )}
      </div>
      <div>
        {faqList.map((q: string, i: number) => (
          <div className={`faq-item ${faqOpen === i ? "open" : ""}`} key={q || i}>
            <button
              onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
              aria-expanded={faqOpen === i}
            >
              {q}
              <span>{faqOpen === i ? "−" : "＋"}</span>
            </button>
            {faqOpen === i && (
              <p>
                {i === 0
                  ? "Standard hire normally covers your agreed event period, with delivery and collection windows confirmed in the quotation. Longer hires can be arranged."
                  : i === 1
                  ? "Yes, delivery and setup are available across Melbourne. Collection windows will be confirmed with your quotation."
                  : i === 2
                  ? "Customer pickup is available by appointment at our Melbourne warehouse location."
                  : i === 3
                  ? "If your event date changes, let our team know as early as possible so we can update your quotation and check equipment availability."
                  : "A standard security bond is required for hires and will be refunded upon safe equipment return."}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
