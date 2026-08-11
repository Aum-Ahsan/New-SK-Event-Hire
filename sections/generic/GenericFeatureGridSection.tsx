import React from "react";
import genericData from "@/data/pages/generic.json";

interface GenericFeatureGridSectionProps {
  items?: [string, string][];
}

export function GenericFeatureGridSection({ items }: GenericFeatureGridSectionProps) {
  const { featureGrid } = genericData as any;
  const list = items || featureGrid?.items || [
    ["Professional Delivery & Setup", "On-time arrival and placement by experienced crew."],
    ["Clean & Maintained Stock", "Inspected and sanitized before every hire."],
    ["Flexible Rental Duration", "Single day, multi-day, or long term rental options."]
  ];
  const askText = featureGrid?.askText || "Ask about this →";

  return (
    <section className="public-section">
      <div className="feature-grid">
        {list.map((x: any, i: number) => (
          <article className="feature-card" key={x[0]}>
            <i>{String(i + 1).padStart(2, "0")}</i>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
            <a href="/contact">{askText}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
