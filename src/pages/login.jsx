import React, { useState, UseEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { BsEmojiAngryFill } from 'react-icons/bs'
import Cart from "../assets/sammy-shopping.gif"
import loader from "../assets/bouncy-hourglass-and-loading-icon.gif"
import axios from 'axios'
function Login() {

    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // set isLoading to true
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        setIsLoading(true);
        // to check if email and password has value
        if(email && password.length > 6) {
            // use es6 to catch and handle request success error
            try {
                //apiurl = ""
                const api_url = "https://reqres.in/api/login";
                // if your object name and value has naming, you can type the value name and hs would refer the name 
            const req = await  axios.post(`${api_url}`, {
                    email,
                    password
                });
                
            alert("login successful");
            sessionStorage.setItem("token", req.data.token);
            console.log(req);
            navigate("/dashboard");
            } catch (err) {
                console.log(err);
                alert(err.response.data.error);
        }
            

        } else {
            alert("please fill all input fields and make sure password lenghtbis greater 6")
        }
        setIsLoading(false);
    }

  return (
    <div className="h-screen w-screen  ">
   <div className="grid grid-cols-1 md:grid-cols-2">

     <div className="col-span-1 bg-blue-400 h-[30vh] md:h-screen h-screen w-full flex justify-center items-center">        <img src={Cart} alt="" />
</div>
        <div className="col-span-1 bg-white flex flex-col justify-center items-center">
                <form className="shadow md:h-[60%] h-fit w-[90%] px-3 pb-3 pt-5 rounded-lg mt-5" onSubmit={handleSubmit}>
                <h1 className="font-bold text-3xl text-center mb-3">Login</h1>
                {/* to set valoue of input */}
                <input type="text" className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-center"
                placeholder='Email Address'
                value={email}
                onChange={(text) => setEmail(text.target.value)} required />
                <input type="password" className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-center"
                placeholder='Password'
                 value={password}
                 onChange={(text) => setPassword(text.target.value)} required />
                 {
                    isLoading ? (
                    <img src={loader}/>
                    ) : (
                 
                <button className="h-12 w-[50%] bg-blue-400 text-white mx-[25%] rounded">Login</button> )}
                </form>
        </div>
   </div>
</div>
  )
}

export default Login
