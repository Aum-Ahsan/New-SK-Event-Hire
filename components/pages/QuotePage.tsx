import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { QuotationFlowSection } from "@/sections/quote/QuotationFlowSection";
import { PublicQuoteSection } from "@/sections/quote/PublicQuoteSection";
import { QuoteJourneySection } from "@/sections/quote/QuoteJourneySection";
import { PackagesCollectionsLandingSection } from "@/sections/quote/PackagesCollectionsLandingSection";

export function QuotationFlowPage({ path }: { path: string }) {
  return <QuotationFlowSection path={path} />;
}

export function PublicQuotePage({ done = false }: { done?: boolean }) {
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <PublicQuoteSection done={done} />
      </main>
      <PublicFooter />
    </div>
  );
}

export function QuoteJourneyPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [decision, setDecision] = useState("ready");
  const [notice, setNotice] = useState("");

  const submitQuote = () => {
    if (!verified) {
      setNotice("Verify your contact details before submitting the request.");
      document.querySelector(".quote-verify")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(true);
    setNotice("");
    setTimeout(() => document.querySelector(".quote-submitted-band")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const downloadQuote = () => {
    const content =
      "SK EVENT HIRE\nQUOTE SKQ-10482 · VERSION 2.0\n\nAmelia Thompson\nEvent: Wedding reception · 12–14 September 2026\n\nWhite Tiffany Chair × 60 — $330.00\n1.8m Round Banquet Table × 8 — $174.00\nWarm Festoon Lighting × 3 — $180.00\nDelivery, setup and collection — $325.00\n\nSubtotal $988.55\nGST $98.85\nTOTAL AUD $1,087.40\n";
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "SK_Event_Hire_Quote_SKQ-10482.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`public-site quote-journey quote-wizard-${step}`}>
      <PublicHeader />
      <main>
        <QuoteJourneySection
          step={step}
          setStep={setStep}
          submitted={submitted}
          setSubmitted={setSubmitted}
          verified={verified}
          setVerified={setVerified}
          decision={decision}
          setDecision={setDecision}
          notice={notice}
          setNotice={setNotice}
          submitQuote={submitQuote}
          downloadQuote={downloadQuote}
        />
      </main>
      <PublicFooter />
    </div>
  );
}

export function PackagesCollectionsLanding() {
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("2026-09-12");
  const [guestCount, setGuestCount] = useState(60);
  const [faqOpen, setFaqOpen] = useState(0);
  const matchHref = `/request-quote?event=${encodeURIComponent(eventType)}&date=${eventDate}&guests=${guestCount}`;

  return (
    <div className="public-site package-landing">
      <PublicHeader active="Packages" />
      <main>
        <PackagesCollectionsLandingSection
          eventType={eventType}
          setEventType={setEventType}
          eventDate={eventDate}
          setEventDate={setEventDate}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
          faqOpen={faqOpen}
          setFaqOpen={setFaqOpen}
          matchHref={matchHref}
        />
      </main>
      <PublicFooter />
    </div>
  );
}
