import React, { useEffect, useRef } from 'react'
import Headers from './Headers'
import Footer from './Footer'
import gsap from 'gsap';
import ContactForm from './ContactForm';
const Contact = () => {
      const imageRef = useRef(null);
     useEffect(() => {
    gsap.to(imageRef.current, {
      y: 5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
 
  return (
    <div>
      <Headers/>
       <div className="bannarSec ">
        <div className="right-wrapper  ">
          <h3 className="">Contact us</h3>
          <span className="">
            Home/ <b className="">Contact</b>
          </span>
        </div>
        <div className="left-warpper">
          <img
            ref={imageRef}
            className="hidden xl:block lg:block"
            src="/images/banner.png"
            alt=""
          />
        </div>
      </div>

      <section>
        <div className="container mx-auto flex justify-center items-center mt-5 flex-col">
            <span className='span'>Contact Information</span>
            <h3 className='text-[29px]  text-[#2A3F65] font-bold w-6/12 text-center '>
                We're More Than International Payments, Get In Touch</h3>
        </div>
        <div className='container mx-auto flex lg:flex-row flex-col justify-center items-center gap-5 mt-10'>
            <div className='lg:w-4/12 w-8/12 bg-[#009286] rounded  px-10 py-8 flex flex-col justify-center items-center  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105  '>
            <span className='text-[#90006F] text-3xl bg-white p-3 rounded-[50%]'><i class="ri-map-pin-line"></i></span>
            <p className='!text-white'><b>Address:</b></p>
            <p className='!text-white'>27 Division St, 1100. E Denver, CO 80237, USA</p>
            </div>
           
                <div className='lg:w-4/12 w-8/12 bg-[#009286] rounded  px-10 py-8 flex flex-col justify-center items-center  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
            <span className='text-[#90006F] text-3xl bg-white p-3 rounded-[50%]'><i class="ri-mail-unread-fill"></i></span>
            <p className='!text-white'><b>Email:</b></p>
            <p className='!text-white'>snuff@gmai.com</p>
            <p className='!text-white'>hellosnuff@gmai.com</p>
            
            </div>
           
              <div className='lg:w-4/12 w-8/12 bg-[#009286] rounded  px-10 py-8 flex flex-col justify-center items-center  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
            <span className='text-[#90006F] text-3xl bg-white p-3 rounded-[50%]'><i class="ri-phone-fill"></i></span>
            <p className='!text-white'><b>Phone:</b></p>
            <p className='!text-white'>033-0978-45967</p>
               <p className='!text-white'>033-0978-45967</p>
            </div>
          
           
        </div>
      </section>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
