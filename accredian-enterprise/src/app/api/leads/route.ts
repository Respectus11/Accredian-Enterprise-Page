import { NextResponse } from "next/server";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  createdAt: string;
}

const leads: Lead[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      phone: phone || "",
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    return NextResponse.json(
      { message: "Lead captured successfully", id: lead.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ leads, total: leads.length });
}
