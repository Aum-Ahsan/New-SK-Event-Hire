import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeMiniBenefitsSection() {
  const { miniBenefits } = homeData;
  return (
    <section className="mini-benefits">
      {miniBenefits.map((b, i) => (
        <span key={i}>
          <i>✓</i>
          <b>
            {b.title}
            <small>{b.subtitle}</small>
          </b>
        </span>
      ))}
    </section>
  );
}
