// utils/mailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendResetEmail = async (to, link) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject: 'Password Reset',
    html: `<p>Click <a href="${link}">here</a> to reset your password. This link will expire in 1 hour.</p>`,
  };

  await transporter.sendMail(mailOptions);
};
