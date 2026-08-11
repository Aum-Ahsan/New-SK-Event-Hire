import React from "react";
import accountData from "@/data/pages/account.json";

export function AccountActivityPanelSection() {
  const { activityPanel } = accountData as any;
  const eyebrow = activityPanel?.eyebrow || "Recent activity";
  const title = activityPanel?.title || "What changed";
  const viewAllText = activityPanel?.viewAllText || "View all activity →";
  const activities = activityPanel?.activities || [
    { time: "Today · 9:10am", title: "Warehouse preparation scheduled", subtitle: "Booking SK-261114-042" },
    { time: "Yesterday · 4:32pm", title: "Quotation ready to review", subtitle: "Q-260724-084" },
    { time: "18 July · 2:43pm", title: "Deposit received", subtitle: "$1,280.00 · Visa ending 4821" },
    { time: "16 July · 11:08am", title: "Reward cashback pending", subtitle: "$38.40 after completion" }
  ];

  return (
    <section className="card account-panel">
      <div className="section-head">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
        </div>
        <a href="#">{viewAllText}</a>
      </div>
      {activities.map((x: any) => (
        <div className="activity-row" key={x.time}>
          <small>{x.time}</small>
          <b>{x.title}</b>
          <span>{x.subtitle}</span>
          <a href="#">View</a>
        </div>
      ))}
    </section>
  );
}
