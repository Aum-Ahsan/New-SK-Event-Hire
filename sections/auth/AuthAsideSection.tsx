import React from "react";
import authData from "@/data/pages/auth.json";

export function AuthAsideSection() {
  const { aside } = authData as any;
  const brandName = aside?.brandName || "EVENT HIRE";
  const brandSubtitle = aside?.brandSubtitle || "CUSTOMER ACCOUNT";
  const eyebrow = aside?.eyebrow || "Plan with confidence";
  const title = aside?.title || "Quotes, bookings and event logistics in one calm place.";
  const description = aside?.description || "Securely review proposals, make payments, follow deliveries and keep every document connected.";
  const footer = aside?.footer || "Melbourne event hire & planning";

  return (
    <aside>
      <a className="public-brand inverse" href="/">
        <span>SK</span>
        <b>
          {brandName}<small>{brandSubtitle}</small>
        </b>
      </a>
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <small>{footer}</small>
    </aside>
  );
}
