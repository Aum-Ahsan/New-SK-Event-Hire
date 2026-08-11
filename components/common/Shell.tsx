import React from "react";

export function Shell({ children, active = "Bookings" }: { children: React.ReactNode; active?: string }) {
  const nav = ["Overview", "Quotes", "Bookings", "Payments & documents", "Delivery & returns", "Messages", "Rewards", "Affiliate", "Saved products", "Your reviews", "Profile", "Settings & security"];
  const hrefs = ["/overview", "/quotes", "/bookings", "/payments-documents", "/delivery-returns", "/messages", "/rewards", "/affiliate", "/saved-products", "/reviews-account", "/profile", "/settings-security"];
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span>SK</span><b>EVENT HIRE<small>MY ACCOUNT</small></b></div>
      <div className="person"><i>AM</i><b>Alex Morgan<small>Verified customer</small></b></div>
      <nav>{nav.map((n, i) => <a className={n === active ? "active" : ""} key={n} href={hrefs[i]}><span>{["⌂","▤","▦","▭","▱","▢","♢","⌘","♡","☆","♙","⚙"][i]}</span>{n}</a>)}</nav>
      <div className="support"><b>Need help?</b><p>Our event team is available Monday–Saturday.</p><a href="#">Contact support</a></div>
    </aside>
    <div className="workspace">
      <header><div>Customer account <b>›</b> {active}</div><div className="head-actions"><label>⌕ <input placeholder="Search bookings, quotes or documents" /></label><button className="bell">♧<sup>3</sup></button><a className="new-booking" href="/create-quote-01">Create new quote&nbsp; ＋</a></div></header>
      {children}
    </div>
    <nav className="mobile-nav"><a>⌂<small>Home</small></a><a>⌕<small>Browse</small></a><a className="active">▦<small>Bookings</small></a><a>▢<small>Messages</small></a><a>♙<small>Profile</small></a></nav>
  </div>;
}
