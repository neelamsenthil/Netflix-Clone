import React, { useContext } from 'react'
import './Nav.css'
import logo from '../../assets/assets/logo.png'
import search_icon from '../../assets/assets/search_icon.svg'
import bell_icon from '../../assets/assets/bell_icon.svg'
import profile_img from '../../assets/assets/profile_img.png'
import caret_icon from '../../assets/assets/caret_icon.svg'
import { pageContext } from '../useContext-Component/Context'
import { Link } from 'react-router-dom'
import { logout } from '../../Firebase'





const Nav = () => {
  const {setSingInPage} = useContext(pageContext)
  return (
    <div className='nav-container'>
      <div className="nav-left">
        <img src={logo} alt=''/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>

      </div>
      <div className="nav-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="nav-profile">
        <img src={profile_img} alt="" className='profile'/>
        <img src={caret_icon} alt="" className='caret'/>
        <div className="droupdown">
          <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
        </div>

        </div>



      </div>
    </div>
  )
}

export default Nav