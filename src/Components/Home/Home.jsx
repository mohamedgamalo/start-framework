import React from 'react'
import Heading from '../Heading/Heading'
import image from "../../assets/image/avataaars.svg"
import Style from '../Style/Style'

function Home() {
  return (
    <>
    <img src={image} className='w-[250px] mx-auto'  alt="" />
    <Heading test={ "start farmework"}/>
    <Style  color= '#fff' starColor="#fff" icon="fa-star"/>
      <p className='text-white '>Graphic Artist - Web Designer - Illustrator</p>
    </>
  )
}

export default Home
