import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { HelpHeroSection } from "@/sections/help/HelpHeroSection";
import { HelpTopicsSection } from "@/sections/help/HelpTopicsSection";
import { HelpSearchSection } from "@/sections/help/HelpSearchSection";

interface HelpPageProps {
  helpTopics: readonly any[];
}

export function HelpPage({ helpTopics }: HelpPageProps) {
  const [query, setQuery] = useState("");
  const [sent, setSent] = useState(false);

  const results = [
    "Can I change product quantities after booking?",
    "How do I prepare for delivery?",
    "What happens if something is damaged?",
    "Can I collect and return my order?",
  ].filter((x) => x.toLowerCase().includes(query.toLowerCase()));

  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="public-site help-centre">
      <PublicHeader />
      <main>
        <HelpHeroSection query={query} setQuery={setQuery} jump={jump} />
        <HelpTopicsSection helpTopics={helpTopics} jump={jump} />
        <HelpSearchSection query={query} setQuery={setQuery} results={results} sent={sent} setSent={setSent} jump={jump} />
      </main>
      <PublicFooter />
    </div>
  );
}
