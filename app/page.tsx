"use client";

import { useEffect, useRef, useState } from "react";
import { Shell } from "@/components/common/Shell";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { CategoryCards, categories, eventTypes } from "@/components/common/CategoryCards";
import { HomePage } from "@/components/pages/HomePage";
import { AboutPage as AboutPageImpl } from "@/components/pages/AboutPage";
import { ContactPage as ContactPageImpl } from "@/components/pages/ContactPage";
import { PlanningPage as PlanningPageImpl } from "@/components/pages/PlanningPage";
import { ProductsPage as ProductsPageImpl } from "@/components/pages/ProductsPage";
import { ProductDetailPage as ProductDetailPageImpl } from "@/components/pages/ProductDetailPage";
import { ComparePage as ComparePageImpl } from "@/components/pages/ComparePage";
import { PackagesPage as PackagesPageImpl } from "@/components/pages/PackagesPage";
import { CollectionsPage as CollectionsPageImpl } from "@/components/pages/CollectionsPage";
import { BasketPage as BasketPageImpl } from "@/components/pages/BasketPage";
import { GalleryPage as GalleryPageImpl } from "@/components/pages/GalleryPage";
import { ReviewsPage as ReviewsPageImpl } from "@/components/pages/ReviewsPage";
import { BlogPage as BlogPageImpl } from "@/components/pages/BlogPage";
import { HelpPage as HelpPageImpl } from "@/components/pages/HelpPage";
import { LegalPage as LegalPageImpl } from "@/components/pages/LegalPage";
import { SitemapPage as SitemapPageImpl } from "@/components/pages/SitemapPage";
import { PaymentPage as PaymentPageImpl } from "@/components/pages/PaymentPage";
import {
  PublicQuotePage as PublicQuotePageImpl,
  QuoteJourneyPage as QuoteJourneyPageImpl,
  PackagesCollectionsLanding as PackagesCollectionsLandingImpl,
  QuotationFlowPage,
} from "@/components/pages/QuotePage";
import { AuthPage as AuthPageImpl } from "@/components/pages/AuthPage";
import { AccountOverview as AccountOverviewImpl, accountData } from "@/components/pages/AccountPage";
import { GenericPublicPage as GenericPublicPageImpl, genericPages } from "@/components/pages/GenericPage";

type Stage = {
  key: string;
  title: string;
  eyebrow: string;
  description: string;
  step?: string;
  primary?: string;
  secondary?: string;
};

const stages: Stage[] = [
  { key: "bookings", eyebrow: "Rental orders", title: "Your bookings", description: "Follow confirmed rentals from preparation through delivery, hire, return and completion." },
  { key: "booking-details", eyebrow: "Confirmed booking", title: "Garden wedding", description: "Booking SK-261114-042 · Saturday, 14 November 2026", primary: "Track this order", secondary: "Request a change" },
  { key: "change-request", eyebrow: "Booking change", title: "What would you like to change?", description: "Choose one or more areas. Your booking stays confirmed while the team reviews your request.", step: "Step 1 of 4", primary: "Continue", secondary: "Back to booking" },
  { key: "change-details", eyebrow: "Booking change", title: "Tell us what needs changing", description: "Update the requested dates, quantities, items or logistics. Current details remain protected.", step: "Step 2 of 4", primary: "Review request", secondary: "Back" },
  { key: "change-review", eyebrow: "Booking change", title: "Review your change request", description: "Nothing changes until availability, pricing and logistics are checked and you approve any difference.", step: "Step 3 of 4", primary: "Submit request", secondary: "Edit request" },
  { key: "change-result", eyebrow: "Request received", title: "Your booking is still confirmed", description: "We’ll review the requested changes and reply by 5:00pm Friday, 24 July.", step: "Complete", primary: "View booking", secondary: "Message the team" },
  { key: "cancellation-request", eyebrow: "Cancellation request", title: "Tell us why you need to cancel", description: "Review the cancellation policy and estimated charge before continuing.", step: "Step 1 of 3", primary: "Review cancellation", secondary: "Keep booking" },
  { key: "cancellation-review", eyebrow: "Cancellation request", title: "Review cancellation and charges", description: "Confirm the booking, refund method and policy before submitting this request.", step: "Step 2 of 3", primary: "Confirm cancellation", secondary: "Go back" },
  { key: "cancellation-result", eyebrow: "Booking cancelled", title: "Your cancellation is confirmed", description: "Booking SK-261114-042 has been cancelled. Your refund is being returned to the original card.", step: "Complete", primary: "View cancelled booking", secondary: "Plan another event" },
  { key: "repeat-booking", eyebrow: "Repeat booking", title: "Plan a similar event", description: "We copied eligible items from your completed 40th birthday booking. Choose new dates and adjust quantities.", step: "Step 1 of 2", primary: "Check availability", secondary: "Cancel" },
  { key: "repeat-review", eyebrow: "Repeat booking", title: "Everything is available", description: "Review the copied items, new event timing and latest pricing before requesting a quotation.", step: "Step 2 of 2", primary: "Request quotation", secondary: "Edit booking" },
  { key: "order-tracking", eyebrow: "Live order tracking", title: "Your order is being prepared", description: "Garden wedding · Delivery Friday, 14 November · 10:00am–12:00pm", primary: "Message logistics", secondary: "View booking" },
];

const bookings = [
  { status: "Confirmed", title: "Garden wedding", ref: "SK-261114-042", date: "14–15 Nov 2026", place: "Richmond VIC", money: "$1,240 due", tone: "green" },
  { status: "Preparing", title: "Corporate lunch", ref: "SK-260908-018", date: "08–09 Sep 2026", place: "Docklands VIC", money: "Paid in full", tone: "amber" },
  { status: "Completed", title: "40th birthday", ref: "SK-251210-063", date: "10–11 Dec 2025", place: "Brighton VIC", money: "Completed", tone: "blue" },
  { status: "Cancelled", title: "Summer celebration", ref: "SK-250122-011", date: "22 Jan 2025", place: "South Yarra VIC", money: "$540 refunded", tone: "red" },
];

function Hero({ stage }: { stage: Stage }) {
  return <><div className="crumb">Bookings <span>›</span> {stage.title}</div><section className="page-hero">
    <div><div className="eyebrow">{stage.eyebrow}</div><h1>{stage.title}</h1><p>{stage.description}</p></div>
    {stage.step && <div className="step-pill">{stage.step}</div>}
  </section></>;
}

function SummaryStrip() {
  return <div className="summary-strip">
    <div><span>BOOKING</span><b>SK-261114-042</b></div><div><span>EVENT</span><b>Garden wedding</b></div><div><span>RENTAL</span><b>14–15 Nov 2026</b></div><div><span>STATUS</span><b className="good">Confirmed</b></div>
  </div>;
}

function FooterActions({ stage, next }: { stage: Stage; next?: string }) {
  if (!stage.primary) return null;
  return <div className="footer-actions"><a className="secondary" href={stage.secondary === "Back to booking" || stage.secondary === "View booking" ? "/booking-details" : "/bookings"}>{stage.secondary}</a><a className="primary" href={next ? `/${next}` : "/bookings"}>{stage.primary} <span>→</span></a></div>;
}

