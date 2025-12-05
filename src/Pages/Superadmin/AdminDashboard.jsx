import React from 'react'
import Navbar from '../../Components/Navbar'
import Fade from '../../Components/Animations/Fade'

const AdminDashboard = () => {
  return (
    <Fade direction="up" delay={200}>
      <div className="w-full min-h-screen" style={{ background: '#F3F7FA' }}>
        <Navbar />
        
        
      </div>
    </Fade>
  )
}

export default AdminDashboard
