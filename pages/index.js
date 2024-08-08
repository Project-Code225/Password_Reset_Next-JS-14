// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Password Reset Example</h1>
      <Link href="/forgot-password">Forgot Password</Link>
    </div>
  );
}
