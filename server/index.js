import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint to receive contact form data
app.post("/send", async (req, res) => {
  const { name, email, company, service, message } = req.body;

   try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // from .env
        pass: process.env.GMAIL_PASS, // from .env
      },
    });


    await transporter.sendMail({
      from: email,
      to: "autophy.work@gmail.com",      // your inbox
      subject: `📩 New Quote Request from ${name}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, msg: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
