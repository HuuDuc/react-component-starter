import React, { useState } from 'react';
import styles from './styles.module.scss';

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

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className={`${styles.btn} ${styles.red}`} onClick={onMinus}>
        -
      </button>
      <button className={`${styles.btn} ${styles.green}`} onClick={onPlus}>
        +
      </button>
    </div>
  );
};

export default MyCounter;
