import React from 'react'
import { Routes, Route } from 'react-router-dom';
//import {lazy,Suspense} from 'react'
//import { ToastContainer } from "react-toastify";

import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Gallery from '../Components/Gallery/Gallery'
import Blog from '../Components/Blog/Blog'
import Contact from '../Components/Contact/Contact'
import Login from '../Components/Login/Login'
import Register from '../Components/Registration/reg'



// const Home = lazy(() => import('../Pages/Home/Home'));
// const About = lazy(() => import('../Pages/About/About'));
// const Services = lazy(() => import('../Pages/Services/Services'));
// const Gallery = lazy(()=> import('../Pages/Gallery/Gallery'));
// const Blog = lazy(()=>import('../Pages/Blog/Blog'))
// const Contact = lazy(()=>import('../Pages/Contact/Contact'))
// const Login= lazy(()=>import('../Pages/Login/Login'))

function Reactroute() {
  return (
    <div>
  
      <Routes>
        {/* Frontend routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
     
     
    </div>
  )
}

export default Reactroute
