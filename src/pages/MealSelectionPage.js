// src/pages/MealSelectionPage.js
import React from 'react';

function MealSelectionPage() {
  return (
    <div>
      <img src="/cooklogo.png" alt="COOK Meals Logo" style={{ maxWidth: '200px', height: 'auto', marginBottom: '20px', display: 'block', margin: '0 auto' }} />
      <h1>Select a Meal</h1>
      <p>Search or scroll to find the meal you just ate.</p>
      {/* We'll add the meal list and search functionality here */}
    </div>
  );
}

export default MealSelectionPage;