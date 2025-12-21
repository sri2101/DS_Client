import React from 'react'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import { Outlet } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop.jsx'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App

