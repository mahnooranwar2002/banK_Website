import React, { useEffect, useRef } from 'react'
import Headers from './Headers'
import Footer from './Footer'
import gsap from 'gsap';

const About = () => {
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
    <>
      <Headers/>
 <div className="bannarSec ">
        <div className="right-wrapper  ">
          <h3 className="">About us</h3>
          <span className="">
            Home/ <b className="">About</b>
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
<div className='container mx-auto flex gap-10 p-5 mt-5 lg:flex-row flex-col'>
    <div className='lg:w-6/12  flex '>
   <img src="/images/reliable-1.jpg" alt="" className='w-1/2 object-fit mr-5 rounded'/>
   <div>
    <img src="/images/reliable-2.jpg" alt="" className='mb-5 rounded' />
     <img src="/images/reliable-3.jpg" alt="" className='rounded'/>
    
   </div>
    </div>

    <div className='lg:w-6/12 w-full' >
        <span className='span'>Reliable Online Payment Platform</span>
        <h3 className='text-[29px]  text-[#2A3F65] font-bold '>Transfer & Deposite Money Anytime, Anywhere In The World</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat nisl bibendum vitae consequat. Nisl ut sed accumsan congue tempus fringilla diam arcu. Venenatis nulla senectus risus sagittis.</p>
          <div className="flex  flex-col lg:flex-row md:flex-row xl:flex-row">
            <ul className="reliablesection-ul">
                <li>
                    <span ><i class="ri-check-double-line"></i></span>Powerful Mobile & Online App
                </li>
                   <li>
                    <span ><i class="ri-check-double-line"></i></span>Powerful Mobile & Online App
                </li>     <li>
                    <span ><i class="ri-check-double-line"></i></span>Powerful Mobile & Online App
                </li>  
            </ul>
                <ul className="reliablesection-ul">
                <li>
                    <span ><i class="ri-check-double-line"></i></span>Powerful Mobile & Online App
                </li>
                   <li>
                    <span ><i class="ri-check-double-line"></i></span>Powerful Mobile & Online App
                </li>     <li>
                    <span ><i class="ri-check-double-line"></i></span>Powerful Mobile & Online App
                </li>  
            </ul>
        </div>
    </div>
</div>

<section className='bg-[#009286] mt-5'>
        <div className='container mx-auto px-10 py-10 flex gap-10 justify-center items-center flex-col lg:flex-row'>
<div className='lg:w-4/12 w-1/2  flex gap-1.5'>

<i class="ri-calendar-todo-fill text-3xl text-white inline-block border border-white lg:rounded-[50%] rounded p-3"></i>
<div className='flex flex-col   pl-2'>
    <h4 className='text-white text-2xl'>
    40 +
</h4>
<p className='!text-white'>years of Expirence</p>
</div>
</div>

<div className='lg:w-4/12 w-1/2 flex gap-1.5'>

<i class="ri-team-line text-3xl text-white inline-block border border-white lg:rounded-[50%] rounded p-3"></i>
<div className='flex flex-col   pl-2'>
    <h4 className='text-white text-2xl'>
    80 +
</h4>
<p className='!text-white'>Team Member</p>
</div>
</div>
<div className='lg:w-4/12 w-1/2 flex gap-1.5 '>

<i class="ri-folder-lock-fill text-3xl text-[#fffff6] inline-block border border-[white] lg:rounded-[50%] rounded p-3 "></i>
<div className='flex flex-col   pl-2'>
    <h4 className='text-white text-2xl'>
    25 +
</h4>
<p className='!text-white'>Project completed </p>
</div>
</div>
<div className='lg:w-4/12 w-1/2  flex gap-1.5'>

<i class="ri-calendar-todo-fill text-3xl text-white inline-block border border-white lg:rounded-[50%] rounded p-3"></i>
<div className='flex flex-col   pl-2'>
    <h4 className='text-white text-2xl'>
    40 +
</h4>
<p className='!text-white'>years of Expirence</p>
</div>
</div>
            
        </div>
      </section>

  <section className="bg-[#f7f7f7] xl:py-30 p-5 xl:px-20">
        <div className="xl:px-90 xl:p-10 p-0">
<span className="span-heading span">Global Transfers</span>
         <h2 className="xl:text-[35px]/[49px] lg:text-[35px]/[49px] text-[22px] text-[#2A3F65] font-bold text-center">We Charge As Little As Possible. No Subscription Fee</h2>          
        </div>
<div className="global-transfers-area  ">
<div className="card">
   <div className="icon">


<img src="/images/envelope.png" alt="" />
   </div>

<h3 className="">Send Money Cheaper And Easier Than Old-school Banks</h3>
<p>Adipiscing eliId neque mi, diam nim etus arcu porta viverra.</p>
<a href="#" className="link-btn">read more</a>
</div>
<div className="card">
   <div className="icon">

<img src="/images/mobile.png" alt="" />
   </div>

<h3 className="">Spend Abroad Without The Hidden Fees</h3>
<p>Adipiscing eliId neque mi, diam nim etus arcu porta viverra.</p>
<a href="#" className="link-btn">read more</a>
</div>
<div className="card">
   <div className="icon">


<img src="/images/exchanging.png" alt="" />
   </div>

<h3 className="">Send Money Cheaper And Easier Than Old-school Banks</h3>
<p>Adipiscing eliId neque mi, diam nim etus arcu porta viverra.</p>
<a href="#" className="link-btn">read more</a>
</div>

</div>
      </section>
         <section className="bg-[#009286] xl:py-20 p-5">
          <div className="xl:px-90 text-center xl:p-10 p-0 ">
<span className=" text-white font-semibold text-[16px]/[24px] my-3 block ">Your Benefits</span>
         <h2 className="xl:text-[35px]/[49px] text-[22px]  text-white font-bold">Take The Stress Out Of Managing Property And Money</h2>          
        </div>
        <div className="benift-section">
          <div className="card">
          <div className="imageSec">
            <img className="" src="/images/benefits-1.png" alt="" />
          </div>
          <div className="content">
            <h3 className="">Global Coverage</h3>
            <p>Adipiscing eli neque mi diam nim etus arcu porta viverra pretium auctor ut nam sed adipiscing eliId neque mi diam nim etus arcu porta viverra.</p>
          </div>
          </div>
        
          <div className="card">
          <div className="imageSec">
            <img className="" src="/images/benefits-1.png" alt="" />
          </div>
          <div className="content">
            <h3 className="">Global Coverage</h3>
            <p>Adipiscing eli neque mi diam nim etus arcu porta viverra pretium auctor ut nam sed adipiscing eliId neque mi diam nim etus arcu porta viverra.</p>
          </div>
          </div>
        
          <div className="card">
          <div className="imageSec">
            <img className="" src="/images/benefits-1.png" alt="" />
          </div>
          <div className="content">
            <h3 className="">Global Coverage</h3>
            <p>Adipiscing eli neque mi diam nim etus arcu porta viverra pretium auctor ut nam sed adipiscing eliId neque mi diam nim etus arcu porta viverra.</p>
          </div>
          </div>
        
          <div className="card">
          <div className="imageSec">
            <img className="" src="/images/benefits-1.png" alt="" />
          </div>
          <div className="content">
            <h3 className="">Global Coverage</h3>
            <p>Adipiscing eli neque mi diam nim etus arcu porta viverra pretium auctor ut nam sed adipiscing eliId neque mi diam nim etus arcu porta viverra.</p>
          </div>
          </div>
        
          <div className="card">
          <div className="imageSec">
            <img className="" src="/images/benefits-1.png" alt="" />
          </div>
          <div className="content">
            <h3 className="">Global Coverage</h3>
            <p>Adipiscing eli neque mi diam nim etus arcu porta viverra pretium auctor ut nam sed adipiscing eliId neque mi diam nim etus arcu porta viverra.</p>
          </div>
          </div>
        
          <div className="card">
          <div className="imageSec">
            <img className="" src="/images/benefits-1.png" alt="" />
          </div>
          <div className="content">
            <h3 className="">Global Coverage</h3>
            <p>Adipiscing eli neque mi diam nim etus arcu porta viverra pretium auctor ut nam sed adipiscing eliId neque mi diam nim etus arcu porta viverra.</p>
          </div>
          </div>
        
          
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About
