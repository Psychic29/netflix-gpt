import React, { useState } from "react";
import LOGO_IMG from "../Netflix_Logo_PMS.png"

const Login = () => {
  const [isSigninForm , setIsSigninForm] = useState(false);

  const toggleSigninForm = () =>{
    setIsSigninForm(!isSigninForm);
  }
  return <>
    <div>

    <img className="absolute mt-1 ml-44 w-48 z-10 cover" src={LOGO_IMG} alt="logo-img" />

    <img className="absolute h-screen w-full brightness-50" src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />

    <form className="absolute mt-52 ml-[38rem] w-72 h-9 text-white">
    <h1 className="m-2 text-xl font-semibold">{isSigninForm ? "Sign Up" : "Log In"}</h1>
    {isSigninForm && <input className="w-full m-2 p-2 rounded-lg" type="text" placeholder="Name" />
    }
    <input className="w-full m-2 p-2 rounded-lg" type="text" placeholder="Email" />
    <input className="w-full m-2 p-2 rounded-lg" type="password" placeholder="Password" />
    <button className="w-full m-2 p-2 rounded-lg bg-red-700">Submit</button>
    {isSigninForm ?
    <p className="m-2 text-sm">Already have an account ? <span onClick={toggleSigninForm} className="cursor-pointer font-semibold underline">LogIn instead</span></p>:<p className="m-2 text-sm ">New To Netflix? <span onClick={toggleSigninForm} className="cursor-pointer font-semibold underline">Sign Up Now</span></p>}
    </form>
    
    </div>
  </>;
};

export default Login;
