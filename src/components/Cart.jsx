import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart, showCart }) => {

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * (item.quantity || 1),
    0
  );

  const deliveryFee = 20;
  const taxes = subtotal * 0.005;
  const total = subtotal + deliveryFee + taxes;
   
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
          Order Items
        </h1>
  
        <p className="text-xl text-gray-500 mt-3">
          Empty Cart
        </p>
      </div>
    );
  }

  return (
    <>
 <div className="container my-5 w-full px-3 sm:w-3/4 lg:w-1/2">

      {
cart.length !== 0 && (

    <div className="container my-5">

<div 
 className="card shadow p-4 w-full"
>
        <h2 className="mb-4 text-center">
          Order Items
        </h2>


        {
          cart.map((item)=>(

            <div 
              key={item.id}
              className="d-flex flex-wrap justify-content-between align-items-center mb-4"
            >

<div className="d-flex align-items-center">

<img
  src={item.imgSrc}
  alt={item.title}
  style={{
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "10px",
    marginRight: "15px"
  }}
/>


<div>

<h5
  className="mb-1"
  style={{
    width: "170px",
    fontSize: "14px"
  }}
>
    {item.title}
  </h5>


                <div className="d-flex align-items-center mt-2">

                <button
  onClick={() => {
    setCart(
      cart.map((p) =>
        p.id === item.id
          ? {
              ...p,
              quantity: (p.quantity || 1) + 1,
            }
          : p
      )
    );
  }}
  className="btn btn-light border"
>
  +
</button>

<span className="mx-3">
  {item.quantity || 1}
</span>


<button
  onClick={() => {
    setCart(
      cart
        .map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: (p.quantity || 1) - 1,
              }
            : p
        )
        .filter((p) => (p.quantity || 1) > 0)
    );
  }}
  className="btn btn-light border"
>
  -
</button>

                </div>


                </div>

</div>


<h6>
  Rs {Number(item.price) * (item.quantity || 1)}/-
</h6>
            </div>

          ))
        }


        <hr/>


        <div className="d-flex justify-content-between mb-2">

          <span>
            Subtotal
          </span>

          <span>
            Rs {subtotal}/-
          </span>

        </div>



        <div className="d-flex justify-content-between mb-2">

          <span>
            Delivery Fee
          </span>

          <span>
            Rs {deliveryFee}/-
          </span>

        </div>



        <div className="d-flex justify-content-between mb-2">

          <span>
            Taxes
          </span>

          <span>
            Rs {taxes.toFixed(2)}/-
          </span>

        </div>



        <hr/>



        <div className="d-flex justify-content-between fw-bold fs-4">

          <span>
            Total
          </span>

          <span>
            Rs {total.toFixed(2)}/-
          </span>

        </div>



        <button className="btn btn-warning w-100 mt-4">
          Place Order
        </button>


      
      
        </div>

</div>

)
}

  </div>

</>

);
};

export default Cart;