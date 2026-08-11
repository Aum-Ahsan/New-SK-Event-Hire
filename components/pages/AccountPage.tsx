import React from "react";
import { AccountHeroSection } from "@/sections/account/AccountHeroSection";
import { AccountCardGridSection } from "@/sections/account/AccountCardGridSection";
import { AccountActivityPanelSection } from "@/sections/account/AccountActivityPanelSection";

export const accountData: Record<string, { active: string; eyebrow: string; title: string; text: string; cards: [string, string, string][] }> = {
  overview: {
    active: "Overview",
    eyebrow: "Customer overview",
    title: "Good afternoon, Alex",
    text: "Your next event is on track. Here is what needs your attention now.",
    cards: [
      ["Next event", "Garden wedding", "14 November · Confirmed"],
      ["Balance due", "$1,240.00", "Due 30 October"],
      ["Open quotation", "1 ready to review", "Expires 31 July"],
      ["Unread messages", "3 updates", "Logistics & quotation"],
    ],
  },
  quotes: {
    active: "Quotes",
    eyebrow: "Quotation centre",
    title: "Your quotations",
    text: "Review active proposals, request changes and follow accepted quotations into reservation.",
    cards: [
      ["Q-260724-084", "Garden wedding", "Ready to review"],
      ["Q-260615-031", "Corporate lunch", "Revision issued"],
      ["Q-251120-092", "40th birthday", "Converted to booking"],
      ["Q-250918-014", "Summer celebration", "Expired"],
    ],
  },
  "payments-documents": {
    active: "Payments & documents",
    eyebrow: "Payments & documents",
    title: "Balances, receipts and agreements",
    text: "Keep every deposit, balance, refund and booking document together.",
    cards: [
      ["Balance due", "$1,240.00", "Garden wedding"],
      ["Deposit received", "$1,280.00", "Visa ending 4821"],
      ["Tax invoice", "INV-260724-042", "PDF ready"],
      ["Rental agreement", "Signed 18 July", "Download copy"],
    ],
  },
  "delivery-returns": {
    active: "Delivery & returns",
    eyebrow: "Event logistics",
    title: "Delivery, collection and returns",
    text: "See confirmed service windows, venue access notes and return obligations.",
    cards: [
      ["Delivery", "14 Nov · 10am–12pm", "Richmond Town Hall"],
      ["Setup", "Complete by 2:00pm", "Rear loading entrance"],
      ["Collection", "15 Nov · 9am–11am", "SK collection"],
      ["Return condition", "Standard guidance", "Report an issue"],
    ],
  },
  messages: {
    active: "Messages",
    eyebrow: "Conversations",
    title: "Messages with SK Event Hire",
    text: "Keep quote, booking and support conversations connected to the right record.",
    cards: [
      ["Garden wedding", "Logistics team", "2 unread"],
      ["Quotation Q-260724-084", "Event consultant", "1 unread"],
      ["Payment confirmation", "Accounts team", "Received"],
      ["General support", "Customer care", "Reply within 1 day"],
    ],
  },
  rewards: {
    active: "Rewards",
    eyebrow: "Reward cashback",
    title: "Your event rewards",
    text: "Track pending, available, used and expired cashback from eligible completed rentals.",
    cards: [
      ["Available", "$84.00", "Ready to apply"],
      ["Pending", "$38.40", "Garden wedding"],
      ["Used", "$120.00", "Lifetime"],
      ["Lifetime earned", "$242.40", "Since 2024"],
    ],
  },
  affiliate: {
    active: "Affiliate",
    eyebrow: "Refer & earn",
    title: "Share events. Earn commission.",
    text: "Invite new customers and follow each privacy-safe referral from signup to eligible payout.",
    cards: [
      ["Referral code", "ALEXEVENTS", "Copy code"],
      ["Link clicks", "48", "Last 30 days"],
      ["Qualified referrals", "6", "2 pending"],
      ["Available earnings", "$186.00", "Payout ready"],
    ],
  },
  "saved-products": {
    active: "Saved products",
    eyebrow: "Your shortlist",
    title: "Saved products",
    text: "Keep favourite products ready for a future quote or repeat event.",
    cards: [
      ["Bentwood Chair", "Natural white", "From $12"],
      ["Festoon Light Set", "Warm white · 20m", "From $90"],
      ["Rustic Timber Table", "1.8 metres", "From $120"],
      ["Timber Welcome Sign", "Personalised A1", "From $145"],
    ],
  },
  "reviews-account": {
    active: "Your reviews",
    eyebrow: "Verified reviews",
    title: "Your event reviews",
    text: "Review completed bookings and track submitted feedback.",
    cards: [
      ["40th birthday", "Eligible to review", "Review by 10 Aug"],
      ["Corporate launch", "★★★★★", "Published"],
      ["Garden wedding", "Upcoming", "Available after return"],
      ["Review photos", "2 approved", "Manage consent"],
    ],
  },
  profile: {
    active: "Profile",
    eyebrow: "Personal information",
    title: "Your customer profile",
    text: "Maintain verified contact details, saved addresses and event preferences.",
    cards: [
      ["Alex Morgan", "Verified customer", "Edit details"],
      ["Email", "alex.morgan@example.com", "Verified"],
      ["Mobile", "0412 345 678", "Verified"],
      ["Saved addresses", "3 addresses", "Manage"],
    ],
  },
  "settings-security": {
    active: "Settings & security",
    eyebrow: "Account controls",
    title: "Security, notifications and privacy",
    text: "Manage sign-in methods, active sessions, communication and sensitive requests.",
    cards: [
      ["OTP methods", "Email & SMS", "Both verified"],
      ["Active sessions", "2 devices", "Review sessions"],
      ["Notifications", "Operational on", "Marketing optional"],
      ["Privacy", "Export or delete", "Re-verification required"],
    ],
  },
};

interface AccountOverviewProps {
  kind: string;
}

export function AccountOverview({ kind }: AccountOverviewProps) {
  const d = accountData[kind] || accountData.overview;
  return (
    <main>
      <AccountHeroSection d={d} kind={kind} />
      <AccountCardGridSection cards={d.cards} kind={kind} />
      <AccountActivityPanelSection />
    </main>
  );
}
