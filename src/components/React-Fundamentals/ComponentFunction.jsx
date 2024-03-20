

const ComponentFunction = () => {
  console.log(`Component Function`);
  return <div>
    <A/>
  </div>;
};
const A = () => {
  console.log(`A`);
  return (
    <div>
      <B />{' '}
    </div>
  );
};
const B = () => {
  console.log(`B`);
  return <div>Hello World</div>;
};
export default ComponentFunction;
