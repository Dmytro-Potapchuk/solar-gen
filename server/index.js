const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

app.post("/api/submit-form", (req, res) => {
    const { email, phone } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "your-email@example.com",
            pass: "your-email-password",
        },
    });

    const mailOptions = {
        from: "your-email@example.com",
        to: "site-owner@example.com",
        subject: "New form submission",
        text: `Email: ${email}\nPhone: ${phone}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email: ", error);
            res.status(500).json({ error: "Error sending email" });
        } else {
            console.log("Email sent: ", info.response);
            res.status(200).json({ message: "Email sent successfully" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
