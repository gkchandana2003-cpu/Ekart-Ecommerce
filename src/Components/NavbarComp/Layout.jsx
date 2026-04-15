import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {

  const [search, setSearch] = useState("")

  return (
    <main className='w-[100vw] h-[100vh]'> 
        <Navbar search={search} setSearch={setSearch}/>
        <Outlet context={{search}}/>
        <Toaster/>
    </main>
  )
}

export default Layout