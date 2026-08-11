import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import paymentData from "@/data/pages/payment.json";

function PaymentSummary() {
  return (
    <aside className="payment-summary">
      <span>BOOKING SUMMARY</span>
      <h2>Payment overview</h2>
      <div className="summary-event">
        <b>Wedding reception</b>
        <small>
          12–14 September 2026<br />
          Booking SKB-10482
        </small>
      </div>
      {[
        ["/images/chairs-product.png", "60 × White Tiffany Chairs"],
        ["/images/tables-product.png", "8 × Round Banquet Tables"],
        ["/images/lighting-product.png", "3 × Warm Festoon Sets"],
      ].map((x) => (
        <p key={x[1]}>
          <img src={x[0]} alt="" />
          {x[1]}
        </p>
      ))}
      {[
        ["Booking total", "$1,156.80"],
        ["Deposit due now", "$326.22"],
        ["Balance due 5 Sep", "$830.58"],
        ["Refundable bond", "$150.00"],
        ["GST included", "$105.16"],
      ].map((x) => (
        <div key={x[0]}>
          <span>{x[0]}</span>
          <b>{x[1]}</b>
        </div>
      ))}
      <strong>
        <small>Pay now</small>$326.22
      </strong>
      <em>
        ✓ Secure payment<br />
        ✓ Duplicate protection<br />
        ✓ Receipt by email and SMS
      </em>
    </aside>
  );
}

