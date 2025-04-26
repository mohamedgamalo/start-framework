import React from 'react'
import"/src/Components/About/About.css"
import Heading from '../Heading/Heading'
import Style from '../Style/Style'

function About() {

  return (
    <>
    <Heading test={ "about component"}/>
    <div className="captions">
      <Style color= "#fff" starColor=" #fff"/>
    <div className=""></div>
      <div className=" flex md:text-center text-white pt-5  sm:gap-5 sm:items-center md:justify-between">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    </>
  )
}

export default About
