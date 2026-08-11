import React from "react";

interface AccountHeroSectionProps {
  d: { active: string; eyebrow: string; title: string; text: string };
  kind: string;
}

export function AccountHeroSection({ d, kind }: AccountHeroSectionProps) {
  return (
    <>
      <div className="crumb">
        {d.active} <span>›</span> Overview
      </div>
      <section className="page-hero">
        <div>
          <div className="eyebrow">{d.eyebrow}</div>
          <h1>{d.title}</h1>
          <p>{d.text}</p>
        </div>
        <a className="primary account-action" href={kind === "quotes" ? "/create-quote-01" : "/contact"}>
          {kind === "quotes" ? "Create new quotation" : "Get help"} →
        </a>
      </section>
    </>
  );
}
