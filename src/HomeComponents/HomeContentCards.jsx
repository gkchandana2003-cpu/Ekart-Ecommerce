import React from 'react'
import {Link} from 'react-router-dom';

const HomeContentCards = ({ImageUrl, title, description, price , id}) => {
  return (
   <div className='w-[250px] h-[330px] bg-radial-[at_25%_25%] from-white to-sinc-900 to-75
   flex flex-col items-center rounded-md p-3'>

    {/* Image */}
    <img className='w-[60%] h-[120px] object-contain' src={ImageUrl} alt="" />

    {/* Title */}
    <h1 className='font-semibold text-[18px] mt-5 text-left w-full'>
      {title.slice(0,40)}
    </h1>

    {/* Description */}
    <p className='text-sm text-gray-300 w-full h-[35px] mt-6 overflow-hidden'>
      {description.slice(0,60)}
    </p>

    {/* Price + Button */}
    <div className='flex justify-between items-center w-full mt-auto'>
        <span className='text-lg font-bold text-white'>
            ₹{price}
        </span>

        <Link to ={`/productDetails/${id}`}>
          <button className='px-4 py-[2px] border-2 text-[#ece6e6]  cursor-pointer rounded-md
        hover:text-black transaction-all duration-300 hover:bg-white'>
            View Info
        </button>
        </Link>
       
        
    </div>

   </div>
  )
}

export default HomeContentCards

























// import React from 'react'

// const HomeContentCards = ({ImageUrl, title, description, price}) => {
//   return (
//    <div className='w-[250px] h-[300px] bg-radial-[at_25%_25%] from-white to-sinc-900 to-75
//    flex flex-col justify-center items-center rounded-md'>
//     <img className='w-[55%] h-[100%]' src = {ImageUrl} alt="" />
//     <h1 className='font-semibold text-[20px] mt-1 text-center tracking-tight'>{title.slice(0,20)}</h1>
//     <button className='px-4 py-[.5px] border-2 text-[#ece6e6] mt-2 cursor-pointer
//     rounded-md'> View Info</button>
//    </div>
//   )
// }
 
// export default HomeContentCards