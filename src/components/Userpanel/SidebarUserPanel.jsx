import React from 'react'
import { Link } from 'react-router-dom'

const SidebarUserPanel = () => {

    var menuItem=[
        {icon:"ri-dashboard-horizontal-line" ,label:"Dashboard", to:"user/user-index"},
          {icon:"ri-p2p-line" ,label:"loans", to:"/user/applyLoans"},
    ]
  return (
    <div className='bg-[#009286]  border-r-amber-100 flex flex-col h-full '>
    
<h2 className='text-white text-[24px] font-semibold px-10 py-5'>User panel</h2>
    <div className=''>
        <ul className='p-10'>
           
            
                {
                    menuItem.map((links)=>(
                         <li className='text-white font-semibold p-2'>
                       <Link to={links.to}>
                              <i class={links.icon}></i> {links.label}
                       </Link> 
                        </li>
                    ))
                }
           
        </ul>
    </div>
    </div>
  )
}

export default SidebarUserPanel
