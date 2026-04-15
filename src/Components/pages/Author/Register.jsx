import React, { useContext, useState } from "react";

import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { _Auth } from "../../../Backend/BackendBase";

import { useEffect } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authUser } from "../../../Contextapi/AuthuserContext";


const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  })

  // 👁 password toggle states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // for profile photo updata
  const { setuserData } = useContext(authUser);

  //* Navigate

  let bhootni = useNavigate()
  //usecontext  1. sample working
  // let data3 = useContext(authUser)
  // console.log(data3)

  let data3 = useContext(authUser)
  console.log(data3)

  // This will run every time the state updates
  // So you can see the live data while typing
  useEffect(() => {
    console.log("Current State:", data);
  }, [data]);


  function handlingData(e) {
    let { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

/*
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted:", data)

    <!----creating the user in firebase!---->
     let dataa = await createUserWithEmailAndPassword(_Auth, data.email, data.password )
      console.log(dataa)
  }

  */


 
async function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh
    try{
        if(data.password === data.confirm_password){

          // creating the user in firebase
          const userCredential = await createUserWithEmailAndPassword(
            _Auth,
            data.email,
            data.password
          );

          console.log(userCredential);

          let emailVerified = await sendEmailVerification(userCredential.user)
          console.log(emailVerified)

    //       confirm("emailverification sent")

    //     }else{
    //       console.log("password mismatch")
    //     }
    // }
          toast.success("emailverification sent")

          await updateProfile(userCredential.user,{
            displayName:data.name,
            photoURL:"https://th.bing.com/th/id/OIP.TtQ2FWvwnpv3wFG-Ylin-AHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3"

          })
          console.log(userCredential.user.displayName, userCredential.user.photoURL);

          setuserData(userCredential.user)
           bhootni("/Login")
        }
        else{
        console.log("password mismatch")
        toast.error("Password mismatch")

        setData({
          ...data,
          password: "",
          confirm_password: ""
        })
      }
        
        
    }catch(err){
          console.log(err)
          //
          toast.error(err.message.slice(16,))
          bhootni("/Login")
    }

    console.log("Form Submitted:", data);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handlingData}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handlingData}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
               <input
              //type="password"
               type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handlingData}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter password"
            />
            <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
           
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div  className="relative">
              <input
              // type="password"
               type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              value={data.confirm_password}
              onChange={handlingData}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Confirm password"
            />
            <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;


























































// import React, { useState } from 'react'

// const Register = () => {
//   let [data, setData] = useState({
//     name:"", email:"", password:"", confirm_password:""
//   })

//   function handlingData(e){
//     let {value, name} =e.target
//         setData({
//             //[] for dynamic updation
//             ...data,
//             [name]:value
//         })
//   }
//   console.log(data)

//   function handleSubmit(e){
//   e.preventDefault()
//   console.log("Form Submitted", data)
// }


//   return (
//     <>
//     <section>
//       <header>
//         <h1>Register Page</h1>
//       </header>
//       <main>
//         <form action="" onSubmit={handleSubmit}>

//           <label htmlFor=""> UserName</label>
//           <input type="text" placeholder='username...'
//           value={data.name} name='name' onChange={handlingData}/> <br />

//           <label htmlFor=""> UserEmail</label>
//           <input type="email" placeholder='email....' 
//           value={data.email} name='email' onChange={handlingData}
//           /> <br />

//           <label htmlFor=""> UserPassword</label>
//           <input type="password" placeholder='password' 
//           value={data.password} name='password' onChange={handlingData}/> <br />

//           <label htmlFor=""> ConfirmPassword</label>
//           <input type="password" placeholder='confirm_password'
//           value={data.confirm_password} name='confirm_password' onChange={handlingData}/> <br />

          
//           <input type="submit" />
//         </form>
//       </main>
//     </section>
//     </>
//   )
// }

// export default Register