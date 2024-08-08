// pages/reset-password.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { token } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reset-password', { token, password });
      alert('Password reset successful');
      router.push('/');
    } catch (error) {
      alert('Error resetting password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Reset Password</button>
    </form>
  );
}
