import React from "react";

export function AccountActivityPanelSection() {
  return (
    <section className="card account-panel">
      <div className="section-head">
        <div>
          <div className="eyebrow">Recent activity</div>
          <h2>What changed</h2>
        </div>
        <a href="#">View all activity →</a>
      </div>
      {[
        ["Today · 9:10am", "Warehouse preparation scheduled", "Booking SK-261114-042"],
        ["Yesterday · 4:32pm", "Quotation ready to review", "Q-260724-084"],
        ["18 July · 2:43pm", "Deposit received", "$1,280.00 · Visa ending 4821"],
        ["16 July · 11:08am", "Reward cashback pending", "$38.40 after completion"],
      ].map((x) => (
        <div className="activity-row" key={x[0]}>
          <small>{x[0]}</small>
          <b>{x[1]}</b>
          <span>{x[2]}</span>
          <a href="#">View</a>
        </div>
      ))}
    </section>
  );
}
