import React from "react";
import contactData from "@/data/pages/contact.json";

export function ContactSuccessSection({ setSent }: { setSent: (val: boolean) => void }) {
  return (
    <section className="enquiry-success">
      <i>✓</i>
      <div>
        <span>ENQUIRY RECEIVED</span>
        <h2>Thanks—your event enquiry is on its way.</h2>
        <p>We’ll review the event details and reply within one business day.</p>
        <b>ENQ-2608-00133</b>
        <div>
          <small>
            EVENT DATE
            <br />
            <b>14 Nov 2026</b>
          </small>
          <small>
            CONTACT METHOD
            <br />
            <b>Email</b>
          </small>
          <small>
            NEXT RESPONSE
            <br />
            <b>Within one business day</b>
          </small>
        </div>
        <button onClick={() => setSent(false)}>Send another enquiry</button>
        <a href="/">Return home</a>
      </div>
    </section>
  );
}
