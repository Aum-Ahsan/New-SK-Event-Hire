import React from "react";

function Field({ label, value, wide }: { label: string; value?: string; wide?: boolean }) {
  return (
    <div className={`field ${wide ? "wide-field" : ""}`}>
      <label>{label}</label>
      <input readOnly defaultValue={value || ""} />
    </div>
  );
}

interface AuthCardSectionProps {
  type: string;
  d: [string, string, string];
}

export function AuthCardSection({ type, d }: AuthCardSectionProps) {
  return (
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
  );
}
