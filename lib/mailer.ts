import nodemailer from "nodemailer"

const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
    },
})

async function sendverificationEmail(email: string, token: string) {
    const emailData = {
        from: process.env.SMTP_AUTH_USER,
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
async function newPasswordEmail(email: string, token: string) {
    const emailData = {
        from: process.env.SMTP_AUTH_USER,
        to: email,
        subject: "Email Verification",
        html: `
        <h3> Reset Password </h3>
        <p>Need to reset your password? No problem!</p>
        <p>Just click the link below:</p>
        <a href="${process.env.NEXT_PUBLIC_API_URL}/new_password?email=${email}&token=${token}">change password</a>
        <p> If you did not request a password reset, please ignore this email. </p>
        `,
    }

    try {
        await transporter.sendMail(emailData)
    } catch (error) {
        return false
    }

    return true
}

export { sendverificationEmail, newPasswordEmail }
