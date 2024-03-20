const EventHandler = () => {
  // const onClick = () => {
  //   console.log(`Click me`);
  // };
  let count = 0;
  const handleClick = () => {
    count = count + 1;
    console.log('count:', count);
  };

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={
          // () => console.log(`Click me`)
          handleClick
        }
      >
        Increase
      </button>
      ;
    </div>
  );
};

export default EventHandler;
