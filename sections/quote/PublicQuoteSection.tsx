import React from "react";
import quoteData from "@/data/pages/quote.json";

function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return (
    <div className={`field ${wide ? "wide-field" : ""} ${area ? "area-field" : ""}`}>
      <label>{label}</label>
      <input readOnly defaultValue={value || ""} />
    </div>
  );
}

interface PublicQuoteSectionProps {
  done?: boolean;
}

export function PublicQuoteSection({ done = false }: PublicQuoteSectionProps) {
  const { publicQuote } = quoteData;

  if (done) {
    const { done: d } = publicQuote;
    return (
      <section className="public-result">
        <i>✓</i>
        <div className="eyebrow">{d.eyebrow}</div>
        <h1>{d.title}</h1>
        <p>{d.description}</p>
        <div>
          <span>
            <b>Response target</b>
            {d.responseTarget}
          </span>
          <span>
            <b>Event date</b>
            {d.eventDate}
          </span>
          <span>
            <b>Contact</b>
            {d.contact}
          </span>
        </div>
        <a className="public-cta" href={d.ctaHref}>
          {d.ctaText}
        </a>
      </section>
    );
  }

  const { form: f } = publicQuote;

  return (
    <>
      <section className="simple-hero compact-hero">
        <div className="eyebrow">{f.eyebrow}</div>
        <h1>{f.title}</h1>
        <p>{f.description}</p>
      </section>
      <section className="quote-entry">
        <div className="quote-stepper">
          {["Event", "Dates", "Venue", "Products", "Logistics", "Contact", "Review"].map((x, i) => (
            <span className={i === 0 ? "active" : ""} key={x}>
              <b>{i + 1}</b>
              {x}
            </span>
          ))}
        </div>
        <form>
          <h2>Event overview</h2>
          <div className="form-grid">
            <Field label="Event type" value="Wedding reception" />
            <Field label="Guest count" value="80" />
            <Field label="Event date" value="14 November 2026" />
            <Field label="Venue suburb / postcode" value="Richmond VIC 3121" />
            <Field wide label="Products or package" value="Bentwood seating, timber dining tables, tableware and festoon lighting" />
            <Field wide area label="Event notes" value="Garden ceremony followed by an indoor reception. Rear loading access is available." />
          </div>
          <div className="quote-notice">
            <b>Quotation only</b>
            <p>Submitting does not reserve stock or create a booking. We confirm availability, logistics, GST and the final price first.</p>
          </div>
          <div className="quote-buttons">
            <a className="outline-cta" href="/basket">
              Back to basket
            </a>
            <a className="public-cta" href="/quote-submitted">
              Review & submit request
            </a>
          </div>
        </form>
      </section>
    </>
  );
}
