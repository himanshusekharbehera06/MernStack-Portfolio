import dotenv from "dotenv";

dotenv.config();

import transporter from "./config/mailer.js";

const sendTestMail = async () => {
  try {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");
    console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);

    const info = await transporter.sendMail({
      from: `"Portfolio Test" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "Portfolio Direct Test Mail",
      text: "If you received this, your mail setup is working.",
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>✅ Portfolio Direct Test Mail</h2>
          <p>If you received this, your email setup is working properly.</p>
        </div>
      `,
    });

    console.log("✅ Test mail sent successfully");
    console.log("Response:", info.response);
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ Test mail failed");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Response:", error.response);
  }
};

sendTestMail();