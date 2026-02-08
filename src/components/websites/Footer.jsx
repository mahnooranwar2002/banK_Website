import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#e9e9ee] mt-5  xl:gap-10 xl:py-10 xl:px-30  flex xl:flex-row lg:flex-row  flex-col">
<div className="item">
  <img src="https://templates.hibootstrap.com/snuff/default/assets/images/logo.png" alt="" />
<p>To get exclusive updates and benefits.</p>
<i class="ri-facebook-circle-fill"></i>
<i class="ri-instagram-fill"></i>
<i class="ri-whatsapp-line"></i>
</div>
<div className="item">
 <h3>Company And Team</h3>
 <ul>
  <li><a href="#">Company And Team</a></li>
    <li><a href="#">News And Blog</a></li>
      <li><a href="#">News And Blog</a></li>
        <li><a href="#">About Us</a></li>
        
            <li><a href="#">Careers</a></li>
 </ul>
</div>

<div className="item">
<h3>Resources</h3>
<ul>
  <li><a href="#">Security</a></li>
  <li><a href="#">FAQ's</a></li>
    <li><a href="#">Privacy Policy</a></li>  
    <li><a href="#">Community</a></li>  
    <li><a href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="item">
  <h3>Contact Info</h3>
  <ul>
    <li>Location: 27 Division St, 1100. E Denver, CO 80237, USA</li>

<li>Email: hello@snuff.com</li>
<li>Phone: +44 7892 8952 4329</li>
<li>Fax: +1-212-9876543</li>
  </ul>

</div>
</footer>
    </div>
  )
}

export default Footer
