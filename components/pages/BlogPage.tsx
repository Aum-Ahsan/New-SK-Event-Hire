import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { BlogHeroSection } from "@/sections/blog/BlogHeroSection";
import { BlogGridSection } from "@/sections/blog/BlogGridSection";
import { BlogArticleSection } from "@/sections/blog/BlogArticleSection";

interface BlogPageProps {
  article?: boolean;
  guides: readonly any[];
}

export function BlogPage({ article = false, guides }: BlogPageProps) {
  const [query, setQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (article) {
    return (
      <div className="public-site blog-resource article-detail">
        <PublicHeader active="Blog" />
        <main>
          <BlogArticleSection />
        </main>
        <PublicFooter />
      </div>
    );
  }

  const filtered = guides.filter((g) => g[0].toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="public-site blog-resource">
      <PublicHeader active="Blog" />
      <main>
        <BlogHeroSection query={query} setQuery={setQuery} />
        <BlogGridSection
          query={query}
          setQuery={setQuery}
          filtered={filtered}
          guides={guides}
          subscribed={subscribed}
          setSubscribed={setSubscribed}
        />
      </main>
      <PublicFooter />
    </div>
  );
}
