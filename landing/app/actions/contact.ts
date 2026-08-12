"use server";

import { Resend } from "resend";

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function sendContactMessage(formData: FormData): Promise<ContactResult> {
  const name = String(formData.get("from_name") ?? "").trim();
  const email = String(formData.get("from_email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return { success: false, error: "missing_fields" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return { success: false, error: "missing_api_key" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "tognolimauricio@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "send_failed" };
    }

    return { success: true };
  } catch (err) {
    console.error("Error sending contact email:", err);
    return { success: false, error: "send_failed" };
  }
}
