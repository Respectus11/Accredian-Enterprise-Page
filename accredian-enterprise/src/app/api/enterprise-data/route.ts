import { NextResponse } from "next/server";

const enterpriseData = {
  hero: {
    badge: "Enterprise Learning Platform",
    title: "Next-Gen Expertise for Your Enterprise",
    subtitle:
      "Cultivate high-performance teams through expert learning. Partner with world-class institutions to deliver measurable skill development at scale.",
    cta: "Book a Consultation",
  },
  stats: [
    { value: "10,000+", label: "Professionals Trained" },
    { value: "500+", label: "Industry Mentors" },
    { value: "200+", label: "Enterprise Clients" },
    { value: "95%", label: "Completion Rate" },
  ],
  domains: [
    "Product & Innovation",
    "Gen-AI Mastery",
    "Leadership",
    "Tech & Data",
    "Operations",
    "Digital Enterprise",
    "Fintech",
  ],
  partners: [
    "IIT Bombay",
    "IIT Delhi",
    "IIM Bangalore",
    "IIM Ahmedabad",
    "XLRI",
    "SP Jain",
  ],
};

export async function GET() {
  return NextResponse.json(enterpriseData);
}
