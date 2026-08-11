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

interface QuoteJourneySectionProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  submitted: boolean;
  setSubmitted: (val: boolean) => void;
  verified: boolean;
  setVerified: (val: boolean) => void;
  decision: string;
  setDecision: (val: string) => void;
  notice: string;
  setNotice: (val: string) => void;
  submitQuote: () => void;
  downloadQuote: () => void;
}

export function QuoteJourneySection({
  step,
  setStep,
  submitted,
  setSubmitted,
  verified,
  setVerified,
  decision,
  setDecision,
  notice,
  setNotice,
  submitQuote,
  downloadQuote,
}: QuoteJourneySectionProps) {
  const { quoteJourney } = quoteData;
  const { hero } = quoteJourney;

  return (
    <>
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
    </>
  );
}
