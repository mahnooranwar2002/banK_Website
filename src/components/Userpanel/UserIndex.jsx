import React from 'react'
import Topbar from './topbar'
import SidebarUserPanel from './SidebarUserPanel'

const UserIndex = () => {
  return (

    <div className='flex min-h-screen'>
      
  
      <div className="w-2/12 border-r">
        <SidebarUserPanel />
      </div>

      
      <div className='flex-1 flex flex-col w-12/12'> 
        
  
        <Topbar />

      
        <main className="p-6">
       
          <h1>Welcome to Dashboard</h1>
        </main>

      </div>
    </div>
  )
}

export default UserIndex