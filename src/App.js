import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Calculator from './components/Calculator';
import Info from './components/Info';
import Result from './components/Result';

function App() {
  const [BMI, setBMI] = useState('');
  const [category, setCategory] = useState('');

  // useEffect(() => {
  //   console.log('effect denemesi');
  // }, []);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => (
          <div className="App">
            <Header />
            <h1>BMI Calculator !</h1>
            <Calculator setCategory={setCategory} setBMI={setBMI} />
            <Result category={category} BMI={BMI} />
          </div>
        )}
      />
      <Route
        path="/info"
        exact
        render={(props) => (
          <div>
            <Header />
            <Info />
          </div>
        )}
      />
    </Router>
  );
}

export default App;
