import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

// Per-IP limits so the form can't be used to spam the inbox or burn Resend quota
const RATE_LIMITS = [
  { limit: 3, windowMs: 60_000 },
  { limit: 10, windowMs: 60 * 60_000 },
];

export async function POST(req: Request) {
  const limited = rateLimit(`contact:${getClientIp(req)}`, RATE_LIMITS);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a bit before trying again." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

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

    // Resend reports failures in the result instead of throwing
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sohaibyounas24@gmail.com",
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Your message couldn't be sent right now. Please email sohaibyounas24@gmail.com directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please email sohaibyounas24@gmail.com directly." },
      { status: 500 }
    );
  }
}

