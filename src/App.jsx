import React, { Component } from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
import Err from './Component/Err/Err'

let routers =  createBrowserRouter([
  {path:'' , element:<Layout />, children:[
    {index:true , element:<Home />},
    {path:'*' , element:<Err />},
    {path:'Contact' , element:<Err />},
    {path:'Home' , element:<Home />},
    {path:'Start-Framework/' , element:<Home />},
    {path:'About' , element:<About />},
    {path:'Portfolio' , element:<Portfolio />},
    {path:'Contact' , element:<Contact />},
  ]
}
])

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
