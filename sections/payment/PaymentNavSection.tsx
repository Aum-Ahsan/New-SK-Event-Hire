import React from "react";

interface PaymentNavSectionProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  verified: boolean;
}

export function PaymentNavSection({ step, setStep, verified }: PaymentNavSectionProps) {
  return (
    <>
      <nav className="payment-steps">
        {["Booking review", "Payment method", "Verification", "Final review", "Confirmation"].map((x, i) => (
          <button
            type="button"
            onClick={() => {
              if (i < 3 || verified) setStep(i);
            }}
            className={i === step ? "active" : i < step ? "done" : ""}
            key={x}
          >
            <i>{i < step ? "✓" : i + 1}</i>
            {x}
          </button>
        ))}
      </nav>

      <div className="wizard-actions">
        <button type="button" disabled={step === 0} onClick={() => setStep((x) => Math.max(0, x - 1))}>
          ← Back
        </button>
        <span>Step {step + 1} of 5</span>
        {step < 3 && (
          <button
            className="next"
            type="button"
            onClick={() => {
              if (step === 2 && !verified) return;
              setStep((x) => x + 1);
            }}
          >
            {step === 2 && !verified ? "Verify code to continue" : "Continue →"}
          </button>
        )}
      </div>
    </>
  );
}
