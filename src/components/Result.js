import React from 'react';

const Result = ({ BMI, category }) => {
  return (
    <div className="result-section">
      <div className="result">BMI: {BMI}</div>
      <div className="category">Category: {category} </div>
    </div>
  );
};

export default Result;
