import React from "react";
import legalData from "@/data/pages/legal.json";

interface LegalDirectorySectionProps {
  info: readonly (readonly [string, string, string])[];
}

export function LegalDirectorySection({ info }: LegalDirectorySectionProps) {
  const { directory } = legalData as any;
  const kicker = directory?.kicker || "POLICY LIBRARY";
  const title = directory?.title || "Find the information you need";
  const subtitle = directory?.subtitle || "Every policy is written to explain what you can expect and what we need from you.";

  return (
    <section className="legal-directory legal-width">
      <header>
        <span>{kicker}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <div>
        {info.map((x, i) => (
          <a href={`#${x[2]}`} key={x[0]}>
            <i>{["▤", "$", "↻", "!", "▱", "◇", "◉", "♡"][i % 8]}</i>
            <span>
              <b>{x[0]}</b>
              <small>{x[1]}</small>
            </span>
            <em>→</em>
          </a>
        ))}
      </div>
    </section>
  );
}
