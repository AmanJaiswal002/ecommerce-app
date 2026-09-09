import nodemailer from 'nodemailer';

export const getTransporter = async () => {
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (user && pass) {
        if (user.endsWith('@gmail.com')) {
            return nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: user,
                    pass: pass
                },
                connectionTimeout: 5000,
                greetingTimeout: 5000,
                socketTimeout: 10000
            });
        }
        return nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: user,
                pass: pass
            },
            connectionTimeout: 5000,
            greetingTimeout: 5000,
            socketTimeout: 10000
        });
    }

    // Fallback to test account
    try {
        const testAccount = await nodemailer.createTestAccount();
        return nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            },
            connectionTimeout: 5000
        });
    } catch (err) {
        console.error("Could not create test email account:", err.message);
        return null;
    }
};

export default getTransporter;
