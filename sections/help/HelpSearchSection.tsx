import React from "react";

function Field({ label, value, wide, area }: { label: string; value?: string; wide?: boolean; area?: boolean }) {
  return (
    <div className={`field ${wide ? "wide-field" : ""} ${area ? "area-field" : ""}`}>
      <label>{label}</label>
      <input readOnly defaultValue={value || ""} />
    </div>
  );
}

interface HelpSearchSectionProps {
  query: string;
  setQuery: (val: string) => void;
  results: string[];
  sent: boolean;
  setSent: (val: boolean) => void;
  jump: (id: string) => void;
}

export function HelpSearchSection({
  query,
  setQuery,
  results,
  sent,
  setSent,
  jump,
}: HelpSearchSectionProps) {
  return (
    <>
      <section id="search-help" className="help-search help-width">
        <div>
          <span>HELP SEARCH</span>
          <h2>Search results</h2>
          <p>{query ? `Showing answers for “${query}”` : "Search by a word or choose a common question."}</p>
          <label>
            ⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try: bond, delivery, cancellation" />
            <button>Search</button>
          </label>
          <div className="result-list">
            {results.map((x) => (
              <a href={x.includes("quantities") ? "#booking-article" : "#delivery-help"} key={x}>
                {x}
                <span>→</span>
              </a>
            ))}
          </div>
        </div>
        <aside>
          {results.length ? (
            <>
              <i>⌕</i>
              <h3>
                {results.length} helpful answer{results.length > 1 ? "s" : ""}
              </h3>
              <p>Select a result or browse all topics.</p>
              <a href="#booking-article">Open first answer</a>
            </>
          ) : (
            <>
              <i>⌕</i>
              <h3>No answers found for “{query}”.</h3>
              <p>Try a shorter phrase or ask our customer support team.</p>
              <button onClick={() => setQuery("")}>Clear search</button>
              <a href="#support-form">Contact support</a>
            </>
          )}
        </aside>
      </section>

      <article id="booking-article" className="help-article">
        <div className="help-width">
          <aside>
            <b>IN THIS ARTICLE</b>
            <a href="#change-before">Before requesting a change</a>
            <a href="#change-options">Change options</a>
            <a href="#change-next">What happens next?</a>
            <a href="/rental-terms">Related policies</a>
            <a href="#support-form">Ask for help</a>
          </aside>
          <div>
            <span>BOOKING CHANGES</span>
            <h1>Can I change product quantities after booking?</h1>
            <p className="article-lead">Yes. Quantity changes can be requested, but they remain subject to stock, delivery, labour and price confirmation.</p>
            <blockquote style={{ border: "none" }}>✓ Your existing booking remains confirmed until an updated version is approved.</blockquote>
            <h2 id="change-before">Before requesting a change</h2>
            <p>Have your booking reference ready and tell us which product, current quantity and requested quantity you want changed.</p>
            <div id="change-options" className="change-cards">
              {[
                ["Open your booking", "Use the customer account to find the confirmed order."],
                ["Request the quantity update", "Choose the item and enter the required quantity."],
                ["Wait for confirmation", "We recheck availability, logistics and pricing."],
              ].map((x, i) => (
                <article key={x[0]}>
                  <i>{i + 1}</i>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </article>
              ))}
            </div>
            <div className="article-note">Changes close to delivery may affect warehouse preparation, labour or transport charges.</div>
            <h2 id="change-next">What happens next?</h2>
            <p>We send a revised quotation or booking change for your approval. Nothing changes until you accept it.</p>
            <div className="article-helpful">
              Was this article helpful? <button>Yes</button>
              <button>No</button>
              <a href="#support-form">Need more help? Contact support →</a>
            </div>
          </div>
        </div>
      </article>

      <section id="delivery-help" className="delivery-guidance help-width">
        <header>
          <span>DELIVERY, SETUP & RETURN</span>
          <h2>Prepare, collect and return smoothly</h2>
        </header>
        <article>
          <img src="/images/hero-event.png" alt="Prepared event delivery site" />
          <div>
            <span>BEFORE DELIVERY</span>
            <h3>Prepare for delivery</h3>
            <ul>
              <li>Confirm venue access, loading and parking</li>
              <li>Clear the setup area and protect pathways</li>
              <li>Provide an on-site contact and phone number</li>
              <li>Keep children, guests and pets clear of the crew</li>
              <li>Confirm power, lifts, stairs and surface conditions</li>
            </ul>
            <a href="/contact">Read the delivery guide →</a>
          </div>
        </article>
        <article>
          <div>
            <span>COLLECTION & RETURN</span>
            <h3>Collect and return smoothly</h3>
            <ul>
              <li>Keep equipment dry, secure and grouped</li>
              <li>Do not dismantle items unless instructed</li>
              <li>Remove personal items and rubbish</li>
              <li>Report damage or missing pieces promptly</li>
              <li>Be ready for the confirmed collection window</li>
            </ul>
            <a href="/contact">Read the return guide →</a>
          </div>
          <img src="/images/warehouse-team.png" alt="Event equipment being collected" />
        </article>
      </section>

      <section className="safe-use">
        <div className="help-width">
          <span>SAFE USE & CARE</span>
          <h2>Use hired items correctly</h2>
          <p>Follow product instructions and use equipment only for its intended event purpose.</p>
          <div>
            {[
              ["Use as intended", "Do not climb, stand on or modify furniture."],
              ["Watch the weather", "Secure outdoor items and follow wind restrictions."],
              ["Age & capacity", "Observe weight, age and occupancy limits."],
              ["Report urgent issues", "Stop using unsafe items and contact us."],
            ].map((x) => (
              <article key={x[0]}>
                <b>✓ {x[0]}</b>
                <small>{x[1]}</small>
              </article>
            ))}
          </div>
          <blockquote style={{ border: "none" }}>⚠ Do not relocate marquees, heaters, staging or electrical equipment after professional setup.</blockquote>
        </div>
      </section>

      <section className="policy-links help-width">
        <span>POLICIES & IMPORTANT INFORMATION</span>
        <h2>Understand the terms that apply</h2>
        <p>Read the current terms before accepting your quotation.</p>
        <div>
          {[
            ["Hire terms", "/rental-terms"],
            ["Changes & cancellations", "/cancellation-policy"],
            ["Delivery & collection", "/rental-terms#legal-delivery"],
            ["Damage, loss & bond", "/rental-terms#legal-damage"],
            ["Privacy", "/privacy"],
            ["Accessibility", "/privacy#accessibility"],
          ].map((x) => (
            <a href={x[1]} key={x[0]}>
              <b>{x[0]}</b>
              <small>View the current policy →</small>
            </a>
          ))}
        </div>
      </section>

      <section id="support-form" className="support-contact">
        <div className="help-width">
          <div>
            <span>CUSTOMER SUPPORT</span>
            <h2>We’re here to help.</h2>
            <p>For booking changes, delivery questions or event-day support, send the details below.</p>
            <img src="/images/warehouse-team.png" alt="Customer support conversation" />
            <div className="support-methods">
              <a href="tel:0390000000">Call 03 9000 0000</a>
              <a href="mailto:help@skeventhire.com.au">Email support</a>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => jump("support-received"), 50);
            }}
          >
            <label>
              What do you need help with?
              <select>
                <option>Booking or hiring</option>
                <option>Delivery or collection</option>
                <option>Payment or refund</option>
                <option>Damage or missing item</option>
              </select>
            </label>
            <div className="checkout-form two">
              <Field label="First name *" value="Amelia" />
              <Field label="Last name *" value="Morgan" />
              <Field label="Mobile *" value="0412 345 678" />
              <Field label="Email *" value="amelia@example.com" />
            </div>
            <Field wide label="Subject *" value="Existing venue access question" />
            <Field
              wide
              area
              label="How can we help? *"
              value="The venue has changed its loading entrance. I need to update the access notes and confirm whether the delivery window is still suitable."
            />
            <label>
              Attachment<input type="file" />
            </label>
            <label className="consent">
              <input type="checkbox" required defaultChecked /> I confirm these details are correct and accept the privacy policy.
            </label>
            <button>Submit support request →</button>
          </form>
        </div>
      </section>

      {sent && (
        <section id="support-received" className="support-received">
          <i>✓</i>
          <div>
            <span>REQUEST SUBMITTED</span>
            <h2>Your support request has been received.</h2>
            <p>Our team will review the booking details and reply within one business day.</p>
            <b>SUP-2026-00482</b>
            <dl>
              <div>
                <dt>Category</dt>
                <dd>Booking or hiring</dd>
              </div>
              <div>
                <dt>Priority</dt>
                <dd>Standard support</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>Email & mobile</dd>
              </div>
            </dl>
            <a href="/bookings">View support request</a>
            <a href="/contact">Return to Help Centre</a>
          </div>
        </section>
      )}
    </>
  );
}
