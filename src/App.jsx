import React from 'react'
import Index from './components/websites/Index'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Auth/Register'
import { ToastContainer } from 'react-toastify'
import Login from './components/Auth/Login'
import UserIndex from './components/Userpanel/UserIndex'
import ApplyLoans from './components/Userpanel/ApplyLoans'
import LoansDetails from './components/Userpanel/LoansDetails'
import AccountApplication from './components/Userpanel/AccountApplication'
import Transcationlog from './components/Userpanel/Transcationlog'
import TranscationHistory from './components/Userpanel/TranscationHistory'
import About from './components/websites/About'
import Contact from './components/websites/Contact'

const App = () => {
  return (
    <>
  <Routes>
    <Route path="" element={<Index></Index>}></Route>
    <Route path="/sunff/about" element={<About/>}></Route>
     <Route path="/sunff/contact" element={<Contact/>}></Route>
    <Route path='/user/register' element={<Register/>}></Route>
     <Route path='/user/login' element={<Login/>}></Route>
     <Route path='/user/user-index' element={<UserIndex/>}></Route>
      <Route path='user/applyLoans' element={<ApplyLoans/>}></Route>
          <Route path='user/loansDetails' element={<LoansDetails/>}></Route>
            <Route path='user/accountApplication' element={<AccountApplication/>}></Route>
             <Route path='user/trans-history' element={<TranscationHistory/>}></Route>
            <Route path='user/trans' element={<Transcationlog/>}></Route>
            
  </Routes>

  <ToastContainer></ToastContainer>
    </>
  )
}

export default App