function BookingList() {
  return <main><Hero stage={stages[0]} />
    <div className="notice"><b>▱</b><span><strong>Your next delivery is confirmed</strong><small>Garden wedding · 14 November · arrival window 10:00am–12:00pm</small></span><a href="/order-tracking">View tracking →</a></div>
    <div className="metrics"><div><span>▦</span><p>Upcoming<b>2</b><small>Next: 14 Nov</small></p></div><div><span>◇</span><p>Active hires<b>1</b><small>Out for delivery</small></p></div><div><span>↻</span><p>Return due<b>0</b><small>No overdue items</small></p></div><div><span>▭</span><p>Balance due<b>$1,240</b><small>Due 30 Oct</small></p></div></div>
    <section className="card booking-panel"><div className="section-head"><div><div className="eyebrow">All rental orders</div><h2>Bookings</h2></div><div className="tabs"><button className="selected">Upcoming <b>2</b></button><button>Active</button><button>Completed</button><button>Cancelled</button></div></div>
      <div className="filters"><label>⌕ <input placeholder="Search booking or event" /></label><button>All statuses⌄</button><button>All dates⌄</button></div>
      <div className="booking-grid">{bookings.map((b, i) => <article className="booking-card" key={b.ref}><div className={`event-photo photo-${i + 1}`}><span className={`status ${b.tone}`}>{b.status}</span></div><div className="booking-body"><h3>{b.title}</h3><b className="reference">{b.ref}</b><p>▦ &nbsp;{b.date}</p><p>⌖ &nbsp;{b.place}</p><footer><strong>{b.money}</strong><a href={i === 0 ? "/booking-details" : i === 2 ? "/repeat-booking" : "/booking-details"}>{i === 2 ? "Repeat booking" : "View booking"} →</a></footer></div></article>)}</div>
    </section>
  </main>;
}

const items = [
  ["Bentwood Chairs", "Natural white · 48", "$576.00"],
  ["Rustic Timber Tables", "1.8 metres · 6", "$720.00"],
  ["Festoon Light Sets", "Warm white · 4", "$360.00"],
  ["Delivery, setup & collection", "Richmond VIC", "$680.00"],
];

function Details() {
  const s = stages[1];
  return <main><Hero stage={s} /><SummaryStrip />
    <div className="detail-actions"><a href="/change-request">Request a change</a><a className="danger-link" href="/cancellation-request">Request cancellation</a><a className="primary" href="/order-tracking">Track order →</a></div>
    <div className="detail-grid">
      <section className="card wide"><div className="event-banner"><div><span>Everything is on track</span><h2>Garden wedding</h2><p>Equipment is allocated. Warehouse preparation begins 9 November.</p></div></div>
        <div className="card-section"><div className="eyebrow">Booking items</div><h2>Allocated equipment</h2>{items.map(x => <div className="item-row" key={x[0]}><i>□</i><span><b>{x[0]}</b><small>{x[1]}</small></span><strong>{x[2]}</strong></div>)}<div className="total"><span>Total including GST</span><b>$3,840.00</b></div></div>
      </section>
      <aside className="side-stack"><section className="card card-section"><div className="eyebrow">Rental dates</div><h2>Event schedule</h2><Info label="Delivery" value="14 Nov · 10:00am–12:00pm" /><Info label="Event" value="14 Nov · 4:00pm–11:30pm" /><Info label="Collection" value="15 Nov · 9:00am–11:00am" /></section>
      <section className="card card-section"><div className="eyebrow">Payment</div><h2>$1,240.00 due</h2><p className="muted">Deposit received $1,280 · Balance due 30 October</p><button className="primary full">Pay balance securely</button></section>
      <section className="card card-section"><div className="eyebrow">Documents</div><Info label="Booking confirmation" value="PDF · 24 July" /><Info label="Tax invoice" value="PDF · $3,840" /></section></aside>
    </div>
    <section className="card timeline-card"><div><div className="eyebrow">Payment and order timeline</div><h2>Booking progress</h2></div><Timeline compact /></section>
  </main>;
}

function Info({ label, value }: { label: string; value: string }) { return <div className="info"><small>{label}</small><b>{value}</b></div> }

function Choice({ icon, title, text, checked }: { icon: string; title: string; text: string; checked?: boolean }) {
  return <label className={`choice ${checked ? "checked" : ""}`}><input type="checkbox" defaultChecked={checked} /><i>{icon}</i><span><b>{title}</b><small>{text}</small></span><em>{checked ? "✓" : ""}</em></label>;
}

function ChangeSelect() {
  const s = stages[2];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><h2>Select change type</h2><p className="muted">You can request several changes together.</p><div className="choice-grid"><Choice checked icon="▦" title="Event or rental dates" text="Change event, delivery, collection or return timing." /><Choice icon="＋" title="Item quantities" text="Increase or decrease quantities already booked." /><Choice icon="□" title="Add, swap or remove items" text="Request different equipment, style or variant." /><Choice checked icon="▱" title="Delivery or collection" text="Change address, access notes, timing or method." /></div><div className="tip"><b>What happens next?</b><p>Your current booking stays confirmed. We check stock, price and logistics before sending a decision.</p></div></section><FooterActions stage={s} next="change-details" /></main>;
}

function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return <label className={wide ? "wide-field" : ""}><span>{label}</span>{area ? <textarea defaultValue={value} /> : <input defaultValue={value} />}</label>;
}

function ChangeDetails() {
  const s = stages[3];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card">
    <div className="form-section"><div><b className="number">1</b><h2>Event and rental dates</h2></div><div className="form-grid"><Field label="Event date" value="21 November 2026" /><Field label="Event time" value="4:00pm – 11:30pm" /><Field label="Delivery date" value="21 November 2026" /><Field label="Preferred window" value="10:00am – 12:00pm" /><Field label="Collection date" value="22 November 2026" /><Field label="Preferred window" value="9:00am – 11:00am" /></div></div>
    <div className="form-section"><div><b className="number">2</b><h2>Delivery and access</h2></div><div className="form-grid"><Field wide label="Venue address" value="Richmond Town Hall, 333 Bridge Road, Richmond VIC 3121" /><Field wide area label="Updated access or logistics notes" value="Please use the rear loading entrance on Gleadell Street. Venue access is available from 9:30am." /></div></div>
  </section><FooterActions stage={s} next="change-review" /></main>;
}

function ReviewBlock({ title, rows }: { title: string; rows: [string, string, string?][] }) {
  return <section className="review-block"><h3>{title}</h3>{rows.map(r => <div key={r[0]}><span>{r[0]}</span><b>{r[1]}</b>{r[2] && <em>{r[2]}</em>}</div>)}</section>;
}

