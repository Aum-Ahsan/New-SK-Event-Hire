import React from "react";
import legalData from "@/data/pages/legal.json";

interface LegalContentSectionProps {
  info: readonly (readonly [string, string, string])[];
  optional: boolean;
  setOptional: (val: boolean) => void;
}

export function LegalContentSection({ info, optional, setOptional }: LegalContentSectionProps) {
  const { content } = legalData as any;
  const sidebarTitle = content?.sidebarTitle || "RENTAL TERMS";
  const effectiveDate = content?.effectiveDate || "1 July 2026";
  const version = content?.version || "3.0";
  const region = content?.region || "Victoria";
  const language = content?.language || "English";

  return (
    <>
      <section id="legal-rental" className="rental-policy">
        <div className="legal-width policy-layout">
          <aside>
            <b>{sidebarTitle}</b>
            {info.slice(0, 6).map((x) => (
              <a href={`#${x[2]}`} key={x[0]}>
                {x[0]}
              </a>
            ))}
            <a href="#versions">Previous versions</a>
          </aside>
          <article>
            <span>{sidebarTitle}</span>
            <h2>Rental terms and responsibilities</h2>
            <p>These terms apply to quotations, confirmed bookings, delivery, collection and use of hired products.</p>
            <div className="policy-meta">
              <b>
                Effective<small>{effectiveDate}</small>
              </b>
              <b>
                Version<small>{version}</small>
              </b>
              <b>
                Region<small>{region}</small>
              </b>
              <b>
                Language<small>{language}</small>
              </b>
            </div>
            <blockquote style={{ border: "none" }}>Important legal information: final quantities, pricing, dates, transport and special conditions are recorded in your accepted quotation.</blockquote>
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
      </section>
    </>
  );
}
