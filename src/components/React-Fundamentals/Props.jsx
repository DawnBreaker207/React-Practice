import { useState } from 'react';

const Props = () => {
  // Function
  let productInitial = { name: 'Product not update ', price: 0 };

  const [product, setProduct] = useState(productInitial);
  const getProduct = () => {
    setProduct({ name: 'Laptop', price: 2000 });
    console.log(product);
  };

  const showProduct1= (product)=>{
    return (
      <>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      </>
    )
  }

  const ShowProduct2 = (props)=>{
    return (
      <>
      <h2>{props.product.name}</h2>
      <p>{props.product.price}</p>
      </>
    )

  }
  return (
    <>
    <button onClick={() => getProduct()}>Update product</button>
    {showProduct1(product)}
    <ShowProduct2 product={product} />
    </>
    )
  }
export default Props;