function ChangeReview() {
  const s = stages[4];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="review-grid"><ReviewBlock title="Requested timing" rows={[["Event date","21 November 2026","was 14 November"],["Delivery","21 Nov · 10am–12pm"],["Collection","22 Nov · 9am–11am"]]} /><ReviewBlock title="Updated logistics" rows={[["Venue","Richmond Town Hall"],["Access","Rear loading entrance"],["Contact","Alex Morgan · 0412 345 678"]]} /></div><div className="estimate"><div><span>Current booking total</span><b>$3,840.00</b></div><div><span>Estimated difference</span><b>To be confirmed</b></div><p>Prices may change after stock and delivery availability are rechecked.</p></div><Choice checked icon="✓" title="I understand this is a request" text="My existing booking stays unchanged until SK Event Hire approves the request and I accept any revised price." /></section><FooterActions stage={s} next="change-result" /></main>;
}

function Result({ type }: { type: "change" | "cancel" }) {
  const s = type === "change" ? stages[5] : stages[8];
  return <main className="flow"><Hero stage={s} /><section className={`card result-card ${type}`}><div className="result-icon">{type === "change" ? "✓" : "✓"}</div><div className="eyebrow">{type === "change" ? "Reference CR-260724-018" : "Reference CN-260724-006"}</div><h2>{type === "change" ? "Request submitted successfully" : "Cancellation complete"}</h2><p>{type === "change" ? "Customer Care will check availability, pricing and the requested delivery window. We’ll notify you by email, SMS and in-app message." : "A $2,960.00 refund has been initiated to Visa ending 4821. Allow 3–5 business days for your bank to process it."}</p><div className="result-facts"><Info label="Booking" value="SK-261114-042" /><Info label={type === "change" ? "Current status" : "Refund"} value={type === "change" ? "Confirmed · unchanged" : "$2,960.00"}/><Info label={type === "change" ? "Response by" : "Cancellation fee"} value={type === "change" ? "24 Jul · 5:00pm" : "$880.00"} /></div></section><FooterActions stage={s} /></main>;
}

function CancellationRequest() {
  const s = stages[6];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="form-grid"><label className="wide-field"><span>Reason for cancellation</span><select defaultValue="date"><option value="date">Event date or plans changed</option><option>Venue is no longer available</option><option>Budget changed</option><option>Other</option></select></label><Field wide area label="Tell us anything else (optional)" value="Our venue is no longer available on the planned date." /></div><div className="policy-card"><div><span>Estimated refund</span><b>$2,960.00</b></div><div><span>Cancellation charge</span><b>$880.00</b></div><p>Based on cancellation 113 days before delivery. Final charges follow the rental cancellation policy and any non-refundable custom items.</p><a href="#">Read cancellation policy →</a></div></section><FooterActions stage={s} next="cancellation-review" /></main>;
}

function CancellationReview() {
  const s = stages[7];
  return <main className="flow"><Hero stage={s} /><SummaryStrip /><section className="card flow-card"><div className="review-grid"><ReviewBlock title="Cancellation details" rows={[["Reason","Event plans changed"],["Submitted by","Alex Morgan"],["Effective","Immediately after confirmation"]]} /><ReviewBlock title="Refund destination" rows={[["Method","Visa ending 4821"],["Refund amount","$2,960.00"],["Processing","3–5 business days"]]} /></div><div className="charge-table"><div><span>Total payments received</span><b>$3,840.00</b></div><div><span>Cancellation charge</span><b>− $880.00</b></div><div className="grand"><span>Estimated refund</span><b>$2,960.00</b></div></div><Choice checked icon="!" title="I confirm this cancellation" text="I understand this action cannot be undone and the listed cancellation charge will apply." /></section><FooterActions stage={s} next="cancellation-result" /></main>;
}

function RepeatBooking({ review = false }: { review?: boolean }) {
  const s = review ? stages[10] : stages[9];
  return <main className="flow"><Hero stage={s} /><section className="card flow-card"><div className="origin"><span>Copied from</span><b>40th birthday · SK-251210-063</b><em>Completed 11 December 2025</em></div>{!review && <div className="form-grid repeat-fields"><Field label="New event date" value="12 December 2026" /><Field label="Guest count" value="70" /><Field label="Delivery suburb" value="Brighton VIC 3186" /><Field label="Event type" value="Birthday celebration" /></div>}<h2>{review ? "Copied items and latest pricing" : "Eligible items copied"}</h2>{items.slice(0,3).map((x,i) => <div className="item-row editable" key={x[0]}><i>□</i><span><b>{x[0]}</b><small>{x[1]}</small></span>{review ? <strong>{["$576.00","$720.00","$360.00"][i]}</strong> : <label>Qty <input defaultValue={["48","6","4"][i]} /></label>}</div>)}{review && <><div className="availability"><b>✓ All selected items are available</b><span>Availability checked 24 Jul at 11:42am</span></div><div className="total"><span>Estimated total including delivery & GST</span><b>$3,960.00</b></div></>}</section><FooterActions stage={s} next={review ? "bookings" : "repeat-review"} /></main>;
}

function Timeline({ compact = false }: { compact?: boolean }) {
  const steps = [
    ["Confirmed","Quote accepted and deposit received","18 Jul · 2:43pm","done"],
    ["Preparing","Picking and quality checks underway","Today · 9:10am","current"],
    ["Ready","Packed and ready for dispatch","13 Nov · expected",""],
    ["Out for delivery","Driver en route to Richmond","14 Nov · 10am–12pm",""],
    ["On hire","Rental period in progress","14–15 Nov",""],
    ["Return due","Collection booked","15 Nov · 9am–11am",""],
    ["Returned","Inspection and completion","After return",""],
  ];
  return <div className={`tracking-timeline ${compact ? "compact" : ""}`}>{steps.map((x,i) => <div className={x[3]} key={x[0]}><i>{x[3] === "done" ? "✓" : x[3] === "current" ? "●" : i+1}</i><span><b>{x[0]}</b><small>{x[1]}</small></span><em>{x[2]}</em></div>)}</div>
}

function OrderTracking() {
  const s = stages[11];
  return <main><Hero stage={s} /><SummaryStrip /><section className="tracking-layout"><div className="card tracking-main"><div className="tracking-map"><div className="route-line"></div><span className="warehouse">SK</span><span className="truck">▱</span><span className="venue">⌂</span><div className="eta"><small>ESTIMATED ARRIVAL</small><b>14 Nov · 10:45am</b><span>Within your 10am–12pm window</span></div></div><div className="card-section"><h2>Order journey</h2><Timeline /></div></div><aside className="side-stack"><section className="card card-section"><div className="eyebrow">Current update</div><h2>Preparation started</h2><p className="muted">Warehouse team is picking your allocated equipment. Quality checks and protective packing follow.</p><Info label="Last updated" value="Today · 9:10am" /><Info label="Next update" value="Ready for dispatch" /></section><section className="card card-section"><div className="eyebrow">Delivery</div><h2>Richmond Town Hall</h2><Info label="Window" value="14 Nov · 10am–12pm" /><Info label="Access" value="Rear loading entrance" /><Info label="Event contact" value="Alex · 0412 345 678" /><button className="secondary full">Update access details</button></section></aside></section><FooterActions stage={s} /></main>;
}

