import React, { useState } from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ProductCatalog from './pages/ProductCatalog'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='ProductCatalog' element={<ProductCatalog/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
    </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
