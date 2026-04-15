import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyCart } from '../../../Contextapi/CartContext';
import { FaTrash } from 'react-icons/fa';
import { authUser } from '../../../Contextapi/AuthuserContext';

const Cart = () => {
  const { cart, removeCart, updateQuantity } = useContext(MyCart);
  const navigate = useNavigate();
  const { userData } = useContext(authUser);


  // Calculate Total Price dynamically based on quantities
  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.price * (item.quantity || 1));
  }, 0).toFixed(2);

  if (!userData) {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Please login to view your cart
      </h2>
      <button 
        onClick={() => navigate('/login')}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition-all"
      >
        Go to Login
      </button>
    </div>
  );
}

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <button 
          onClick={() => navigate('/home')}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition-all"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] p-6 sm:p-10 text-white font-sans">
      
      {/* 🔹 Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm font-medium">
        <span 
          className="text-blue-500 cursor-pointer hover:underline" 
          onClick={() => navigate('/home')}
        >
          Home
        </span> 
        <span className="text-gray-500">{'>'}</span>
        <span className="text-gray-400">Cart</span>
      </div>

      {/* 🔹 Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* LEFT: Cart Items List */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {cart.map((item, index) => {
            const stars = "⭐".repeat(Math.floor(item.rating?.rate || 0));
            
            return (
              <div 
                key={index} 
                className="flex items-center bg-[#1a1a1a] p-5 rounded-2xl border border-zinc-800 shadow-xl relative group"
              >
                {/* Product Image Wrapper */}
                <div className="bg-white p-3 rounded-xl w-32 h-32 flex items-center justify-center shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="max-h-full object-contain" 
                  />
                </div>

                {/* Product Details */}
                <div className="ml-6 flex-grow">
                  <h1 className="text-lg font-bold line-clamp-1 pr-8">{item.title}</h1>
                  <p className="text-gray-400 text-xs mt-1 line-clamp-2 max-w-md">
                    {item.description}
                  </p>
                  <div className="my-2 text-sm">{stars}</div>
                  
                  <div className="flex items-center gap-6">
                    <h2 className="text-emerald-400 text-xl font-bold">
                      $ {(item.price * (item.quantity || 1)).toFixed(2)}
                    </h2>

                    {/* Quantity Control */}
                    <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(index, -1)}
                        className="px-3 py-1 hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
                      >
                        −
                      </button>
                      <span className="px-3 text-sm font-bold min-w-[30px] text-center">
                        {item.quantity || 1}
                      </span>
                      <button 
                        onClick={() => updateQuantity(index, 1)}
                        className="px-3 py-1 hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button 
                  onClick={() => removeCart(index)}
                  className="absolute top-5 right-5 p-2 text-zinc-500 hover:text-red-500 transition-colors"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 shadow-2xl sticky top-10">
            <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Items ({cart.length})</span>
                <span className="text-white">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-emerald-400 font-medium">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-zinc-800 pt-6 mb-8">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-2xl font-bold text-emerald-400">${totalPrice}</span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/20">
              Proceed to Checkout
            </button>
            
            <p className="text-center text-gray-500 text-xs mt-6 italic opacity-70">
              Secure Checkout Powered by Stripe
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;