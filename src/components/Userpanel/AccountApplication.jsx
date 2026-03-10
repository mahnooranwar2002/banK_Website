import React, { useEffect, useState } from 'react'
import SidebarUserPanel from './SidebarUserPanel'
import Topbar from './topbar'
import { AccountApplicationsumbit, GetProfile } from '../../backendApi/apis';
import { toast } from 'react-toastify';

const AccountApplication = () => {
    var idStorage = sessionStorage.getItem("userLogined");
     const [data, setData] = useState(null);
    
      useEffect(() => {
        console.log("User ID from sessionStorage:", idStorage);
    
        GetProfile(parseInt(idStorage))
          .then((resp) => {
            setData(resp[0]);
            console.log("Profile Datah:", resp.data[0]);
          })
          .catch((err) => console.error("Error fetching data:", err));
      }, [idStorage]);

var [formData, setFormData] = useState({

  name: "",
  gender: "",
  email: "",
  phone: "",
  address: "",
  dob: "",
  pan_numbr: "string",
  nomine: "string",
  nomine_no: "string",
  account_id: "",
  deposit_amount: 0,
  pin_code: 0,
  user_id: 0,
  types_id: "string",
  status: 0


});
var handleInputChange=(e)=>{
setFormData({...formData, [e.target.name]: e.target.value});
}
var handleSubmit=(e)=>{
  e.preventDefault();
  formData.user_id = parseInt(idStorage);
  formData.deposit_amount = parseFloat(formData.deposit_amount);
  formData.email = data.email;
  formData.name = data.name;

  AccountApplicationsumbit(formData).then((res)=>{
    toast.success("Account application submitted successfully:");
  }).catch((err)=>{
    toast.error("your account is created already ");
  });   
  console.log("Form Data to be submitted:", formData);}

  return (
    <div>
        <div className="flex min-h-screen">
            <div className="w-2/12 ">
              <SidebarUserPanel />
              
            </div>
      
            <div className="flex-1 flex flex-col w-12/12">
              <Topbar />
              
              <main className="p-0 ">
                 <div className=" bg-[#f7f7f7] h-auto py-5  ">
                  <h4 className="text-[25px] text-[#2A3F65] font-bold my-2 px-10">
                    Account Application
                  </h4>
           <form action="" className="" onSubmit={handleSubmit}>
              <input type="hidden" name="user_id" value={idStorage} />

              <div className="flex flex-row  gap-10 px-10">
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Name:
                  </label>
                  {/*         
                   {data.map ((item)=>(
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    onChange={handleInputChange}
                    readOnly
                    value={.name}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  /> 
                ))} */}

                  <input
                    type="text"
                 
                    value={data?.name || ""}
                    readOnly
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                </div>

                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    value={data?.email || ""}
                    readOnly
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />

                  {/* {data.map ((item)=>(
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="email"
                    readOnly
                    onChange={handleInputChange}
                    value={item.email}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  /> 
                ))} */}

                </div>
            
              </div>
                    <div className="flex flex-row  gap-10 px-10">
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    gender:
                  </label>
            

                  <select name="gender" id=""  onChange={handleInputChange}     className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="w-6/12">
                   <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Phone number:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone"
                    name="phone"
                    onChange={handleInputChange} 
                    className="text-[14px] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                

                </div>
                   </div>
                   
                    <div className="flex flex-row  gap-10 px-10">
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Cnic:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Cnic"
                    name="pan_number"
                onChange={handleInputChange} 
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
              
                </div>
                   <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    DOB: <sup>date of birth</sup>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter DOB"
                    name="dob"
                onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                 
                </div>
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Deposit Amount:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Deposit Amount"
                    name="deposit_amount"
                onChange={handleInputChange} 
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
              
                </div>
                
                </div>

                                    <div className="flex flex-row  gap-10 px-10">
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Nomine:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Nomine Name"
                    name="nomine"
                onChange={handleInputChange} 
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
              
                </div>
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Nomine no:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Nomine no"
                    name="nomine_no"
                onChange={handleInputChange} 
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
              
                </div>
                
                
           
                </div>
                  <div className="flex flex-row  gap-10 px-10">
                <div className="w-12/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Address:
                  </label>
                  <textarea
                    row={5}
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                 
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                 
                        </div>  
                </div>
                        
                  <div className=" flex flex-row  gap-10 px-10 w-6/12">
                <input
                  className=" py-3.75 px-7.5 text-white bg-[#009286]  mt-5 w-full rounded-2xl"
                  type="submit"
                  value="Save"
                />
              </div>
           </form>
</div>
              </main>
            </div>
          </div>
    </div>
  )
}

export default AccountApplication
