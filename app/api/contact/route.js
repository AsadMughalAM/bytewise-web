import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();
    console.log(name, email, phone, subject, message);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #070d1a; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 20px auto; border: 1px solid #edf0fa; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
                    .header { background-color: #6e54f3; color: #ffffff; padding: 30px; text-align: center; }
                    .header h1 { margin: 0; font-size: 24px; }
                    .content { padding: 30px; background-color: #ffffff; }
                    .field { margin-bottom: 20px; border-bottom: 1px solid #f0f4ff; padding-bottom: 10px; }
                    .label { font-weight: bold; color: #6e54f3; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-bottom: 5px; display: block; }
                    .value { font-size: 16px; color: #070d1a; }
                    .message-box { background-color: #f0f4ff; padding: 20px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #6e54f3; }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666666; background-color: #f4f7ff; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Contact Inquiry</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                            <span class="label">Full Name</span>
                            <div class="value">${name}</div>
                        </div>
                        <div class="field">
                            <span class="label">Email Address</span>
                            <div class="value">${email}</div>
                        </div>
                        <div class="field">
                            <span class="label">Phone Number</span>
                            <div class="value">${phone || "Not provided"}</div>
                        </div>
                        <div class="field">
                            <span class="label">Subject</span>
                            <div class="value">${subject}</div>
                        </div>
                        <div class="field" style="border-bottom: none;">
                            <span class="label">Message</span>
                            <div class="message-box">${message.replace(
                              /\n/g,
                              "<br>"
                            )}</div>
                        </div>
                    </div>
                    <div class="footer">
                        Sent from Bytewise Technologies Contact Form
                    </div>
                </div>
            </body>
            </html>
        `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Recommended to send from auth user to avoid spam filters
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: htmlContent,
    });
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Email sent failed" },
      { status: 500 }
    );
  }
}
