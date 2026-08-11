import React from "react";
import paymentData from "@/data/pages/payment.json";

export function PaymentHelpSection() {
  const { help } = paymentData;
  return (
    <section className="checkout-help">
      <div>
        <span>{help.eyebrow}</span>
        <h2>{help.title}</h2>
        <p>{help.description}</p>
      </div>
      <a href={help.phone.href}>{help.phone.text}</a>
      <a href={help.support.href}>{help.support.text}</a>
    </section>
  );
}
