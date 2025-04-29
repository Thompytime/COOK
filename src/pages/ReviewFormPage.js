// src/pages/ReviewFormPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ReviewFormPage() {
  const location = useLocation();
  const { state } = location;
  const mealName = state ? state.mealName : 'No Meal Selected';

  return (
    <div>
      <img
        src="/cooklogo.png"
        alt="COOK Meals Logo"
        style={{
          maxWidth: '200px',
          height: 'auto',
          marginBottom: '20px',
          display: 'block',
          margin: '0 auto',
        }}
      />
      <h1>Review for {mealName}</h1>
      <p>This is the page where you can review the selected meal.</p>
      {/* We will add the review form elements here */}
    </div>
  );
}

export default ReviewFormPage;