// src/pages/RegisterPage.js
import React from 'react';
import AuthForm from '../components/AuthForm'; // Import the AuthForm component

function RegisterPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="/cooklogo.png" alt="COOK Meals Logo" style={{ maxWidth: '200px', height: 'auto', marginBottom: '20px' }} />
      <h1>Register</h1>
      <p>Create a new account.</p>
      <AuthForm isRegistering={true} /> {/* Render the AuthForm for registration */}
    </div>
  );
}

export default RegisterPage;