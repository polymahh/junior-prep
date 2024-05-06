import nodemailer from "nodemailer"

async function sendverificationEmail(email: string, token: string) {
    const transporter: nodemailer.Transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 0,
        auth: {
            user: process.env.SMTP_AUTH_USER,
            pass: process.env.SMTP_AUTH_PASS,
        },
    })

    const emailData = {
        from: "boombeach449@gmail.com",
        to: email,
        subject: "Email Verification",
        html: `
        <p>Click the link below to verify your email:</p>
        <a href="${process.env.NEXT_PUBLIC_API_URL}/verify?email=${email}&token=${token}">Verify Email</a>
        `,
    }

    try {
        await transporter.sendMail(emailData)
    } catch (error) {
        return false
    }

    return true
}

export { sendverificationEmail }