const quoteSteps = [
  ["create-quote-01", "Event overview", "Tell us about your event", "Start with the occasion, expected guests and the name you want shown on your quotation."],
  ["create-quote-02", "Event schedule", "Choose your event and hire dates", "Add the event time plus the delivery and collection windows needed by your venue."],
  ["create-quote-03", "Venue details", "Where is your event?", "Enter the venue address and the practical details our delivery team needs."],
  ["create-quote-04", "Hire categories", "What would you like to hire?", "Choose every product category you want us to include in this quotation."],
  ["create-quote-05", "Product selection", "Select your hire items", "Add products from the selected categories. Availability is checked after submission."],
  ["create-quote-06", "Quantities & options", "Confirm quantities and styles", "Adjust quantities, colours and product options to suit your guest count and event style."],
  ["create-quote-07", "Delivery & services", "Choose logistics and setup services", "Tell us whether you need delivery, collection, installation or on-site support."],
  ["create-quote-08", "Contact details", "Who should we contact?", "Confirm the event contact and how you would like to receive quotation updates."],
  ["create-quote-09", "Special requirements", "Add notes and supporting details", "Share access constraints, styling requests or documents that will help us quote accurately."],
  ["create-quote-10", "Review request", "Review your quotation request", "Check the event, items, logistics and contact information before submission."],
  ["create-quote-11", "Request confirmed", "Your quotation request is on its way", "We have received your request and will confirm availability, delivery and final pricing."],
] as const;

function QuoteProgress({ current }: { current: number }) {
  return <div className="quote-progress"><div><span>New quotation</span><b>Step {current} of 11</b></div><div className="progress-track"><i style={{width: `${current / 11 * 100}%`}} /></div><small>{current < 11 ? `${11-current} steps remaining · Your progress is saved` : "Submitted successfully"}</small></div>;
}

function QuoteHero({ current }: { current: number }) {
  const q = quoteSteps[current - 1];
  return <><div className="crumb">Quotes <span>›</span> Create new quotation</div><section className="page-hero quote-hero"><div><div className="eyebrow">{q[1]}</div><h1>{q[2]}</h1><p>{q[3]}</p></div><div className="step-pill">Step {current} of 11</div></section><QuoteProgress current={current} /></>;
}

function QuoteActions({ current }: { current: number }) {
  if (current === 11) return <div className="footer-actions"><a className="secondary" href="/bookings">Back to account</a><a className="primary" href="/create-quote-01">Create another quote <span>→</span></a></div>;
  const prev = current === 1 ? "/bookings" : `/create-quote-${String(current - 1).padStart(2,"0")}`;
  const next = `/create-quote-${String(current + 1).padStart(2,"0")}`;
  return <div className="footer-actions quote-actions"><a className="secondary" href={prev}>{current === 1 ? "Save & exit" : "Back"}</a><a className="primary" href={next}>{current === 10 ? "Submit quotation request" : "Save & continue"} <span>→</span></a></div>;
}

function ProductLine({ name, detail, qty, price }: { name: string; detail: string; qty: string; price: string }) {
  return <div className="quote-product"><i>□</i><span><b>{name}</b><small>{detail}</small></span><label>Qty<input defaultValue={qty}/></label><strong>{price}</strong></div>;
}

