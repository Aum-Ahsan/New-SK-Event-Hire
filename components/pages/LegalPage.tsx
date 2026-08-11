import React, { useState, useEffect } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { LegalHeroSection } from "@/sections/legal/LegalHeroSection";
import { LegalDirectorySection } from "@/sections/legal/LegalDirectorySection";
import { LegalContentSection } from "@/sections/legal/LegalContentSection";

interface LegalPageProps {
  kind: string;
}

export function LegalPage({ kind }: LegalPageProps) {
  const [optional, setOptional] = useState(true);
  const target = kind === "payment-policy" ? "legal-payment" : kind === "cancellation-policy" ? "legal-cancellations" : kind === "privacy" ? "legal-privacy" : "legal-rental";

  useEffect(() => {
    setTimeout(() => document.getElementById(target)?.scrollIntoView({ block: "start" }), 80);
  }, [target]);

  const info = [
    ["Rental terms", "Responsibilities and permitted use", "legal-rental"],
    ["Payment terms", "Deposits, balances and payment timing", "legal-payment"],
    ["Changes & cancellations", "Timelines, charges and refunds", "legal-cancellations"],
    ["Damage, loss & bond", "Cleaning, repair and replacement", "legal-damage"],
    ["Delivery & collection", "Access, setup, return and crew", "legal-delivery"],
    ["Privacy policy", "Information, rights and cookies", "legal-privacy"],
    ["Cookie notice", "Essential and optional cookies", "legal-cookies"],
    ["Accessibility statement", "Inclusive access and assistance", "accessibility"],
  ] as const;

  return (
    <div className="public-site legal-hub">
      <PublicHeader />
      <main>
        <LegalHeroSection />
        <LegalDirectorySection info={info} />
        <LegalContentSection info={info} optional={optional} setOptional={setOptional} />
      </main>
      <PublicFooter />
    </div>
  );
}
