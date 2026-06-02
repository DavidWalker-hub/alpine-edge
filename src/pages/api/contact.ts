import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Please fill in all required fields.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const toEmail = import.meta.env.CONTACT_TO_EMAIL;
    const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;
    console.log("resendApiKey", !!resendApiKey);
    console.log("toEmail", !!toEmail);
    console.log("fromEmail", !!fromEmail);

    if (!resendApiKey || !toEmail || !fromEmail) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Server email configuration is missing.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Alpine Edge enquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, ``, `Message:`, message].join(
        "\n",
      ),
    });

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Message sent successfully.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Failed to send message.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      ok: false,
      message: "This endpoint only accepts POST requests.",
    }),
    {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        Allow: "POST",
      },
    },
  );
};