function CreateQuote({ current }: { current: number }) {
  let body: React.ReactNode;
  if (current === 1) body = <><div className="form-grid"><Field label="Event name" value="Alex & Jordan’s garden wedding"/><Field label="Event type" value="Wedding reception"/><Field label="Estimated guest count" value="80"/><Field label="Budget range" value="$3,000 – $5,000"/><Field wide area label="Brief event description" value="An outdoor garden reception with a relaxed, warm-white and natural timber style."/></div><div className="tip"><b>A rough plan is enough</b><p>You can refine quantities and logistics before submitting your request.</p></div></>;
  else if (current === 2) body = <><div className="form-grid"><Field label="Event date" value="14 November 2026"/><Field label="Event time" value="4:00pm – 11:30pm"/><Field label="Preferred delivery date" value="14 November 2026"/><Field label="Delivery window" value="10:00am – 12:00pm"/><Field label="Preferred collection date" value="15 November 2026"/><Field label="Collection window" value="9:00am – 11:00am"/></div><div className="availability"><b>✓ Your selected dates are within our service calendar</b><span>Final item availability is confirmed with your quote.</span></div></>;
  else if (current === 3) body = <><div className="form-grid"><Field wide label="Venue name" value="Richmond Town Hall"/><Field wide label="Venue address" value="333 Bridge Road, Richmond VIC 3121"/><Field label="Venue type" value="Council hall & garden"/><Field label="Postcode" value="3121"/><Field label="Loading access from" value="9:30am"/><Field label="Parking available" value="Reserved loading bay"/><Field wide area label="Access notes" value="Use the rear loading entrance on Gleadell Street. Venue coordinator will provide key access."/></div></>;
  else if (current === 4) body = <><h2>Select all relevant categories</h2><div className="choice-grid category-grid"><Choice checked icon="▦" title="Tables & chairs" text="Dining, cocktail, ceremony and lounge furniture."/><Choice checked icon="✦" title="Lighting" text="Festoon, feature, ambient and practical lighting."/><Choice icon="⌂" title="Marquees & structures" text="Shelter, flooring, staging and weather protection."/><Choice icon="◫" title="Tableware & linen" text="Crockery, glassware, cutlery, linen and accessories."/><Choice icon="♫" title="Audio & visual" text="Speakers, microphones, screens and event power."/><Choice checked icon="◇" title="Décor & styling" text="Backdrops, signage, plinths and decorative items."/></div></>;
  else if (current === 5) body = <><div className="filters product-filter"><label>⌕ <input defaultValue="Wedding essentials"/></label><button>Tables & chairs⌄</button><button>Sort: Recommended⌄</button></div><div className="catalog-grid">{[["Bentwood Chair","Natural white","$12 each","/images/chairs-product.png"],["Rustic Timber Table","1.8 metre","$65 each","/images/tables-product.png"],["Festoon Light Set","20 metre · warm white","$95 each","/images/lighting-product.png"],["Textured Arch Set","Two warm-white panels","$220 set","/images/decor-product.png"]].map((x,i)=><article className={`catalog-card selected-${i<3}`} key={x[0]}><img className="catalog-art" src={x[3]} alt={x[0]}/><span>{i<3?"✓ Added":"Add item"}</span><h3>{x[0]}</h3><p>{x[1]}</p><b>{x[2]}</b></article>)}</div></>;
  else if (current === 6) body = <><h2>Selected products</h2><p className="muted">Quantities are pre-filled from 80 guests. Adjust them as needed.</p><div className="quote-products"><ProductLine name="Bentwood Chairs" detail="Natural white · guest seating" qty="80" price="$960.00"/><ProductLine name="Rustic Timber Tables" detail="1.8 metre · seats 8–10" qty="9" price="$1,080.00"/><ProductLine name="Festoon Light Sets" detail="20 metre · warm white" qty="4" price="$360.00"/></div><div className="estimate"><div><span>Estimated hire subtotal</span><b>$2,400.00</b></div><p>Delivery, setup, GST and any custom services are calculated after the next step.</p></div></>;
  else if (current === 7) body = <><div className="choice-grid"><Choice checked icon="▱" title="Delivery & collection" text="SK Event Hire delivers and collects at the venue."/><Choice checked icon="⚒" title="Setup & pack-down" text="Our team installs and packs down selected equipment."/><Choice icon="♙" title="On-site event support" text="A crew member remains available during the event."/><Choice icon="⌂" title="Customer pickup" text="Collect and return eligible items at our warehouse."/></div><div className="form-grid"><Field label="Preferred delivery window" value="10:00am – 12:00pm"/><Field label="Preferred collection window" value="9:00am – 11:00am"/><Field wide area label="Setup instructions" value="Please complete all furniture placement and festoon lighting installation before 2:00pm."/></div></>;
  else if (current === 8) body = <><div className="person quote-person"><i>AM</i><b>Using account details<small>Alex Morgan · Verified customer</small></b></div><div className="form-grid"><Field label="First name" value="Alex"/><Field label="Last name" value="Morgan"/><Field label="Mobile number" value="0412 345 678"/><Field label="Email address" value="alex.morgan@example.com"/><Field wide label="Preferred contact method" value="Email and SMS"/></div><Choice checked icon="✓" title="Send updates to these contact details" text="We’ll use them for quotation questions, availability notices and the final quote."/></>;
  else if (current === 9) body = <><div className="form-grid"><Field wide area label="Styling, access or special requirements" value="Please keep the palette natural timber, white and warm lighting. The venue has a strict 2:00pm setup completion time."/><label className="wide-field upload"><span>Plans, inspiration or venue documents</span><i>⇧</i><b>Drop files here or browse</b><small>PDF, JPG or PNG · up to 10 MB each</small></label></div><div className="uploaded"><span>▤</span><div><b>Richmond_Town_Hall_Floorplan.pdf</b><small>1.8 MB · Ready</small></div><em>✓</em></div></>;
  else if (current === 10) body = <><div className="review-grid"><ReviewBlock title="Event & schedule" rows={[["Event","Garden wedding"],["Guests","80"],["Date","14 November 2026"],["Time","4:00pm–11:30pm"]]}/><ReviewBlock title="Venue & logistics" rows={[["Venue","Richmond Town Hall"],["Delivery","14 Nov · 10am–12pm"],["Collection","15 Nov · 9am–11am"],["Services","Delivery, setup & pack-down"]]}/></div><h2 className="review-title">Items requested</h2><div className="quote-products compact-products"><ProductLine name="Bentwood Chairs" detail="Natural white" qty="80" price="$960.00"/><ProductLine name="Rustic Timber Tables" detail="1.8 metre" qty="9" price="$1,080.00"/><ProductLine name="Festoon Light Sets" detail="Warm white" qty="4" price="$360.00"/></div><div className="estimate"><div><span>Estimated subtotal before delivery & GST</span><b>$2,400.00</b></div><p>This is a request, not a confirmed booking. Final stock, services, delivery charges and pricing will be shown in your quotation.</p></div><Choice checked icon="✓" title="I confirm these request details are correct" text="I understand SK Event Hire will check availability and may contact me for clarification."/></>;
  else body = <div className="quote-result"><div className="result-icon">✓</div><div className="eyebrow">Request QTR-260724-084</div><h2>Quotation request submitted</h2><p>Our event team is checking stock, delivery access and setup requirements. Your item selection is not reserved until you accept the final quotation and pay the requested deposit.</p><div className="result-facts"><Info label="Event" value="Garden wedding"/><Info label="Expected response" value="Within 1 business day"/><Info label="Status" value="Availability review"/></div><div className="next-steps"><b>What happens next</b><span><i>1</i>Availability and logistics check</span><span><i>2</i>Detailed quotation sent to your account</span><span><i>3</i>Review, accept and request reservation</span></div></div>;
  return <main className="flow quote-flow"><QuoteHero current={current}/><section className={`card flow-card ${current===11?"result-card":""}`}>{body}</section><QuoteActions current={current}/></main>;
}

type HireProduct = {
  slug: string; name: string; category: string; image: string; price: string;
  summary: string; description: string; dimensions: string; capacity: string;
  finish: string; minimum: string;
};

const coreHireProducts: HireProduct[] = [
  { slug:"natural-bentwood-chair", name:"Natural Bentwood Chair", category:"Chairs", image:"/images/chairs-product.png", price:"$12 each", summary:"Classic curved timber dining chair for ceremonies and receptions.", description:"A lightweight, elegant bentwood chair with a natural timber frame and supportive seat. Suits garden weddings, long-table dinners and refined corporate events. Chairs are cleaned, inspected and transported in protective stillages.", dimensions:"410 W × 510 D × 880 H mm", capacity:"1 adult", finish:"Natural timber", minimum:"20 chairs" },
  { slug:"white-bistro-chair", name:"White Bistro Chair", category:"Chairs", image:"/images/chairs-product.png", price:"$4.40 each", summary:"Practical, stackable seating for community and backyard events.", description:"A commercial-grade white polypropylene chair that is easy to place, wipe clean and move. A reliable option for birthdays, school events, ceremonies and large community gatherings.", dimensions:"440 W × 520 D × 800 H mm", capacity:"1 adult", finish:"White polypropylene", minimum:"20 chairs" },
  { slug:"rustic-trestle-table", name:"Rustic Timber Trestle Table", category:"Tables", image:"/images/tables-product.png", price:"$65 each", summary:"Warm timber table seating six to eight guests.", description:"A solid 1.8 metre timber dining table with folding trestle legs and visible natural grain. Designed for family-style dining, weddings and relaxed corporate functions.", dimensions:"1800 L × 840 W × 760 H mm", capacity:"6–8 seated guests", finish:"Warm natural timber", minimum:"2 tables" },
  { slug:"round-banquet-table", name:"1.8 m Round Banquet Table", category:"Tables", image:"/images/tables-product.png", price:"$32 each", summary:"Commercial folding table seating eight to ten guests.", description:"A sturdy round banquet table that creates an inclusive dining layout. Add fitted linen for weddings, gala dinners and conferences.", dimensions:"1800 diameter × 750 H mm", capacity:"8–10 seated guests", finish:"Timber top, steel legs", minimum:"2 tables" },
  { slug:"clearspan-marquee", name:"Clearspan Marquee 6 × 12 m", category:"Marquees", image:"/images/marquee-product.png", price:"From $2,950", summary:"Weather-ready structure for up to 80 seated guests.", description:"A professionally installed clearspan marquee with white roof, structural frame and weighted anchoring. Side walls, flooring, lighting and climate options can be added after a site assessment.", dimensions:"6 W × 12 L m", capacity:"Up to 80 seated", finish:"White PVC roof and aluminium frame", minimum:"Site inspection required" },
  { slug:"festoon-lighting", name:"Warm Festoon Lighting Set", category:"Lighting", image:"/images/lighting-product.png", price:"$95 per 20 m", summary:"Commercial warm-white globes for indoor or sheltered outdoor use.", description:"Connectable festoon lighting with warm LED globes, tested cable and mounting accessories. Installation is quoted separately based on structure, height and venue access.", dimensions:"20 m set", capacity:"Connectable runs", finish:"Warm white LED", minimum:"1 set" },
  { slug:"stoneware-place-setting", name:"Ivory Stoneware Place Setting", category:"Tableware", image:"/images/tableware-product.png", price:"$4.80 per guest", summary:"Dinner plate, side plate and bowl in a soft ivory glaze.", description:"A coordinated commercial stoneware setting with gentle tonal variation. Professionally washed, counted and packed in transport crates.", dimensions:"280 mm dinner plate", capacity:"3 pieces per guest", finish:"Ivory reactive glaze", minimum:"24 settings" },
  { slug:"arched-backdrop", name:"Textured Arch Backdrop Set", category:"Décor", image:"/images/decor-product.png", price:"$220 set", summary:"Two freestanding arches for ceremonies, photos or signage.", description:"A pair of stable, freestanding arch panels in warm neutral tones. Suitable for floral styling, welcome signage and photo moments; florals and custom vinyl are quoted separately.", dimensions:"2.1 m and 1.8 m high", capacity:"2-panel set", finish:"Textured warm white", minimum:"1 set" },
  { slug:"oak-dance-floor", name:"Oak Dance Floor", category:"Flooring & staging", image:"/images/flooring-product.png", price:"From $980", summary:"Level modular floor sized to your guest count and venue.", description:"A commercial modular dance floor installed by our crew on a suitable level surface. Final size and subfloor requirements are confirmed after venue review.", dimensions:"From 4.8 × 4.8 m", capacity:"Approx. 55 dancers", finish:"Oak-look commercial panels", minimum:"Professional installation" },
  { slug:"linen-lounge-setting", name:"Linen Lounge Setting", category:"Lounge & bar", image:"/images/lounge-product.png", price:"$420 set", summary:"Neutral sofa, two occasional chairs and coffee table.", description:"A relaxed conversation setting for cocktail hours, green rooms and wedding lounges. Upholstery is steam-cleaned and protected for transport.", dimensions:"Approx. 3 × 2.5 m footprint", capacity:"5 seated guests", finish:"Oatmeal linen and oak", minimum:"1 setting" },
];

