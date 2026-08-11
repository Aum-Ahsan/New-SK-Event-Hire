import React from "react";
import paymentData from "@/data/pages/payment.json";

interface PaymentOutcomeSectionProps {
  paid: boolean;
}

export function PaymentOutcomeSection({ paid }: PaymentOutcomeSectionProps) {
  return (
    <>
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
    </>
  );
}
