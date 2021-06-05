import React, { useState } from 'react';
import Button from './Button';

const Calculator = ({ setBMI, setCategory }) => {
  let storedMass = JSON.parse(localStorage.getItem('mass'));
  let storedHeight = JSON.parse(localStorage.getItem('height'));
  const [mass, setMass] = useState(storedMass);
  const [height, setHeight] = useState(storedHeight);

  const calcBMI = (mass, height) => {
    if (mass && height) {
      const BMI = ((Number(mass) * 10000) / Number(height) ** 2).toFixed(2);
      setBMI(BMI);
      categoryResult(BMI);

      localStorage.setItem('mass', JSON.stringify(mass));
      localStorage.setItem('height', JSON.stringify(height));
    }
  };

  const categoryResult = (BMI) => {
    if (0 < BMI && BMI < 18.5) {
      setCategory('Underweight');
    } else if (18.5 < BMI && BMI < 25) {
      setCategory('Normal Weight');
    } else if (25 < BMI && BMI < 30) {
      setCategory('Overweight');
    } else if (BMI > 30) {
      setCategory('Obese');
    } else {
      console.log('something with the category went wrong...');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcBMI(mass, height);

    console.log(storedMass);
    setMass('');
    setHeight('');
  };

  return (
    <div>
      {/* buttonda değil burada handleSubmitte calcBMI olcak */}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="mass-input">Enter Your Weight (kg)</label>
        <input
          name="mass-input"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        ></input>
        <label htmlFor="height-input">Enter Your Height (cm)</label>
        <input
          name="height-input"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></input>
        <Button type="submit" color="primary">
          Calculate!
        </Button>
      </form>
    </div>
  );
};

export default Calculator;
