import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import SuperadminDashboard from './Pages/Superadmin/AdminDashboard'


const App = () => {
  return (
    <Router>
      <div className='w-full h-screen'>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="/superadmin/dashboard" element={<SuperadminDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App