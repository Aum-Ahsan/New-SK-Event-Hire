import React from "react";
import planningData from "@/data/pages/planning.json";

interface PlanningSupportChoiceSectionProps {
  support: string;
  setSupport: (val: string) => void;
}

export function PlanningSupportChoiceSection({ support, setSupport }: PlanningSupportChoiceSectionProps) {
  const { supportChoice } = planningData;
  return (
    <section className="planning-section support-choice">
      <header>
        <span>{supportChoice.eyebrow}</span>
        <h2>{supportChoice.title}</h2>
        <p>{supportChoice.description}</p>
      </header>
      <div>
        {supportChoice.options.map((x, i) => (
          <button
            type="button"
            className={support === x[0] ? "selected" : ""}
            onClick={() => setSupport(x[0])}
            key={x[0]}
          >
            <i>{["◉", "✦", "⌖", "◎", "✓"][i]}</i>
            <b>{x[0]}</b>
            <small>{x[1]}</small>
            <em>{support === x[0] ? "Selected" : "Choose support →"}</em>
          </button>
        ))}
      </div>
    </section>
  );
}
