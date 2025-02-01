import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the JSON body
        const { name, email, subject, message } = body;

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "Gmail", // Use Gmail, or your email service provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, 
            },
        });

        // Send the email
        await transporter.sendMail({
            from:  process.env.EMAIL_USER,
            to: 'kidpreneurs@jiotp.com',
            // from: `"${name}" <${email}>`, // Sender's info
            // to: process.env.EMAIL_USER, // Your receiving email
            subject: subject, // Email subject
            text: `You received a new message from your Kidspreneur's Bazar contact form:
            \n\nName: ${name}
            \nEmail: ${email}
            \nSubject: ${subject}
            \nMessage: ${message}`,
        });

        // Return success response
        return new Response(JSON.stringify({ message: "Message Sent Successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Failed to Send Message." }), { status: 500 });
    }
}
