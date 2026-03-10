import React, { useEffect, useState } from 'react'
import Topbar from './topbar'
import SidebarUserPanel from './SidebarUserPanel'
import { GetLoanDetails,CancelLoanApplication } from '../../backendApi/apis';

const LoansDetails = () => {

var idStorage = sessionStorage.getItem("userLogined");
var [data, setData] = useState([]);

useEffect(()=>{

  if (idStorage) {
    GetLoanDetails(parseInt(idStorage)).then((res) => { 
       
          setData(res); 
    
        console.log("Loan Details Response:", res);


      })
 
  }
});
 var handleDelete=(loanId)=>{
    
    CancelLoanApplication(loanId).then((res)=>{
   
      
      GetLoanDetails(parseInt(idStorage))
    });
}
  return (
    <>
        <div className="flex min-h-screen">
            <div className="w-2/12 ">
              <SidebarUserPanel />
              
            </div>
      
            <div className="flex-1 flex flex-col w-12/12">
              <Topbar />
              <main className="p-0 ">
                <div className=" bg-[#f7f7f7] h-auto py-5  ">
                  <h4 className="text-[25px] text-[#2A3F65] font-bold my-2 px-10">
                     Loans Details
                  </h4>
             <div className=' py-5  gap-1  overflow-hidden flex justify-center flex-wrap'>
                {
                   data.length === 0 ? (
                  <>
                  
                    <div className="h-[60vh] flex justify-center items-center">
          <h5 className="text-4xl font-semibold">   No loan details found.</h5>
          </div>
                  </>
                  ) : (
              data.map((loan, index) => (
                <>
                <div className='bg-[#f7f7f7] rounded w-3/12 border-2 border-[#d4d4d6] '>
<div className='py-2 px-3 bg-[#009286] text-right rounded'>
    <h3 className='text-2xl text-white '>{index+1}</h3>
</div>
<div className='py-5 px-3'>
    <p>CNIC: <b>{loan.cnic}</b></p>
<p>Amount: <b>{loan.loan_amount}</b></p>

<p>Interest : <b>{loan.interestrate}</b></p>

<p> repayment aamount: <b>{loan.totalRepaid}</b></p>
<p>CNIC:<b>{loan.cnic}</b></p>
{loan.status === 0 ? (
    <p className='text-yellow font-bold'>Status: Pending</p>
) : loan.status === 1 ? (
    <p className='text-green font-bold'>Status: Approved</p>
) : (
    <p className='text-red font-bold'>Status: Rejected</p>
)}
</div>
<div className='text-right'>
    {
        loan.status === "pending" ? (
            <button className='bg-red-500 text-white px-3 py-1 rounded mb-3 mr-3' onClick={() => handleDelete(loan.id)}>Cancel</button>
        ):("Approved or Rejected loan cannot be cancelled")
    }
</div>
</div>
</>
                )))
                }


             </div>
                </div>
              </main>
            </div>
          </div>
    </>
  )
}

export default LoansDetails
