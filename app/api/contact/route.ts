import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || "Invalid contact form input";
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    const { name, email, message } = result.data;
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      console.warn("RESEND_API_KEY is not set. Contact form submission received:", { name, email });
      return NextResponse.json(
        {
          error:
            "Email service is not yet configured (missing RESEND_API_KEY). Please reach out directly to sohaibyounas24@gmail.com.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sohaibyounas24@gmail.com",
      subject: `New portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message" },
      { status: 500 }
    );
  }
}

