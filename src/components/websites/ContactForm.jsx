import React from 'react'

const ContactForm = () => {
  return (
    <>
      
      <section className='bg-[#e2e2e7] mt-5 lg:py-40 p-5'>
<div className="container mx-auto">
    <div className='text-center mb-5 flex flex-col gap-5 justify-center items-center'>
        <span className='span'>Contact Information</span>
        <h3 className='text-[29px]  text-[#2A3F65] font-bold lg:w-6/12 w-full'>Fill In Your Information And We'll Be In Touch As Soon As We Can</h3>
    </div>
    <form action="">
        <div className='flex  gap-5 my-5'>
<div className='w-6/12 flex flex-col font-semibold'>
<label className="text-[#2A3F65]">Name</label>
<input type="text" className='border-gray-500/50 border-2 outline-none p-3 rounded ' />
</div>
<div className='w-6/12 flex flex-col font-semibold text-[#2A3F65]'>
<label className="text-[#2A3F65]">Email</label>
<input type="text" className='border-gray-500/50 border-2 outline-none p-3 rounded ' />
</div>


        </div>
                <div className='flex  gap-5 my-5'>
<div className='w-6/12 flex flex-col font-semibold'>
<label className="text-[#2A3F65]">Phone</label>
<input type="text" className='border-gray-500/50 border-2 outline-none p-3 rounded ' />
</div>
<div className='w-6/12 flex flex-col font-semibold text-[#2A3F65]'>
<label className="text-[#2A3F65]">Subject</label>
<input type="text" className='border-gray-500/50 border-2 outline-none p-3 rounded ' />
</div>
</div>
<div className='w-full flex flex-col font-semibold text-[#2A3F65]'>
<label className="text-[#2A3F65]">Message</label>

<textarea name="" id=""
rows={5}
className='border-gray-500/50 border-2 outline-none p-3 rounded'
></textarea>
</div>
<input type="submit" className='btn-default rounded' value={"Submit Now"} />
    </form>
</div>
      </section>
    </>
  )
}

export default ContactForm
