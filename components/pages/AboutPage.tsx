import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { AboutHeroSection } from "@/sections/about/AboutHeroSection";
import { AboutStorySection } from "@/sections/about/AboutStorySection";
import { AboutPromiseSection } from "@/sections/about/AboutPromiseSection";
import { AboutProcessSection } from "@/sections/about/AboutProcessSection";
import { AboutPreparedSection } from "@/sections/about/AboutPreparedSection";
import { AboutVenuesSection } from "@/sections/about/AboutVenuesSection";
import { AboutTeamSection } from "@/sections/about/AboutTeamSection";
import { AboutLocalKnowledgeSection } from "@/sections/about/AboutLocalKnowledgeSection";
import { AboutResponsibilitySection } from "@/sections/about/AboutResponsibilitySection";
import { AboutFinalSection } from "@/sections/about/AboutFinalSection";

export function AboutPage() {
  return (
    <div className="public-site about-editorial">
      <PublicHeader active="About" />
      <main>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutPromiseSection />
        <AboutProcessSection />
        <AboutPreparedSection />
        <AboutVenuesSection />
        <AboutTeamSection />
        <AboutLocalKnowledgeSection />
        <AboutResponsibilitySection />
        <AboutFinalSection />
      </main>
      <PublicFooter />
    </div>
  );
}
