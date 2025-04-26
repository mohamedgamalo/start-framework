import React from 'react'
import Heading from '../Heading/Heading'
import Style from '../Style/Style'

function Contact() {
  return (
    <>
      <Heading test={"Contact component"}/>
      <Style color='#2c3e50' starColor=" #2c3e50"/>
      <div className="contactme relative container w-[80%]">
      <div className='flex flex-col z-[-1] p-10 gap-5 w-full md:w-[70%] justify-center mx-auto '>
        <input type="text" className='focus:none p-3' placeholder='userName' />
        <input type="number" className=' p-3 ' placeholder='userAge' />
        <input type="email" className='p-3 ' placeholder='userEmail' />
        <input type="password"className='p-3 ' placeholder='userPassword' />
        <botton className="w-[140px] my-2 bg-sky-400 cursor-pointer font-bold text-white p-4 rounded rounded-7">send Message</botton>
      </div>
      </div>

    </>
  )
}

export default Contact
