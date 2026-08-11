import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import sitemapData from "@/data/pages/sitemap.json";

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

  const { hero } = sitemapData;

  return (
    <div className="public-site">
      <PublicHeader />
      <main className="public-main">
        <section className="simple-hero">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </section>
        <section className="sitemap-grid">
          {groups.map((g) => (
            <article key={g[0]}>
              <h2>{g[0]}</h2>
              {g[1].map((x) => (
                <a href={x[1]} key={x[0]}>
                  {x[0]} <span>→</span>
                </a>
              ))}
            </article>
          ))}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
