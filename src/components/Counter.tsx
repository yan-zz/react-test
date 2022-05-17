import { useState, useEffect } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const colorSwitcher = () => {
    let el = document.getElementById('p');
    if (!el?.style.color) el?.setAttribute('style', 'color: white');
    el?.style.color === 'white'
      ? el?.setAttribute('style', 'color: orange')
      : el?.setAttribute('style', 'color: white');
  };

  useEffect(() => {
    console.log('side effect');
    colorSwitcher();
  }, [count]);

  return (
    <div className="counter">
      <Button onClick={increment} children="Increment" />
      <Button onClick={decrement} children="Decrement" />
      <p id="p">{count}</p>
    </div>
  );
};

export default Counter;
