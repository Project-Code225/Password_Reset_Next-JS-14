// pages/api/reset-password.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token, password } = req.body;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const email = decoded.email;

      // Here you should update the user's password in your database
      // Example: await updateUserPassword(email, password);

      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      res.status(400).json({ message: 'Invalid or expired token' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