const additionalProductSeeds = [
  ["gold-tiffany-chair","Gold Tiffany Chair","Chairs","$9.50 each","Elegant gold ceremony and dining chair."],
  ["black-bentwood-chair","Black Bentwood Chair","Chairs","$12 each","Refined black timber chair for modern events."],
  ["clear-ghost-chair","Clear Ghost Chair","Chairs","$14 each","Transparent statement seating with a light visual footprint."],
  ["velvet-dining-chair","Velvet Dining Chair","Chairs","$18 each","Soft upholstered dining chair for premium receptions."],
  ["kids-event-chair","Kids Event Chair","Chairs","$4.80 each","Safe, easy-clean seating sized for children."],
  ["bar-stool-oak","Oak Bar Stool","Chairs","$16 each","Natural timber stool for bars and cocktail tables."],
  ["cocktail-table","White Cocktail Table","Tables","$38 each","Standing-height table for drinks and casual networking."],
  ["serpentine-table","Serpentine Display Table","Tables","$58 each","Curved modular table for buffets and feature displays."],
  ["kids-trestle-table","Kids Trestle Table","Tables","$25 each","Low-height activity and dining table for children."],
  ["white-dining-table","White Dining Table","Tables","$72 each","Clean contemporary dining table seating six to eight."],
  ["black-banquet-table","Black Banquet Table","Tables","$44 each","Dark event table for modern dining and display layouts."],
  ["marquee-3x6","Pop-up Marquee 3 × 6 m","Marquees","$390 event","Compact weather cover for gardens and community events."],
  ["marquee-6x6","Clearspan Marquee 6 × 6 m","Marquees","$1,850 event","Professional installed structure for intimate events."],
  ["marquee-10x15","Clearspan Marquee 10 × 15 m","Marquees","$5,900 event","Large format structure for weddings and gala events."],
  ["marquee-sidewalls","Marquee Sidewall Set","Marquees","$280 set","Clear and solid wall options for weather protection."],
  ["fairy-light-curtain","Fairy Light Curtain","Lighting","$180 set","Warm cascading light backdrop for photos and speeches."],
  ["uplight-package","Wireless Uplight Package","Lighting","$240 set","Colour-adjustable ambient lighting for walls and marquees."],
  ["chandelier-crystal","Crystal Chandelier","Lighting","$320 each","Statement overhead light for formal event spaces."],
  ["pathway-lighting","LED Pathway Lighting","Lighting","$150 set","Low-level practical lighting for guest walkways."],
  ["glassware-set","Classic Glassware Set","Tableware","$3.60 guest","Water, wine and champagne glasses packed by guest count."],
  ["gold-cutlery-set","Gold Cutlery Set","Tableware","$4.20 guest","Four-piece warm gold place setting for formal dining."],
  ["linen-tablecloth","Premium Linen Tablecloth","Tableware","$24 each","Pressed event linen in selected sizes and colours."],
  ["servingware-set","Shared Dining Serving Set","Tableware","$32 set","Platters and serving tools for family-style tables."],
  ["round-plinth-set","Round Plinth Set","Décor","$145 set","Three display plinths for cakes, florals and products."],
  ["welcome-sign-frame","Welcome Sign Frame","Décor","$85 each","Freestanding frame for custom event signage."],
  ["floral-stand-set","Floral Stand Set","Décor","$120 set","Stable metal stands for ceremony and reception florals."],
  ["black-dance-floor","Black Dance Floor","Flooring & staging","$1,120 event","Modular statement floor professionally installed."],
  ["carpet-runner","Ceremony Carpet Runner","Flooring & staging","$180 each","Clean aisle runner for indoor or sheltered ceremonies."],
  ["low-stage","Low Presentation Stage","Flooring & staging","$760 event","Modular stage for speeches, panels and performances."],
  ["cocktail-lounge","Cocktail Lounge Setting","Lounge & bar","$480 set","Sofa, armchairs and tables for relaxed guest zones."],
  ["mobile-bar","White Mobile Bar","Lounge & bar","$290 each","Professional service bar with concealed preparation shelf."],
  ["velvet-ottoman-set","Velvet Ottoman Set","Lounge & bar","$220 set","Flexible upholstered seating for social and breakout areas."],
] as const;

