import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link className="tab" to="/">
        Calculator
      </Link>
      <Link className="tab" to="/info">
        What is BMI?
      </Link>
    </div>
  );
};

export default Header;
