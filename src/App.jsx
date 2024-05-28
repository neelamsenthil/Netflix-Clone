import { useContext, useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home-Component/Home'
import Login from './Pages/Login-Component/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { pageContext } from './Components/useContext-Component/Context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { signInPage } = useContext(pageContext)

  const navigate = useNavigate()

  useEffect(()=>{
      onAuthStateChanged(auth,async (user)=>{
        if(user){
          console.log("Logged In")
          navigate('/')
        }else{
          console.log("Logged Out")
          navigate('/login')
        }
      })
  },[])


  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  )
}

export default App
