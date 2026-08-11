import React from "react";
import contactData from "@/data/pages/contact.json";
import { eventTypes } from "@/components/common/CategoryCards";

interface ContactFormSectionProps {
  budget: string;
  setBudget: (val: string) => void;
  setSent: (val: boolean) => void;
}

export function ContactFormSection({ budget, setBudget, setSent }: ContactFormSectionProps) {
  const { formHeader } = contactData;

  return (
    <section id="contact-form" className="enquiry-wrap">
      <div className="editorial-section">
        <header>
          <span>{formHeader.eyebrow}</span>
          <h2>{formHeader.title}</h2>
          <p>{formHeader.description}</p>
        </header>
        <div className="enquiry-layout">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const start = String(data.get("startTime") || "");
              const finish = String(data.get("finishTime") || "");
              const finishInput = form.elements.namedItem("finishTime") as HTMLInputElement | null;
              finishInput?.setCustomValidity(
                start && finish && finish <= start ? "Finish time must be later than start time." : ""
              );
              if (!form.reportValidity()) return;
              setSent(true);
            }}
          >
            <section>
              <h3>
                <i>1</i>Your contact details
              </h3>
              <div className="form-grid contact-fields">
                <label>
                  First name *<input name="firstName" required autoComplete="given-name" minLength={2} maxLength={60} placeholder="First name" />
                </label>
                <label>
                  Last name *<input name="lastName" required autoComplete="family-name" minLength={2} maxLength={60} placeholder="Last name" />
                </label>
                <label>
                  Email address *<input name="email" type="email" required autoComplete="email" placeholder="name@example.com" />
                </label>
                <label>
                  Mobile number *
                  <input
                    name="mobile"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="(?:\\+?61|0)4[0-9]{8}"
                    maxLength={12}
                    placeholder="0412345678"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+]/g, "");
                    }}
                  />
                  <small>Australian mobile only, for example 0412345678.</small>
                </label>
                <label>
                  Preferred contact *
                  <select name="preferredContact" required defaultValue="">
                    <option value="" disabled>
                      Select contact method
                    </option>
                    <option>Email</option>
                    <option>Mobile call</option>
                    <option>SMS</option>
                    <option>Email and mobile</option>
                  </select>
                </label>
                <label>
                  Best contact time *
                  <select name="bestContactTime" required defaultValue="">
                    <option value="" disabled>
                      Select best time
                    </option>
                    <option>Weekday morning (9am–12pm)</option>
                    <option>Weekday afternoon (12pm–5pm)</option>
                    <option>Weekday evening (5pm–7pm)</option>
                    <option>Saturday morning</option>
                    <option>Any business hours</option>
                  </select>
                </label>
              </div>
            </section>
            <section>
              <h3>
                <i>2</i>About your event
              </h3>
              <div className="form-grid contact-fields">
                <label>
                  Event type *
                  <select name="eventType" required defaultValue="">
                    <option value="" disabled>
                      Select event type
                    </option>
                    {eventTypes.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Event date *<input name="eventDate" type="date" required min="2026-08-03" />
                </label>
                <label>
                  Start time *
                  <input
                    name="startTime"
                    type="time"
                    required
                    step="900"
                    onChange={(e) => {
                      const finish = e.currentTarget.form?.elements.namedItem("finishTime") as HTMLInputElement | null;
                      finish?.setCustomValidity("");
                    }}
                  />
                </label>
                <label>
                  Finish time *
                  <input
                    name="finishTime"
                    type="time"
                    required
                    step="900"
                    onChange={(e) => e.currentTarget.setCustomValidity("")}
                  />
                </label>
                <label>
                  Estimated guest count *
                  <input name="guestCount" type="number" required inputMode="numeric" min={1} max={2200} step={1} placeholder="e.g. 80" />
                </label>
                <label>
                  Venue name<input name="venueName" maxLength={120} placeholder="Venue or property name" />
                </label>
                <label className="wide-field">
                  Address line 1 *<input name="address1" required autoComplete="address-line1" minLength={3} maxLength={120} placeholder="Street number and street name" />
                </label>
                <label className="wide-field">
                  Address line 2<input name="address2" autoComplete="address-line2" maxLength={120} placeholder="Unit, level, building (optional)" />
                </label>
                <label>
                  Suburb *<input name="suburb" required autoComplete="address-level2" minLength={2} maxLength={60} placeholder="Suburb" />
                </label>
                <label>
                  Postcode *
                  <input
                    name="eventPostcode"
                    required
                    autoComplete="postal-code"
                    inputMode="numeric"
                    pattern="[0-9]{4}"
                    maxLength={4}
                    placeholder="3000"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 4);
                    }}
                  />
                </label>
                <label>
                  State *
                  <select name="state" required defaultValue="VIC">
                    <option>ACT</option>
                    <option>NSW</option>
                    <option>NT</option>
                    <option>QLD</option>
                    <option>SA</option>
                    <option>TAS</option>
                    <option>VIC</option>
                    <option>WA</option>
                  </select>
                </label>
                <label>
                  Indoor / outdoor *
                  <select name="setting" required defaultValue="">
                    <option value="" disabled>
                      Select setting
                    </option>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                    <option>Indoor and outdoor</option>
                    <option>Not confirmed</option>
                  </select>
                </label>
                <label>
                  Estimated budget *
                  <select name="budget" required value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option>Under $1,000</option>
                    <option>$1,000–$3,000</option>
                    <option>$3,000–$5,000</option>
                    <option>$5,000–$10,000</option>
                    <option>$10,000–$20,000</option>
                    <option>$20,000+</option>
                    <option value="custom">Custom amount</option>
                  </select>
                </label>
                {budget === "custom" && (
                  <label>
                    Custom budget amount *<input name="customBudget" type="number" required min={1} step={50} inputMode="decimal" placeholder="Amount in AUD" />
                  </label>
                )}
              </div>
            </section>
            <section>
              <h3>
                <i>3</i>Equipment and support
              </h3>
              <div className="contact-checks">
                {["Chairs", "Tables", "Tableware", "Marquee", "Lighting", "Linen", "Delivery & setup", "Event planning advice"].map((x, i) => (
                  <label key={x}>
                    <input name="equipment" value={x} type="checkbox" defaultChecked={i < 4} />
                    {x}
                  </label>
                ))}
              </div>
              <label className="contact-textarea">
                What are you looking to achieve?
                <textarea name="eventGoal" maxLength={1000} placeholder="Describe the style, experience or practical outcome you want." />
              </label>
              <div className="form-grid contact-fields">
                <label>
                  Preferred service *
                  <select name="preferredService" required defaultValue="">
                    <option value="" disabled>
                      Select service
                    </option>
                    <option>Delivery only</option>
                    <option>Delivery and setup</option>
                    <option>Delivery, setup and collection</option>
                    <option>Customer collection and return</option>
                    <option>Not sure—please advise</option>
                  </select>
                </label>
                <label>
                  Planning support *
                  <select name="planningSupport" required defaultValue="">
                    <option value="" disabled>
                      Select support
                    </option>
                    <option>Product advice only</option>
                    <option>Quantity and layout advice</option>
                    <option>Styling direction</option>
                    <option>Venue and logistics planning</option>
                    <option>Full event planning</option>
                    <option>No planning support</option>
                  </select>
                </label>
                <label>
                  Setup surface *
                  <select name="setupSurface" required defaultValue="">
                    <option value="" disabled>
                      Select setup surface
                    </option>
                    <option>Indoor hard floor</option>
                    <option>Concrete or paving</option>
                    <option>Garden lawn</option>
                    <option>Gravel</option>
                    <option>Sand</option>
                    <option>Mixed surfaces</option>
                    <option>Not confirmed</option>
                  </select>
                </label>
                <label>
                  Vehicle access *
                  <select name="vehicleAccess" required defaultValue="">
                    <option value="" disabled>
                      Select vehicle access
                    </option>
                    <option>Direct loading access</option>
                    <option>Rear loading available</option>
                    <option>Street loading only</option>
                    <option>Restricted height or width</option>
                    <option>Long carry required</option>
                    <option>No vehicle access</option>
                    <option>Not confirmed</option>
                  </select>
                </label>
              </div>
              <label className="contact-textarea">
                Anything else we should know?
                <textarea name="notes" maxLength={1500} placeholder="Add access restrictions, wet-weather plans or special timing requirements." />
              </label>
            </section>
            <section>
              <h3>
                <i>4</i>Attachments and consent
              </h3>
              <label className="contact-upload">
                Drop files here or choose files
                <input type="file" multiple accept="image/*,.pdf" />
              </label>
              <label className="consent">
                <input name="consent" type="checkbox" required /> I agree to be contacted about this enquiry and accept the privacy policy. *
              </label>
              <footer>
                <a href="/products">Save and finish later</a>
                <button type="submit">Send event enquiry →</button>
              </footer>
            </section>
          </form>
          <aside>
            <span>YOUR ENQUIRY SUMMARY</span>
            <h3>Wedding · 14 November 2026</h3>
            <p>
              80 guests · Richmond
              <br />
              Outdoor reception
            </p>
            <b>Selected support</b>
            <small>
              Furniture, marquee, lighting
              <br />
              Delivery and setup
            </small>
            <a href="/products">＋ Add products to enquiry</a>
          </aside>
        </div>
      </div>
    </section>
  );
}
