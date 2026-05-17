import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, orderId, totalPrice, items } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Crucial Salad <onboarding@resend.dev>',
      to: email,
      subject: `Order Confirmation - #${orderId}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #10b981;">Crucial Salad</h1>
          <h2>Thank you for your order, ${name}!</h2>
          <p>Your order <strong>#${orderId}</strong> has been received and is being prepared.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 10px; border-bottom: 2px solid #eee;">Item</th>
                <th style="text-align: right; padding: 10px; border-bottom: 2px solid #eee;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(item => `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name} x ${item.quantity}</td>
                  <td style="text-align: right; padding: 10px; border-bottom: 1px solid #eee;">₹${item.price * item.quantity}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div style="text-align: right; margin-top: 20px;">
            <h3>Total: ₹${totalPrice}</h3>
          </div>
          <p style="font-size: 14px; color: #666; margin-top: 40px;">
            If you have any questions, please contact our support team.
          </p>
        </div>
      `,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
