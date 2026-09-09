import nodemailer from 'nodemailer';
import { getTransporter } from '../config/nodemailer.js';

/**
 * Send Order Confirmation Email to customer
 * @param {Object} orderData - The order details containing items, address, amount, paymentMethod, etc.
 */
export const sendOrderConfirmationEmail = async (orderData) => {
    try {
        const { address, items, amount, paymentMethod } = orderData;
        const recipientEmail = address?.email;

        if (!recipientEmail) {
            console.log("No customer email address provided in order details. Skipping email notification.");
            return;
        }

        let transporter = await getTransporter();
        if (!transporter) {
            console.error("Transporter is not available. Could not send email.");
            return;
        }

        const customerName = `${address.firstName || ''} ${address.lastName || ''}`.trim() || 'Valued Customer';
        const senderEmail = process.env.SMTP_USER || 'forever.store.official@gmail.com';

        // Build HTML table rows for items
        const itemsHtml = (items || []).map((item, index) => `
            <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 12px; font-size: 14px; color: #333333;">${index + 1}</td>
                <td style="padding: 12px; font-size: 14px; color: #333333; font-weight: 600;">${item.name}</td>
                <td style="padding: 12px; font-size: 14px; color: #555555; text-align: center;">${item.size || 'N/A'}</td>
                <td style="padding: 12px; font-size: 14px; color: #555555; text-align: center;">${item.quantity}</td>
                <td style="padding: 12px; font-size: 14px; color: #111111; text-align: right; font-weight: 600;">₹${item.price}</td>
            </tr>
        `).join('');

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px; }
                .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
                .header { background-color: #000000; color: #ffffff; padding: 25px 30px; text-align: center; }
                .header h1 { margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
                .content { padding: 30px; }
                .greeting { font-size: 18px; color: #111827; font-weight: 600; margin-bottom: 10px; }
                .banner { background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 15px; text-align: center; margin-bottom: 25px; }
                .banner-text { color: #15803d; font-size: 16px; font-weight: 700; margin: 0; }
                .table-container { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 25px; }
                .table-header { background-color: #f9fafb; border-bottom: 2px solid #e5e7eb; }
                .table-header th { padding: 10px 12px; font-size: 13px; text-transform: uppercase; color: #4b5563; text-align: left; }
                .summary-box { background-color: #f9fafb; border-radius: 6px; padding: 15px 20px; margin-bottom: 25px; }
                .address-box { font-size: 13px; color: #4b5563; line-height: 1.6; background: #fafafa; border: 1px solid #eaeaea; padding: 15px; border-radius: 6px; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="header">
                    <h1>FOREVER</h1>
                </div>
                <div class="content">
                    <div class="banner">
                        <p class="banner-text">🎉 Forever, Congratulations, your order has been placed successfully!</p>
                    </div>

                    <p class="greeting">Hi ${customerName},</p>
                    <p style="color: #4b5563; font-size: 14px;">Thank you for shopping with Forever! We have received your order and are processing it.</p>

                    <h3 style="font-size: 15px; color: #111827; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px;">Order Summary</h3>
                    
                    <table class="table-container">
                        <thead>
                            <tr class="table-header">
                                <th style="text-align: left;">#</th>
                                <th style="text-align: left;">Product</th>
                                <th style="text-align: center;">Size</th>
                                <th style="text-align: center;">Qty</th>
                                <th style="text-align: right;">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                        </tbody>
                    </table>

                    <div class="summary-box">
                        <table style="width: 100%;">
                            <tr>
                                <td style="padding: 4px 0; font-size: 14px; color: #4b5563;">Payment Method:</td>
                                <td style="padding: 4px 0; font-size: 14px; color: #111827; font-weight: 600; text-align: right;">${(paymentMethod || 'COD').toUpperCase()}</td>
                            </tr>
                            <tr style="border-top: 1px solid #e5e7eb;">
                                <td style="padding: 10px 0 0 0; font-size: 16px; font-weight: 700; color: #111827;">Total Amount:</td>
                                <td style="padding: 10px 0 0 0; font-size: 18px; font-weight: 700; color: #000000; text-align: right;">₹${amount}</td>
                            </tr>
                        </table>
                    </div>

                    <h3 style="font-size: 15px; color: #111827; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px;">Delivery Details</h3>
                    <div class="address-box">
                        <strong>${customerName}</strong><br/>
                        ${address.street || ''}<br/>
                        ${address.city || ''}, ${address.state || ''} - ${address.zipcode || ''}<br/>
                        ${address.country || ''}<br/>
                        📞 Phone: ${address.phone || ''}<br/>
                        ✉️ Email: ${address.email || ''}
                    </div>
                </div>

                <div class="footer">
                    &copy; ${new Date().getFullYear()} Forever E-Commerce. All rights reserved.<br/>
                    If you have any questions, please reply to this email.
                </div>
            </div>
        </body>
        </html>
        `;

        const mailOptions = {
            from: `"Forever Store" <${senderEmail}>`,
            to: recipientEmail,
            subject: `Forever, Congratulations, your order successfully (#${Date.now().toString().slice(-6)})`,
            text: `Forever, Congratulations, your order successfully!\n\nCustomer: ${customerName}\nPayment Method: ${paymentMethod}\nTotal Amount: ₹${amount}\n\nItems:\n` + 
                  (items || []).map(i => `- ${i.name} | Size: ${i.size} | Qty: ${i.quantity} | Price: ₹${i.price}`).join('\n'),
            html: htmlContent
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("✅ Order confirmation email sent to:", recipientEmail, "| Message ID:", info.messageId);

            const previewUrl = nodemailer.getTestMessageUrl(info);
            if (previewUrl) {
                console.log("🔗 View Sent Email Preview Online:", previewUrl);
            }
        } catch (mailError) {
            console.warn("⚠️ Primary SMTP failed:", mailError.message, "- Generating test preview link...");
            // Fallback to Ethereal test account so order creation never crashes
            const testAccount = await nodemailer.createTestAccount();
            const fallbackTransporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: { user: testAccount.user, pass: testAccount.pass }
            });
            const fallbackInfo = await fallbackTransporter.sendMail(mailOptions);
            console.log("✅ Order confirmation email generated via fallback.");
            const previewUrl = nodemailer.getTestMessageUrl(fallbackInfo);
            if (previewUrl) {
                console.log("🔗 Click here to view actual sent email online:", previewUrl);
            }
        }

    } catch (error) {
        console.error("❌ Failed to process order confirmation email:", error.message);
    }
};
