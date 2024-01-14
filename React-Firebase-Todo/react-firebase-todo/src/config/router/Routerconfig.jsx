import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import Login from '../../screens/login/Login'
import Register from '../../screens/register/Register'
const Routerconfig = () => {
  return (
    <BrowserRouter>
        
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='register' element={<Register/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig