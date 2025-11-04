import React from 'react'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import { Outlet } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {  
  return (
    <div>
      <Header />
      <ScrollToTop /> 
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

