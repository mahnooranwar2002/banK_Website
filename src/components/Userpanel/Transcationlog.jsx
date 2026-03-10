import React, { useEffect, useState } from "react";
import SidebarUserPanel from "./SidebarUserPanel";
import Topbar from "./topbar";
import {
  addTranscationRecord,
  getAccountDetailsByUser,
  GetProfile,
} from "../../backendApi/apis";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Transcationlog = () => {
  var [trnscationRecord, SetTranscationRecord] = useState({
    id: 0,
    amount: 0,
    user_id: 0,
    account_id: "",
    tranactionType: "",
    transactionreason: "",
    message: "",

    status: "penfding",
  });
  var handleInput = (e) => {
    SetTranscationRecord({
      ...trnscationRecord,
      [e.target.name]: e.target.value,
    });
  };

  var idStorage = sessionStorage.getItem("userLogined");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("User ID from sessionStorage:", idStorage);

    getAccountDetailsByUser(idStorage)
      .then((resp) => {
        setData(resp);
        // console.log("Profile Datah:", resp);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [idStorage]);
var handleSubmit = (e) => {
  e.preventDefault();
  
  getAccountDetailsByUser(idStorage)
    .then((resp) => {
      setData(resp);
      
      if (resp[0].status == 0) {
        toast.error("Your account is deactivated by admin");
      } else {
        trnscationRecord.user_id = idStorage;
        trnscationRecord.account_id = resp[0].account_id;

       addTranscationRecord(trnscationRecord)
  .then((resp) => {
    // Ye tab chalega jab status 200 (Ok) hoga
    toast.success("Amount processed successfully!");
    getAccountDetailsByUser(idStorage);
    console.log(resp)
  })
  .catch((err) => {
    // Ye tab chalega jab status 400 (BadRequest) hoga
    // Backend ka 'ex.Message' yahan milega:
    const errorMessage = err.response?.data?.message || "Transaction Failed";
    console.log(err)
    toast.error(errorMessage); 
  });
      }
    })
    .catch((err) => {
      toast.error("Could not fetch account details.");
    });
};

  return (
    <div>
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
                  Transction
                </h4>
                <div className="flex">
         
          
             
                </div>
                {data.length == 0 ? (<>
                
                <div className="h-[60vh] flex justify-center items-center">
          <h5 className="text-4xl font-semibold">     Your account is not open yet !</h5>
                </div>
                </>) : 
                data.map((r) => (
                  <>
                    <div className="flex justify-between items-start gap-10  p-5 ">
                      <div className="border-2 border-[#2A3F65] w-5/12 p-5 rounded-xl flex justify-between">
                        <h4 className="font-bold">Your Balance</h4>
                        <h5 className="font-bold text-[#5D7079] text-3xl">
                          {r.deposit_amount}
                        </h5>
                      </div>
                      <p>
                        {r.status === 0 ? (
                          <span className="text-red border-2 bg-red-700/5 border-[#5D7079] py-2 px-3 rounded-xl">
                            * Deactive
                          </span>
                        ) : (
                          <span className="text-green border-2 bg-green-700/5 border-[#5D7079] py-2 px-3  rounded-xl">
                            * Activate
                          </span>
                        )}
                      </p>
                    </div>
                  </>
                ))}
             {data.length==0?(""):(   <form action="" onSubmit={handleSubmit}>
                  {/* <input type="submit" value={"aaa"} /> */}
                  <div className="flex flex-row  gap-10 px-10">
                    <div className="w-6/12">
                      <label
                        htmlFor=""
                        className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                      >
                        Amount:
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
                        name="amount"
                        onChange={handleInput}
                        placeholder="Enter Amount"
                        className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                      />
                    </div>
                    <div className="w-6/12">
                      <label
                        htmlFor=""
                        className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                      >
                        Tranaction Type:
                      </label>

                      <select
                        name="tranactionType"
                        id=""
                        onChange={handleInput}
                        className="text-[14px] text-[#2A3F65] font-bold my-2 block border-2 border-gray-300 w-12/12 outline-0 p-5 rounded-lg"
                      >
                        <option value="" hidden>
                          choice your type
                        </option>
                        <option value="credit">credit</option>
                        <option value="deposit">deposit</option>
                      </select>
                    </div>
                    <div className="w-6/12">
                      <label
                        htmlFor=""
                        className="text-[18px] text-[#2A3F65] font-bold my-2 block"
                      >
                        Transcation Reason:
                      </label>

                      <input
                        type="text"
                        name="transactionreason"
                        onChange={handleInput}
                        placeholder="Enter trancation reason"
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
                        Message:
                      </label>
                      <textarea
                        row={5}
                        type="text"
                        placeholder="Enter Message"
                        name="message"
                        onChange={handleInput}
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
                </form>)}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcationlog;
