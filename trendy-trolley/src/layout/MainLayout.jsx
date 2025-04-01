import React from 'react'
import NavBar from '../Components/ui/NavBar'
import Footer from '../Components/ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <Outlets />
    <Footer />
    </>
  )
}

export default MainLayout