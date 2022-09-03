import React from 'react'
import Cart from "../assets/sammy-shopping.gif"

function Login() {
  return (
    <div className="h-screen w-screen bg-slate-600 ">
   <div className="grid grid-cols-2">

     <div className="col-span-1 bg-blue-400 h-screen w-full flex justify-center items-center">        <img src={Cart} alt="" />
</div>
        <div className="col-span-1 bg-white flex flex-col justify-center items-center">
                <form className="shadow h-[40%] w-[90%] px-3 pb-3 pt-5 rounded-lg">
                <h1 className="font-bold text-3xl text-center mb-3">Login</h1>
                <input type="text" className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded" />
                <input type="password" className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded"  />
                <button className="h-12 w-[50%] bg-blue-400 text-white mx-[25%] rounded">Login</button>
                </form>
        </div>
   </div>
</div>
  )
}

export default Login
