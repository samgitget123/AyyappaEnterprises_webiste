import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import twilio from "twilio";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// ❗ Twilio removed completely (to avoid GitHub secret block)

app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date() });
});

app.post("/api/contact", async (req, res) => {
  const { name, contact, email, description } = req.body;

  try {
    // Email / WhatsApp logic removed or will be re-added using ENV variables later

    res.json({
      success: true,
      message: "We received your details. Our team will get back to you."
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Failed to process request" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000/"));
