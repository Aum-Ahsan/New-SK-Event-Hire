import React from "react";
import genericData from "@/data/pages/generic.json";

export function GenericCtaSection() {
  const { cta } = genericData as any;
  const eyebrow = cta?.eyebrow || "Build your event brief";
  const title = cta?.title || "Ready to check products, dates and logistics?";
  const buttonText = cta?.buttonText || "Start a quotation request";
  const buttonHref = cta?.buttonHref || "/request-quote";

  return (
    <section className="final-cta compact">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <a className="public-cta" href={buttonHref}>
        {buttonText}
      </a>
    </section>
  );
}
