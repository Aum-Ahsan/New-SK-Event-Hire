import React from "react";

interface BasketNavSectionProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  otpVerified: boolean;
  nextCheckout: () => void;
  checkoutSteps: string[];
}

export function BasketNavSection({ step, setStep, otpVerified, nextCheckout, checkoutSteps }: BasketNavSectionProps) {
  return (
    <>
      <nav className="checkout-steps" aria-label="Booking progress">
        {checkoutSteps.map((x, i) => (
          <button
            type="button"
            onClick={() => {
              if (i > 4 || step !== 4 || otpVerified) setStep(i);
            }}
            className={i === step ? "active" : i < step ? "done" : ""}
            key={x}
          >
            <i>{i < step ? "✓" : i + 1}</i>
            {x}
          </button>
        ))}
      </nav>

      <div className="wizard-actions wizard-actions-top">
        <button type="button" onClick={() => setStep((x) => Math.max(0, x - 1))} disabled={step === 0}>
          ← Back
        </button>
        <span>Step {step + 1} of 6</span>
        {step < 5 && (
          <button className="next" type="button" onClick={nextCheckout}>
            {step === 4 && !otpVerified ? "Verify OTP to continue" : "Save & continue →"}
          </button>
        )}
      </div>
    </>
  );
}
