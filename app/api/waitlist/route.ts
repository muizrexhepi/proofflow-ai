import { sendWaitlistEmail } from "@/lib/email/send-waitlist-email";
import { addToWaitlist } from "@/lib/supabase/waitlist";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Add to Supabase waitlist
    const { data, error } = await addToWaitlist(email);

    if (error) {
      // Check if email already exists
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 409 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Send welcome email to the user
    try {
      await sendWaitlistEmail(email);
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // Don't fail the request if email sending fails
    }

    // Send notification email to admin (007lazi@gmail.com)
    try {
      await resend.emails.send({
        from: "Casevia <onboarding@muizrexhepi.com>",
        to: ["007lazi@gmail.com"],
        subject: "🎉 New Waitlist Signup!",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(to right, #3b82f6, #1e40af); padding: 30px; border-radius: 8px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 24px;">New Waitlist Signup! 🎉</h1>
            </div>
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                Someone just joined the Casevia waitlist!
              </p>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;">Email:</p>
                <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: 600; color: #3b82f6;">
                  ${email}
                </p>
              </div>
              <p style="font-size: 14px; color: #666; margin-top: 20px;">
                Signed up at: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
      });
    } catch (adminEmailError) {
      console.error("Failed to send admin notification:", adminEmailError);
      // Don't fail the request if admin email fails
    }

    return NextResponse.json(
      {
        message: "Successfully joined waitlist",
        data: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
