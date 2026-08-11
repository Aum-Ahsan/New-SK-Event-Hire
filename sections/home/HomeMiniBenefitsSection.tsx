import React from "react";
import homeData from "@/data/pages/home.json";

const defaultIcons = [
  // Professionally cleaned - Checkmark / Sparkle
  <svg key="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>,
  // Flexible hire - Circular refresh arrows
  <svg key="refresh" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
  </svg>,
  // Delivery & setup - Truck
  <svg key="truck" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>,
  // Real people to help - Headphones
  <svg key="headphones" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
];

export function HomeMiniBenefitsSection() {
  const { miniBenefitsHeading, miniBenefits } = homeData as any;
  const heading = miniBenefitsHeading || "Reliable equipment. Clear pricing. Friendly local support.";
  const items = miniBenefits || [
    { title: "Professionally cleaned", subtitle: "Checked before every hire" },
    { title: "Flexible hire", subtitle: "Short and long-term options" },
    { title: "Delivery & setup", subtitle: "Across Melbourne" },
    { title: "Real people to help", subtitle: "Planning support when needed" }
  ];

  return (
    <section className="mini-benefits-section">
      <h3 className="mini-benefits-heading">{heading}</h3>
      <div className="mini-benefits-grid">
        {items.map((b: any, i: number) => (
          <div className="mini-benefit-item" key={b.title || i}>
            <div className="mini-benefit-icon-badge">
              {defaultIcons[i % defaultIcons.length]}
            </div>
            <div className="mini-benefit-text">
              <strong className="mini-benefit-title">{b.title}</strong>
              <span className="mini-benefit-subtitle">{b.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