const categoryImage: Record<string,string> = {Chairs:"/images/chairs-product.png",Tables:"/images/tables-product.png",Marquees:"/images/marquee-product.png",Lighting:"/images/lighting-product.png",Tableware:"/images/tableware-product.png",Décor:"/images/decor-product.png","Flooring & staging":"/images/flooring-product.png","Lounge & bar":"/images/lounge-product.png"};
const additionalHireProducts: HireProduct[] = additionalProductSeeds.map(([slug,name,category,price,summary])=>({slug,name,category,image:categoryImage[category],price,summary,description:`${summary} Every unit is inspected, professionally prepared and packed for event transport.`,dimensions:"See product specification",capacity:"Confirmed for selected layout",finish:"Multiple finishes available",minimum:"Minimum hire may apply"}));
const hireProducts: HireProduct[] = [...coreHireProducts,...additionalHireProducts];

function PublicHome() {
  return <HomePage />;
}

function ProductsPage() {
  return <ProductsPageImpl hireProducts={hireProducts} />;
}

function ProductDetail({ slug }: { slug: string }) {
  return <ProductDetailPageImpl slug={slug} hireProducts={hireProducts} />;
}

const eventPackages = [
  {slug:"garden-celebration",title:"Garden Celebration",event:"Birthday & social",guests:"40 guests",price:"From $1,480",image:"/images/lounge-product.png",items:"40 bistro chairs · 5 trestle tables · lounge setting · festoon lighting"},
  {slug:"wedding-reception",title:"Wedding Reception",event:"Wedding",guests:"80 guests",price:"From $4,950",image:"/images/hero-event.png",items:"80 bentwood chairs · 10 timber tables · tableware · marquee · lighting"},
  {slug:"corporate-gathering",title:"Corporate Gathering",event:"Corporate",guests:"100 guests",price:"From $3,280",image:"/images/tables-product.png",items:"Banquet seating · staging · lectern · service tables · practical lighting"},
  {slug:"outdoor-community",title:"Outdoor Community Event",event:"Community",guests:"120 guests",price:"From $5,600",image:"/images/marquee-product.png",items:"Clearspan marquee · bistro seating · trestle tables · flooring · lighting"}
];

function ComparePage() {
  return <ComparePageImpl hireProducts={hireProducts} />;
}

function PackagesPage({ detail }: { detail?: string }) {
  return <PackagesPageImpl detail={detail} eventPackages={eventPackages as any[]} />;
}

function PublicQuotePage({ done = false }: { done?: boolean }) {
  return <PublicQuotePageImpl done={done} />;
}

function PaymentJourneyPage() {
  return <PaymentPageImpl />;
}

function CollectionsPage({ type }: { type?: string }) {
  return <CollectionsPageImpl type={type} hireProducts={hireProducts} />;
}

function BasketPage() {
  return <BasketPageImpl />;
}

const showcaseCards = [
  {title:"Garden wedding under warm lights",meta:"Wedding · Richmond",image:"/images/hero-event.png",tags:["Wedding","Outdoor","Warm lighting"],details:"An 80-guest garden reception with timber dining, weather cover, festoon lighting and full setup support.",slug:"garden-wedding-warm-lights"},
  {title:"Rustic table styling",meta:"Wedding · Yarra Valley",image:"/images/tableware-product.png",tags:["Wedding","Indoor","Rustic"],details:"A vineyard reception combining long timber tables, neutral tableware and natural centrepiece styling.",slug:"rustic-table-styling"},
  {title:"Corporate presentation setup",meta:"Corporate · Docklands",image:"/images/flooring-product.png",tags:["Corporate","Indoor","Modern"],details:"A polished presentation and networking layout with staging, audience seating and clear circulation zones.",slug:"corporate-presentation-setup"},
  {title:"Winter celebration dining",meta:"Private event · Carlton",image:"/images/lighting-product.png",tags:["Private event","Indoor","Warm lighting"],details:"An intimate winter dinner with layered lighting, heaters and a warm seated dining arrangement.",slug:"winter-celebration-dining"},
  {title:"Candlelit dinner setting",meta:"Wedding · Brighton",image:"/images/decor-product.png",tags:["Wedding","Indoor","Elegant"],details:"A refined evening reception using candlelight, ivory décor and coordinated dining furniture.",slug:"candlelit-dinner-setting"},
  {title:"White garden ceremony",meta:"Ceremony · Kew",image:"/images/chairs-product.png",tags:["Wedding","Outdoor","Elegant white"],details:"A clean garden ceremony layout with white guest seating, a central aisle and signing-table setup.",slug:"white-garden-ceremony"},
  {title:"Warm timber reception",meta:"Wedding · Fitzroy",image:"/images/tables-product.png",tags:["Wedding","Indoor","Warm lighting"],details:"A relaxed reception built around warm timber tables, bentwood chairs and soft ambient lighting.",slug:"warm-timber-reception"},
  {title:"Festoon-lit courtyard",meta:"Outdoor party · Brunswick",image:"/images/lighting-product.png",tags:["Party","Outdoor","Warm lighting"],details:"A courtyard celebration with overhead festoons, cocktail zones and flexible weather-ready seating.",slug:"festoon-lit-courtyard"},
  {title:"Relaxed marquee lounge",meta:"Birthday · Mornington",image:"/images/marquee-product.png",tags:["Birthday","Outdoor","Marquee"],details:"A coastal birthday with a covered lounge, casual dining and a practical wind-and-weather plan.",slug:"relaxed-marquee-lounge"},
] as const;

function GalleryCaseStudiesPage({ story = false }: { story?: boolean }) {
  return <GalleryPageImpl story={story} showcaseCards={showcaseCards as unknown as any[]} />;
}

const publicReviews = [
  {name:"Amelia M.",event:"Wedding",location:"Richmond",rating:5,title:"Everything arrived beautifully presented",text:"The team made our garden reception feel completely manageable. Every chair was spotless, delivery was exactly within the confirmed window and the marquee looked wonderful after dark.",image:"/images/hero-event.png",product:"Garden Event Furniture Hire"},
  {name:"Daniel K.",event:"Corporate",location:"Docklands",rating:5,title:"Simple booking and genuinely helpful service",text:"Clear advice on quantities, a detailed quotation and a professional setup. The whole process was organised without feeling complicated.",image:"/images/tableware-product.png",product:"Corporate Event Hire"},
  {name:"Priya S.",event:"Birthday",location:"Brighton",rating:5,title:"Professional setup from start to finish",text:"The delivery crew checked access in advance and had everything ready before our guests arrived. Collection the following morning was just as smooth.",image:"/images/warehouse-team.png",product:"Outdoor Celebration Package"},
];

function ReviewsRatingsPage() {
  return <ReviewsPageImpl publicReviews={publicReviews as unknown as any[]} />;
}

const guides=[
  ["Your practical 8-week event checklist","Planning basics","/images/tableware-product.png"],
  ["Choosing the right marquee size","Marquee planning","/images/marquee-product.png"],
  ["A warmer, safer winter celebration","Outdoor events","/images/lighting-product.png"],
  ["Hosting a beautiful long-table dinner","Dining layouts","/images/tableware-product.png"],
  ["How to layer lighting after sunset","Event lighting","/images/hero-event.png"],
  ["What happens on delivery day?","Delivery & setup","/images/warehouse-team.png"],
] as const;

