import nodemailer from "nodemailer";

interface EnquiryEmailPayload {
  name: string;
  mobile: string;
  email: string;
  matterType: string;
  description: string;
  enquiryId: string;
}

export async function sendEnquiryNotificationEmail(payload: EnquiryEmailPayload): Promise<{
  sent: boolean;
  messageId?: string;
  simulated?: boolean;
}> {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.NOTIFICATION_EMAIL || "trushlegalf@gmail.com";
  const fromEmail = process.env.SMTP_FROM || "no-reply@trushlegal.com";

  // If SMTP credentials are not configured, simulate email sending with structured log
  if (!host || !user || !pass) {
    console.info(`
[EMAIL SYSTEM - SIMULATED DELIVERY]
To: ${toEmail}
Subject: New Consultation Enquiry - ${payload.matterType} (${payload.name})
------------------------------------------------------------
A new legal consultation enquiry was submitted to TRUSH LEGAL FIRM.
Enquiry ID : ${payload.enquiryId}
Client Name: ${payload.name}
Mobile     : ${payload.mobile}
Email      : ${payload.email}
Matter Type: ${payload.matterType}
Description:
${payload.description}
------------------------------------------------------------
Note: Configure SMTP_HOST, SMTP_USER, and SMTP_PASS in .env to enable live email delivery.
    `);
    return { sent: false, simulated: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"TRUSH LEGAL FIRM Portal" <${fromEmail}>`,
      to: toEmail,
      replyTo: payload.email,
      subject: `New Legal Enquiry: ${payload.matterType} - ${payload.name}`,
      text: `
TRUSH LEGAL FIRM - NEW CONSULTATION ENQUIRY
-------------------------------------------
Enquiry ID : ${payload.enquiryId}
Client Name: ${payload.name}
Mobile     : ${payload.mobile}
Email      : ${payload.email}
Matter Type: ${payload.matterType}

Description:
${payload.description}

Please access the Admin Dashboard to review and manage this enquiry.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0c1829; padding: 24px; color: #ffffff; text-align: center;">
    <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 1px;">TRUSH LEGAL FIRM</h1>
    <p style="margin: 6px 0 0; font-size: 13px; color: #cfa53e;">New Consultation Enquiry Received</p>
  </div>
  <div style="padding: 24px; background-color: #ffffff; color: #334155;">
    <p style="margin-top: 0;">A prospective client has submitted an enquiry through the official website:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr>
        <td style="padding: 8px; font-weight: bold; width: 140px; border-bottom: 1px solid #f1f5f9;">Enquiry ID:</td>
        <td style="padding: 8px; border-bottom: 1px solid #f1f5f9; color: #0c1829;">${payload.enquiryId}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Client Name:</td>
        <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${payload.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Mobile Number:</td>
        <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="tel:${payload.mobile}">${payload.mobile}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
        <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${payload.email}">${payload.email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Matter Category:</td>
        <td style="padding: 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #1d3b64;">${payload.matterType}</td>
      </tr>
    </table>
    <h3 style="font-size: 15px; margin: 16px 0 8px; color: #0c1829;">Description of Matter:</h3>
    <div style="background-color: #f8fafc; border-left: 4px solid #cfa53e; padding: 12px; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">
      ${payload.description}
    </div>
  </div>
  <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
    TRUSH LEGAL FIRM • B-320, Sun West Bank, Ashram Road, Ahmedabad – 380009
  </div>
</div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error("Failed to dispatch live email:", error);
    return { sent: false };
  }
}
