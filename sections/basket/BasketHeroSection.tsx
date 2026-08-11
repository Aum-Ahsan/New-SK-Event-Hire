import React from "react";
import basketData from "@/data/pages/basket.json";

export function BasketHeroSection() {
  const { intro } = basketData;
  return (
    <section className="checkout-intro">
      <div>
        <span>{intro.eyebrow}</span>
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
      </div>
      <aside>
        <b>{intro.asideTitle}</b>
        <small>{intro.asideDescription}</small>
        <a href={intro.privacyLink.href}>{intro.privacyLink.text}</a>
      </aside>
    </section>
  );
}
