import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv'

configDotenv()

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
})

export function generateResetEmailHTML(name, token) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #007bff;
      font-size: 24px;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      color: white;
      border-radius: 5px;
      margin-top: 20px;
    }

    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #888;
    }

    .center {
      text-align: center;
    }

    .button-container {
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h1>Password Reset Request</h1>
    <p>Hello ${name},</p>
    <p>
      We received a request to reset your password. Use the link below to
      proceed with resetting your password. Please note that this link will
      expire in 1 hour.
    </p>
    <div class="button-container">
      <a href="http://localhost:3000/reset-password?token=${token}" class="button">Click Here!</a>
    </div>
    <p>If you did not request a password reset, please ignore this email.</p>
    <div class="footer center">
      © 2025 SnippetHub. All rights reserved.
    </div>
  </div>
</body>
</html>

  `
}
