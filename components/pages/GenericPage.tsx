import React from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { GenericHeroSection } from "@/sections/generic/GenericHeroSection";
import { GenericFeatureGridSection } from "@/sections/generic/GenericFeatureGridSection";
import { GenericCtaSection } from "@/sections/generic/GenericCtaSection";

export const genericPages: Record<string, { eyebrow: string; title: string; text: string; image: string; items: [string, string][] }> = {
  packages: {
    eyebrow: "Ready-made collections",
    title: "Start with a complete event package",
    text: "Use a practical equipment bundle as your starting point, then tailor quantities, finishes, delivery and setup.",
    image: "/images/hero-event.png",
    items: [
      ["Garden celebration", "Seating, dining tables, tableware and festoon lighting for 40 guests."],
      ["Wedding reception", "Bentwood chairs, timber tables, marquee, lighting and setup for 80 guests."],
      ["Corporate gathering", "Banquet seating, staging, lectern, service tables and practical lighting."],
      ["Backyard party", "Weather cover, bistro seating, cocktail tables and ambient light for 30 guests."],
    ],
  },
  planning: {
    eyebrow: "Event planning",
    title: "A practical plan for products and logistics",
    text: "Choose equipment advice, styling support, setup coordination or a complete event plan.",
    image: "/images/decor-product.png",
    items: [
      ["Equipment consultation", "Guest-count quantities, product combinations and available alternatives."],
      ["Venue & access review", "Loading, stairs, surfaces, power, setup timing and pack-down planning."],
      ["Styling direction", "Furniture, linen, tableware, lighting and décor aligned to one visual brief."],
      ["On-site coordination", "Crew scheduling, supplier handover, placement checks and event-day support."],
    ],
  },
  gallery: {
    eyebrow: "Event inspiration",
    title: "See products working together",
    text: "Explore natural wedding, corporate, private party and outdoor event combinations.",
    image: "/images/hero-event.png",
    items: [
      ["Garden wedding", "Bentwood seating, timber dining, ivory tableware and warm festoon lighting."],
      ["Modern corporate dinner", "Round banquet tables, neutral linen, staging and focused ambient light."],
      ["Intimate birthday", "Lounge settings, cocktail tables, décor arches and a compact dance floor."],
      ["Outdoor celebration", "Clearspan marquee, weather walls, flooring, practical lighting and heaters."],
    ],
  },
  reviews: {
    eyebrow: "Customer outcomes",
    title: "Service designed around confidence",
    text: "A clear quotation, visible product information and connected order tracking reduce surprises.",
    image: "/images/lounge-product.png",
    items: [
      ["Product clarity", "Customers can compare the size, finish, capacity and minimum hire before enquiring."],
      ["Logistics visibility", "Delivery windows, setup tasks and return requirements stay attached to the booking."],
      ["Controlled changes", "Date, quantity, item and access changes are rechecked before the order is altered."],
      ["Return support", "Condition reporting, collection status and final documents stay in the account."],
    ],
  },
  blog: {
    eyebrow: "Planning guides",
    title: "Make event hire decisions with context",
    text: "Practical Australian guidance for quantities, weather planning, venue access and hire responsibilities.",
    image: "/images/tableware-product.png",
    items: [
      ["How many chairs should I hire?", "Plan one chair per seated guest, then account for ceremony-to-reception moves and accessible seating."],
      ["Choosing a table size", "Allow for place settings, shared serviceware, centrepieces and comfortable chair clearance."],
      ["Melbourne weather plans", "Confirm anchoring, walling, drainage, heating and heat-management options early."],
      ["Preparing for pickup", "Use an enclosed vehicle, suitable restraints, protective blankets and the approved loading appointment."],
    ],
  },
  help: {
    eyebrow: "Help centre",
    title: "Clear answers before event day",
    text: "Understand quotations, deposits, delivery, pickup, changes, cancellations and returns.",
    image: "/images/warehouse-team.png",
    items: [
      ["When is stock reserved?", "Only after availability is rechecked, the final quote is accepted and the required deposit is paid."],
      ["Can I collect my order?", "Eligible items may be collected by appointment in a suitable enclosed vehicle with photo ID."],
      ["Can I change quantities?", "Yes. Changes remain requests until stock, labour, logistics and price are revalidated."],
      ["What happens on return?", "Items are counted and condition-checked. Missing, damaged or excess-cleaning items are documented."],
    ],
  },
};

interface GenericPublicPageProps {
  kind: string;
}

export function GenericPublicPage({ kind }: GenericPublicPageProps) {
  const p = genericPages[kind] || genericPages.planning;
  return (
    <div className="public-site">
      <PublicHeader />
      <main className="public-main">
        <GenericHeroSection p={p} />
        <GenericFeatureGridSection items={p.items} />
        <GenericCtaSection />
      </main>
      <PublicFooter />
    </div>
  );
}
