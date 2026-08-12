import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeHeroSection() {
  const { hero } = homeData;
  const eyebrow = hero?.eyebrow || "MELBOURNE'S FRIENDLY EVENT HIRE TEAM";
  const title = hero?.title || "Everything you need for a beautiful, stress-free event.";
  const description = hero?.description || "Hire quality chairs, tables, marquees, heating, lighting and event essentials across Melbourne with friendly planning support when you need it.";
  const primaryCta = hero?.primaryCta || { text: "Browse hire products \u2192", href: "/products" };
  const secondaryCta = hero?.secondaryCta || { text: "Plan my event", href: "/planning" };

  return (
    <section className="home-hero">
      <img src={hero?.image || "/images/hero-event.png"} alt={hero?.imageAlt || "Beautiful outdoor event under marquee"} />
      <div className="home-hero-copy">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <a className="public-cta" href={primaryCta.href}>{primaryCta.text}</a>
          <a className="hero-light" href={secondaryCta.href}>{secondaryCta.text}</a>
        </div>
      </div>
    </section>
  );
}
