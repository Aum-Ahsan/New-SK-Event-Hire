import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { HomeHeroSection } from "@/sections/home/HomeHeroSection";
import { HomeSearchSection } from "@/sections/home/HomeSearchSection";
import { HomeMiniBenefitsSection } from "@/sections/home/HomeMiniBenefitsSection";
import { HomeCategoriesSection } from "@/sections/home/HomeCategoriesSection";
import { HomeOccasionsSection } from "@/sections/home/HomeOccasionsSection";
import { HomePopularSection } from "@/sections/home/HomePopularSection";
import { HomeServicesSection } from "@/sections/home/HomeServicesSection";
import { HomeProcessSection } from "@/sections/home/HomeProcessSection";
import { HomeGuidanceSection } from "@/sections/home/HomeGuidanceSection";
import { HomeInspirationSection } from "@/sections/home/HomeInspirationSection";
import { HomeReviewsSection } from "@/sections/home/HomeReviewsSection";
import { HomeServiceAreaSection } from "@/sections/home/HomeServiceAreaSection";
import { HomeArticlesSection } from "@/sections/home/HomeArticlesSection";
import { HomeFaqSection } from "@/sections/home/HomeFaqSection";
import { HomeReadyBandSection } from "@/sections/home/HomeReadyBandSection";

export function HomePage() {
  return (
    <div className="public-site home-v4">
      <PublicHeader active="Home" />
      <main>
        <HomeHeroSection />
        <HomeSearchSection />
        <HomeMiniBenefitsSection />
        <HomeCategoriesSection />
        <HomeOccasionsSection />
        <HomePopularSection />
        <HomeServicesSection />
        <HomeProcessSection />
        <HomeGuidanceSection />
        <HomeInspirationSection />
        <HomeReviewsSection />
        <HomeServiceAreaSection />
        <HomeArticlesSection />
        <HomeFaqSection />
        <HomeReadyBandSection />
      </main>
      <PublicFooter />
    </div>
  );
}
