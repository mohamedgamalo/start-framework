import { React , useState} from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  const [isopen, setisOpen] = useState(false) 


    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount  

    const [isScrolled, setIsScrolled] = useState(false);


  return (
    <>
      <nav className={` ${isScrolled === false ? "py-10" : "py-6" } fixed top-0 left-0 right-0 transition-[padding] duration-500  bg-[#2C3E50] z-20`}>
        <div className="container flex justify-between items-center mx-auto ">
            <h2>
                <Link to={""} className={'uppercase text-white font-bold text-3xl'}> start framework</Link>

            </h2>
            <ul className='center gap-10'>
                <li> <NavLink to={"About"} className={'uppercase text-white font-bold text-[16px] p-4'}> About</NavLink></li>
                <li> <NavLink to={"Portofilio"} className={'uppercase text-white font-bold text-[16px] p-4'} > Portofilio</NavLink></li>
                <li> <NavLink to={"Contact"} className={'uppercase text-white font-bold text-[16px] p-4'} > contact</NavLink></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
