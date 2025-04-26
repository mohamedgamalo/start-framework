import React from 'react'
import "/src/Components/Style/Style.css"

function Style({color ,icon, starColor}) {
  return (
    <>
        <div className=" py-4 relative flex justify-center items-center"> 
            <div className=' line absolute w-[130px] h-1' style={{"--line-color": color}}></div>
            <i className={`fa-solid fa-star  ${icon}`} style={{color:starColor}}></i> 
             <div className=' line absolute w-[130px] h-1' style={{"--line-color":color}} ></div>
             </div> 
    </>
  )
}

export default Style
