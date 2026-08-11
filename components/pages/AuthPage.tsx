import React from "react";
import { AuthAsideSection } from "@/sections/auth/AuthAsideSection";
import { AuthCardSection } from "@/sections/auth/AuthCardSection";

interface AuthPageProps {
  type: string;
}

export function AuthPage({ type }: AuthPageProps) {
  const map: Record<string, [string, string, string]> = {
    "sign-in": [
      "Welcome back",
      "Sign in to your SK Event Hire account",
      "Enter your verified email or Australian mobile number to receive a secure code.",
    ],
    otp: ["Check your messages", "Enter your 6-digit verification code", "We sent a code to a•••@example.com. It expires in five minutes."],
    "create-account": [
      "Create your customer account",
      "Keep every event in one place",
      "Add your contact details, accept the account terms and verify your preferred sign-in method.",
    ],
    "complete-profile": [
      "Complete your profile",
      "Make future event requests faster",
      "Confirm your name, preferred address and communication settings. Optional details can be added later.",
    ],
  };

  const d = map[type] || map["sign-in"];

  return (
    <div className="auth-shell">
      <AuthAsideSection />
      <AuthCardSection type={type} d={d} />
    </div>
  );
}
