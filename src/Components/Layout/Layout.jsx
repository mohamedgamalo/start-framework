import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'
import { useMatch } from "react-router-dom";

// Classes used: bg-[#1ABC9C] bg-white

function Layout() {


const {pathname} = useLocation();

// const isHome = useMatch("/");
const isAbout = useMatch("/about");

// console.log(pathname)

 


  return (
    <>
      <Navbar/>
      <div className={`${ pathname === "/" || isAbout ? "bg-[#1ABC9C]" : "bg-white"} min-h-screen p-36 center `}>
        <div className="container text-center">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
