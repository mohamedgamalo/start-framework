import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Style from '../Style/Style'


const images = Object.values(import.meta.glob('../../assets/image/*.{png,jpg,jpeg}',{
  as: 'url',
  eager: true,
}))
function Portofilio() {

  const [isModel, setisModel] = useState(false)
  const [srcImage, setsrcImage] = useState("")
  // console.log(images)


  return (
    <>
    <Heading test={"Portofilio component"}/>
    <Style  color= "#2c3e50" starColor=" #2c3e50"/>
    <div className="row wrap ">
      {images.map((image,index) => <div key={index} className='w-full md:w-1/2 lg:w-1/3 p-5 '> <img src={image} onClick={(e) => {
        console.log(e.target.getAttribute("src"))
        setsrcImage(e.target.getAttribute("src"))
        setisModel(true)
      }} className='w-full rounded rounded-6' alt="" /> </div>)}
    </div>

    {isModel && <div className='fixed inset-0 z-20 center' >
      <div className="bg-gray-950 opacity-75 absolute w-full h-full "
      onClick={()=> {setisModel(false)}}
      ></div>
        <img src={srcImage} className='w-1/3 z-30 realtive rounded rounded-6' alt="" />
       </div>}
    </>
  )
}

export default Portofilio
