
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { authUser } from '../../Contextapi/AuthuserContext';
import { MyCart } from '../../Contextapi/CartContext';

const Menu = ({ search, setSearch }) => {
  const { userData, handleLogout } = useContext(authUser);
  const { cart } = useContext(MyCart); //  useContext inside component
  const cartCount = cart.length;       //  calculate cart count here

  function validuser() {
    return (
      <div className="flex items-center gap-10">
        <section className="flex cursor-pointer gap-2 items-center">
          <img
            className="w-8 rounded-full"
            src={
              userData?.photoURL ||
              "https://th.bing.com/th/id/OIP.TtQ2FWvwnpv3wFG-Ylin-AHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            }
          />
          <p>{userData?.displayName || "Chandana G K"}</p>
        </section>
        <Link to="/cart" className="relative">
          {/* {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          )} */}Cart
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  function invaliduser() {
    return (
      <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart" className="relative">
          {/* {cartCount > 0 && (
            <span className="absolute top-2 right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          )}Cart */}
        </Link>
      </>
    );
  }

  return (
    <div className="flex justify-between items-center gap-10 p-4 bg-black">
      {/* Search Bar */}
      <form className="relative">
        <CiSearch className="absolute top-3 left-3" />
        <input
          type="text"
          placeholder="search"
          className="bg-white text-black pl-10 pr-4 py-2 rounded-[50px] outline-none border-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="rightnav flex gap-10 items-center h-full">
        <Link to="/home">Home</Link>
      </div>

      {/* condition */}
      <div className="flex items-center gap-6">
        {userData?.emailVerified === true ? validuser() : invaliduser()}
      </div>
    </div>
  );
};

export default Menu;