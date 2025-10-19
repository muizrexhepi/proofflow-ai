import { Resend } from "resend";
import { render } from "@react-email/render";
import { WaitlistWelcomeEmail } from "./templates/waitlist-welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistEmail(email: string) {
  try {
    const emailHtml = await render(await WaitlistWelcomeEmail({ email }));

    const { data, error } = await resend.emails.send({
      from: "ProofFlow.ai <onboarding@muizrexhepi.com>",
      to: [email],
      subject: "Welcome to the ProofFlow.ai Waitlist! 🚀",
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
