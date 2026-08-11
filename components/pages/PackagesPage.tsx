import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { PackagesHeroSection } from "@/sections/packages/PackagesHeroSection";
import { PackagesGridSection } from "@/sections/packages/PackagesGridSection";
import { PackagesDetailSection } from "@/sections/packages/PackagesDetailSection";

interface PackagesPageProps {
  detail?: string;
  eventPackages: any[];
}

export function PackagesPage({ detail, eventPackages }: PackagesPageProps) {
  const selected = eventPackages.find((x) => x.slug === detail);

  if (selected) {
    return (
      <div className="public-site">
        <PublicHeader />
        <main>
          <PackagesDetailSection selected={selected} />
        </main>
        <PublicFooter />
      </div>
    );
  }

  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <PackagesHeroSection />
        <PackagesGridSection eventPackages={eventPackages} />
      </main>
      <PublicFooter />
    </div>
  );
}
