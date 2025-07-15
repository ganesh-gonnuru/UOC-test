const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

// Debug logs
console.log("📦 ENV USER:", process.env.EMAIL_USER);
console.log("📦 ENV PASS:", process.env.EMAIL_PASS ? "✔️ Loaded" : "❌ Missing");
console.log("📦 TO EMAIL:", process.env.TO_EMAIL);

// POST /api/contact
router.post("/", async (req, res) => {
  console.log("🔔 Contact form API hit");

  const { name, email, phone, course, message } = req.body;
  console.log("📨 Received:", req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ Transporter Error:", error);
    } else {
      console.log("✅ Transporter ready");
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Desired Course:</strong> ${course}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

module.exports = router;
