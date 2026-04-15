import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MyCart } from '../../../Contextapi/CartContext'
import {toast} from 'react-hot-toast'
import { authUser } from '../../../Contextapi/AuthuserContext'


const ProductDetials = () => {

  let {addToCart} = useContext(MyCart)

    let Dydata = useParams()
    let [Data, setData] = useState(null)
    let navigate = useNavigate()

     const { userData } = useContext(authUser);
    // third way first only make it as null bcoz it take some time to render the api but this will work one time
    //  so choose the first and second options
    //let [Data, setData] = useState(null) 

    async function fetchdata(){
                let data = await fetch(`https://fakestoreapi.com/products/${Dydata.id}`)
                let finaldata = await data.json()
                setData(finaldata)
                //console.log(finaldata)
            }
           // fetchdata()
        
           useEffect(()=>{
            fetchdata()
           },[])
           console.log(Data ?? "data" )

           // way one checks before -- condition rendering
           //if(!Data) return <h2>Loading...</h2>

            if (!Data) return <h2 className="text-white">Loading...</h2>
            let rating = Math.floor(Data?.rating?.rate || 0)
            let yellowStars = "⭐".repeat(rating)
            let whiteStars = "☆".repeat(5 - rating)


            // function addcart(){
            //   addToCart(Data);
            //   toast.success("cart is added")
            //   navigate("/cart")

            // Handle Add to Cart with login check
          const handleAddCart = () => {
            if (!userData) {
              alert("Please login first!");
              navigate("/login"); // redirect to login
              return;
            }

            addToCart(Data);
            toast.success("Cart is added!");
            navigate("/cart");
          };
            
  return (
    <div>
        {/* <img src={Data.image} alt="" />
        <h1>{Data.title}</h1>
        <p>{Data.description}</p>
        <h1>{Data.rating.rate}</h1> */}

        {/* way two using ?. optional chaining */}
        
        {/* <img src={Data?.image} alt="" />
        <h1>{Data?.title}</h1>
        <p>{Data?.description}</p>
        <h1>{Data?.rating?.rate}</h1> */}

        <div className='w-[100vw] h-[100vh] text-white fixed top-0 flex
              bg-radial-[at_25%-25%] to-zinc-900
              items-center justify-center flex-col pt-20 '>
          <img className='w-[230px] mb-3'  src={Data?.image} />
          <div className='flex items-center justify-between w-[300px]'>
              <h1 className='text-white'>Price : <span className='text-red-500'>-60%</span> $
                {Data?.price}</h1>
              {/* <h1 className='my-2'>Ratings : ⭐{Data?.rating?.rate}</h1> */}

              <h1 className='my-2 text-xl'>
                Ratings : 
                <span className='text-yellow-400'>{yellowStars}</span>
                <span className='text-white'>{whiteStars}</span>
              </h1>
         </div>
        <h1 className='font-[20px] underline underline-offset-1
        text-white text-2xl my-[10px]'>{Data?.title}</h1>
        <h3 className='text-justify w-[500px] text-[#d0caca] 
        text-[14px]' >{Data?.description}</h3>

        <section className='flex gap-4 mt-3 w-[200px] items-center justify-between h-[8-px] '>
           <Link to ={`/home`}>
                  <button className='px-4 py-[2px] border-2 text-[#ece6e6]  cursor-pointer rounded-md
                hover:text-black transaction-all duration-300 hover:bg-purple'>
                    Close
                </button>
        </Link>
        <button className='w-26 h-7 rounded-sm bg-gray-600 text-white cursor-pointer
                  hover:text-black transaction-all duration-300  '
                  onClick={handleAddCart}>
           Add Cart
           </button>

        </section>

       
       
        </div>
    </div>
  )
}

export default ProductDetials

