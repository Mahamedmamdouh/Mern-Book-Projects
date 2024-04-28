import {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBlog } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';


const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isSticky,setSticky]=useState(false);
  const{user}=useContext(AuthContext)
  console.log(user);
  
  //toggle menu
  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(()=>{
    const handleScroll=()=>{
      if (window.scrollY > 100) {
        setSticky(true);
      }else{
        setSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll)

    return()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])
 
  //NavItems here
  const navItems= [
       {link:"Home",path:"/"},
       {link:"About",path:"/About"},
       {link:"Shop",path:"/Shop"},
       {link:"Sell Your Book",path:"/admin/dashboard"},
       {link:"Magazine",path:"/Magazine"},
       {link:"Blog",path:"/Blog"},
       {link:"Pricing",path:"/Pricing"},
       
  ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300":"" }`}>
        <div className='flex justify-between items-center text-base  gap-8'>
         {/*logo*/}
          <Link to="/" className='text-2xl font-bold text-blue-700 flex gap-2'><FaBlog className='inline-block'/>Books</Link>
          {/*nav item for large device*/}
        
        <ul className='md:flex space-x-12 hidden'>
          { 
            navItems.map(({ link, path }) => (
              <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  '>
                {link}
              </Link>
            ))
          }
        </ul>
        {/*btn for lg devices */}
        <div className='space-x-12 hidden lg:flex items-center'>
          <button><FaBars className='w-5  hover:text-blue-700'/></button>
        </div>

          {/*menu for the mobile devices*/}
          <div className='md:hidden ' >
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {
                isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : 
                <FaBars className='h-5 w-5 text-black'/>
              }

            </button>
          </div>
        </div>
        
        {/*navitems for sm devices*/}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
          {
            navItems.map(({ link, path }) => (
              <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer '>
                {link}
              </Link>
            ))
        }
        </div>
      
      </nav>
    </header>
  )
}
export default Navbar;



