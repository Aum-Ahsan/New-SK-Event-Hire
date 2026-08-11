import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import quoteData from "@/data/pages/quote.json";

function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return (
    <div className={`field ${wide ? "wide-field" : ""} ${area ? "area-field" : ""}`}>
      <label>{label}</label>
      <input readOnly defaultValue={value || ""} />
    </div>
  );
}

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

export function QuotationFlowPage({ path }: { path: string }) {
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

export function PublicQuotePage({ done = false }: { done?: boolean }) {
  const { publicQuote } = quoteData;

  if (done) {
    const { done: d } = publicQuote;
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
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
        </main>
        <PublicFooter />
      </div>
    );
  }

  const { form: f } = publicQuote;

  return (
    <div className="public-site">
      <PublicHeader />
      <main>
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
      </main>
      <PublicFooter />
    </div>
  );
}

export function QuoteJourneyPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [decision, setDecision] = useState("ready");
  const [notice, setNotice] = useState("");

  const submitQuote = () => {
    if (!verified) {
      setNotice("Verify your contact details before submitting the request.");
      document.querySelector(".quote-verify")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(true);
    setNotice("");
    setTimeout(() => document.querySelector(".quote-submitted-band")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const downloadQuote = () => {
    const content =
      "SK EVENT HIRE\nQUOTE SKQ-10482 · VERSION 2.0\n\nAmelia Thompson\nEvent: Wedding reception · 12–14 September 2026\n\nWhite Tiffany Chair × 60 — $330.00\n1.8m Round Banquet Table × 8 — $174.00\nWarm Festoon Lighting × 3 — $180.00\nDelivery, setup and collection — $325.00\n\nSubtotal $988.55\nGST $98.85\nTOTAL AUD $1,087.40\n";
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "SK_Event_Hire_Quote_SKQ-10482.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const { quoteJourney } = quoteData;
  const { hero } = quoteJourney;

  return (
    <div className={`public-site quote-journey quote-wizard-${step}`}>
      <PublicHeader />
      <main>
        <section id="quote-request-top" className="quote-top">
          <div>
            <span>{hero.eyebrow}</span>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
          </div>
          <aside>
            <b>{hero.asideTitle}</b>
            <p>{hero.asideDescription}</p>
            <a href={hero.contactLink.href}>{hero.contactLink.text}</a>
          </aside>
        </section>

        <div className="quote-progress">
          {["Your items", "Event details", "Delivery & return", "Your details", "Review"].map((x, i) => (
            <button
              type="button"
              onClick={() => {
                if (i <= 3 || verified) setStep(i);
              }}
              className={i === step ? "active" : i < step ? "done" : ""}
              key={x}
            >
              <i>{i < step ? "✓" : i + 1}</i>
              {x}
            </button>
          ))}
        </div>

        <div className="wizard-actions">
          <button type="button" disabled={step === 0} onClick={() => setStep((x) => Math.max(0, x - 1))}>
            ← Back
          </button>
          <span>Step {step + 1} of 5</span>
          {step < 4 && (
            <button
              className="next"
              type="button"
              onClick={() => {
                if (step === 3 && !verified) {
                  setNotice("Verify your contact details before continuing.");
                  return;
                }
                setNotice("");
                setStep((x) => x + 1);
              }}
            >
              {step === 3 && !verified ? "Verify contact to continue" : "Save & continue →"}
            </button>
          )}
          {step === 4 && (
            <button className="next" type="button" onClick={submitQuote}>
              Submit quote request →
            </button>
          )}
        </div>

        <section className="quote-form-layout">
          <div>
            <section className="quote-card">
              <div className="quote-card-title">
                <span>STEP 1</span>
                <h2>Your selected items</h2>
                <a href="/products">＋ Add products</a>
              </div>
              {[
                ["White Tiffany Chair", "100 × white", "$330.00", "/images/chairs-product.png"],
                ["1.8m Round Banquet Table", "8 × white top", "$174.00", "/images/tables-product.png"],
                ["Warm Festoon Lighting", "3 × 20m runs", "$180.00", "/images/lighting-product.png"],
              ].map((x) => (
                <div className="selected-hire-item" key={x[0]}>
                  <img src={x[3]} alt={x[0]} />
                  <span>
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                  </span>
                  <label>
                    Qty<input defaultValue={x[1].split(" ")[0]} />
                  </label>
                  <strong>{x[2]}</strong>
                </div>
              ))}
            </section>

            <section className="quote-card">
              <div className="quote-card-title">
                <span>STEP 2</span>
                <h2>Tell us about the event</h2>
                <em>✓ Saved</em>
              </div>
              <div className="form-grid">
                <Field label="Event type" value="Wedding reception" />
                <Field label="Guest count" value="60" />
                <Field label="Event starts" value="12 Sep 2026 · 4:00 pm" />
                <Field label="Event ends" value="14 Sep 2026 · 10:00 am" />
                <Field label="Venue name" value="Willow & Stone Estate" />
                <Field label="Venue postcode" value="3000" />
                <Field wide area label="Add a venue photo or floor plan" value="Optional upload area" />
              </div>
            </section>

            <section className="quote-card">
              <div className="quote-card-title">
                <span>STEP 3</span>
                <h2>Delivery and return</h2>
              </div>
              <h3>How should the items arrive?</h3>
              <div className="radio-cards">
                <label>
                  <input type="radio" name="arrive" />
                  Customer pickup<small>Collect from our Melbourne warehouse</small>
                </label>
                <label>
                  <input type="radio" name="arrive" />
                  Delivery only<small>We deliver to the venue</small>
                </label>
                <label className="selected">
                  <input type="radio" name="arrive" defaultChecked />
                  Delivery + setup<small>Delivery, placement and setup</small>
                </label>
              </div>
              <h3>How should the items return?</h3>
              <div className="radio-cards">
                <label>
                  <input type="radio" name="return" />
                  Customer return<small>Return items to our warehouse</small>
                </label>
                <label className="selected">
                  <input type="radio" name="return" defaultChecked />
                  SK collection<small>We collect after the event</small>
                </label>
                <label>
                  <input type="radio" name="return" />
                  Pack-down + collection<small>Pack-down and collection</small>
                </label>
              </div>
            </section>

            <section className="quote-card">
              <div className="quote-card-title">
                <span>STEP 4</span>
                <h2>Contact and access details</h2>
              </div>
              <div className="form-grid">
                <Field label="First name" value="Amelia" />
                <Field label="Last name" value="Thompson" />
                <Field label="Email" value="amelia.t@example.com" />
                <Field label="Mobile" value="0412 345 678" />
                <Field label="Company / organisation" value="—" />
                <Field label="ABN or purchase order" value="Optional" />
                <Field label="Preferred contact" value="Email" />
                <Field label="Delivery address" value="12 River St, Melbourne" />
                <Field label="Parking distance" value="Under 25 metres" />
                <Field label="Stairs or lift" value="Ground floor · no stairs" />
                <Field label="Doorway width" value="1.2 metres" />
                <Field label="Ground surface" value="Lawn and paved path" />
                <Field label="Power available" value="Yes · standard outlet" />
                <Field label="Setup window" value="12 Sep · 11am–2pm" />
                <Field wide label="Venue contact" value="Jordan Lee · 0412 000 111" />
              </div>
            </section>

            <section className={`quote-verify ${verified ? "is-verified" : ""}`}>
              <div>
                <span>SECURE CONTACT CHECK</span>
                <h2>Verify your contact details</h2>
                <p>Enter the six-digit code sent to your mobile.</p>
              </div>
              <div className="verify-digits">
                {[4, 8, 2, 6, 1, 9].map((x, i) => (
                  <input aria-label={`Verification digit ${i + 1}`} maxLength={1} key={i} defaultValue={x} />
                ))}
              </div>
              <button
                onClick={() => {
                  setVerified(true);
                  setNotice("");
                }}
              >
                {verified ? "✓ Verified" : "Verify details"}
              </button>
            </section>
          </div>

          <aside className="quote-summary-sticky">
            <span>YOUR ESTIMATE</span>
            <h2>Quote request summary</h2>
            <b>Wedding reception</b>
            <small>12–14 September 2026</small>
            {[
              ["Hire items", "$684.00"],
              ["Delivery and setup", "$240.00"],
              ["Return collection", "$85.00"],
              ["Estimated GST", "$98.40"],
            ].map((x) => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <b>{x[1]}</b>
              </div>
            ))}
            <strong>$1,087.40</strong>
            {notice && (
              <p className="quote-submit-warning" role="alert">
                {notice}
              </p>
            )}
            <button onClick={submitQuote}>{submitted ? "✓ Request submitted" : "Submit quote request"}</button>
            <small>No payment required · No stock reserved</small>
          </aside>
        </section>

        {submitted && (
          <section className="quote-submitted-band">
            <img src="/images/warehouse-team.png" alt="Event planning team" />
            <div>
              <i>✓</i>
              <span>REQUEST SUBMITTED</span>
              <h2>Your quote request is on its way.</h2>
              <p>We’ll review availability, delivery and setup, then respond within two business hours.</p>
              <b>SKQ-R7K4M2</b>
              <a href="#issued-quote">Download request summary</a>
            </div>
          </section>
        )}

        <section id="issued-quote" className="issued-quote editorial-section">
          <div className="issued-head">
            <div>
              <span className="section-kicker">CUSTOMER QUOTE PORTAL</span>
              <h2>Your SK Event Hire quote</h2>
              <p>Review the issued quote, see what changed and choose the next step.</p>
            </div>
            <em>● Ready for your decision</em>
          </div>
          <div className="issued-layout">
            <article>
              <header>
                <b>SK Event Hire</b>
                <strong>
                  SKQ-10482<small>Version 2.0</small>
                </strong>
              </header>
              <div className="quote-meta">
                <b>Amelia Thompson</b>
                <span>Issued 23 July 2026</span>
                <span>Event 12–14 September 2026</span>
              </div>
              <div className="quote-table">
                <b>Item</b>
                <b>Qty</b>
                <b>Total</b>
                {[
                  ["White Tiffany Chair", "60", "$330.00"],
                  ["1.8m Round Banquet Table", "8", "$174.00"],
                  ["Warm Festoon Lighting", "3", "$180.00"],
                  ["Delivery, setup and collection", "1", "$325.00"],
                ].flatMap((x) => x.map((y) => <span key={`${x[0]}${y}`}>{y}</span>))}
              </div>
              <footer>
                <span>
                  Subtotal $988.55
                  <br />
                  GST $98.85
                </span>
                <b>Total AUD $1,087.40</b>
              </footer>
            </article>
            <aside>
              <span>{decision === "ready" ? "QUOTE READY" : "DECISION UPDATED"}</span>
              <h3>What would you like to do?</h3>
              <button onClick={() => (location.href = "/quotation-review")}>✓ Accept quote</button>
              <button onClick={() => (location.href = "/change-request")}>↻ Request changes</button>
              <button onClick={() => setDecision("declined")}>Decline quote</button>
              <button className="download-quote" onClick={downloadQuote}>
                ↓ Download PDF quote
              </button>
              {decision !== "ready" && <strong>Selected: {decision}</strong>}
            </aside>
          </div>
        </section>

        <section className="revision-history">
          <div className="editorial-section">
            <span className="section-kicker">CLEAR VERSION HISTORY</span>
            <h2>Quote revisions and activity</h2>
            <p>Every change is visible, dated and linked to the version you approve.</p>
            {[
              ["V2", "Delivery and table quantity updated", "$1,087.40", "View", "#issued-quote"],
              ["V1", "Initial quote issued", "$1,003.40", "Compare", "/compare"],
              ["●", "Quote request received", "Complete", "Summary", "#quote-request-top"],
            ].map((x) => (
              <article key={x[0]}>
                <i>{x[0]}</i>
                <span>
                  <b>{x[1]}</b>
                  <small>Updated 23 July 2026 · Customer-visible record</small>
                </span>
                <strong>{x[2]}</strong>
                <a href={x[4]}>{x[3]}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="expired-quote editorial-section">
          <i>◷</i>
          <div>
            <span>EXPIRED QUOTE STATE</span>
            <h2>This quote has expired.</h2>
            <p>Prices and availability may have changed. Ask us to recheck the same event details.</p>
          </div>
          <a href="/request-quote">Request updated quote</a>
        </section>

        <section className="quote-help">
          <div>
            <span>NEED TO TALK IT THROUGH?</span>
            <h2>We’re here to make the details easy.</h2>
            <p>Our Melbourne event hire team can help with quantities, access, setup and timing.</p>
          </div>
          <a href="tel:0390000000">Call 03 9000 0000</a>
          <a href="/contact">Send a message</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

const curatedPackages = [
  ["Backyard Celebration", "40 guests · outdoor", "$420", "/images/chairs-product.png"],
  ["Celebration Dinner", "60 guests · dining", "$1,050", "/images/tableware-product.png"],
  ["Outdoor Winter Event", "80 guests · covered", "$2,450", "/images/lighting-product.png"],
  ["Corporate Presentation", "100 guests · theatre", "$1,900", "/images/flooring-product.png"],
] as const;

export function PackagesCollectionsLanding() {
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("2026-09-12");
  const [guestCount, setGuestCount] = useState(60);
  const [faqOpen, setFaqOpen] = useState(0);
  const matchHref = `/request-quote?event=${encodeURIComponent(eventType)}&date=${eventDate}&guests=${guestCount}`;

  return (
    <div className="public-site package-landing">
      <PublicHeader active="Packages" />
      <main>
        <section className="package-hero">
          <img src="/images/marquee-product.png" alt="Beautiful marquee event" />
          <div>
            <span>CURATED EVENT HIRE</span>
            <h1>
              Everything you need,
              <br />
              beautifully brought together.
            </h1>
            <p>Start with a ready-made package, explore a coordinated collection or let our team tailor the right mix for your event.</p>
            <div>
              <a href="#packages">Explore packages</a>
              <a href="/request-quote">Build a custom package</a>
            </div>
          </div>
        </section>

        <section className="package-planner">
          <span>FIND YOUR STARTING POINT</span>
          <h2>What are you planning?</h2>
          <p>We’ll suggest a practical package, collection and service level for your event.</p>
          <div>
            <label>
              Event type
              <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <option>Wedding</option>
                <option>Birthday & celebration</option>
                <option>Corporate event</option>
                <option>Community & cultural</option>
                <option>Outdoor party</option>
              </select>
            </label>
            <label>
              Event date
              <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </label>
            <label>
              Guest count
              <span className="guest-stepper">
                <button type="button" onClick={() => setGuestCount(Math.max(10, guestCount - 10))}>
                  −
                </button>
                <input
                  aria-label="Guest count"
                  type="number"
                  min="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Math.max(10, Number(e.target.value) || 10))}
                />
                <button type="button" onClick={() => setGuestCount(guestCount + 10)}>
                  ＋
                </button>
              </span>
            </label>
            <a href={matchHref}>Show my matches</a>
          </div>
          <small>
            Recommended for {eventType.toLowerCase()} · 4 packages · 6 collections <a href="#packages">View packages →</a>
          </small>
        </section>

        <section className="editorial-section event-types">
          <div className="split-heading">
            <div>
              <span className="section-kicker">PLAN BY OCCASION</span>
              <h2>Start with your event type</h2>
              <p>Browse ideas and packages coordinated around how your event needs to work.</p>
            </div>
            <a href="/collections">See all event types →</a>
          </div>
          <div>
            {[
              ["Weddings & engagements", "Create a beautiful, practical celebration.", "/images/marquee-product.png", "wedding"],
              ["Birthdays & celebrations", "Flexible hire for every milestone.", "/images/decor-product.png", "birthday"],
              ["Corporate events", "Presentation-ready, polished and practical.", "/images/flooring-product.png", "corporate"],
              ["Community & cultural", "Adaptable layouts for shared celebrations.", "/images/tableware-product.png", "community"],
              ["Outdoor parties", "Weather-aware entertaining after dark.", "/images/lighting-product.png", "outdoor"],
            ].map((x, i) => (
              <a className={i === 0 ? "large" : ""} href={`/collection-${x[3]}`} key={x[0]}>
                <img src={x[2]} alt={x[0]} />
                <span>
                  <b>{x[0]}</b>
                  <em>{x[1]}</em>
                  <small>Explore this event →</small>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="packages" className="package-cards-wrap">
          <div className="editorial-section">
            <div className="split-heading">
              <div>
                <span className="section-kicker">POPULAR EVENT STARTERS</span>
                <h2>A simpler way to hire</h2>
                <p>Start with a clear package, then customise products, colours and service.</p>
              </div>
              <a href="#compare-packages">View package guide →</a>
            </div>
            <div className="curated-package-grid">
              {curatedPackages.map((x, i) => (
                <article key={x[0]}>
                  <div className="package-image">
                    <img src={x[3]} alt={x[0]} />
                    <span>{["MOST POPULAR", "BEST FOR DINING", "WEATHER READY", "COMPLETE AV"][i]}</span>
                    <i>♡</i>
                  </div>
                  <div>
                    <small>EVENT HIRE PACKAGE</small>
                    <h3>{x[0]}</h3>
                    <p>{x[1]}</p>
                    <ul>
                      <li>{["40 white folding chairs", "6 trestle tables", "80 seats and tables", "100 conference chairs"][i]}</li>
                      <li>{["White table linen", "Cutlery and glassware", "Clearspan marquee", "Stage and lectern"][i]}</li>
                      <li>{["Warm festoon lighting", "Table décor starter", "Heating and lighting", "Presentation lighting"][i]}</li>
                    </ul>
                    <b>
                      {x[2]} <em>starting price</em>
                    </b>
                    <a href={`/package-${["backyard", "celebration-dinner", "outdoor-winter", "corporate-presentation"][i]}`}>View & customise</a>
                    <button type="button" onClick={() => (location.href = matchHref)}>
                      ＋ Compare package
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="package-note">
              <span>Packages are flexible.</span> Swap colours, change quantities, add accessories or request a complete custom plan.
              <a href="/contact">Ask about a package</a>
            </div>
          </div>
        </section>

        <section className="editorial-section package-collections">
          <div className="split-heading">
            <div>
              <span className="section-kicker">SHOP A COORDINATED LOOK</span>
              <h2>Collections made to work together</h2>
              <p>Explore products grouped by style and occasion, then add only what your event needs.</p>
            </div>
            <a href="/collections">Browse all collections →</a>
          </div>
          <div>
            {[
              ["Classic White Wedding", "From $880", "/images/hero-event.png", "classic-white"],
              ["Modern Corporate", "From $1,250", "/images/flooring-product.png", "modern-corporate"],
              ["Rustic Garden", "From $760", "/images/tableware-product.png", "rustic-garden"],
              ["Elegant Dinner", "From $1,480", "/images/lighting-product.png", "elegant-dinner"],
              ["Winter Outdoor", "From $1,850", "/images/marquee-product.png", "winter-outdoor"],
              ["Kids & Family Party", "From $560", "/images/decor-product.png", "kids-family"],
            ].map((x) => (
              <article key={x[0]}>
                <a href={`/collection-${x[3]}`}>
                  <img src={x[2]} alt={x[0]} />
                </a>
                <small>CURATED COLLECTION</small>
                <h3>{x[0]}</h3>
                <p>Coordinated furniture, lighting and finishing details ready to tailor.</p>
                <footer>
                  <b>{x[1]}</b>
                  <a href={`/collection-${x[3]}`}>View collection →</a>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="build-package">
          <div>
            <span>BUILD YOUR OWN PACKAGE</span>
            <h2>Need something more specific?</h2>
            <p>Choose a starting style and tell us about your venue, guest count and priorities.</p>
            <div className="build-stats">
              <b>
                01<small>Choose a style</small>
              </b>
              <b>
                02<small>Tell us details</small>
              </b>
              <b>
                03<small>Confirm logistics</small>
              </b>
            </div>
            <a href="/request-quote">Build my package</a>
            <a href="/contact">Talk to a planner</a>
          </div>
          <img src="/images/warehouse-team.png" alt="Planning a custom event package" />
        </section>

        <section id="compare-packages" className="editorial-section compare-packages">
          <span className="section-kicker">PACKAGE COMPARISON</span>
          <h2>Find the right starting point</h2>
          <p>Compare typical capacity and inclusions. Final quantities depend on your venue and event layout.</p>
          <div className="package-compare-table">
            <b>Package</b>
            {curatedPackages.map((x) => (
              <span key={x[0]}>
                <img src={x[3]} alt="" />
                <strong>{x[0]}</strong>
                <em>{x[2]}</em>
              </span>
            ))}
            <b>Recommended guests</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{["30–60", "50–90", "60–120", "80–150"][i]}</span>
            ))}
            <b>Seating & tables</b>
            {curatedPackages.map((x) => (
              <span key={x[0]}>Included</span>
            ))}
            <b>Marquee</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i === 2 ? "Included" : "Optional"}</span>
            ))}
            <b>Heating</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i === 2 ? "Optional" : "—"}</span>
            ))}
            <b>Lighting</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i > 1 ? "Included" : "Optional"}</span>
            ))}
            <b>Setup support</b>
            {curatedPackages.map((x, i) => (
              <span key={x[0]}>{i === 3 ? "Included" : "Optional"}</span>
            ))}
            <b></b>
            {curatedPackages.map((x, i) => (
              <a href={`/package-${["backyard", "celebration-dinner", "outdoor-winter", "corporate-presentation"][i]}`} key={x[0]}>
                View package
              </a>
            ))}
          </div>
        </section>

        <section className="package-steps">
          <div className="editorial-section">
            <span className="section-kicker">HOW PACKAGE HIRE WORKS</span>
            <h2>From idea to event day</h2>
            <div>
              {[
                ["01", "Choose a starting point"],
                ["02", "Tailor the details"],
                ["03", "Confirm logistics"],
                ["04", "Enjoy your event"],
              ].map((x) => (
                <article key={x[0]}>
                  <i>{x[0]}</i>
                  <b>{x[1]}</b>
                  <p>Clear choices and support at every step.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section package-faq shared-faq">
          <div>
            <span className="section-kicker">PACKAGE QUESTIONS</span>
            <h2>Before you choose</h2>
            <a href="/help">View all FAQs</a>
          </div>
          <div>
            {[
              "Can I change the products or quantities in a package?",
              "Are delivery and setup included in the displayed price?",
              "What happens if an item is unavailable for my date?",
              "Can I collect and return a package myself?",
              "When is the final package price confirmed?",
            ].map((x, i) => (
              <div className={`faq-item ${faqOpen === i ? "open" : ""}`} key={x}>
                <button type="button" aria-expanded={faqOpen === i} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                  <span>{x}</span>
                  <b>{faqOpen === i ? "−" : "＋"}</b>
                </button>
                {faqOpen === i && <p>Yes. Every starting package can be adjusted before availability and final pricing are confirmed.</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="package-cta">
          <div>
            <span>READY TO PLAN?</span>
            <h2>Start with a package that fits.</h2>
            <p>Receive a clear, tailored quotation for your event.</p>
          </div>
          <a href="#packages">Explore packages</a>
          <a href="/request-quote">Get a tailored quote</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
