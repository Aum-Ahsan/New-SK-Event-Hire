import React from "react";
import accountData from "@/data/pages/account.json";

interface AccountCardGridSectionProps {
  cards?: [string, string, string][];
  kind?: string;
}

export function AccountCardGridSection({ cards, kind }: AccountCardGridSectionProps) {
  const defaultCards = (accountData as any).cardGrid?.cards?.map((c: any) => [c.tag, c.title, c.detail]) || [];
  const list = cards || defaultCards;

  return (
    <div className="account-card-grid">
      {list.map((x: any, i: number) => (
        <article className="card account-card" key={x[0]}>
          <i>{["◇", "▦", "▤", "✦"][i % 4]}</i>
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
