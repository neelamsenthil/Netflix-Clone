import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/assets/logo.png'
import { Link } from 'react-router-dom'
import { login,signup } from '../../Firebase'
import netflix_spinner from '../../assets/assets/netflix_spinner.gif'

const Login = () => {
  const [loginState,setLoginState] = useState("Sing Up")
  const [loading,setLoading] = useState(false)

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const user_auth = async(event) => {
    event.preventDefault();
    setLoading(true)

    if(loginState === "sing In"){
      await login(email, password)
    }
    else{
      await signup(name, email, password)

    }
    setLoading(false)

  }

  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login-container'>
       <Link to={'/'}><img src={logo} alt="" className='login-logo' /></Link>
        <div className="login-form">
          <h1>{loginState}</h1>
          <form>
            {loginState === "Sing In" ?<></>:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name'  />}
            <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'  />
            <input type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'   />
            <button onClick={user_auth} type="submit">{loginState === "Sing Up" ? loginState : "Sing In"} </button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id='checkbox' />
                <label htmlFor='checkbox'>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>


          </form>
          <div className="form-switch">
            {loginState === "Sing In" ? <p>New to Netflix?<span onClick={()=>setLoginState("Sing Up")}>Sing Up Now</span></p>
            :<p>Already have account?<span onClick={()=>setLoginState("Sing In")}>Sing In Now</span></p>}

          </div>
        </div>

    </div>
  )
}

export default Login