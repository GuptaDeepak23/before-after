import React from 'react'
import LoginPage from './Pages/LoginPage'

const App = () => {
  return (
    <div className='w-full h-screen'>
     <LoginPage
  text="Hello, Dermat !"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  
/>
    </div>
  )
}

export default App