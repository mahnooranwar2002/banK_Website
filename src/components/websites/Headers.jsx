import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Headers = () => {
var nav=useNavigate();
  var idStorage = sessionStorage.getItem("userLogined");
var logout=()=>{
sessionStorage.clear();
nav("/");
}
var [data,setData]=useState([])
useEffect(()=>{
  
if(idStorage){
    axios.get(`https://localhost:7237/api/User/user_prof/${idStorage}`).then((res)=>{
    setData(res.data)
    console.log(res.data)
})}
} ,[])

  return (
    <>
      <header>
 
        <div className="flex gap-10 justify-between">
          <img
            src="https://templates.hibootstrap.com/snuff/default/assets/images/logo.png"
            alt=""
          />
          <nav className="">
            <ul className="nav">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact us</li>
            </ul>
          </nav>
          {
            idStorage ? (
             

              
            data.map((t)=>(
        <div className="relative inline-block group">
        
       
        <button className="bg-[#009286] text-white py-2.75 px-5.5 rounded-lg hover:bg-[#90006F] hover:text-white xl:px-8.5 capitalize md:px-5.5 sm:px-2 transition-colors">
          {t.name}
        </button>

      
        <div className="absolute left-0 hidden w-48 mt-0 bg-white border border-gray-200 rounded-md shadow-xl group-hover:block z-50">
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              Your Profile
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              Settings
            </a>
            <Link to="/user/user-index" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              Settings
            </Link>
            
            <div className="border-t border-gray-100 my-1"></div>
            <button  onClick={()=>{logout()}} className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
              Sign out
            </button>
          </div>
        </div>
        </div>
        ))
            ):(

               <Link className="btn btn-nav" to={"/user/login"}>Join us</Link>
        
            )
          }
 
        
          <i class="ri-menu-3-fill"></i>
        </div>
      </header>
    </>
  );
};

export default Headers;
