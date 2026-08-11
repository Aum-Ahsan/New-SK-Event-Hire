import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { ReviewsHeroSection } from "@/sections/reviews/ReviewsHeroSection";
import { ReviewsSummarySection } from "@/sections/reviews/ReviewsSummarySection";
import { ReviewsGridSection } from "@/sections/reviews/ReviewsGridSection";

interface ReviewsPageProps {
  publicReviews: readonly any[];
}

export function ReviewsPage({ publicReviews }: ReviewsPageProps) {
  const [event, setEvent] = useState("All events");
  const [rating, setRating] = useState("All ratings");
  const [submitted, setSubmitted] = useState(false);

  const visible = publicReviews.filter((r) => (event === "All events" || r.event === event) && (rating === "All ratings" || r.rating === Number(rating)));

  return (
    <div className="public-site reviews-page">
      <PublicHeader />
      <main>
        <ReviewsHeroSection />
        <ReviewsSummarySection />
        <ReviewsGridSection
          event={event}
          setEvent={setEvent}
          rating={rating}
          setRating={setRating}
          visible={visible}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </main>
      <PublicFooter />
    </div>
  );
}
