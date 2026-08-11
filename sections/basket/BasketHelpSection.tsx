import React from "react";
import basketData from "@/data/pages/basket.json";

export function BasketHelpSection() {
  const { help } = basketData;
  return (
    <section className="checkout-help">
      <div>
        <span>{help.eyebrow}</span>
        <h2>{help.title}</h2>
        <p>{help.description}</p>
      </div>
      <a href={help.phone.href}>{help.phone.text}</a>
      <a href={help.message.href}>{help.message.text}</a>
    </section>
  );
}
