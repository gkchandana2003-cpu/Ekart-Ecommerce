import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../pages/Logo'
import Menu from '../pages/Menu'

const Navbar = ({search, setSearch}) => {
    return (
        <nav  className='w-full h-[75px] bg-gray-900 text-white flex justify-between items-center p-8
        border-b border-blue-700'>
            <Logo/>
            <Menu search={search} setSearch={setSearch}/>
            
        </nav>
    )
  
}

export default Navbar
















// return (
//     <nav className='w-full h-[75px] bg-black text-white flex justify-between items-center p-8'>
        
//         <div className='lefnav'>
//             <h1>logo</h1>
//         </div>
        // <div className='rightnav flex gap-16'>
        //     <Link to="/home">Home</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/register">Register</Link>
        // </div>

//     </nav>
//   )