import Contact from "../models/Contact.js";
import transporter from "../config/mailer.js";

export const createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters",
      });
    }

    // 1) Save message in MongoDB
    const newMessage = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // 2) Send notification email to YOU
    try {
      const ownerMail = await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color:#7c3aed;">New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#f5f5f5; padding:12px; border-radius:8px;">${message}</p>
          </div>
        `,
      });

      console.log("✅ Owner notification email sent:", ownerMail.response);
    } catch (mailError) {
      console.error("❌ Owner email failed:");
      console.error("Message:", mailError.message);
      console.error("Code:", mailError.code);
      console.error("Response:", mailError.response);
    }

    // 3) Send auto-reply to VISITOR
    try {
      const autoReply = await transporter.sendMail({
        from: `"Himanshu Sekhar Behera" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank you for contacting me",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 30px; background: #0f172a; color: #ffffff; border-radius: 16px;">
            <h1 style="color: #7c3aed; margin-bottom: 10px;">Thank You, ${name} 👋</h1>
            <p style="font-size: 16px; line-height: 1.8;">
              I’ve received your message regarding 
              <strong style="color:#22d3ee;">"${subject}"</strong>.
            </p>

            <p style="font-size: 16px; line-height: 1.8;">
              Thank you for reaching out through my portfolio.  
              I truly appreciate your time and interest.
            </p>

            <p style="font-size: 16px; line-height: 1.8;">
              I will review your message and get back to you as soon as possible.
            </p>

            <div style="margin: 25px 0; padding: 18px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;">
              <p style="margin: 0; color: #cbd5e1;"><strong>Your Message:</strong></p>
              <p style="margin-top: 10px; color: #ffffff;">${message}</p>
            </div>

            <p style="font-size: 15px; color: #cbd5e1; line-height: 1.8;">
              Best regards, <br />
              <strong style="color:#ffffff;">Himanshu Sekhar Behera</strong><br />
              MERN Stack Developer & Java Developer
            </p>

            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 25px 0;" />

           
           
          </div>
        `,
      });

      console.log("✅ Auto-reply email sent:", autoReply.response);
    } catch (mailError) {
      console.error("❌ Auto-reply email failed:");
      console.error("Message:", mailError.message);
      console.error("Code:", mailError.code);
      console.error("Response:", mailError.response);
    }

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("❌ Contact Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error while submitting message",
      error: error.message,
    });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("❌ Fetch Messages Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching messages",
    });
  }
};