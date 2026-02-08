import React from "react";
import Topbar from "./topbar";
import SidebarUserPanel from "./SidebarUserPanel";
const ApplyLoans = () => {
  const employmentOptions = [
    { label: "Salaried (Naukri-pesha)", value: "salaried" },
    { label: "Self-Employed Professional (Doctor/CA)", value: "sep" },
    { label: "Business Owner (Karobar)", value: "business" },
    { label: "Contractor", value: "contractor" },
    { label: "Unemployed", value: "unemployed" },
  ];
  return (
    <div className="flex min-h-screen">
      <div className="w-2/12 border-r">
        <SidebarUserPanel />
      </div>

      <div className="flex-1 flex flex-col w-12/12">
        <Topbar />

        <main className="p-0 ">
          <div className="border-pink-100 border-2 bg-[#f7f7f7] px-10 py-10">
            <h4 className="text-[25px] text-[#2A3F65] font-bold my-2">
              Apply for Loans
            </h4>
            <form action="" className="">
              {/* <div className="flex flex-row  gap-10 px-10">
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="Name"
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
                    placeholder="Enter Email"
                    name="Name"
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                </div>
              </div> */}
              <div className="flex flex-row  gap-10 px-10 ">
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
                    name="Name"
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                </div>

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
                    name="Name"
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
                    Organization Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Organization Name"
                    name="Name"
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
                    placeholder="Enter Email"
                    name="Name"
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
                    Designation:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Designation"
                    name="Name"
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                </div>
                <div className="w-6/12">
                  <label className="text-[18px] text-[#2A3F65] font-bold my-2 block">
                    Employment Type
                  </label>

                  <select
                    name="emply_type"
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  >
                    <option value="">Select Employment Type</option>
                    {employmentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
                <div className="flex flex-row  gap-10 px-10">
                <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                   salary:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Salary"
                    name="Name"
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                </div>
                    <div className="w-6/12">
                  <label
                    htmlFor=""
                    className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                  >
                   Loan:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Loan"
                    name="Name"
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
                    placeholder="Enter Organization Name"
                    name="Name"
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  
                </div>
                </div>

               <div className=" flex flex-row  gap-10 px-10 w-6/12">
                <button className=" py-3.75 px-7.5 text-white bg-[#009286]  mt-5 w-full rounded-2xl">Save</button></div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ApplyLoans;
