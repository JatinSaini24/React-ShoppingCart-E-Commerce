import React from 'react'

import { Link } from 'react-router-dom'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Product = ({items, cart, setCart}) => {

  const addToCart = (id, price, title, description, imgSrc) => {

    const existingItem = cart.find((item) => item.id === id);
  
    if (existingItem) {
  
      const updatedCart = cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
  
      setCart(updatedCart);
  
    } else {
  
      const obj = {
        id,
        price: Number(price),
        title,
        description,
        imgSrc,
        quantity: 1
      };
  
      setCart([...cart, obj]);
  
    }
  
  
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 11500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  
  };

  return (
    <>
      <ToastContainer />

      <div className='container my-5'>

      <div className="row">
      {
        items.map((product)=>{
          return(
            <>
            <div key={product.id} className='col-lg-4 col-md-6 my-3 text-center'>
           <div className='card' style={{width: '18rem'}}>
            <Link to={`/product/${product.id}`}
             style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            }
            
            }>
            <img src={product.imgSrc} className="card-img-top" alt="..." />
            </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                   <button className="btn btn-primary mx-3">{product.price}{""}₹</button>
                   <button 
                   onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                   className="btn btn-warning">Add To Cart</button>
              </div>
           </div>
           </div>
           </>
          )
        })
      }
      
    </div>
    </div>
    </>
    
    
  )
}

export default Product
