import React from "react";
import accountData from "@/data/pages/account.json";

interface AccountHeroSectionProps {
  d?: { active: string; eyebrow: string; title: string; text: string };
  kind?: string;
}

export function AccountHeroSection({ d, kind }: AccountHeroSectionProps) {
  const data = d || (accountData as any).hero || {
    active: "Account",
    eyebrow: "Welcome back",
    title: "Account Overview",
    text: "Manage your bookings, quotes, rewards, and account settings."
  };

  return (
    <>
      <div className="crumb">
        {data.active} <span>›</span> Overview
      </div>
      <section className="page-hero">
        <div>
          <div className="eyebrow">{data.eyebrow}</div>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
        </div>
        <a className="primary account-action" href={kind === "quotes" ? "/create-quote-01" : "/contact"}>
          {kind === "quotes" ? "Create new quotation" : "Get help"} →
        </a>
      </section>
    </>
  );
}
