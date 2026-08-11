import React from "react";

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

interface PaymentShellSectionProps {
  method: string;
  setMethod: (m: string) => void;
  methods: [string, string, string, string][];
  verified: boolean;
  setVerified: (v: boolean) => void;
  pay: () => void;
}

export function PaymentShellSection({
  method,
  setMethod,
  methods,
  verified,
  setVerified,
  pay,
}: PaymentShellSectionProps) {
  return (
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
  );
}
