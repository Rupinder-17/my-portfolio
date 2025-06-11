import nodemailer from "nodemailer";
interface EmailData {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}
interface ContactFromData {
  name: string;
  email: string;
  subject?: string;
  messege: string;
}
 export const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

 export const sendEmail = async (emaildata: EmailData) => {
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: "",
      to: emaildata.to,
      subject: emaildata.subject,
      html: emaildata.html,
      text: emaildata.text,
      replyTo: emaildata.replyTo,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(info.messageId);
  } catch (error) {
    console.log(error);
  }
};

export const sendContactFromEmail = async (data: ContactFromData) => {
  try {
    const recipientEmails = process.env.RECIPIENT_EMAILS
      ? process.env.RECIPIENT_EMAILS.split(",")
      : [];

    await sendEmail({
      to: recipientEmails,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: createContactEmailTemplate(data),
      replyTo: data.email,
    });
  } catch (e) {
    console.log(e);
  }
};
const createContactEmailTemplate = (data: ContactFromData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #eaeaea;
        }
        .logo {
          max-width: 180px;
          height: auto;
        }
        .content {
          padding: 20px 0;
        }
        .footer {
          text-align: center;
          padding: 20px 0;
          font-size: 12px;
          color: #777;
          border-top: 1px solid #eaeaea;
        }
        h1 {
          color: #333;
          margin-top: 0;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-label {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
          color: #666;
        }
        .field-value {
          padding: 10px;
          background-color: #f5f7fa;
          border-radius: 4px;
          border-left: 3px solid #3182ce;
        }
        .message-value {
          white-space: pre-wrap;
          padding: 15px;
          background-color: #f5f7fa;
          border-radius: 4px;
          border-left: 3px solid #3182ce;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          
          <div class="field">
            <div class="field-label">Name:</div>
            <div class="field-value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${data.email}</div>
          </div>
          
        
          
          <div class="field">
            <div class="field-label">Subject:</div>
            <div class="field-value">${data.subject}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Message:</div>
            <div class="message-value"></div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent automatically from the iVALT website contact form.</p>
          <p>&copy; ${new Date().getFullYear()} iVALT. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