function BlogResourceCentrePage({ article = false }: { article?: boolean }) {
  return <BlogPageImpl article={article} guides={guides as unknown as any[]} />;
}

function EventPlanningConsultationPage() {
  return <PlanningPageImpl />;
}

const curatedPackages=[
  ["Backyard Celebration","40 guests · outdoor","$420","/images/chairs-product.png"],
  ["Celebration Dinner","60 guests · dining","$1,050","/images/tableware-product.png"],
  ["Outdoor Winter Event","80 guests · covered","$2,450","/images/lighting-product.png"],
  ["Corporate Presentation","100 guests · theatre","$1,900","/images/flooring-product.png"],
] as const;

function PackagesCollectionsLanding() {
  return <PackagesCollectionsLandingImpl />;
}

function QuoteJourneyPage() {
  return <QuoteJourneyPageImpl />;
}

const helpTopics=[
  ["Booking & hired items","Quotes, reservations and item changes","booking-article"],
  ["Products & availability","Stock checks, substitutions and colours","search-help"],
  ["Quotes & bookings","Accepting, revising and confirming a quote","search-help"],
  ["Delivery & setup","Access, timing, placement and crew","delivery-help"],
  ["Collection & returns","Packing, collection windows and checks","delivery-help"],
  ["Payments","Deposits, balances, GST and refunds","legal-payment"],
  ["Changes & cancellations","What can change and when charges apply","booking-article"],
  ["Policies & damage","Care, damage, cleaning and missing items","legal-damage"],
  ["Account & contact","Sign-in, saved details and support requests","support-form"],
] as const;

function HelpCentrePage() {
  return <HelpPageImpl helpTopics={helpTopics as unknown as any[]} />;
}

function LegalPage({ kind }: { kind: string }) {
  return <LegalPageImpl kind={kind} />;
}

function AboutPage() {
  return <AboutPageImpl />;
}

function ContactPage() {
  return <ContactPageImpl />;
}

function SitemapPage() {
  return <SitemapPageImpl />;
}

function GenericPublicPage({ kind }: { kind: string }) {
  return <GenericPublicPageImpl kind={kind} />;
}

function AccountOverview({ kind }: { kind: string }) {
  return <AccountOverviewImpl kind={kind} />;
}

const quotationStages = [
  ["quotation-details","Quotation details","Garden wedding quotation","Review items, dates, services, charges, GST and terms before continuing."],
  ["quotation-review","Review & accept","Review quotation acceptance","Confirm the current quotation and acknowledge the rental terms."],
  ["quotation-reservation","Request reservation","Reserve the quoted items","Ask us to hold the quoted stock while availability is checked again."],
  ["quotation-availability","Availability check","Everything is available","The quoted items, crew and delivery window passed the final recheck."],
  ["quotation-payment","Deposit request","Pay the required deposit","A $1,280.00 deposit is required to confirm this reservation."],
  ["quotation-processing","Secure processing","Confirming your booking","We are authorising the deposit and creating your rental order."],
  ["quotation-result","Booking confirmed","Your reservation is confirmed","Your quotation is now booking SK-261114-042 and the equipment is allocated."],
] as const;

function QuotationFlow({ path }: { path: string }) {
  return <QuotationFlowPage path={path} />;
}

function AuthPage({ type }: { type: string }) {
  return <AuthPageImpl type={type} />;
}

export default function Home() {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location.pathname.replace(/^\/|\/$/g, ""));
    const onToggle=(event:Event)=>{const target=event.target as HTMLDetailsElement;if(target.tagName!=="DETAILS"||!target.open)return;target.parentElement?.querySelectorAll("details[open]").forEach(node=>{if(node!==target)(node as HTMLDetailsElement).open=false})};
    document.addEventListener("toggle",onToggle,true);
    return()=>document.removeEventListener("toggle",onToggle,true);
  }, []);
  if (!path) return <PublicHome/>;
  if (path === "products") return <ProductsPage/>;
  if (path === "compare") return <ComparePage/>;
  if (path === "packages") return <PackagesCollectionsLanding/>;
  if (path.startsWith("package-")) return <PackagesPage detail={path.replace("package-","")}/>;
  if (path === "collections") return <CollectionsPage/>;
  if (path.startsWith("collection-")) return <CollectionsPage type={path.replace("collection-","")}/>;
  if (path === "basket") return <BasketPage/>;
  if (path === "payment") return <PaymentJourneyPage/>;
  if (path === "request-quote") return <QuoteJourneyPage/>;
  if (path === "quote-submitted") return <PublicQuotePage done/>;
  if (["rental-terms","payment-policy","privacy","cancellation-policy"].includes(path)) return <LegalPage kind={path}/>;
  if (path === "help") return <HelpCentrePage/>;
  if (path === "about") return <AboutPage/>;
  if (path === "contact") return <ContactPage/>;
  if (path === "sitemap") return <SitemapPage/>;
  if (path.startsWith("product-")) return <ProductDetail slug={path.replace("product-","")}/>;
  if (path === "gallery" || path === "inspiration") return <GalleryCaseStudiesPage/>;
  if (path === "gallery-warm-timber-reception" || path.startsWith("gallery-event-")) return <GalleryCaseStudiesPage story/>;
  if (path === "planning") return <EventPlanningConsultationPage/>;
  if (path === "reviews") return <ReviewsRatingsPage/>;
  if (path === "blog") return <BlogResourceCentrePage/>;
  if (path === "blog-how-many-tables-and-chairs") return <BlogResourceCentrePage article/>;
  if (path === "search") return <ProductsPage/>;
  if (genericPages[path]) return <GenericPublicPage kind={path}/>;
  if (["sign-in","otp","create-account","complete-profile"].includes(path)) return <AuthPage type={path}/>;
  let content: React.ReactNode = <BookingList />;
  if (path === "booking-details") content = <Details />;
  if (path === "change-request") content = <ChangeSelect />;
  if (path === "change-details") content = <ChangeDetails />;
  if (path === "change-review") content = <ChangeReview />;
  if (path === "change-result") content = <Result type="change" />;
  if (path === "cancellation-request") content = <CancellationRequest />;
  if (path === "cancellation-review") content = <CancellationReview />;
  if (path === "cancellation-result") content = <Result type="cancel" />;
  if (path === "repeat-booking") content = <RepeatBooking />;
  if (path === "repeat-review") content = <RepeatBooking review />;
  if (path === "order-tracking") content = <OrderTracking />;
  if (accountData[path]) content = <AccountOverview kind={path}/>;
  if (quotationStages.some(x=>x[0]===path)) content = <QuotationFlow path={path}/>;
  const quoteMatch = path.match(/^create-quote-(\d{2})$/);
  if (quoteMatch) content = <CreateQuote current={Math.min(11, Math.max(1, Number(quoteMatch[1])))} />;
  const accountActive = accountData[path]?.active || (quotationStages.some(x=>x[0]===path)||quoteMatch ? "Quotes" : "Bookings");
  return <Shell active={accountActive}>{content}</Shell>;
}
