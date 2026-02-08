
import React,{ useEffect, useRef, useState } from 'react';
import Headers from '../websites/Headers'
import Footer from '../websites/Footer'
import gsap from 'gsap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = () => {
    const imageRef = useRef(null);
var[data,SetData]=useState({
    Name:"",
    email:"",
    password:""
})
var inputHandler=(e)=>{
SetData({...data,[e.target.name]:e.target.value})
}
var registerUser = (e) => {
    e.preventDefault();
    
    axios.post("https://localhost:7237/api/User", data)
    .then((resp) => {
        
        toast.success("Registration Successful!");
    })
    .catch((error) => {
      
        if (error.response) {
          
             toast.error(error.response.data.message || "Email already exists!");
            console.log("Status Code:", error.response.status);
        } else {
            alert("Something went wrong or Server is down.");
        }
    });
}
    
  useEffect(() => {
   
    gsap.to(imageRef.current, {
      y: 5,           
      duration: 1.5,    
      repeat: -1,       
      yoyo: true,       
      ease: "power1.inOut" 
    });
  }, []);
  return (
    <>
      <Headers></Headers>
<div className='bannarSec'>
    <div className='right-wrapper'>
        <h3 className=''>Register</h3>
        <span className=''>Home/ <b className=''>Register</b></span>
    </div>
    <div className='left-warpper'>
    <img ref={imageRef} className='hidden xl:block lg:block' src="/images/banner.png" alt="" />
    </div>
</div>
<section className='flex justify-center p-10'>
    <div className='p-10  hover:border-2 hover:border-[#009286] transation rounded-lg'>
        <h3 className='text-[20px] text-[#2A3F65] font-bold my-2'>Create Account</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
        <form action="" onSubmit={registerUser}> 
                   <label htmlFor="" className='text-[18px] text-[#2A3F65] font-bold my-2 block'>Name</label>
       <input type="text" placeholder='Enter name' name='Name' onChange={inputHandler} className='text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg'/>
         <label className='text-[14px] text-[#2A3F65] font-bold my-2 block'>Email</label>
       <input type="text" placeholder='Enter Email'  onChange={inputHandler} name='email' className='text-[18px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg'/>
         <label htmlFor="" className='text-[14px] text-[#2A3F65] font-bold my-2 block'>Password</label>
       <input type="text" placeholder='Enter Password'  onChange={inputHandler} name='password' className='text-[18px]  text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg'/>
      
        <Link to="" className="block mt-2 text-right text-[#096691]">Forget password ?</Link>
       <input type="submit" className='btn btn-default'value={"Create Account"} />
       </form>
           <Link to="/user/login" className="block mt-2 text-[#5D7079] font-semibold">old User  ? login here</Link>
         <Link to="/user/register" className="block mt-2 text-[#5D7079] font-semibold">New User  ? Register here</Link>
        
    </div>
</section>
      <Footer></Footer>
    </>
  )
}

export default Register
