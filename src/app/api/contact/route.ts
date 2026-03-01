import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, details } = await request.json();

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const destEmail = process.env.CONTACT_EMAIL || "southerncreativeconcepts@gmail.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("SMTP not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.");
      return NextResponse.json({ error: "SMTP not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `Consultation request from ${name || "(no name)"}`;
    const text = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nDetails:\n${details}`;

    // send message to internal address
    await transporter.sendMail({
      from: smtpUser,
      to: destEmail,
      subject,
      text,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Details:</strong><br/>${details}</p>`,
    });

    // send confirmation to client if email provided
    if (email) {
      const clientSubject = "We received your consultation request";
      const clientText = `Hello ${name || "there"},\n\nThank you for contacting Southern Creative Concepts. We have received your consultation request and will be in touch shortly.\n\nYour details:\n${details}\n\nBest regards,\nSouthern Creative Concepts`;
      const clientHtml = `<p>Hello ${name || "there"},</p><p>Thank you for contacting <strong>Southern Creative Concepts</strong>. We have received your consultation request and will be in touch shortly.</p><p><strong>Your details:</strong><br/>${details}</p><p>Best regards,<br/>Southern Creative Concepts</p>`;

      await transporter.sendMail({
        from: smtpUser,
        to: email,
        subject: clientSubject,
        text: clientText,
        html: clientHtml,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
