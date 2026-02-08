import React from 'react'
import Index from './components/websites/Index'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Auth/Register'
import { ToastContainer } from 'react-toastify'
import Login from './components/Auth/Login'
import UserIndex from './components/Userpanel/UserIndex'
import ApplyLoans from './components/Userpanel/ApplyLoans'


const App = () => {
  return (
    <>
  <Routes>
    <Route path="" element={<Index></Index>}></Route>
    <Route path='/user/register' element={<Register/>}></Route>
     <Route path='/user/login' element={<Login/>}></Route>
     <Route path='/user/user-index' element={<UserIndex/>}></Route>
     <Route path='user/applyLoans' element={<ApplyLoans/>}></Route>
  </Routes>

  <ToastContainer></ToastContainer>
    </>
  )
}

export default App
