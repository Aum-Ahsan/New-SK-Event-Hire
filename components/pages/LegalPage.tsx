import React, { useState, useEffect } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import legalData from "@/data/pages/legal.json";

interface LegalPageProps {
  kind: string;
}

export function LegalPage({ kind }: LegalPageProps) {
  const [optional, setOptional] = useState(true);
  const target = kind === "payment-policy" ? "legal-payment" : kind === "cancellation-policy" ? "legal-cancellations" : kind === "privacy" ? "legal-privacy" : "legal-rental";

  useEffect(() => {
    setTimeout(() => document.getElementById(target)?.scrollIntoView({ block: "start" }), 80);
  }, [target]);

  const info = [
    ["Rental terms", "Responsibilities and permitted use", "legal-rental"],
    ["Payment terms", "Deposits, balances and payment timing", "legal-payment"],
    ["Changes & cancellations", "Timelines, charges and refunds", "legal-cancellations"],
    ["Damage, loss & bond", "Cleaning, repair and replacement", "legal-damage"],
    ["Delivery & collection", "Access, setup, return and crew", "legal-delivery"],
    ["Privacy policy", "Information, rights and cookies", "legal-privacy"],
    ["Cookie notice", "Essential and optional cookies", "legal-cookies"],
    ["Accessibility statement", "Inclusive access and assistance", "accessibility"],
  ] as const;

  const { hero } = legalData;

  return (
    <div className="public-site legal-hub">
      <PublicHeader />
      <main>
        <section className="legal-hero">
          <span>{hero.eyebrow}</span>
          <h1>
            Policies and important
            <br />
            information
          </h1>
          <p>{hero.description}</p>
          <div>
            <a href={hero.ctaHref}>{hero.ctaText}</a>
            <a href="/contact">Contact our team</a>
          </div>
          <small>{hero.effective}</small>
        </section>

        <section className="legal-directory legal-width">
          <header>
            <span>POLICY LIBRARY</span>
            <h2>Find the information you need</h2>
            <p>Every policy is written to explain what you can expect and what we need from you.</p>
          </header>
          <div>
            {info.map((x, i) => (
              <a href={`#${x[2]}`} key={x[0]}>
                <i>{["▤", "$", "↻", "!", "▱", "◇", "◉", "♡"][i]}</i>
                <span>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </span>
                <em>→</em>
              </a>
            ))}
          </div>
        </section>

        <section id="legal-rental" className="rental-policy">
          <div className="legal-width policy-layout">
            <aside>
              <b>RENTAL TERMS</b>
              {info.slice(0, 6).map((x) => (
                <a href={`#${x[2]}`} key={x[0]}>
                  {x[0]}
                </a>
              ))}
              <a href="#versions">Previous versions</a>
            </aside>
            <article>
              <span>RENTAL TERMS</span>
              <h2>Rental terms and responsibilities</h2>
              <p>These terms apply to quotations, confirmed bookings, delivery, collection and use of hired products.</p>
              <div className="policy-meta">
                <b>
                  Effective<small>1 July 2026</small>
                </b>
                <b>
                  Version<small>3.0</small>
                </b>
                <b>
                  Region<small>Victoria</small>
                </b>
                <b>
                  Language<small>English</small>
                </b>
              </div>
              <blockquote>Important legal information: final quantities, pricing, dates, transport and special conditions are recorded in your accepted quotation.</blockquote>
              <div className="plain-summary">
                <b>What this means for you</b>
                <p>
                  You must use items safely, keep them secure, follow instructions and return everything by the agreed time. We will provide event-ready equipment and clear
                  logistics information.
                </p>
              </div>
              <h3>Rental terms and responsibilities</h3>
              {[
                "Definitions",
                "Quote, booking and confirmation",
                "Hire period and extensions",
                "Item use and reasonable care",
                "Delivery, setup and collection",
                "Return condition",
                "Loss, damage and prohibited use",
                "Cancellation, liability and disputes",
              ].map((x, i) => (
                <section key={x}>
                  <i>{i + 1}</i>
                  <div>
                    <b>{x}</b>
                    <p>
                      {
                        [
                          "‘Customer’ means the person or organisation named on the quotation. ‘Equipment’ means every hired item and accessory.",
                          "Products are reserved only after availability is confirmed, the quotation is accepted and the required payment is received.",
                          "The hire period begins and ends at the times shown in the booking. Extensions require written approval.",
                          "Use products only for their intended purpose and keep them protected from weather, theft, misuse and unauthorised relocation.",
                          "Provide safe access, accurate site details and an authorised contact. Crew instructions must be followed during setup.",
                          "Return all products grouped, accessible and in substantially the same condition, allowing for fair wear.",
                          "Repair, specialist cleaning, missing-item and replacement costs may be charged after an evidence-based assessment.",
                          "Applicable law is Victoria, Australia. Contact us promptly so concerns can be reviewed fairly.",
                        ][i]
                      }
                    </p>
                  </div>
                </section>
              ))}
            </article>
          </div>
        </section>

        <section id="legal-payment" className="policy-section legal-width">
          <span>PAYMENT TERMS</span>
          <h2>Payment terms</h2>
          <p>Deposits, balances, GST and refunds are itemised before you authorise payment.</p>
          <div className="four-policy">
            {[
              ["Quote & GST", "Prices are in AUD and include GST unless clearly stated."],
              ["Deposit & balance", "The deposit confirms the booking; the balance date appears on the invoice."],
              ["Payment methods", "Pay securely by card, PayID or approved bank transfer."],
              ["Payment protection", "OTP and account verification may be required for sensitive payments."],
            ].map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
          <div className="payment-strip">
            <b>
              Deposit<small>Due on acceptance</small>
            </b>
            <b>
              Balance<small>Due before delivery</small>
            </b>
            <b>
              Receipts<small>Issued automatically</small>
            </b>
            <b>
              Refunds<small>Returned to source</small>
            </b>
          </div>
        </section>

        <section id="legal-cancellations" className="cancellation-policy">
          <div className="legal-width">
            <span>CHANGES, CANCELLATIONS & REFUNDS</span>
            <h2>Changes, cancellations and refunds</h2>
            <p>Charges depend on timing, stock preparation, sourced items and committed logistics.</p>
            <div>
              <ol>
                {["More than 30 days before", "14–30 days before", "Fewer than 14 days before", "Event day or no-show"].map((x, i) => (
                  <li key={x}>
                    <i>{i + 1}</i>
                    <b>{x}</b>
                    <small>
                      {
                        [
                          "Usually eligible for refund less non-refundable sourced work.",
                          "Preparation or supplier charges may apply.",
                          "Higher cancellation charges may apply because resources are committed.",
                          "The full hire and logistics charge may be payable.",
                        ][i]
                      }
                    </small>
                  </li>
                ))}
              </ol>
              <aside>
                <b>Weather and rescheduling</b>
                <p>Weather does not automatically cancel a booking. Contact us early to review a safe relocation, date change or wet-weather plan.</p>
                <a href="/contact">Request a booking review</a>
              </aside>
            </div>
          </div>
        </section>

        <section id="legal-damage" className="policy-section legal-width">
          <span>DAMAGE & SECURITY</span>
          <h2>Damage, loss, cleaning and security amounts</h2>
          <div className="four-policy">
            {[
              ["Inspection & evidence", "We record condition and provide supporting evidence for charges."],
              ["Bond and damage waiver", "A refundable security amount may apply based on order value and risk."],
              ["Repair or replacement", "Reasonable repair, cleaning or replacement cost may be charged."],
              ["Fair dispute process", "You can ask for the evidence and request a review of the assessment."],
            ].map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="legal-delivery" className="delivery-policy">
          <div className="legal-width">
            <span>DELIVERY & SITE RESPONSIBILITIES</span>
            <h2>Delivery, setup, collection and customer return</h2>
            <div className="four-policy">
              {[
                ["Service area & fees", "Transport is based on suburb, access, crew and confirmed time windows."],
                ["Venue access", "Provide parking, lift, stairs, doorway and contact information."],
                ["Setup boundary", "Only contracted setup work is included; venue work remains the customer’s responsibility."],
                ["Collection & late return", "Keep items accessible and ready. Waiting or late-return fees may apply."],
              ].map((x) => (
                <article key={x[0]}>
                  <b>{x[0]}</b>
                  <p>{x[1]}</p>
                </article>
              ))}
            </div>
            <blockquote>
              Need to change a delivery address or access note? Submit a booking change before the warehouse dispatch cut-off. <a href="/bookings">View your booking</a>
            </blockquote>
          </div>
        </section>

        <section id="legal-privacy" className="policy-section legal-width">
          <span>YOUR INFORMATION</span>
          <h2>Privacy policy</h2>
          <p>We collect only the information needed to respond, quote, deliver, support and meet legal obligations.</p>
          <div className="four-policy">
            {[
              ["What we collect", "Contact, event, venue, payment reference and support details."],
              ["Why we use it", "To provide services, prevent fraud and communicate with you."],
              ["Who receives it", "Approved payment, delivery, technology and legal providers."],
              ["Security & retention", "Access controls and retention periods appropriate to the record."],
            ].map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
          <aside>
            <b>Your privacy choices and rights</b>
            <p>Request access, correction, export or deletion where the law allows.</p>
            <a href="/contact">Make a privacy request</a>
            <a href="/privacy">Read full privacy policy</a>
          </aside>
        </section>

        <section id="legal-cookies" className="cookie-policy">
          <div className="legal-width">
            <span>COOKIE PREFERENCES</span>
            <h2>You choose optional cookies</h2>
            <p>Essential cookies keep the site secure. Optional preferences can be changed at any time.</p>
            <div className="cookie-table">
              <b>Category</b>
              <b>Purpose</b>
              <b>Typical duration</b>
              <b>Preference</b>
              <span>Essential</span>
              <span>Security, quoting and navigation</span>
              <span>Session / 12 months</span>
              <strong>Always on</strong>
              <span>Analytics</span>
              <span>Understand site performance</span>
              <span>Up to 13 months</span>
              <label>
                <input type="checkbox" checked={optional} onChange={(e) => setOptional(e.target.checked)} /> {optional ? "On" : "Off"}
              </label>
            </div>
            <footer>
              <button onClick={() => setOptional(false)}>Reject optional cookies</button>
              <button onClick={() => setOptional(true)}>Accept all cookies</button>
              <b>{optional ? "Preferences saved" : "Optional cookies disabled"}</b>
            </footer>
          </div>
        </section>

        <section id="accessibility" className="accessibility-card legal-width">
          <i>♡</i>
          <div>
            <span>ACCESSIBILITY STATEMENT</span>
            <h2>Policies should work for everyone</h2>
            <p>We aim for clear language, keyboard access and readable layouts. Tell us if you need an alternative format or extra assistance.</p>
            <a href="/contact">Request an accessible copy</a>
          </div>
        </section>

        <section id="versions" className="policy-versions legal-width">
          <span>PREVIOUS VERSIONS</span>
          <h2>Previous versions</h2>
          <p>See what changed and download the policy that applied to an earlier booking.</p>
          <div>
            <b>Policy</b>
            <b>Version</b>
            <b>Effective period</b>
            <b>Status</b>
            <b>Document</b>
            {[
              ["Rental terms", "3.0", "1 Jul 2026–current", "Current"],
              ["Rental terms", "2.1", "1 Jan–30 Jun 2026", "Archived"],
              ["Privacy policy", "2.0", "1 Jul 2026–current", "Current"],
              ["Payment terms", "1.4", "1 Mar 2026–current", "Current"],
            ].flatMap((x) => x.map((y) => <span key={`${x[0]}${y}`}>{y}</span>))}
          </div>
          <aside>
            Can’t find the policy attached to your quotation? <a href="/contact">Contact customer care</a>
          </aside>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
