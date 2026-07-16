import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {

  // Subtotal calculation
  const subtotal = cart.reduce((sum, product) => {
    return sum + Number(product.price)
  },0)

  const deliveryFee = 20

  const taxes = subtotal * 0.005

  const total = subtotal + deliveryFee + taxes


  return (
   <>
  <div className="container my-5" style={{maxWidth:"700px"}}>
  
    { 
    cart.length===0 ?(
      <div className="text-center">
        <h1>Your Cart is Empty</h1>
        <Link to={"/"} className='btn btn-warning'>
          Continue Shopping...
        </Link>
      </div>
    )
    :
    cart.map((product)=>{
      return(<div 
        className="card shadow mb-5 p-3" 
        style={{
          width:'700px',
          borderRadius:"15px"
        }} 
        key={product.id}
        >
          <div className="row g-0">

            <div className="col-md-4">
              <img 
                src={product.imgSrc} 
                className="img-fluid rounded-start" 
                alt="" 
              />
            </div>

            <div className="col-md-8">
              <div className="card-body">

                <h5 className="card-title">
                  {product.title}
                </h5>

                <p className="card-text">
                  {product.description}
                </p>

                <button className="btn btn-primary mx-3">
                  {product.price} ₹
                </button>

                <button className="btn btn-warning">
                  Buy Now
                </button>

              </div>
            </div>

          </div>
        </div>
      )
    })
    }

   </div>


{
cart.length!==0 &&(
<div className="container my-5" style={{width:"700px"}}>

<div 
className="card p-4 mx-auto" 
style={{
  width:"700px",
  borderRadius:"15px"
}}
>
<h5>
Subtotal 
<span className="float-end">
Rs {subtotal} /-
</span>
</h5>


<h5>
Delivery Fee 
<span className="float-end">
Rs {deliveryFee} /-
</span>
</h5>


<h5>
Taxes 
<span className="float-end">
Rs {taxes.toFixed(1)} /-
</span>
</h5>


<hr/>


<h4>
Total
<span className="float-end">
Rs {total.toFixed(0)} /-
</span>
</h4>


</div>


<div className="text-center my-4">

<button className='btn btn-warning mx-3'>
Check Out
</button>


<button 
onClick={()=>setCart([])}
className='btn btn-danger'>
Clear Cart
</button>

</div>


</div>

)
}

   </>
  )
}

export default Cart