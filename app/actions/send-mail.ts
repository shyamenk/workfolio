"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation schema
const emailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate input
  try {
    emailSchema.parse({ name, email, message });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      };
    }
    return {
      success: false,
      message: "Invalid input. Please check your information.",
    };
  }

  // Use your deployed domain for the logo URL in production
  const logoUrl = "https://yourdomain.com/images/logo-white.png";

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "shyamenk@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); overflow: hidden;">
          <div style="background: #181825; padding: 32px 0 16px 0; text-align: center;">
            <img src='${logoUrl}' alt='Logo' style='height: 48px; margin-bottom: 8px;' />
            <h2 style="color: #a6e3a1; margin: 0; font-size: 1.5rem; font-family: monospace;">New Contact Form Submission</h2>
          </div>
          <div style="background: #fff; padding: 32px;">
            <p style="font-size: 1rem; color: #181825;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 1rem; color: #181825;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #cba6f7; text-decoration: underline;">${email}</a></p>
            <p style="font-size: 1rem; color: #181825; margin-bottom: 8px;"><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 6px; color: #313244; font-size: 1rem; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="background: #f8fafc; color: #888; font-size: 12px; text-align: center; padding: 16px 0; border-top: 1px solid #eee;">
            This email was sent from your portfolio website's contact form.
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        "Failed to send email. Please try again later or contact me directly at shyamenk@gmail.com",
    };
  }
}
