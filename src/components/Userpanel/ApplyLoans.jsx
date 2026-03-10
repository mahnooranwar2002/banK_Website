import React, { useEffect } from "react";
import Topbar from "./topbar";
import SidebarUserPanel from "./SidebarUserPanel";
import axios from "axios";
import { useState } from "react";
import { ApplyLoan, GetProfile } from "../../backendApi/apis";
import { toast } from "react-toastify";
const ApplyLoans = () => {
  const employmentOptions = [
    { label: "Salaried (Naukri-pesha)", value: "salaried" },
    { label: "Self-Employed Professional (Doctor/CA)", value: "sep" },
    { label: "Business Owner (Karobar)", value: "business" },
    { label: "Contractor", value: "contractor" },
    { label: "Unemployed", value: "unemployed" },
  ];
  var idStorage = sessionStorage.getItem("userLogined");

  // var [data,setData]=useState([""])

  // useEffect(()=>{

  // if(idStorage){
  //     axios.get(`https://localhost:7237/api/User/user_prof/${idStorage}`).then((res)=>{
  //     setData(res.data)
  //     console.log(res.data)
  //   const { name, email } = res.data;
  //         setUserData({ name, email });
  //     console.log(setUserData)
  // })}
  // } ,[])

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
    id: 0,
    name: "",
    email: "",
    number: "",
    cnic: "",
    emply_type: "",
    desgination: "",
    orgazination_name: "",
    address: "",
    dob: "",
    loan_amount: 0,
    user_id: 0,

    salary: 0,
    repayment_period: "",
  });
  var [error, setError] = useState({
    id: 0,
    name: "",
    email: "",
    number: "",
    cnic: "",
    emply_type: "",
    desgination: "",
    orgazination_name: "",
    address: "",
    dob: "",
    loan_amount: "",
    user_id: 0,

    salary: "",
    repayment_period: "",
  });
  // for apply loans
  var handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    var errors = {
      name: "",
      email: "",
      number: "",
      cnic: "",
      desgination_type: "",
      desgination: "",
      orgazination_name: "",
      address: "",
      dob: "",
      loan_amount: "",
      user_id: 0,

      salary: 0,
      repayment_period: "",
    };

    formData.user_id = parseInt(idStorage);
    formData.name = data.name;
    formData.email = data.email;

    // if(!formData.number || !formData.cnic || !formData.desgination_type || !formData.desgination || !formData.orgazination_name || !formData.address || !formData.dob || !formData.loan_amount || !formData.salary){
    //   toast.error("Please fill in all required fields.");
    //   return;
    // }
    if (formData.number.length !== 11 || isNaN(formData.number)) {
      errors.number = "Phone number must be 11 digits.";
    }
    if (formData.number.trim() === "") {
      errors.number = "Phone number is required.";
    }
    if (formData.cnic.length !== 13) {
      errors.cnic = "CNIC must be 13 digits.";
    }
    if (formData.cnic.trim() === "") {
      errors.cnic = "CNIC is required.";
    }
    if (formData.orgazination_name.trim() === "") {
      errors.orgazination_name = "Organization name is required.";
    }
    if (formData.emply_type.trim() === "") {
      errors.emply_type = "Employment type is required.";
    }
    if (formData.desgination.trim() === "") {
      errors.desgination = "Employment status is required.";
    }
    if (formData.address.trim() === "") {
      errors.address = "Address is required.";
    }
    if (formData.dob.trim() === "") {
      errors.dob = "Date of birth is required.";
    }
    if (formData.loan_amount <= 0) {
      errors.loan_amount = "Loan amount must be greater than zero.";
    }
    // if(formData.salary <= 0){
    //   errors.salary = "Salary must be greater than zero.";
    // }

    if (
      errors.number ||
      errors.cnic ||
      errors.orgazination_name ||
      errors.emply_type ||
      errors.desgination ||
      errors.address ||
      errors.dob ||
 
      errors.loan_amount ||
      errors.salary
    ) {
      setError(errors);
      return;
    }

    var datTobeSend = {
      id: 0,
      name: formData.name,
      email: formData.email,
      number: formData.number,
      cnic: formData.cnic,
      emply_type: "Aaa",
      desgination: formData.desgination,
      orgazination_name: formData.orgazination_name,
      address: formData.address,
      dob: formData.dob,
      loan_amount: parseInt(formData.loan_amount),
      user_id: formData.user_id,
      status: "pending",
      salary: parseInt(formData.salary),
      interestrate: parseInt(formData.loan_amount *10/100),
      totalRepaid: parseInt(formData.loan_amount) + parseInt(formData.loan_amount *10/100),

      repayment_period: (parseInt(formData.salary) * 0.35).toString(),
    };

    console.log(datTobeSend);
    // console.log(mydata)
    await ApplyLoan(datTobeSend).then(() => {
      toast.success("Loan application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        number: "",
        cnic: "",
        desgination_type: "",
        desgination: "",
        orgazination_name: "",
        address: "",
        dob: "",
        loan_amount: "",
        user_id: 0,

        salary: "",
        repayment_period: "",
      });
      setError({
         id: 0,
    name: "",
    email: "",
    number: "",
    cnic: "",
    emply_type: "",
    desgination: "",
    orgazination_name: "",
    address: "",
    dob: "",
    loan_amount: "",
    user_id: 0,

    salary: "",
    repayment_period: "",
      })
    });
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-2/12 ">
        <SidebarUserPanel />
      </div>

      <div className="flex-1 flex flex-col w-12/12">
        <Topbar />

        <main className="p-0 ">
          <div className="border-pink-100 border-2 bg-[#f7f7f7] px-10 py-10">
            <h4 className="text-[25px] text-[#2A3F65] font-bold my-2">
              Apply for Loans
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
                    onChange={handleInputChange}
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
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="text-[14px] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.number && (
                    <p className="text-danger">{error.number}</p>
                  )}
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
                    name="cnic"
                      value={formData.cnic}
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.cnic && <p className="text-danger">{error.cnic}</p>}
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
                    name="orgazination_name"
                      value={formData.orgazination_name}
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.orgazination_name && (
                    <p className="text-danger">{error.orgazination_name}</p>
                  )}
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
                      value={formData.dob}
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.dob && <p className="text-danger">{error.dob}</p>}
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
                    name="desgination"
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.desgination && (
                    <p className="text-danger">{error.desgination}</p>
                  )}
                </div>
                <div className="w-6/12">
                  <label className="text-[18px] text-[#2A3F65] font-bold my-2 block">
                    Employment Type
                  </label>

                  <select
                    name="emply_type"
                      value={formData.emply_type}
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  >
                    <option value="">Select Employment Type</option>
                    {employmentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {error.emply_type && (
                    <p className="text-danger">{error.emply_type}</p>
                  )}
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
                    name="salary"
                      value={formData.salary}
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.salary && (
                    <p className="text-danger">{error.salary}</p>
                  )}
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
                    name="loan_amount"
                      value={formData.loan_amount}
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.loan_amount && (
                    <p className="text-danger">{error.loan_amount}</p>
                  )}
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
                      value={formData.address}
                    onChange={handleInputChange}
                    className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                  />
                  {error.address && (
                    <p className="text-danger">{error.address}</p>
                  )}
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
  );
};

export default ApplyLoans;
