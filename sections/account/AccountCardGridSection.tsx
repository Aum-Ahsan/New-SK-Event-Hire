import React from "react";

interface AccountCardGridSectionProps {
  cards: [string, string, string][];
  kind: string;
}

export function AccountCardGridSection({ cards, kind }: AccountCardGridSectionProps) {
  return (
    <div className="account-card-grid">
      {cards.map((x, i) => (
        <article className="card account-card" key={x[0]}>
          <i>{["◇", "▦", "▤", "✦"][i]}</i>
          <span>
            <small>{x[0]}</small>
            <b>{x[1]}</b>
            <em>{x[2]}</em>
          </span>
          <a href={kind === "quotes" && i === 0 ? "/quotation-details" : "#"}>Open →</a>
        </article>
      ))}
    </div>
  );
}
