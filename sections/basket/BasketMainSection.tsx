import React from "react";

function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return (
    <div className={`field ${wide ? "wide-field" : ""} ${area ? "area-field" : ""}`}>
      <label>{label}</label>
      <input readOnly defaultValue={value || ""} />
    </div>
  );
}

interface BasketMainSectionProps {
  basketItems: [string, string, string, string, string][];
  extras: string[];
  toggleExtra: (name: string) => void;
  otpVerified: boolean;
  setOtpVerified: (val: boolean) => void;
  setRequestSent: (val: boolean) => void;
  scrollTo: (id: string) => void;
}

export function BasketMainSection({
  basketItems,
  extras,
  toggleExtra,
  otpVerified,
  setOtpVerified,
  setRequestSent,
  scrollTo,
}: BasketMainSectionProps) {
  return (
    <section className="checkout-shell">
      <div className="checkout-main">
        <section className="checkout-card basket-card">
          <header>
            <div>
              <span>YOUR BASKET</span>
              <h2>Your event hire basket</h2>
              <p>Check quantities, options and dates before checkout.</p>
            </div>
            <a href="/products">Continue shopping</a>
          </header>
          {basketItems.map((x, i) => (
            <article className="checkout-item" key={x[0]}>
              <img src={x[3]} alt={x[0]} />
              <div>
                <small>● Available</small>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
                <a href={`/product-${x[4]}`}>Edit options</a>
              </div>
              <label>
                Quantity
                <input type="number" defaultValue={[60, 8, 3][i]} min="1" />
              </label>
              <strong>
                {x[2]}
                <small>incl GST</small>
              </strong>
            </article>
          ))}
          <footer>
            <b>!</b>
            <span>
              <strong>Availability adjusted</strong> One item has limited stock across the selected dates.
            </span>
            <a href="/products">View alternatives</a>
          </footer>
        </section>

        <section className="checkout-card">
          <header>
            <div>
              <span>EVENT SCHEDULE</span>
              <h2>Confirm your hire dates</h2>
              <p>We use these dates to calculate the hire period and availability.</p>
            </div>
            <em>✓ Saved</em>
          </header>
          <div className="checkout-form two">
            <Field label="Event required from" value="12 Sep 2026 · 11:00 am" />
            <Field label="Event starts" value="12 Sep 2026 · 4:00 pm" />
            <Field label="Event ends" value="13 Sep 2026 · 11:00 pm" />
            <Field label="Items returned by" value="14 Sep 2026 · 12:00 pm" />
          </div>
          <label className="checkbox-line">
            <input type="checkbox" /> My venue can receive items one day early
          </label>
          <div className="days-note">
            <b>3 chargeable days</b>
            <span>Saturday 12 September, Sunday 13 September and Monday 14 September.</span>
          </div>
        </section>

        <section className="checkout-card">
          <header>
            <div>
              <span>CUSTOMER & EVENT</span>
              <h2>Your contact details</h2>
              <p>Sign in to use saved details or continue as a guest.</p>
            </div>
            <a href="/sign-in">Sign in</a>
          </header>
          <div className="checkout-form two">
            <Field label="First name" value="Amelia" />
            <Field label="Last name" value="Thompson" />
            <Field label="Email" value="amelia.t@example.com" />
            <Field label="Mobile" value="0412 345 678" />
            <Field label="Company / organisation" value="Optional" />
            <Field label="ABN / purchase order" value="Optional" />
          </div>
          <h3>Where is the event?</h3>
          <div className="checkout-form two">
            <Field label="Event type" value="Wedding reception" />
            <Field label="Guest count" value="60" />
            <Field label="Venue name" value="Willow & Stone Estate" />
            <Field label="Postcode" value="3000" />
            <Field wide label="Event address" value="18 Garden Lane, Melbourne VIC 3000" />
            <Field wide label="On-site contact" value="Jordan Lee · 0412 000 111" />
          </div>
          <label className="checkbox-line">
            Event setting: <input type="radio" name="setting" defaultChecked /> Indoor <input type="radio" name="setting" /> Outdoor <input type="radio" name="setting" /> Both
          </label>
        </section>

        <section className="checkout-card">
          <header>
            <div>
              <span>FULFILMENT</span>
              <h2>Delivery and return</h2>
              <p>Choose both journeys so labour and timing can be confirmed.</p>
            </div>
          </header>
          <h3>How will you receive the items?</h3>
          <div className="choice-cards">
            {[
              ["Customer pickup", "Collect from our warehouse"],
              ["Delivery only", "Delivered to your venue"],
              ["Delivery & setup", "Delivery, placement and setup"],
            ].map((x, i) => (
              <label className={i === 2 ? "selected" : ""} key={x[0]}>
                <input name="receive" type="radio" defaultChecked={i === 2} />
                <b>{x[0]}</b>
                <small>{x[1]}</small>
                <em>{i === 2 ? "From $240" : ""}</em>
              </label>
            ))}
          </div>
          <h3>How will the items come back?</h3>
          <div className="choice-cards">
            {[
              ["Customer return", "Return to our warehouse"],
              ["SK collection", "We collect after your event"],
              ["Pack-down + collection", "We pack down and collect"],
            ].map((x, i) => (
              <label className={i === 1 ? "selected" : ""} key={x[0]}>
                <input name="return" type="radio" defaultChecked={i === 1} />
                <b>{x[0]}</b>
                <small>{x[1]}</small>
                <em>{i === 1 ? "From $85" : ""}</em>
              </label>
            ))}
          </div>
        </section>

        <section className="checkout-card access-card">
          <header>
            <div>
              <span>VENUE ACCESS</span>
              <h2>Tell us about access</h2>
              <p>Clear access details help us allocate the right crew and vehicle.</p>
            </div>
          </header>
          <div className="access-layout">
            <img src="/images/warehouse-team.png" alt="Event delivery and venue access" />
            <div className="checkout-form two">
              <Field label="Parking / loading area" value="Venue loading bay" />
              <Field label="Distance to setup" value="Under 25 metres" />
              <Field label="Stairs or lift" value="Ground floor · no stairs" />
              <Field label="Stairs / doorway width" value="1.2 metres" />
              <Field label="Ground surface" value="Lawn and paved path" />
              <Field label="Power available" value="Yes · standard outlet" />
              <Field label="Anchoring permitted" value="Ground stakes permitted" />
              <Field label="Venue restrictions" value="No vehicle access after 3:00 pm" />
            </div>
          </div>
        </section>

        <section className="checkout-card extras-card">
          <header>
            <div>
              <span>OPTIONAL ADD-ONS</span>
              <h2>Useful extras</h2>
              <p>Add practical extras now and we’ll confirm final stock and pricing.</p>
            </div>
          </header>
          <div>
            {[
              ["linen", "White fitted table linen", "$16 each", "/images/tableware-product.png"],
              ["pickup", "Assisted at SK pickup", "$55 service", "/images/warehouse-team.png"],
              ["damage", "Event damage protection", "$49 per booking", "/images/decor-product.png"],
            ].map((x) => (
              <label className={extras.includes(x[0]) ? "selected" : ""} key={x[0]}>
                <img src={x[3]} alt="" />
                <span>
                  <b>{x[1]}</b>
                  <small>{x[2]}</small>
                </span>
                <input type="checkbox" checked={extras.includes(x[0])} onChange={() => toggleExtra(x[0])} />
              </label>
            ))}
          </div>
          <div className="promo">
            <span>
              <b>Have a promo code?</b>
              <small>Promotions are validated before your total updates.</small>
            </span>
            <input defaultValue="CELEBRATE20" />
            <button>Apply</button>
          </div>
        </section>

        <section className="checkout-card payment-card">
          <header>
            <div>
              <span>PAYMENT PREFERENCE</span>
              <h2>Choose how you’d like to pay</h2>
              <p>No charge is made until your booking conditions are ready.</p>
            </div>
          </header>
          <div className="payment-options">
            {["Debit or credit card", "BPAY", "Bank transfer", "Pay on approved account"].map((x, i) => (
              <label className={i === 0 ? "selected" : ""} key={x}>
                <input type="radio" name="pay" defaultChecked={i === 0} />
                <b>{x}</b>
              </label>
            ))}
          </div>
          <div className="checkout-form two">
            <Field wide label="Name on card" value="Amelia Thompson" />
            <Field label="Card number" value="•••• •••• •••• 4242" />
            <Field label="Expiry / CVC" value="09/29 · •••" />
          </div>
          <div className="verify-checkout">
            <span>
              <b>Verify your checkout</b>
              <small>Enter the secure code sent to your mobile.</small>
            </span>
            <div>
              {[4, 8, 2, 6, 1, 9].map((n, i) => (
                <input key={i} aria-label={`Code digit ${i + 1}`} defaultValue={n} />
              ))}
            </div>
            <button onClick={() => setOtpVerified(true)}>{otpVerified ? "✓ Verified" : "Verify OTP"}</button>
          </div>
        </section>

        <section className="checkout-card review-card">
          <header>
            <div>
              <span>FINAL REVIEW</span>
              <h2>Review your booking request</h2>
              <p>Check the important details before sending your request.</p>
            </div>
          </header>
          <div className="review-summaries">
            {[
              ["Event and customer", "Amelia Thompson · Wedding reception · 60 guests"],
              ["Delivery and return", "Delivery + setup · SK collection"],
              ["Payment", "Card ending 4242 · Authorised after review"],
            ].map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <p>{x[1]}</p>
                <button>Edit</button>
              </article>
            ))}
          </div>
          <label className="checkbox-line">
            <input type="checkbox" defaultChecked /> I agree to the rental terms, cancellation policy, damage policy and payment conditions.
          </label>
          <footer>
            <a href="/products">← Back to payment</a>
            <button
              onClick={() => {
                setRequestSent(true);
                setTimeout(() => scrollTo("request-received"), 50);
              }}
            >
              Send booking request
            </button>
          </footer>
        </section>
      </div>

      <aside className="booking-estimate">
        <span>BOOKING ESTIMATE</span>
        <h2>Your booking estimate</h2>
        <b>Wedding reception</b>
        <small>12–14 September 2026 · Melbourne VIC</small>
        {[
          ["Hire items", "$684.00"],
          ["Delivery and setup", "$240.00"],
          ["Delivery + setup", "$85.00"],
          ["Return collection", "$55.00"],
          ["Damage protection", "$49.00"],
          ["Promo saving", "−$40.60"],
        ].map((x) => (
          <div key={x[0]}>
            <span>{x[0]}</span>
            <b>{x[1]}</b>
          </div>
        ))}
        <strong>
          <small>Estimated total</small>$1,306.80
        </strong>
        <p>Final total is confirmed after stock and logistics review.</p>
        <button onClick={() => scrollTo("final-review")}>Continue to review</button>
        <small>Secure checkout · Details protected</small>
      </aside>
    </section>
  );
}
