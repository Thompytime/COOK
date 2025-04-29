// src/pages/MyCookPage.js
import React from 'react';

function MyCookPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="/cooklogo.png" alt="COOK Meals Logo" style={{ maxWidth: '200px', height: 'auto', marginBottom: '20px' }} />
      <h1 style={{ textAlign: 'center' }}>My COOK Page</h1>
      <p style={{ textAlign: 'center' }}>This is the user's personalized COOK page.</p>
      {/* Future content will go here */}
    </div>
  );
}

export default MyCookPage;