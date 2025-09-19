import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // 👉 Example: Save to DB or send to email service
    // For now, we'll just log
    console.log("📩 New Contact Form Submission:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Try again later." },
      { status: 500 }
    );
  }
}
