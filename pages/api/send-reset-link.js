// pages/api/send-reset-link.js
import { sendResetEmail } from '../utils/mailer';
import { generateToken } from '../utils/generateToken';
import { URL } from 'url';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const token = generateToken(email);
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

    try {
      await sendResetEmail(email, resetLink);
      res.status(200).json({ message: 'Reset link sent' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
