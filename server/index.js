import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// POST /api/contact
app.post("/api/contact", async (req, res) => {
  try {
    const { name, contact, email, description } = req.body || {};

    if (!name || !contact || !email || !description) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    // Nodemailer transporter (Gmail + App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS
      }
    });

    const subject = `New Contact Request - ${name}`;
    const text = `
Name: ${name}
Contact: ${contact}
Email: ${email}
Description: ${description}
    `.trim();

    const html = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Description:</strong><br/>${description.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"Ayyappa Enterprises" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
