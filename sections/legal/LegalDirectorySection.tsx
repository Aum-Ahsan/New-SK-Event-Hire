import React from "react";

interface LegalDirectorySectionProps {
  info: readonly (readonly [string, string, string])[];
}

export function LegalDirectorySection({ info }: LegalDirectorySectionProps) {
  return (
    <section className="legal-directory legal-width">
      <header>
        <span>POLICY LIBRARY</span>
        <h2>Find the information you need</h2>
        <p>Every policy is written to explain what you can expect and what we need from you.</p>
      </header>
      <div>
        {info.map((x, i) => (
          <a href={`#${x[2]}`} key={x[0]}>
            <i>{["▤", "$", "↻", "!", "▱", "◇", "◉", "♡"][i]}</i>
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
