import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  value?: number;
};

const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };

  const Button = styled.button`
    border: 1px solid #555;
    font-weight: bold;
    font-size: 1.5em;
    margin: 10px;
    padding: 4px 10px;
  `;

  const MinusButton = styled(Button)`
    background: red;
  `;

  const PlusButton = styled(Button)`
    background: green;
  `;

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <MinusButton onClick={onMinus}>-</MinusButton>
      <PlusButton onClick={onPlus}>+</PlusButton>
    </div>
  );
};

export default MyCounter;
