import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // setCount allows us to pass an arrow function
  const incrementCount = () => {
    setCount(previousCount =>
      previousCount + 1
    )
  }
  const decrementCount = () => {
    setCount(previousCount =>
      previousCount - 1)
    }

  // Alert if count is too high
  if (count > 10) {
   alert(`${count} is too high`);
  }

  return (
    <div className="container-counter">
      <h2>Rooms Counter</h2>
      <p>{count}</p>
      <div className='buttons'>
        <button className="btn" onClick={decrementCount}> {/* JSX : pass function as event */}
          -
        </button>
        <button className="btn" onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
