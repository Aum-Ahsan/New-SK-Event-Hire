import React from "react";
import paymentData from "@/data/pages/payment.json";

export function PaymentHeroSection() {
  const { intro } = paymentData;
  return (
    <section className="payment-intro">
      <div>
        <span>{intro.eyebrow}</span>
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
      </div>
      <aside>
        <b>{intro.asideTitle}</b>
        <small>{intro.asideDescription}</small>
        <a href={intro.helpLink.href}>{intro.helpLink.text}</a>
      </aside>
    </section>
  );
}
