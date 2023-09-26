import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './sidebar.css'; // Import the CSS file

function SideBar() {
  const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.clear('token')
    navigate('/login')
  }
  return (
    <div className='sidebar-container'>

      {/* Top Image  */}
      <div className="logo-container">
        <img className='w-52 mt-10' src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" alt="" />
      </div>


      <ul className='sidebar-list'>
        <div>
          <Link to={'/'} className='sidebar-link'>
            <li className='sidebar-item'>
              <span className="sidebar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </span>
              <span className='sidebar-text'>Home</span>
            </li>
          </Link>

          <Link to={'/addnote'} className='sidebar-link'>
            <li className='sidebar-item'>
              <span className="sidebar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className='sidebar-text'>Add Note</span>
            </li>
          </Link>

          {/* Profile Page Link  */}
          <Link to={'/profile'} className='sidebar-link'>
            <li className='sidebar-item'>
              <span className="sidebar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className='sidebar-text'>Profile</span>
            </li>
          </Link>

          {/* Logout  */}
          <li className='sidebar-item last-child' onClick={handlelogout}>
            <span className="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </span>
            <span className='sidebar-text'>Logout</span>
          </li>
        </div>

      </ul>

    </div>
  );
}

export default SideBar;