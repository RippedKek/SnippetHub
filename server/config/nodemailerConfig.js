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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Password Reset</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h1 {
        color: #007bff;
        text-align: center;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        text-align: center;
      }
      .token {
        display: inline-block;
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 6px;
        text-decoration: none;
      }
      .footer {
        text-align: center;
        margin-top: 30px;
        font-size: 14px;
        color: #aaa;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Password Reset Request</h1>
      <p>Hello ${name},</p>
      <p>We received a request to reset your password. Use the code below to proceed with resetting your password. Please note that this code will expire in 1 hour.</p>
      <p>Your password reset link is:</p>
      <a class='token' href='http://localhost:3000/reset-password?token=${token}'>Click Here!</a>
      <p>If you did not request a password reset, please ignore this email.</p>
    </div>
    <div class="footer">
      <p>&copy; 2025 SnippetHub. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}
