import React from "react";

function Field({ label, value, wide }: { label: string; value?: string; wide?: boolean }) {
  return (
    <div className={`field ${wide ? "wide-field" : ""}`}>
      <label>{label}</label>
      <input readOnly defaultValue={value || ""} />
    </div>
  );
}

interface AuthPageProps {
  type: string;
}

export function AuthPage({ type }: AuthPageProps) {
  const map: Record<string, [string, string, string]> = {
    "sign-in": [
      "Welcome back",
      "Sign in to your SK Event Hire account",
      "Enter your verified email or Australian mobile number to receive a secure code.",
    ],
    otp: ["Check your messages", "Enter your 6-digit verification code", "We sent a code to a•••@example.com. It expires in five minutes."],
    "create-account": [
      "Create your customer account",
      "Keep every event in one place",
      "Add your contact details, accept the account terms and verify your preferred sign-in method.",
    ],
    "complete-profile": [
      "Complete your profile",
      "Make future event requests faster",
      "Confirm your name, preferred address and communication settings. Optional details can be added later.",
    ],
  };

  const d = map[type] || map["sign-in"];

  return (
    <div className="auth-shell">
      <aside>
        <a className="public-brand inverse" href="/">
          <span>SK</span>
          <b>
            EVENT HIRE<small>CUSTOMER ACCOUNT</small>
          </b>
        </a>
        <div>
          <div className="eyebrow">Plan with confidence</div>
          <h1>Quotes, bookings and event logistics in one calm place.</h1>
          <p>Securely review proposals, make payments, follow deliveries and keep every document connected.</p>
        </div>
        <small>Melbourne event hire & planning</small>
      </aside>
      <main>
        <a className="back-home" href="/">
          ← Back to website
        </a>
        <section className="auth-card">
          <div className="eyebrow">{type === "otp" ? "Secure verification" : "Customer account"}</div>
          <h2>{d[0]}</h2>
          <h3>{d[1]}</h3>
          <p>{d[2]}</p>
          <div className="form-grid auth-form">
            {type === "otp" ? (
              <Field wide label="Verification code" value="2  8  4  1  7  5" />
            ) : (
              <>
                <Field wide label={type === "sign-in" ? "Email or mobile" : "Full name"} value={type === "sign-in" ? "alex.morgan@example.com" : "Alex Morgan"} />
                {type !== "sign-in" && (
                  <>
                    <Field wide label="Email address" value="alex.morgan@example.com" />
                    <Field wide label="Mobile number" value="0412 345 678" />
                  </>
                )}
              </>
            )}
          </div>
          <a
            className="primary auth-button"
            href={type === "sign-in" ? "/otp" : type === "otp" ? "/overview" : type === "create-account" ? "/complete-profile" : "/overview"}
          >
            {type === "sign-in" ? "Send secure code" : type === "otp" ? "Verify and continue" : "Save and continue"} →
          </a>
          {type === "sign-in" && (
            <p className="auth-switch">
              New to SK Event Hire? <a href="/create-account">Create an account</a>
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
