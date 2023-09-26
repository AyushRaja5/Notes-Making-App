import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './topnavbar.css'; // Import the CSS file

function TopNavbar() {
  const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.clear('token')
    navigate('/login')
  }
  return (
    <div className='navbar-container'>
      <div className="navbar-left">
        <div className="img-div">
          <img className="img" src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" alt="" />
        </div>
      </div>
      <div className="navbar-right">
        <ul className='ul-container'>

          {/* Home Link */}
          <li className='cursor-pointer'>
            <Link to={'/'} className='font-semibold flex items-center space-x-1 nav-link'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 svgimg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span>Home</span>
            </Link>
          </li>

          {/* Add Note Link */}
          <li className='cursor-pointer'>
            <Link to={'/addnote'} className='font-semibold flex items-center  space-x-1 nav-link'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 svgimg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Add Note</span>
            </Link>
          </li>

          {/* Profile Link */}
          <li className='cursor-pointer'>
            <Link to={'/profile'} className='font-semibold flex items-center space-x-1 nav-link'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 svgimg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Profile</span>
            </Link>
          </li>

          {/* Logout */}
          <li className='cursor-pointer' onClick={handlelogout}>
            <Link to={'/logout'} className='font-semibold flex items-center space-x-1 nav-link'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 svgimg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            <span>Logout</span>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default TopNavbar;
