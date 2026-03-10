import React, { useEffect, useState } from 'react'
import Topbar from './topbar'
import SidebarUserPanel from './SidebarUserPanel'
import { deletehistory, GetTranscationHistory } from '../../backendApi/apis';
import { toast } from 'react-toastify';

const TranscationHistory = () => {
  // Session storage se ID lein
  const idStorage = sessionStorage.getItem("userLogined");
  // Initial state ko empty array [] rakhein taake .length error na de
  const [data, setData] = useState([]);

  useEffect(() => {
    if (idStorage) {
      GetTranscationHistory(idStorage)
        .then((resp) => {
        
          setData(Array.isArray(resp) ? resp : []);
          console.log("API Response:", resp);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  },);
var deleteData=(id)=>{
    deletehistory(id).then(()=>{
GetTranscationHistory(idStorage)
toast.success('The data is deleted')
})
}
  return (
    <div>
      <div className="flex min-h-screen">
        <div className="lg:w-2/12 ">
          <SidebarUserPanel />
        </div>

        <div className="flex-1 flex flex-col">
          <Topbar />

          <main className="p-0">
            <div className="bg-[#f7f7f7] min-h-screen py-5">
              <section>
              <h4 className="text-[25px] text-[#2A3F65] font-bold mt-2 mb-10 px-10">
                Transactions Record
              </h4>
              </section>
              <div className="px-10 flex flex-wrap gap-x-10.5 gap-y-2">
                {data && data.length > 0 ? (
                  data.map((item, index) => (
                  <>
                  
                                <div className='bg-[#f7f7f7] rounded w-3/12 border-2 border-[#d4d4d6] '>
<div className='py-2 px-3 bg-[#009286] flex justify-between rounded'>
    <h3 className='text-2xl text-white '>{index+1}</h3>
<span className='text-red-500 bg-white py-2  px-3 rounded inline-block hover:bg-red-500 hover:text-white'
onClick={()=>deleteData(item.id)}><i class="ri-delete-bin-6-line"></i></span>
</div>
<div className='py-5 px-3'>
    <p>Amount : <b>{item.amount}</b></p>
    <p>Type : <b>{item.tranactionType}</b></p>
    <p>Transaction reason : <b>{item.transactionreason}</b></p>
    <p>{item.message}</p>
    
    


</div>

</div>
                  </>
                  ))
                ) : (
                  <p>No transactions found.</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default TranscationHistory