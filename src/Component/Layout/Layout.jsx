import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import '../../App.scss'

export default function Layout() {
  return <>
   <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer />
    </div>
  </>
}
