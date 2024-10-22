// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Set up nodemailer transport
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // Your SMTP host
            port: process.env.SMTP_PORT, // SMTP port (e.g., 587)
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        const mailOptions = {
            from: email, // sender address
            to: process.env.EMAIL_USER, // receiver address (your email)
            subject: `Portfolio Contact Form Submission from ${name}`,
            text: message,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: 'Failed to send email.' });
        }
    } else {
        return res.status(405).json({ status: 'error', message: 'Method not allowed.' });
    }
}