export function PaymentPage() {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState("card");
  const [verified, setVerified] = useState(false);
  const [paid, setPaid] = useState(false);

  const methods = [
    ["card", "▰", "Debit or credit card", "Instant verification"],
    ["bpay", "P", "PayID", "Usually within minutes"],
    ["bank", "$", "Bank transfer", "1–2 business days"],
    ["cash", "⌘", "Cash", "Approval required"],
  ];

  const pay = () => {
    if (!verified) {
      setStep(2);
      return;
    }
    setStep(4);
    setTimeout(() => {
      setPaid(true);
      setTimeout(() => document.getElementById("payment-confirmed")?.scrollIntoView({ behavior: "smooth" }), 80);
    }, 850);
  };

  const { intro, help } = paymentData;

  return (
    <div className={`public-site payment-page payment-wizard-${step}`}>
      <PublicHeader />
      <main>
        <section className="payment-intro">
          <div>
            <span>{intro.eyebrow}</span>
            <h1>{intro.title}</h1>
            <p>{intro.description}</p>
          </div>
          <aside>
            <b>{intro.asideTitle}</b>
            <small>{intro.asideDescription}</small>
            <a href={intro.helpLink.href}>{intro.helpLink.text}</a>
          </aside>
        </section>

        <nav className="payment-steps">
          {["Booking review", "Payment method", "Verification", "Final review", "Confirmation"].map((x, i) => (
            <button
              type="button"
              onClick={() => {
                if (i < 3 || verified) setStep(i);
              }}
              className={i === step ? "active" : i < step ? "done" : ""}
              key={x}
            >
              <i>{i < step ? "✓" : i + 1}</i>
              {x}
            </button>
          ))}
        </nav>

        <div className="wizard-actions">
          <button type="button" disabled={step === 0} onClick={() => setStep((x) => Math.max(0, x - 1))}>
            ← Back
          </button>
          <span>Step {step + 1} of 5</span>
          {step < 3 && (
            <button
              className="next"
              type="button"
              onClick={() => {
                if (step === 2 && !verified) return;
                setStep((x) => x + 1);
              }}
            >
              {step === 2 && !verified ? "Verify code to continue" : "Continue →"}
            </button>
          )}
        </div>

        <section className="payment-shell">
          <div>
            <section className="pay-card">
              <header>
                <span>PAYMENT METHOD</span>
                <em>PCI-secure</em>
                <h2>How would you like to pay?</h2>
                <p>Select an available payment option. Instructions and timing are shown before confirmation.</p>
              </header>
              <div className="pay-methods">
                {methods.map((m) => (
                  <button className={method === m[0] ? "selected" : ""} onClick={() => setMethod(m[0])} key={m[0]}>
                    <i>{m[1]}</i>
                    <b>{m[2]}</b>
                    <small>{m[3]}</small>
                  </button>
                ))}
              </div>
              {method === "card" && (
                <div className="pay-fields">
                  <label className="wide">
                    Name on card *<input value="Amelia Thompson" readOnly />
                  </label>
                  <label className="wide">
                    Card number *<input value="•••• •••• •••• 4242" readOnly />
                  </label>
                  <label>
                    Expiry date *<input value="09 / 29" readOnly />
                  </label>
                  <label>
                    Security code *<input value="•••" readOnly />
                  </label>
                  <label className="wide">
                    Billing address *<input value="18 Garden Lane, Melbourne VIC 3000" readOnly />
                  </label>
                </div>
              )}
              <label className="pay-consent">
                <input type="checkbox" defaultChecked /> I am the cardholder or have authority to use this payment method for booking SKB-10482.
              </label>
              <div className="pay-timing">
                <b>Payment timing</b>
                <span>$326.22 will be charged now as the booking deposit. The remaining $830.58 is due by 5 September 2026.</span>
              </div>
            </section>

            <section className="otp-card">
              <div>
                <span>IDENTITY VERIFICATION</span>
                <h2>Verify this payment</h2>
                <p>
                  Enter the 6-digit code sent to <b>04•• ••• 678</b>. The code expires shortly and can only be used once.
                </p>
                <a href="/contact">Change mobile number</a>
              </div>
              <div>
                <b>6-digit verification code</b>
                <div className="otp-digits">
                  {[4, 8, 2, 6, 1, 9].map((n, i) => (
                    <input key={i} value={n} readOnly aria-label={`OTP digit ${i + 1}`} />
                  ))}
                </div>
                <button onClick={() => setVerified(true)}>{verified ? "✓ Payment verified" : "Verify and continue"}</button>
                <small>{verified ? "Code accepted securely" : "Resend code"}</small>
              </div>
            </section>

            <section className="pay-card pay-review">
              <header>
                <span>FINAL PAYMENT REVIEW</span>
                <a href="/basket">Edit booking</a>
                <h2>Review before you pay</h2>
                <p>Confirm the booking, payment method and amount. Totals are recalculated securely when submitted.</p>
              </header>
              <div>
                {[
                  ["BOOKING", "SKB-10482", "Wedding reception · 12–14 September 2026"],
                  ["PAYMENT METHOD", "Visa ending 4242", "Amelia Thompson · Billing postcode 3000"],
                  ["PAYMENT", "$326.22 due now", "Deposit · GST included · Balance $830.58"],
                ].map((x) => (
                  <article key={x[0]}>
                    <small>{x[0]}</small>
                    <b>{x[1]}</b>
                    <p>{x[2]}</p>
                  </article>
                ))}
              </div>
              <label>
                <input type="checkbox" defaultChecked /> I authorise SK Event Hire to charge $326.22 and agree to the payment, cancellation, damage/bond and privacy terms.
              </label>
              <footer>
                <a href="/basket">← Back</a>
                <button onClick={pay}>Pay $326.22 securely</button>
              </footer>
            </section>
          </div>
          <PaymentSummary />
        </section>

        <section className="processing-band">
          <div className="progress-ring">
            <strong>{paid ? "100%" : "62%"}</strong>
          </div>
          <div>
            <span>PAYMENT PROCESSING</span>
            <h2>{paid ? "Payment confirmed." : "Please keep this page open."}</h2>
            <p>We’re securely confirming your payment with your bank. This usually takes less than a minute. Do not refresh or press Back.</p>
            {["Payment details encrypted", "OTP and payer authority verified", "Bank authorisation in progress", "Receipt and booking update"].map((x, i) => (
              <div className="process-row" key={x}>
                <i>{paid || i < 2 ? "✓" : i === 2 ? "…" : "•"}</i>
                <b>{x}</b>
                <small>{paid || i < 2 ? "Complete" : i === 2 ? "Processing" : "Waiting"}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="payment-outcomes">
          <span>CLEAR TRANSACTION OUTCOMES</span>
          <h2>Payment status and recovery</h2>
          <p>Every outcome explains what happened, whether the booking changed and what to do next.</p>
          <div>
            {[
              ["success", "✓", "PAYMENT SUCCESSFUL", "Your deposit has been paid.", "View confirmation", "#payment-confirmed"],
              ["pending", "◷", "PAYMENT PENDING", "Your bank transfer is being matched.", "View transfer instructions", "/payment-policy"],
              ["failed", "!", "PAYMENT NOT COMPLETED", "Your card was not charged.", "Try another method", "#payment-method"],
            ].map((x) => (
              <article className={x[0]} key={x[0]}>
                <i>{x[1]}</i>
                <small>{x[2]}</small>
                <h3>{x[3]}</h3>
                <p>The booking remains protected while we update your payment status.</p>
                <dl>
                  <div>
                    <dt>Reference</dt>
                    <dd>SKB-10482</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{x[0]}</dd>
                  </div>
                </dl>
                <a href={x[5]}>{x[4]}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="payment-confirmed" className="payment-confirmed">
          <header>
            <i>✓</i>
            <div>
              <span>PAYMENT & BOOKING CONFIRMED</span>
              <h2>Payment received. Your booking is secured.</h2>
              <p>Your deposit has been paid and the approved stock and logistics schedule are now confirmed.</p>
            </div>
            <strong>
              <small>Booking number</small>SKB-10482
            </strong>
          </header>
          <div className="receipt-layout">
            <article>
              <header>
                <b>◉ SK Event Hire</b>
                <strong>RCT-10482-01</strong>
              </header>
              <div className="receipt-facts">
                <span>
                  Paid by<b>Amelia Thompson</b>
                </span>
                <span>
                  Payment date<b>23 July 2026</b>
                </span>
                <span>
                  Payment method<b>Visa •••• 4242</b>
                </span>
              </div>
              <p>
                Booking deposit <b>$296.56</b>
              </p>
              <p>
                GST <b>$29.66</b>
              </p>
              <h3>
                Total paid <b>$326.22 AUD</b>
              </h3>
              <p>
                Remaining balance <b>$830.58 due 5 Sep 2026</b>
              </p>
            </article>
            <aside>
              <h3>Confirmed event schedule</h3>
              {["12 Sep · Delivery and setup", "12–13 Sep · Wedding reception", "14 Sep · SK collection"].map((x, i) => (
                <p key={x}>
                  <i>{i + 1}</i>
                  {x}
                </p>
              ))}
              <a href="/payments-documents">Download receipt</a>
              <a href="/bookings">View booking</a>
            </aside>
          </div>
          <footer>
            <span>
              <b>What happens next?</b>
              <small>We’ll send a balance reminder before 5 September and a delivery update before your event.</small>
            </span>
            <a href="/bookings">Add to calendar</a>
            <a href="/contact">Contact booking team</a>
          </footer>
        </section>

        <section className="checkout-help">
          <div>
            <span>{help.eyebrow}</span>
            <h2>{help.title}</h2>
            <p>{help.description}</p>
          </div>
          <a href={help.phone.href}>{help.phone.text}</a>
          <a href={help.support.href}>{help.support.text}</a>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
