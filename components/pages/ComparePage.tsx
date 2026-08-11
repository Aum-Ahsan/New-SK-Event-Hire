import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { CompareHeroSection } from "@/sections/compare/CompareHeroSection";
import { CompareGridSection } from "@/sections/compare/CompareGridSection";

export function ComparePage({ hireProducts }: { hireProducts: any[] }) {
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <CompareHeroSection />
        <CompareGridSection hireProducts={hireProducts} />
      </main>
      <PublicFooter />
    </div>
  );
}
