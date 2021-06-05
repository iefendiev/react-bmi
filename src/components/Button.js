import React from 'react';
import styled from 'styled-components';

const Button = ({ type, children, color }) => {
  const Button = styled.button`
    background-color: ${color ? '#4ca1af' : 'white'};
    color: ${color ? 'white' : '#4ca1af'};
    margin: 8px 4px;
    font-weight: 700;
    padding: 12px;
    font-size: 1.2rem;
    cursor: pointer;
  `;
  return <Button type={type}>{children}</Button>;
};

export default Button;
