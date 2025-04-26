import React from 'react'
import { useLocation, useMatch } from 'react-router-dom'






function Heading({test}) {

    const {pathname} = useLocation()

    

    const isabout = useMatch("/about")
    // const ishome = useMatch("/")


    
  return (
    <>
     <h1 className={`uppercase font-bold mt-5 text-5xl ${ pathname === "/" || isabout ? "text-white" : "text-[#2c3e50]" }`}> {test}</h1> 
    </>
  )
}

export default Heading
