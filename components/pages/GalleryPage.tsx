import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { GalleryHeroSection } from "@/sections/gallery/GalleryHeroSection";
import { GalleryGridSection } from "@/sections/gallery/GalleryGridSection";
import { GalleryStorySection } from "@/sections/gallery/GalleryStorySection";

interface GalleryPageProps {
  story?: boolean;
  showcaseCards: readonly any[];
}

export function GalleryPage({ story = false, showcaseCards }: GalleryPageProps) {
  const [visible, setVisible] = useState(8);
  const [activeTag, setActiveTag] = useState("All");
  const [preview, setPreview] = useState<(typeof showcaseCards)[number] | null>(null);

  if (story) {
    return (
      <div className="public-site editorial-page story-detail">
        <PublicHeader active="Gallery" />
        <main>
          <GalleryStorySection />
        </main>
        <PublicFooter />
      </div>
    );
  }

  const shown = showcaseCards.filter((x) => activeTag === "All" || x.tags.includes(activeTag as never));

  return (
    <div className="public-site editorial-page">
      <PublicHeader active="Gallery" />
      <main>
        <GalleryHeroSection />
        <GalleryGridSection
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          visible={visible}
          setVisible={setVisible}
          shown={shown}
          setPreview={setPreview}
          preview={preview}
        />
      </main>
      <PublicFooter />
    </div>
  );
}
