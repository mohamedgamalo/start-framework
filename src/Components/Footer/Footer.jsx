import React from 'react'
import About from '../About/About'

function Footer() {
  return (
    <>
    <div className="mx-auto">
      <div className="bg-[#2c3e50]">

           <div className=" text-white flex justify-between items-center flex-col md:flex-row md:p-28 gap-7 py-8 ">

                <div className="Aboutfreelancer flex flex-col w-full md:w-1/4 flex-wrap text-center  ">
                    <h3 className='uppercase font-bold text-3xl'>About Freelancer</h3>
                    <p>Freelancer is a free bootstrap theme created by Route</p>
                </div>

                <div className="aroundWeb flex flex-col w-full md:w-1/4 items-center justify-between text-center">
                      <h3 className='uppercase font-bold text-3xl mb-2'>around the web</h3>
                      <div className="icons flex justify-between items-center gap-2 ">
                      <i className="fa-brands fa-facebook-f border border-white p-3 size-[40px] text-center rounded rounded-full"></i>
                      <i className="fa-brands fa-twitter border border-white p-3 size-[40px] text-center rounded rounded-full"></i>
                      <i className="fa-brands fa-linkedin-in border border-white p-3 size-[40px] text-center rounded rounded-full"></i>
                      <i className="fa-brands fa-dribbble border border-white p-3 size-[40px] text-center rounded rounded-full"></i>
                    </div>
                </div>

                <div className="loaction flex flex-col w-full md:w-1/4 text-center ">
                      <h3 className='uppercase font-bold text-3xl'>location</h3>
                      <p>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                </div>

            </div>

            <div className="bg-[#1a252f] text-white text-center py-8 center">
              <p>Copyright © Your Website 2021</p>
        
      </div>
      </div>
      

      
    </div>
     


      
    </>
  )
}

export default Footer
