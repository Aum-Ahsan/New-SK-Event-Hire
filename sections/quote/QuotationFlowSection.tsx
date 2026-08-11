import React from "react";

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="info">
      <small>{label}</small>
      <b>{value}</b>
    </div>
  );
}

function Choice({ icon, title, text, checked }: { icon: string; title: string; text: string; checked?: boolean }) {
  return (
    <label className={`choice ${checked ? "checked" : ""}`}>
      <input type="checkbox" defaultChecked={checked} />
      <i>{icon}</i>
      <div>
        <b>{title}</b>
        <p>{text}</p>
      </div>
    </label>
  );
}

function ReviewBlock({ title, rows }: { title: string; rows: [string, string, string?][] }) {
  return (
    <div className="review-block">
      <h3>{title}</h3>
      {rows.map((r) => (
        <div key={r[0]}>
          <span>{r[0]}</span>
          <b>{r[1]}</b>
          {r[2] && <small>{r[2]}</small>}
        </div>
      ))}
    </div>
  );
}

function ProductLine({ name, detail, qty, price }: { name: string; detail: string; qty: string; price: string }) {
  return (
    <div className="product-line">
      <div>
        <b>{name}</b>
        <small>{detail}</small>
      </div>
      <span>{qty}</span>
      <strong>{price}</strong>
    </div>
  );
}

function SummaryStrip() {
  return (
    <section className="summary-strip">
      <div>
        <small>Event</small>
        <b>Garden wedding</b>
      </div>
      <div>
        <small>Date</small>
        <b>14–15 Nov 2026</b>
      </div>
      <div>
        <small>Guests</small>
        <b>80</b>
      </div>
      <div>
        <small>Status</small>
        <b>Quotation ready</b>
      </div>
    </section>
  );
}

const quotationStages = [
  ["quotation-details", "Quotation details", "Garden wedding quotation", "Review items, dates, services, charges, GST and terms before continuing."],
  ["quotation-review", "Review & accept", "Review quotation acceptance", "Confirm the current quotation and acknowledge the rental terms."],
  ["quotation-reservation", "Request reservation", "Reserve the quoted items", "Ask us to hold the quoted stock while availability is checked again."],
  ["quotation-availability", "Availability check", "Everything is available", "The quoted items, crew and delivery window passed the final recheck."],
  ["quotation-payment", "Deposit request", "Pay the required deposit", "A $1,280.00 deposit is required to confirm this reservation."],
  ["quotation-processing", "Secure processing", "Confirming your booking", "We are authorising the deposit and creating your rental order."],
  ["quotation-result", "Booking confirmed", "Your reservation is confirmed", "Your quotation is now booking SK-261114-042 and the equipment is allocated."],
] as const;

interface QuotationFlowSectionProps {
  path: string;
}

export function QuotationFlowSection({ path }: QuotationFlowSectionProps) {
  const idx = Math.max(0, quotationStages.findIndex((x) => x[0] === path));
  const s = quotationStages[idx];
  const next = quotationStages[Math.min(idx + 1, quotationStages.length - 1)][0];

  return (
    <main className="flow">
      <div className="crumb">
        Quotes <span>›</span> {s[1]}
      </div>
      <section className="page-hero">
        <div>
          <div className="eyebrow">{s[1]}</div>
          <h1>{s[2]}</h1>
          <p>{s[3]}</p>
        </div>
        <div className="step-pill">
          {idx + 1} of {quotationStages.length}
        </div>
      </section>
      <SummaryStrip />
      <section className={`card flow-card ${path === "quotation-result" ? "result-card" : ""}`}>
        {path === "quotation-result" ? (
          <div className="quote-result">
            <div className="result-icon">✓</div>
            <div className="eyebrow">Booking SK-261114-042</div>
            <h2>Deposit received and stock allocated</h2>
            <p>Your confirmation, tax invoice and rental agreement are ready in your account.</p>
            <div className="result-facts">
              <Info label="Deposit" value="$1,280.00 paid" />
              <Info label="Delivery" value="14 Nov · 10am–12pm" />
              <Info label="Status" value="Confirmed" />
            </div>
          </div>
        ) : (
          <>
            <div className="review-grid">
              <ReviewBlock
                title="Event & rental"
                rows={[
                  ["Event", "Garden wedding"],
                  ["Date", "14–15 November 2026"],
                  ["Venue", "Richmond Town Hall"],
                  ["Guests", "80"],
                ]}
              />
              <ReviewBlock
                title="Quotation summary"
                rows={[
                  ["Quote", "Q-260724-084"],
                  ["Items", "93 hire items"],
                  ["Services", "Delivery, setup & collection"],
                  ["Valid until", "31 July 2026"],
                ]}
              />
            </div>
            <div className="quote-products compact-products">
              <ProductLine name="Bentwood Chairs" detail="Natural white" qty="80" price="$960.00" />
              <ProductLine name="Rustic Timber Tables" detail="1.8 metre" qty="9" price="$1,080.00" />
              <ProductLine name="Festoon Light Sets" detail="Warm white" qty="4" price="$360.00" />
            </div>
            <div className="charge-table">
              <div>
                <span>Hire & services</span>
                <b>$3,490.91</b>
              </div>
              <div>
                <span>GST</span>
                <b>$349.09</b>
              </div>
              <div className="grand">
                <span>Total</span>
                <b>$3,840.00</b>
              </div>
            </div>
            {idx > 0 && (
              <Choice
                checked
                icon="✓"
                title={idx === 4 ? "Use Visa ending 4821" : "I confirm these details"}
                text="I understand availability and payment must be confirmed before this becomes a booking."
              />
            )}
          </>
        )}
      </section>
      <div className="footer-actions">
        <a className="secondary" href={idx === 0 ? "/quotes" : `/${quotationStages[idx - 1][0]}`}>
          Back
        </a>
        <a className="primary" href={`/${next}`}>
          {idx === quotationStages.length - 2 ? "View confirmed booking" : idx === 4 ? "Pay $1,280 deposit" : "Continue"} →
        </a>
      </div>
    </main>
  );
}
