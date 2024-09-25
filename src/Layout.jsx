import React from 'react'
import { NavBar } from './Components'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
