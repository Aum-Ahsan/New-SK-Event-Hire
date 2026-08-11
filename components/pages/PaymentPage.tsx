import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { PaymentHeroSection } from "@/sections/payment/PaymentHeroSection";
import { PaymentNavSection } from "@/sections/payment/PaymentNavSection";
import { PaymentShellSection } from "@/sections/payment/PaymentShellSection";
import { PaymentOutcomeSection } from "@/sections/payment/PaymentOutcomeSection";
import { PaymentHelpSection } from "@/sections/payment/PaymentHelpSection";

export function PaymentPage() {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState("card");
  const [verified, setVerified] = useState(false);
  const [paid, setPaid] = useState(false);

  const methods: [string, string, string, string][] = [
    ["card", "▰", "Debit or credit card", "Instant verification"],
    ["bpay", "P", "PayID", "Usually within minutes"],
    ["bank", "$", "Bank transfer", "1–2 business days"],
    ["cash", "⌘", "Cash", "Approval required"],
  ];

  const pay = () => {
    if (!verified) {
      setStep(2);
      return;
    }
    setStep(4);
    setTimeout(() => {
      setPaid(true);
      setTimeout(() => document.getElementById("payment-confirmed")?.scrollIntoView({ behavior: "smooth" }), 80);
    }, 850);
  };

  return (
    <div className={`public-site payment-page payment-wizard-${step}`}>
      <PublicHeader />
      <main>
        <PaymentHeroSection />
        <PaymentNavSection step={step} setStep={setStep} verified={verified} />
        <PaymentShellSection
          method={method}
          setMethod={setMethod}
          methods={methods}
          verified={verified}
          setVerified={setVerified}
          pay={pay}
        />
        <PaymentOutcomeSection paid={paid} />
        <PaymentHelpSection />
      </main>
      <PublicFooter />
    </div>
  );
}
