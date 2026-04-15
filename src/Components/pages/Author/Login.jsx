import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const _Auth = getAuth()

  useEffect(() => {
    console.log("Current State:", data);
  }, [data]);

  const handlingData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {

      const userCredential = await signInWithEmailAndPassword(
        _Auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      //  refresh user data from firebase
      await user.reload();

      console.log("User Object:", user);

      // check email verification
      if (user.emailVerified) {

        console.log("emailVerified:", user.emailVerified); // should be true
        // for reload fast
        window.location.assign("/home")
        //  navigate("/home");

      } else {

        toast.error("Please verify your email first");

      }

    } catch (err) {

      toast.error(err.message.slice(10));

      setData({
        ...data,
        password: ""
      });

    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-12
      bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">

      <h1 className="text-3xl font-bold text-purple-300 mb-4">Login</h1>

      <div className="bg-white/10 backdrop-blur-md border border-white/20
        shadow-2xl rounded-xl p-6 w-80 text-white -mt-2">

        <form onSubmit={handleSubmit} className="space-y-3">

          <div>
            <label className="text-sm">Email :</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handlingData}
              placeholder="email"
              className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Password :</label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.password}
                onChange={handlingData}
                placeholder="password"
                className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-300 outline-none"
              />

              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

          </div>

          <button
            type="submit"
            className="w-full mt-3 py-2 rounded-md
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:from-purple-600 hover:to-pink-600
            font-semibold"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;