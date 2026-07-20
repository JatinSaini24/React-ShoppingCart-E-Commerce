import React from 'react'
import { Link } from 'react-router-dom'

import { 
  ToastContainer, 
  toast, 
  Bounce 
} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'


const Product = ({items, cart, setCart}) => {


  const addToCart = (
    id,
    price,
    title,
    description,
    imgSrc
  ) => {


    const existingItem = cart.find(
      (item)=> item.id === id
    )


    if(existingItem){


      const updatedCart = cart.map((item)=>

        item.id === id

        ?

        {
          ...item,
          quantity:item.quantity + 1
        }

        :

        item

      )


      setCart(updatedCart)


    }
    else{


      const product = {

        id,

        price:Number(price),

        title,

        description,

        imgSrc,

        quantity:1

      }


      setCart([...cart,product])

    }



    toast.success(
      "Item added to cart",
      {
        position:"top-right",
        autoClose:2000,
        theme:"dark",
        transition:Bounce
      }
    )


  }





  return (

    <>

      <ToastContainer />


      <div className="product-container">


        {
          items.map((product)=>(


            <div 
              className="product-card"
              key={product.id}
            >



              <Link 
                to={`/product/${product.id}`}
                className="img"
              >

                <img

                  src={product.imgSrc}

                  alt={product.title}

                />

              </Link>




              <div className="card-body">


                <h5>

                  {product.title}

                </h5>



                <p>

                  {product.description}

                </p>



                <button 
                  className="btn btn-primary mx-2"
                >

                  {product.price} ₹

                </button>



                <button

                  onClick={()=>addToCart(
                    product.id,
                    product.price,
                    product.title,
                    product.description,
                    product.imgSrc
                  )}

                  className="btn btn-warning"

                >

                  Add To Cart

                </button>


              </div>


            </div>


          ))
        }


      </div>


    </>

  )

}


export default Product