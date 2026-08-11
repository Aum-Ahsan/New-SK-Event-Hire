import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { PlanningHeroSection } from "@/sections/planning/PlanningHeroSection";
import { PlanningSupportChoiceSection } from "@/sections/planning/PlanningSupportChoiceSection";
import { PlanningEventsSection } from "@/sections/planning/PlanningEventsSection";
import { PlanningPracticalTeamSection } from "@/sections/planning/PlanningPracticalTeamSection";
import { PlanningProcessSection } from "@/sections/planning/PlanningProcessSection";
import { PlanningPricingSupportSection } from "@/sections/planning/PlanningPricingSupportSection";
import { PlanningMeetTeamSection } from "@/sections/planning/PlanningMeetTeamSection";
import { PlanningThinkingSection } from "@/sections/planning/PlanningThinkingSection";
import { PlanningRememberedSection } from "@/sections/planning/PlanningRememberedSection";
import { PlanningCtaSection } from "@/sections/planning/PlanningCtaSection";

export function PlanningPage() {
  const [support, setSupport] = useState("Full event plan");

  return (
    <div className="public-site planning-consultation">
      <PublicHeader active="Event Planning" />
      <main>
        <PlanningHeroSection />
        <PlanningSupportChoiceSection support={support} setSupport={setSupport} />
        <PlanningEventsSection />
        <PlanningPracticalTeamSection />
        <PlanningProcessSection />
        <PlanningPricingSupportSection />
        <PlanningMeetTeamSection />
        <PlanningThinkingSection />
        <PlanningRememberedSection />
        <PlanningCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}
