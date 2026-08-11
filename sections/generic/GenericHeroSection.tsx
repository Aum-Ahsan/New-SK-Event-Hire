import React from "react";
import genericData from "@/data/pages/generic.json";

interface GenericHeroSectionProps {
  p?: { eyebrow: string; title: string; text: string; image: string };
}

export function GenericHeroSection({ p }: GenericHeroSectionProps) {
  const data = p || (genericData as any).hero || {
    eyebrow: "Melbourne event hire",
    title: "Event Services & Hire Range",
    text: "Browse quality hire items and planning assistance for your event across Melbourne.",
    image: "/images/hero-event.png",
    primaryCta: "Request a quote",
    secondaryCta: "Talk to the team"
  };

  return (
    <section className="image-hero">
      <img src={data.image} alt={data.title} />
      <div>
        <div className="eyebrow">{data.eyebrow}</div>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
        <div className="hero-actions">
          <a className="public-cta" href="/request-quote">
            {data.primaryCta || "Request a quote"}
          </a>
          <a className="outline-cta" href="/contact">
            {data.secondaryCta || "Talk to the team"}
          </a>
        </div>
      </div>
    </section>
  );
}
