import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { BasketHeroSection } from "@/sections/basket/BasketHeroSection";
import { BasketNavSection } from "@/sections/basket/BasketNavSection";
import { BasketMainSection } from "@/sections/basket/BasketMainSection";
import { BasketOutcomeSection } from "@/sections/basket/BasketOutcomeSection";
import { BasketHelpSection } from "@/sections/basket/BasketHelpSection";

export function BasketPage() {
  const [step, setStep] = useState(0);
  const [requestSent, setRequestSent] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [extras, setExtras] = useState<string[]>(["linen"]);
  const toggleExtra = (name: string) => setExtras((x) => (x.includes(name) ? x.filter((y) => y !== name) : [...x, name]));

  const checkoutSteps = ["Basket", "Event details", "Delivery & return", "Extras", "Payment", "Review"];
  const nextCheckout = () => {
    if (step === 4 && !otpVerified) return;
    setStep((x) => Math.min(5, x + 1));
    window.scrollTo({ top: 150, behavior: "smooth" });
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const basketItems: [string, string, string, string, string][] = [
    ["White Tiffany Chair", "White · 60 chairs", "$330.00", "/images/chairs-product.png", "natural-bentwood-chair"],
    ["1.8m Round Banquet Table", "White top · 8 tables", "$174.00", "/images/tables-product.png", "round-banquet-table"],
    ["Warm Festoon Lighting", "Warm white · 3 × 20m runs", "$180.00", "/images/lighting-product.png", "festoon-lighting"],
  ];

  return (
    <div className={`public-site checkout-page wizard-step-${step}`}>
      <PublicHeader />
      <main>
        <BasketHeroSection />
        <BasketNavSection step={step} setStep={setStep} otpVerified={otpVerified} nextCheckout={nextCheckout} checkoutSteps={checkoutSteps} />
        <BasketMainSection
          basketItems={basketItems}
          extras={extras}
          toggleExtra={toggleExtra}
          otpVerified={otpVerified}
          setOtpVerified={setOtpVerified}
          setRequestSent={setRequestSent}
          scrollTo={scrollTo}
        />
        <BasketOutcomeSection
          requestSent={requestSent}
          bookingConfirmed={bookingConfirmed}
          setBookingConfirmed={setBookingConfirmed}
          scrollTo={scrollTo}
        />
        <BasketHelpSection />
      </main>
      <PublicFooter />
    </div>
  );
}
