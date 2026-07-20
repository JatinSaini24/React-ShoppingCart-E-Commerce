import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {


  // Subtotal Calculation
  const subtotal = cart.reduce((sum, product)=>{
    return sum + Number(product.price)
  },0)


  const deliveryFee = 20;

  const taxes = subtotal * 0.005;

  const total = subtotal + deliveryFee + taxes;



  return (

<>
    
<div className="cart-page">


{
cart.length === 0 ? (

<div className="text-center">

<h1>Your Cart is Empty</h1>

<Link 
to={"/"} 
className="btn btn-warning"
>

Continue Shopping...

</Link>


</div>


)

:

cart.map((product)=>{


return(

<div 
className="cart-box"
key={product.id}
>


<div className="cart-item">


{/* PRODUCT IMAGE */}

<div className="cart-item-image">


<img

src={product.imgSrc}

alt={product.title}

/>


</div>





{/* PRODUCT DETAILS */}


<div className="cart-item-details">


<h5>

{product.title}

</h5>



<p>

{product.description}

</p>




<h4>

{product.price} ₹

</h4>



<div>


<button className="btn btn-primary mx-2">

Buy Now

</button>


<button 
className="btn btn-danger"

onClick={()=>setCart(
cart.filter(item=>item.id!==product.id)
)}

>

Remove

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
cart.length !==0 &&

(

<div className="cart-total">


<h5>

Subtotal

<span>

Rs {subtotal} /-

</span>

</h5>



<h5>

Delivery Fee

<span>

Rs {deliveryFee} /-

</span>

</h5>



<h5>

Taxes

<span>

Rs {taxes.toFixed(1)} /-

</span>

</h5>



<hr/>


<h4>

Total

<span>

Rs {total.toFixed(0)} /-

</span>

</h4>




<div className="text-center mt-4">


<button className="btn btn-warning mx-2">

Check Out

</button>



<button 

className="btn btn-danger"

onClick={()=>setCart([])}

>

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