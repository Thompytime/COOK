// src/pages/LoginPage.js
import React from 'react';
import AuthForm from '../components/AuthForm'; // Import the AuthForm component

function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="/cooklogo.png" alt="COOK Meals Logo" style={{ maxWidth: '200px', height: 'auto', marginBottom: '20px' }} />
      <h1>Login</h1>
      <p>Enter your email and password to log in.</p>
      <AuthForm isRegistering={false} /> {/* Render the AuthForm for login */}
    </div>
  );
}

export default LoginPage;