import { useState } from 'react';

const ReactHooks = () => {
  // const countState = useState(10);
  // const count = countState[0];
  // const setCount = countState[1];

  // const [ count, setCount ] = useState(10);
  // const onIncreaseClick = () => {
  //   setCount(count + 1);
  // };
  return (
    // <div>
    //   <span>{count}</span>
    //   <button onClick={onIncreaseClick}>Increase</button>
    // </div>
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};
const Counter = () => {
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const Show = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={Show}>{showMore ? 'Hide' : 'Show'} Detail</button>
      {showMore && (
        <div>
          <p>Count to {count}</p>
          <p>Count to {count}</p>
          <p>Count to {count}</p>
          <p>Count to {count}</p>
          <p>Count to {count}</p>
        </div>
      )}
    </div>
  );
};
export default ReactHooks;
