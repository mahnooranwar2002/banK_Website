import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";

function Index() {
  return (
    <>
      <Headers />
   
      <section className="bg-[#f7f7f7] flex-col xl:px-10 flex gap-10 xl:gap-20 xl:flex-row  lg:flex-row">
        <div className="w-12/12 xl:py-62 lg:py-30 p-10  xl:w-6/12 lg:6/12">
          <h1 className="xl:text-[44px]/[75.7px] lg:text-[44px]/[75.7px] text-[29px] text-[#2A3F65] font-bold ">
            Make Online Banking Easier & Comfortable
          </h1>
          <p className="">
            An international account to send money to over 60 countries around
            the world, up to 7x cheaper the bank. Learn more
          </p>
          <button className="btn btn-default">Explore</button>
          <button className=" btn btn-primary">contact us </button>
        </div>
        <div className="w-12/12 xl:py-32 p-10 xl:w-6/12">
          <img className="rounded-2xl h-full" src="/images/banner.jpg" alt="" />
        </div>
      </section>
       
      <section className="bg-[#ffff] xl:py-20 xl:px-30 flex  p-10 flex-col xl:flex-row">
        <div className="xl:w-6/12 hidden xl:block">
          <img src="images/reliable.png" alt="" />
        </div>
        <div className="w-12/12  xl:w-6/12 ">
          <span className="span"> Reliable Online Payment Platform</span>
          {/* text-[35px]/[49px]  */}
          <h3 className="xl:text-[44px]/[75.7px] lg:text-[44px]/[75.7px] text-[29px]  text-[#2A3F65] font-bold ">Transfer & Deposite Money Anytime, Anywhere In The World</h3>
          <p className="">Lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat nisl bibendum vitae consequat. Nisl ut sed accumsan congue tempus fringilla diam arcu. Venenatis nulla senectus risus sagittis.</p>
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
      
      </section>
 
      <section className="bg-[#f7f7f7] xl:py-30 p-10 xl:px-20">
        <div className="xl:px-90 p-10">
<span className="span-heading span">Global Transfers</span>
         <h2 className="xl:text-[35px]/[49px] lg:text-[35px]/[49px] text-[22px] text-[#2A3F65] font-bold text-center">We Charge As Little As Possible. No Subscription Fee</h2>          
        </div>
<div className="global-transfers-area  ">
<div className="card">
   <div className="icon">

<i className="ri-share-line inline-block "></i>
   </div>

<h3 className="">Send Money Cheaper And Easier Than Old-school Banks</h3>
<p>Adipiscing eliId neque mi, diam nim etus arcu porta viverra.</p>
<a href="#" className="link-btn">read more</a>
</div>
<div className="card">
   <div className="icon">

<i className="ri-share-line inline-block "></i>
   </div>

<h3 className="">Send Money Cheaper And Easier Than Old-school Banks</h3>
<p>Adipiscing eliId neque mi, diam nim etus arcu porta viverra.</p>
<a href="#" className="link-btn">read more</a>
</div>
<div className="card">
   <div className="icon">

<i className="ri-share-line inline-block "></i>
   </div>

<h3 className="">Send Money Cheaper And Easier Than Old-school Banks</h3>
<p>Adipiscing eliId neque mi, diam nim etus arcu porta viverra.</p>
<a href="#" className="link-btn">read more</a>
</div>
<div className="card">
   <div className="icon">

<i className="ri-share-line inline-block "></i>
   </div>

<h3 className="">Send Money Cheaper And Easier Than Old-school Banks</h3>
<p>Adipiscing eliId neque mi, diam nim etus arcu porta viverra.</p>
<a href="#" className="link-btn">read more</a>
</div>
</div>
      </section>


  <section className="bg-[#ffff] gap-10 xl:py-20 xl:px-30 p-10 flex">
       <div className="xl:w-6/12 w-12/12">
          <span className="span"> Reliable Online Payment Platform</span>
          <h3 className="xl:text-[35px]/[49px] text-[22px] text-[#2A3F65] font-bold ">Transfer & Deposite Money Anytime, Anywhere In The World</h3>
          <p className="">Lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat nisl bibendum vitae consequat. Nisl ut sed accumsan congue tempus fringilla diam arcu. Venenatis nulla senectus risus sagittis.</p>
            <div className="flex gap-0 flex-col lg:flex-row md:flex-row xl:flex-row" id="box">
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
        <div className="w-6/12 pl-30 hidden xl:block">
          <img className="w-100  object-fit h-full" src="images/paiement.png" alt="" />
        </div>
     
      
      </section>
      <section className="bg-[#009286] xl:py-30 p-10">
          <div className="xl:px-90 text-center p-10">
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

{/* features */}
<section className="feature-sec">
<div className="left-wrapper"> 
  <img className="w-100" src="images/features-2.png" alt="" />
</div>
<div className="right-wrapper">
<span className="span">Our Features</span>
<h3 className="heading">The Reliable, Cheap & Fastest Way To Send Money Abroad</h3>
<p>Lorem ipsum dolor sit amet consectetur adipiscing volutpat nisl bibendum vitae consequat nisl ut sed accumsan congue id tempus fringilla diam arcu</p>
<div className="flex mt-3 gap-5 xl:flex-row lg:flex-row flex-col">
  <div className="xl:w-6/12 lg:w-6/12 w-12/12  ">
  <h3>Faster And Cheaper</h3>
  <ul>
    <li className="mt-3">
    <i class="ri-shield-check-fill   text-[#009286] text-[20px]"></i><p className="inline p-2">Lorem neque diam nim etus porta viverra pretium auctor nam sed.</p></li>
  
      <li className="mt-3">
    <i class="ri-shield-check-fill   text-[#009286] text-[20px]"></i><p className="inline p-2">Lorem neque diam nim etus porta viverra pretium auctor nam sed.</p></li>
  
    </ul>
</div>
   <div className="xl:w-6/12 lg:w-6/12 w-12/12 ">
  <h3>Faster And Cheaper</h3>
  <ul>
    <li className="mt-3">
    <i class="ri-shield-check-fill   text-[#009286] text-[20px]"></i><p className="inline p-2">Lorem neque diam nim etus porta viverra pretium auctor nam sed.</p></li>
  
      <li className="mt-3">
    <i class="ri-shield-check-fill   text-[#009286] text-[20px]"></i><p className="inline p-2">Lorem neque diam nim etus porta viverra pretium auctor nam sed.</p></li>
  
    </ul>
</div>
</div>
</div>

</section>
<section className="bg-[#03635b] hidden text-white xl:py-20 xl:px-30 xl:flex justify-center flex-col gap-2 ">
<span className="block text-center">Connect Us</span>
<h3 className="text-center xl:text-[30px] text-[22px]   font-bold my-2">
  Sending International Business Payments or Sending Money To Family Overseas? Snuff Are Your Fast And Simple Solution.
</h3>
<div className="flex justify-center">
  <button className="btn btn-default">Personal Account</button><button className="btn btn-bannar ">Busniess Account</button>
</div>
</section>
<Footer/>

    </>
  );
}

export default Index;
