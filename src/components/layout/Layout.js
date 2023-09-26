import React from 'react'
import SideBar from '../sidebar/SideBar'
import TopNavbar from '../topNavbar/TopNavbar'
import './layout.css'
const Layout = ({ children }) => {
  return (
    <div>
      <div className="hidedesktop">
        <TopNavbar />
      </div>

      <div style={{height:'100%', display:'flex'}}>
        <nav className="hidemobile"> <SideBar /> </nav>

        <main className="main-container">
          <div className="main-content">
            {children}
          </div>
        </main>
      </div>

    </div>
  )
}

export default Layout