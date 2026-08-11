import React from "react";

interface BasketOutcomeSectionProps {
  requestSent: boolean;
  bookingConfirmed: boolean;
  setBookingConfirmed: (val: boolean) => void;
  scrollTo: (id: string) => void;
}

export function BasketOutcomeSection({
  requestSent,
  bookingConfirmed,
  setBookingConfirmed,
  scrollTo,
}: BasketOutcomeSectionProps) {
  return (
    <>
      {requestSent && !bookingConfirmed && (
        <section id="request-received" className="request-received revealed">
          <img src="/images/warehouse-team.png" alt="Event team reviewing booking request" />
          <div>
            <i>✓</i>
            <span>REQUEST RECEIVED</span>
            <h2>We’ve received your booking request.</h2>
            <p>Booking SKB-7K4M2 is awaiting availability and logistics approval. This is not yet a confirmed booking.</p>
            <dl>
              <div>
                <dt>Event</dt>
                <dd>Wedding reception</dd>
              </div>
              <div>
                <dt>Delivery window</dt>
                <dd>12 Sep · 11:00 am–2:00 pm</dd>
              </div>
              <div>
                <dt>SK collection</dt>
                <dd>14 Sep · 10:00 am–12:00 pm</dd>
              </div>
            </dl>
            <button
              className="approval-demo"
              onClick={() => {
                setBookingConfirmed(true);
                setTimeout(() => scrollTo("confirmation"), 50);
              }}
            >
              Continue after approval →
            </button>
            <a href="/order-tracking">Track request</a>
          </div>
        </section>
      )}

      {bookingConfirmed && (
        <section id="confirmation" className="booking-confirmation">
          <header>
            <div>
              <span>BOOKING CONFIRMED</span>
              <h2>Your booking is confirmed.</h2>
              <p>Your stock, crew and payment conditions are approved. Keep this operational schedule available for the event.</p>
            </div>
            <strong>
              <small>Booking number</small>SKB-10482
            </strong>
          </header>
          <div className="confirmation-timeline">
            {[
              ["Saturday 12 September", "Delivery and setup · 11:00 am–2:00 pm"],
              ["Saturday 12–13 September", "Event hire period"],
              ["Monday 14 September", "Collection · 10:00 am–12:00 pm"],
            ].map((x, i) => (
              <article key={x[0]}>
                <i>{i + 1}</i>
                <span>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </span>
                <em>Scheduled</em>
              </article>
            ))}
          </div>
          <div className="confirmation-details">
            <article>
              <h3>Payment status</h3>
              <p>
                Deposit due <b>$326.22</b>
              </p>
              <p>
                Balance due 5 Sep 2026 <b>$830.58</b>
              </p>
              <a href="/payment">Pay deposit securely</a>
            </article>
            <article>
              <h3>Items confirmed</h3>
              <p>
                60 White Tiffany Chairs
                <br />8 Round Banquet Tables
                <br />3 Warm Festoon Lighting Sets
                <br />Delivery, setup and SK collection
              </p>
              <a href="/payments-documents">Download item list</a>
            </article>
            <article>
              <h3>Need support?</h3>
              <p>Message the booking team or call 03 9000 0000.</p>
              <a href="/contact">Contact booking team</a>
            </article>
          </div>
          <footer>
            <span>
              <b>Need to change your plans?</b>
              <small>Changes depend on availability and may affect pricing.</small>
            </span>
            <a href="/change-request">Request a booking change</a>
            <a className="danger" href="/cancellation-request">
              Cancel booking
            </a>
          </footer>
        </section>
      )}
    </>
  );
}
