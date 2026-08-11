import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { SitemapHeroSection } from "@/sections/sitemap/SitemapHeroSection";
import { SitemapGridSection } from "@/sections/sitemap/SitemapGridSection";

export function SitemapPage() {
  const groups: [string, [string, string][]][] = [
    [
      "Hire products",
      [
        ["Catalogue & filters", "/products"],
        ["Product comparison", "/compare"],
        ["Event collections", "/collections"],
        ["Hire packages", "/packages"],
        ["Hire basket", "/basket"],
      ],
    ],
    [
      "Plan & enquire",
      [
        ["Request a quotation", "/request-quote"],
        ["Event planning", "/planning"],
        ["Gallery & case studies", "/gallery"],
        ["Verified reviews", "/reviews"],
        ["Planning resources", "/blog"],
      ],
    ],
    [
      "Company",
      [
        ["About SK Event Hire", "/about"],
        ["Contact & service areas", "/contact"],
        ["Help centre", "/help"],
        ["Customer sign in", "/sign-in"],
      ],
    ],
    [
      "Policies",
      [
        ["Rental terms", "/rental-terms"],
        ["Payment policy", "/payment-policy"],
        ["Cancellation policy", "/cancellation-policy"],
        ["Privacy policy", "/privacy"],
      ],
    ],
  ];

  return (
    <div className="public-site">
      <PublicHeader />
      <main className="public-main">
        <SitemapHeroSection />
        <SitemapGridSection groups={groups} />
      </main>
      <PublicFooter />
    </div>
  );
}
