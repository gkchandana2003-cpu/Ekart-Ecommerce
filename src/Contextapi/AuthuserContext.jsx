import {  onAuthStateChanged } from 'firebase/auth'
import React,{ createContext, useEffect, useState } from 'react'
import { _Auth } from '../Backend/BackendBase'
// for logout
import { signOut } from "firebase/auth";
import toast from "react-hot-toast"
//import { useNavigate } from 'react-router-dom';

export let authUser = createContext()

const AuthuserContext = ({children}) => {
   // let data3 = "Dummy"
//13--3-26
   let [userData, setuserData] = useState(null)
   

      async function handleLogout() {
      try {
        await signOut(_Auth)
        setuserData(null)
        toast.success("Logout Successful")
        window.location.assign("/login")

      } catch (err) {

        console.log(err)
        toast.error("Logout failed")

      }
}

   

  //  function logout(){
  //   signOut(_Auth)
  //   setuserData(null)
  //   window.location.assign("")
  //   toast.success("logged out")
  //   console.log(userData)
  //  }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(_Auth, (userData)=>{
        if(userData && userData.emailVerified === true){
            setuserData(userData)
        }
        else{
              setuserData(null)
          }
   })
   return ()=> unsubscribe()

   },[])

  
  return (
    <authUser.Provider value={{userData,setuserData,  handleLogout}}>
      {children}
    </authUser.Provider>
  )
}

export default AuthuserContext
