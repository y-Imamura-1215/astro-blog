import { useState } from 'react';
export const Counter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>{count}</p>
      <button
        type='button'
        onClick={countUp}
      >
        +
      </button>
      <button
        type='button'
        onClick={countDown}
      >
        -
      </button>
    </>
  );
};
