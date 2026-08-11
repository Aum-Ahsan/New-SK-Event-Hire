import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { ContactHeroSection } from "@/sections/contact/ContactHeroSection";
import { ContactOptionsSection } from "@/sections/contact/ContactOptionsSection";
import { ContactFormSection } from "@/sections/contact/ContactFormSection";
import { ContactDeliveryCheckSection } from "@/sections/contact/ContactDeliveryCheckSection";
import { ContactLocationSection } from "@/sections/contact/ContactLocationSection";
import { ContactHoursSection } from "@/sections/contact/ContactHoursSection";
import { ContactFaqSection } from "@/sections/contact/ContactFaqSection";
import { ContactSuccessSection } from "@/sections/contact/ContactSuccessSection";
import { ContactBottomSection } from "@/sections/contact/ContactBottomSection";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState("$3,000–$5,000");
  const [postcode, setPostcode] = useState("3121");
  const [area, setArea] = useState("Enter your postcode to check delivery");

  const checkArea = () =>
    setArea(
      /^(3\d{3})$/.test(postcode)
        ? postcode === "3121"
          ? "Yes, we deliver to Richmond 3121."
          : "Your suburb is within our Melbourne quotation area."
        : "Enter a valid four-digit Victorian postcode."
    );

  return (
    <div className="public-site contact-editorial">
      <PublicHeader active="Contact" />
      <main>
        <ContactHeroSection />
        <ContactOptionsSection />
        <ContactFormSection budget={budget} setBudget={setBudget} setSent={setSent} />
        <ContactDeliveryCheckSection postcode={postcode} setPostcode={setPostcode} area={area} checkArea={checkArea} />
        <ContactLocationSection />
        <ContactHoursSection />
        <ContactFaqSection />
        {sent && <ContactSuccessSection setSent={setSent} />}
        <ContactBottomSection />
      </main>
      <PublicFooter />
    </div>
  );
}
